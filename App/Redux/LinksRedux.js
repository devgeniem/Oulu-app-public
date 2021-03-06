import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchLinks: null,
  fetchLinksSuccess: ['links'],
  fetchLinksFailure: ['error'],
  resetFetchLinksError: null,
  setCurrentLink: ['link']
})

export const LinksTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  links: null,
  currentLink: null
})

export const fetchLinks = (state) => state.merge({ fetching: true, error: null })
export const fetchLinksSuccess = (state, { links }) => state.merge({ links, fetching: false })
export const fetchLinksFailure = (state, { error }) => state.merge({ error, fetching: false })
export const resetFetchLinksError = (state) => state.merge({ error: null })
export const setCurrentLink = (state, { link }) => state.merge({ currentLink: link })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_LINKS]: fetchLinks,
  [Types.FETCH_LINKS_SUCCESS]: fetchLinksSuccess,
  [Types.FETCH_LINKS_FAILURE]: fetchLinksFailure,
  [Types.RESET_FETCH_LINKS_ERROR]: resetFetchLinksError,
  [Types.SET_CURRENT_LINK]: setCurrentLink
})
