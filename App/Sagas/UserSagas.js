import { call, put, select } from 'redux-saga/effects'
import FCM from 'react-native-fcm'
import UserActions from '../Redux/UserRedux'
import EventsActions from '../Redux/EventsRedux'
import PollActions from '../Redux/PollRedux'
import AdsActions from '../Redux/AdsRedux'
import SecureStorage from 'react-native-safe-storage/SafeStorage'
import { NavigationActions } from 'react-navigation'
import { checkErrorType } from '../Transforms/checkError'
import { TOKEN, TIME_SELECTION_WHENEVER_PARAM } from '../Transforms/Constants'
import { AsyncStorage } from 'react-native'

const userState = (state) => state.user

export function * login (api, action) {
  const { username, password } = action
  const response = yield call(api.login, username, password)
  console.log(response)
  /* Login was successful */
  if (response.ok) {
    const { user, token } = response.data

    /* Get token for push notifications */
    const deviceid = yield call(FCM.getFCMToken)
    console.log('Logged in device id: ' + deviceid)
    /* Get user redux state */
    const state = yield select(userState)
    /* Old token */
    const oldToken = state.token

    /* Deactivate device from anonymous and activate to logged in user */
    const deactivated = yield call(api.deactivateDevice, oldToken, deviceid)
    const activated = yield call(api.activateDevice, token, deviceid)

    if (deactivated.ok && activated.ok) {
      /* Persist new authentication token to SecureStorage */
      SecureStorage.setEntry(TOKEN.token, token)
      yield put(UserActions.loginSuccess(user, token))

      /* Initialize params if first login */
      if (!user.searchParameters) {
        const searchParameters = { cats: [], subcats: [], date: TIME_SELECTION_WHENEVER_PARAM }
        yield put(UserActions.updateSearch(searchParameters, true))
      } else {
        yield put(EventsActions.fetchEvents())
      }
      yield put(NavigationActions.navigate({ routeName: 'EventsScreen' }))
    } else {
      const error = checkErrorType(response)
      yield put(UserActions.loginFailure(error))
    }
  } else {
    const error = checkErrorType(response)
    yield put(UserActions.loginFailure(error))
  }
}

export function * fetchToken (api, action) {
  /* Try to fetch token from secure storage */
  const token = yield call(SecureStorage.getEntryAsync, TOKEN.token, TOKEN.default)
  console.log('Saga fetched token: ' + token)
  /* If token found */
  if (token !== TOKEN.default && token !== TOKEN.empty) {
    /* Fetch user info using the token */
    const response = yield call(api.user, token)

    // Somehow API returns 200 when user not found..
    if (response.ok && !response.data) {
      SecureStorage.setEntry(TOKEN.token, TOKEN.empty)
      return yield put(UserActions.fetchToken())
    }

    /* Token was valid and user found */
    if (response.ok) {
      const user = response.data
      const deviceid = yield call(FCM.getFCMToken)
      /* If new device id */
      if (user.deviceid !== deviceid) {
        if (user.username) {
          /* Activate it */
          yield call(api.activateDevice, token, deviceid)
        } else {
          /* Anonymous user, create new user because id has changed */
          SecureStorage.setEntry(TOKEN.token, TOKEN.empty)
          return yield put(UserActions.fetchToken())
        }
      }
      yield put(UserActions.tokenFound(user, token))
      yield put(EventsActions.fetchEvents())
      yield put(AdsActions.fetchAds())
    } else {
      const error = checkErrorType(response)
      /* Invalid token */
      if (error.key === 'not_logged') {
        SecureStorage.setEntry(TOKEN.token, TOKEN.empty)
        return yield put(UserActions.fetchToken())
      }
      yield put(UserActions.loginFailure(error))
      yield put(UserActions.tokenNotFound())
    }
  } else {
    /* Show permission prompt for the first call (iOS) */
    try {
      FCM.requestPermissions()
    } catch (error) {

    }
    /* Get token for push notifications */
    const deviceid = yield call(FCM.getFCMToken)

    // Try again
    if (!deviceid) return yield put(UserActions.fetchToken())

    console.log('Anon device id: ' + deviceid)
    /* Identify as anonymous user with device id */
    const anonResponse = yield call(api.anonUser, deviceid)
    if (anonResponse.ok) {
      const { user, token } = anonResponse.data
      /* Persist authentication token to SecureStorage */
      SecureStorage.setEntry(TOKEN.token, token)
      yield put(UserActions.loginSuccess(user, token))

      /* Initialize params if first login */
      if (!user.searchParameters) {
        const searchParameters = { cats: [], subcats: [], date: TIME_SELECTION_WHENEVER_PARAM }
        yield put(UserActions.updateSearch(searchParameters, true))
      } else {
        yield put(EventsActions.fetchEvents())
      }
      yield put(AdsActions.fetchAds())
    } else {
      const error = checkErrorType(anonResponse)
      yield put(UserActions.loginFailure(error))
    }
    yield put(UserActions.tokenNotFound())
  }
}

export function * logout (api) {
  /* Get token for push notifications */
  const deviceid = yield call(FCM.getFCMToken)
  console.log('Log out device id: ' + deviceid)

  const state = yield select(userState)
  /* Current token */
  const token = state.token
  /* Deactivate logged in user's device */
  const response = yield call(api.deactivateDevice, token, deviceid)

  if (response.ok) {
    /* Identify as anonymous user with device id */
    const anonResponse = yield call(api.anonUser, deviceid)
    console.log(anonResponse)
    if (anonResponse.ok) {
      const { user, token } = anonResponse.data
      /* Persist authentication token to SecureStorage */
      SecureStorage.setEntry(TOKEN.token, token)
      yield put(UserActions.loginSuccess(user, token))
      yield put(EventsActions.fetchEvents())
    } else {
      const error = checkErrorType(anonResponse)
      yield put(UserActions.loginFailure(error))
    }
  } else {
    const error = checkErrorType(response)
    yield put(UserActions.logoutFailure(error))
  }
}

export function * updateSearchParameters (api, action) {
  const { searchParameters, initialize } = action
  const state = yield select(userState)
  const token = state.token
  /* Update parameters */
  const response = yield call(api.updateSearchParameters, token, searchParameters)

  if (response.ok) {
    const updatedUser = response.data
    yield put(UserActions.updateSearchSuccess(updatedUser))
    if (!initialize) yield put(NavigationActions.back())
    yield put(EventsActions.fetchEvents())
  } else {
    const error = checkErrorType(response)
    yield put(UserActions.updateSearchFailure(error))
  }
}

export function * deleteStatistics (api, action) {
  const state = yield select(userState)
  const token = state.token

  const response = yield call(api.deleteStatistics, token)

  if (response.ok) {
    const updatedUser = response.data
    yield put(UserActions.deleteStatisticsSuccess(updatedUser))
    yield put(PollActions.getPollCountSuccess(0))
    AsyncStorage.setItem('filledPolls', JSON.stringify([]))
  } else {
    const error = checkErrorType(response)
    yield put(UserActions.deleteStatisticsFailure(error))
  }
}

export function * updateUser (api, action) {
  const { updatedFields } = action
  const state = yield select(userState)
  const token = state.token
  const response = yield call(api.updateUser, token, updatedFields)

  if (response.ok) {
    const updatedUser = response.data
    yield put(UserActions.updateUserSuccess(updatedUser))
  } else {
    const error = checkErrorType(response)
    yield put(UserActions.updateUserFailure(error))
  }
}
