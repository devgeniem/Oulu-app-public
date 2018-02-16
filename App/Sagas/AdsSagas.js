import AdActions from '../Redux/AdsRedux'
import { put, call, select } from 'redux-saga/effects'
import { checkErrorType } from '../Transforms/checkError'

const userState = (state) => state.user

export function * fetchAds (api, action) {
  const { token } = yield select(userState)
  const response = yield call(api.fetchAds, token)

  if (response.ok) {
    const events = response.data
    yield put(AdActions.fetchAdsSuccess(events))
  } else {
    const error = checkErrorType(response)
    yield put(AdActions.fetchAdsError(error))
  }
}
