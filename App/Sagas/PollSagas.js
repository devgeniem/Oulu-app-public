import PollActions from '../Redux/PollRedux'
import { put, call, select } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import { checkErrorType } from '../Transforms/checkError'

const userState = (state) => state.user

export function * fetchPolls (api, action) {
  const { token } = yield select(userState)
  /* Fetch polls */
  const response = yield call(api.fetchPolls, token)

  if (response.ok) {
    const polls = response.data
    yield put(PollActions.fetchPollsSuccess(polls))
  } else {
    const error = checkErrorType(response)
    yield put(PollActions.fetchPollsError(error))
  }
}

export function * refreshPolls (action) {
  yield put(PollActions.fetchPolls())
}

export function * submitPoll (api, action) {
  const state = yield select(userState)
  const token = state.token
  const { answers, id } = action.poll

  const response = yield call(api.submitPoll, token, answers, id)

  if (response.ok) {
    yield put(PollActions.submitPollSuccess())
    const filledPolls = yield call(AsyncStorage.getItem, 'filledPolls')
    let parsed = []

    if (filledPolls) {
      parsed = JSON.parse(filledPolls)
      parsed.push(id)
    } else {
      parsed.push(id)
    }

    AsyncStorage.setItem('filledPolls', JSON.stringify(parsed))
  } else {
    const error = checkErrorType(response)
    yield put(PollActions.submitPollError(error))
  }
}

export function * isPollFinished (action) {
  const { id } = action
  const filledPolls = yield call(AsyncStorage.getItem, 'filledPolls')
  const parsed = JSON.parse(filledPolls)
  const boolValue = filledPolls ? parsed.includes(id) : false
  yield put(PollActions.isPollFinishedSuccess(boolValue))
}

export function * getPollCount (action) {
  const filledPolls = yield call(AsyncStorage.getItem, 'filledPolls')
  const parsed = JSON.parse(filledPolls)
  const pollCount = filledPolls ? parsed.length : 0
  yield put(PollActions.getPollCountSuccess(pollCount))
}
