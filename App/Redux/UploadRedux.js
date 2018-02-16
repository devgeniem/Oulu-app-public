import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  uploadImage: ['data'],
  uploadImageSuccess: ['uri'],
  uploadImageError: ['uploadImageError'],
  resetUpload: null
})

export const UploadTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  uploading: false,
  uploadImageError: null,
  uri: undefined
})

export const uploadImage = (state) => state.merge({ uploading: true, uploadImageError: null })

export const uploadImageSuccess = (state, { uri }) => state.merge({ uploading: false, uri, uploadImageError: null })

export const uploadImageError = (state, { uploadImageError }) => state.merge({ uploading: false, uploadImageError })

export const resetUpload = (state) => INITIAL_STATE

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPLOAD_IMAGE]: uploadImage,
  [Types.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
  [Types.UPLOAD_IMAGE_ERROR]: uploadImageError,
  [Types.RESET_UPLOAD]: resetUpload
})
