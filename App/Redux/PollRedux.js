import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchPolls: null,
  refreshPolls: null,
  fetchPollsSuccess: ['polls'],
  fetchPollsError: ['error'],
  selectPoll: ['poll'],
  submitPoll: ['poll'],
  submitPollSuccess: null,
  submitPollError: ['submitError'],
  isPollFinished: ['id'],
  isPollFinishedSuccess: ['value'],
  getPollCount: null,
  getPollCountSuccess: ['value'],
  resetFetchPollsError: null,
  resetSubmitPollError: null
})

export const PollTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  fetching: false,
  refreshing: false,
  submitting: false,
  polls: [],
  error: null,
  selectedPoll: null,
  submitError: null,
  selectedPollFinished: false,
  pollSubmitted: false,
  pollCount: null
})

export const fetchPolls = (state) => state.merge({fetching: true, error: null})

export const refreshPolls = (state) => state.merge({refreshing: true})

export const fetchPollsSuccess = (state, { polls }) => state.merge({fetching: false, polls, error: null, refreshing: false})

export const fetchPollsError = (state, { error }) => state.merge({fetching: false, error, refreshing: false})

export const resetFetchPollsError = (state, { error }) => state.merge({error: null})

export const selectPoll = (state, { poll }) => state.merge({selectedPoll: poll, pollSubmitted: false})

export const submitPoll = (state) => state.merge({submitting: true, submitError: null})

export const submitPollSuccess = (state) => state.merge({submitting: false, pollSubmitted: true, submitError: null})

export const submitPollError = (state, { submitError }) => state.merge({submitting: false, submitError})
export const resetSubmitPollError = (state) => state.merge({submitError: null})

export const isPollFinished = (state) => state
export const isPollFinishedSuccess = (state, { value }) => state.merge({selectedPollFinished: value})

export const getPollCount = (state) => state
export const getPollCountSuccess = (state, { value }) => state.merge({pollCount: value})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_POLLS]: fetchPolls,
  [Types.FETCH_POLLS_SUCCESS]: fetchPollsSuccess,
  [Types.FETCH_POLLS_ERROR]: fetchPollsError,
  [Types.RESET_FETCH_POLLS_ERROR]: resetFetchPollsError,
  [Types.SELECT_POLL]: selectPoll,
  [Types.REFRESH_POLLS]: refreshPolls,
  [Types.SUBMIT_POLL]: submitPoll,
  [Types.SUBMIT_POLL_SUCCESS]: submitPollSuccess,
  [Types.SUBMIT_POLL_ERROR]: submitPollError,
  [Types.RESET_SUBMIT_POLL_ERROR]: resetSubmitPollError,
  [Types.IS_POLL_FINISHED]: isPollFinished,
  [Types.IS_POLL_FINISHED_SUCCESS]: isPollFinishedSuccess,
  [Types.GET_POLL_COUNT]: getPollCount,
  [Types.GET_POLL_COUNT_SUCCESS]: getPollCountSuccess
})
