import { put, call, select } from 'redux-saga/effects'
import LinksActions from '../Redux/LinksRedux'
import { checkErrorType } from '../Transforms/checkError'

const userState = (state) => state.user

export function * fetchLinks (api, action) {
  const { token } = yield select(userState)
  const response = yield call(api.fetchLinks, token)

  if (response.ok) {
    const links = response.data
    yield put(LinksActions.fetchLinksSuccess(links))
  } else {
    const error = checkErrorType(response)
    yield put(LinksActions.fetchLinksFailure(error))
  }
}
