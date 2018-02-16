import UploadActions from '../Redux/UploadRedux'
import { put, call } from 'redux-saga/effects'
import { checkErrorType } from '../Transforms/checkError'

export function * uploadImage (api, action) {
  const { data } = action
  const filename = 'temp'
  const dataUri = `data:image/jpeg;base64,:${data}`
  const filetype = 'image/jpeg'

  const response = yield call(api.uploadImage, dataUri, filename, filetype)

  if (response.ok) {
    yield put(UploadActions.uploadImageSuccess(response.data.uri))
  } else {
    const error = checkErrorType(response)
    yield put(UploadActions.uploadImageError(error))
  }
}
