import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['user', 'token'],
  loginFailure: ['loginError'],
  fetchToken: null,
  tokenFound: ['user', 'token'],
  tokenNotFound: null,
  logout: null,
  logoutSuccess: null,
  logoutFailure: ['logoutError'],
  clearError: null,
  updateSearch: ['searchParameters', 'initialize'],
  updateSearchSuccess: ['user'],
  updateSearchFailure: ['error'],
  gotInitialNotification: null,
  deleteStatistics: null,
  deleteStatisticsSuccess: ['user'],
  deleteStatisticsFailure: ['deleteError'],
  updateUser: ['updatedFields'],
  updateUserSuccess: ['user'],
  updateUserFailure: ['updateUserError'],
  resetDeleteStatisticsError: null,
  resetLogoutError: null,
  resetUpdateUserError: null
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  token: null,
  error: null,
  fetching: false,
  fetchingToken: false,
  searchParameters: null,
  gotInitialNotification: false,
  deletingStatistics: false,
  deleteError: null,
  updatingUser: false,
  updateUserError: null,
  logoutError: null,
  loginError: null
})

/* ------------- Reducers ------------- */

/* Attempt to login */
export const loginRequest = (state, { username, password }) => state.merge({ fetching: true, loginError: null })

/* Successfully logged in */
export const loginSuccess = (state, { user, token }) =>
  state.merge({ fetching: false, loginError: null, user, token, searchParameters: user.searchParameters })

/* Something went wrong with login */
export const loginFailure = (state, { loginError }) =>
  state.merge({ fetching: false, loginError })

export const fetchToken = (state) => state.merge({ fetchingToken: true })
export const tokenFound = (state, { user, token }) =>
  state.merge({ user, token, searchParameters: user.searchParameters, fetchingToken: false })
export const tokenNotFound = (state) => state.merge({ fetchingToken: false })

export const logout = (state) => state.merge({ fetching: true, logoutError: null })
export const logoutSuccess = (state) => INITIAL_STATE
export const logoutFailure = (state, { logoutError }) => state.merge({ fetching: false, logoutError })
export const resetLogoutError = (state) => state.merge({ logoutError: null })

export const clearError = (state) => state.merge({ error: null })

export const updateSearch = (state, { searchParameters, initialize = false }) => state.merge({ fetching: true })
export const updateSearchSuccess = (state, { user }) =>
  state.merge({ fetching: false, user, searchParameters: user.searchParameters, error: null })
export const updateSearchFailure = (state, { error }) => state.merge({ fetching: false, error })

export const gotInitialNotification = (state) => state.merge({ gotInitialNotification: true })

export const deleteStatistics = (state) => state.merge({ deletingStatistics: true, deleteError: null })
export const deleteStatisticsSuccess = (state, { user }) => state.merge({ deletingStatistics: false, user, deleteError: null })
export const deleteStatisticsFailure = (state, { deleteError }) => state.merge({ deletingStatistics: false, deleteError })
export const resetDeleteStatisticsError = (state) => state.merge({ deleteError: null })

export const updateUser = (state) => state.merge({ updatingUser: true, updateUserError: null })
export const updateUserSuccess = (state, { user }) => state.merge({ updatingUser: false, user })
export const updateUserFailure = (state, { updateUserError }) => state.merge({updatingUser: false, updateUserError})
export const resetUpdateUserError = (state) => state.merge({ updateUserError: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.FETCH_TOKEN]: fetchToken,
  [Types.TOKEN_FOUND]: tokenFound,
  [Types.TOKEN_NOT_FOUND]: tokenNotFound,
  [Types.LOGOUT]: logout,
  [Types.LOGOUT_SUCCESS]: logoutSuccess,
  [Types.LOGOUT_FAILURE]: logoutFailure,
  [Types.RESET_LOGOUT_ERROR]: resetLogoutError,
  [Types.CLEAR_ERROR]: clearError,
  [Types.UPDATE_SEARCH]: updateSearch,
  [Types.UPDATE_SEARCH_SUCCESS]: updateSearchSuccess,
  [Types.UPDATE_SEARCH_FAILURE]: updateSearchFailure,
  [Types.GOT_INITIAL_NOTIFICATION]: gotInitialNotification,
  [Types.DELETE_STATISTICS]: deleteStatistics,
  [Types.DELETE_STATISTICS_SUCCESS]: deleteStatisticsSuccess,
  [Types.DELETE_STATISTICS_FAILURE]: deleteStatisticsFailure,
  [Types.RESET_DELETE_STATISTICS_ERROR]: resetDeleteStatisticsError,
  [Types.UPDATE_USER]: updateUser,
  [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
  [Types.UPDATE_USER_FAILURE]: updateUserFailure,
  [Types.RESET_UPDATE_USER_ERROR]: resetUpdateUserError
})
