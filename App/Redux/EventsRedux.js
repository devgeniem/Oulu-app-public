import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { PAGE_SIZE } from '../Transforms/Constants'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fetchEvents: ['searchTerm'],
  refreshEvents: null,
  fetchEventsSuccess: ['events'],
  fetchEventsError: ['error'],
  fetchMoreEvents: ['searchTerm'],
  fetchMoreEventsSuccess: ['events'],
  fetchMoreEventsError: ['error'],
  selectEvent: ['event'],
  participate: ['userId', 'eventId'],
  participateError: ['participateError'],
  participateSuccess: ['event'],
  resetFetchEventsError: null,
  resetParticipateError: null
})

export const EventsTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  fetching: false,
  fetchingMore: false,
  refreshing: false,
  events: [],
  queue: [],
  allFetched: false,
  page: 1,
  error: null,
  selectedEvent: null,
  participateError: null
})

export const fetchEvents = (state, { searchTerm }) => state.merge({fetching: true, error: null})

export const refreshEvents = (state) => state.merge({refreshing: true})

export const fetchEventsSuccess = (state, { events }) => {
  const firstEvents = events.slice(0, PAGE_SIZE)
  const queue = events.slice(PAGE_SIZE)

  return state.merge({
    fetching: false,
    events: [...firstEvents],
    queue: [...queue],
    error: null,
    refreshing: false,
    page: 3, // Set to third page, since we loaded 2x events
    allFetched: queue.length === 0
  })
}

export const fetchEventsError = (state, { error }) => state.merge({fetching: false, error, refreshing: false})

export const fetchMoreEvents = (state, { searchTerm }) => {
  // Take events from queue
  const events = state.queue.slice(0, PAGE_SIZE)
  const queue = state.queue.slice(PAGE_SIZE)

  return state.merge({ fetchingMore: true, error: null, events: [...state.events, ...events], queue: [...queue] })
}

export const fetchMoreEventsSuccess = (state, { events }) => {
  // Put new events to queue and increase page index
  return state.merge({
    fetchingMore: false,
    page: state.page + 1,
    queue: [...state.queue, ...events],
    error: null,
    refreshing: false,
    allFetched: events.length === 0
  })
}

export const fetchMoreEventsError = (state, { error }) => state.merge({ fetchingMore: false, error, refreshing: false })

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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_EVENTS]: fetchEvents,
  [Types.FETCH_EVENTS_SUCCESS]: fetchEventsSuccess,
  [Types.FETCH_EVENTS_ERROR]: fetchEventsError,
  [Types.FETCH_MORE_EVENTS]: fetchMoreEvents,
  [Types.FETCH_MORE_EVENTS_SUCCESS]: fetchMoreEventsSuccess,
  [Types.FETCH_MORE_EVENTS_ERROR]: fetchMoreEventsError,
  [Types.RESET_FETCH_EVENTS_ERROR]: resetFetchEventsError,
  [Types.SELECT_EVENT]: selectEvent,
  [Types.REFRESH_EVENTS]: refreshEvents,
  [Types.PARTICIPATE]: participate,
  [Types.PARTICIPATE_ERROR]: participateError,
  [Types.RESET_PARTICIPATE_ERROR]: resetParticipateError,
  [Types.PARTICIPATE_SUCCESS]: participateSuccess
})
