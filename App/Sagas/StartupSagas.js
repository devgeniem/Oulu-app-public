import { put } from 'redux-saga/effects'
import UserActions from '../Redux/UserRedux'

// process STARTUP actions
export function * startup (api, action) {
  yield put(UserActions.fetchToken())
}
