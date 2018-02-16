import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchAds: null,
  fetchAdsSuccess: ['ads'],
  fetchAdsError: ['error'],
  resetFetchAdsError: null
})

export const AdsTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  fetching: false,
  ads: [],
  error: null
})

export const fetchAds = (state) => state.merge({fetching: true})
export const fetchAdsSuccess = (state, { ads }) => state.merge({fetching: false, ads, error: null})
export const fetchAdsError = (state, { error }) => state.merge({fetching: false, error})
export const resetFetchAdsError = (state) => state.merge({error: null})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_ADS]: fetchAds,
  [Types.FETCH_ADS_SUCCESS]: fetchAdsSuccess,
  [Types.FETCH_ADS_ERROR]: fetchAdsError,
  [Types.RESET_FETCH_ADS_ERROR]: resetFetchAdsError
})
