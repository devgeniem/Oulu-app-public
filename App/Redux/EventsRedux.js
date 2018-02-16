import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchEvents: ['searchTerm'],
  refreshEvents: null,
  fetchEventsSuccess: ['events'],
  fetchEventsError: ['error'],
  selectEvent: ['event'],
  participate: ['userId', 'eventId'],
  participateError: ['participateError'],
  participateSuccess: ['event'],
  createEvent: ['event'],
  createEventError: ['createError'],
  createEventSuccess: ['event'],
  resetFetchEventsError: null,
  resetParticipateError: null,
  resetCreateEventError: null
})

export const EventsTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  fetching: false,
  refreshing: false,
  events: [],
  error: null,
  selectedEvent: null,
  creating: false,
  createError: null,
  participateError: null
})

export const fetchEvents = (state, { searchTerm }) => state.merge({fetching: true, error: null})

export const refreshEvents = (state) => state.merge({refreshing: true})

export const fetchEventsSuccess = (state, { events }) => state.merge({fetching: false, events, error: null, refreshing: false})

export const fetchEventsError = (state, { error }) => state.merge({fetching: false, error, refreshing: false})

export const resetFetchEventsError = (state) => state.merge({error: null})

export const selectEvent = (state, { event }) => state.merge({selectedEvent: event})

export const participate = (state) => state.merge({participateError: null})

export const participateError = (state, { participateError }) => state.merge({ participateError })

export const resetParticipateError = (state) => state.merge({participateError: null})

export const participateSuccess = (state, { event }) => {
  let events = state.events.map(oldEvent => {
    return (oldEvent.id === event.id) ? event : oldEvent
  })

  return state.merge({ events, selectedEvent: event, participateError: null })
}

export const createEvent = (state) => state.merge({ creating: true, createError: null })

export const createEventSuccess = (state, { event }) =>
  state.merge({ creating: false, events: [...state.events, event], createError: null })

export const createEventError = (state, { createError }) => state.merge({ creating: false, createError })
export const resetCreateEventError = (state) => state.merge({ createError: null })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_EVENTS]: fetchEvents,
  [Types.FETCH_EVENTS_SUCCESS]: fetchEventsSuccess,
  [Types.FETCH_EVENTS_ERROR]: fetchEventsError,
  [Types.RESET_FETCH_EVENTS_ERROR]: resetFetchEventsError,
  [Types.SELECT_EVENT]: selectEvent,
  [Types.REFRESH_EVENTS]: refreshEvents,
  [Types.PARTICIPATE]: participate,
  [Types.PARTICIPATE_ERROR]: participateError,
  [Types.RESET_PARTICIPATE_ERROR]: resetParticipateError,
  [Types.PARTICIPATE_SUCCESS]: participateSuccess,
  [Types.CREATE_EVENT]: createEvent,
  [Types.CREATE_EVENT_SUCCESS]: createEventSuccess,
  [Types.CREATE_EVENT_ERROR]: createEventError,
  [Types.RESET_CREATE_EVENT_ERROR]: resetCreateEventError
})
