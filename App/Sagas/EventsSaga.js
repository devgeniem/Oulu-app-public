import EventsActions from '../Redux/EventsRedux'
import UploadActions from '../Redux/UploadRedux'
import FCMActions from '../Redux/FCMRedux'
import { NavigationActions } from 'react-navigation'
import moment from 'moment'
import { put, call, select } from 'redux-saga/effects'
import {
  TIME_SELECTION_WHENEVER_PARAM,
  TIME_SELECTION_TODAY_PARAM,
  TIME_SELECTION_TOMORROW_PARAM,
  TIME_SELECTION_THISWEEK_PARAM
} from '../Transforms/Constants'
import { checkErrorType } from '../Transforms/checkError'

const userState = (state) => state.user

export function * fetchEvents (api, action) {
  /* Get all parameters */
  const { searchTerm } = action
  const { token, searchParameters, gotInitialNotification } = yield select(userState)
  const { cats, subcats, date } = searchParameters

  /* Categories for search */
  const categories = cats.length ? cats.join() : null
  /* Subcategories for search */
  const subcategories = subcats.length ? subcats.join() : null

  let from = null
  let to = null

  /* Date range, include all by default */
  if (date && date !== TIME_SELECTION_WHENEVER_PARAM) {
    const startToday = moment().startOf('day').toDate()
    const endToday = moment().endOf('day').toDate()
    if (date === TIME_SELECTION_TODAY_PARAM) {
      from = startToday
      to = endToday
    } else if (date === TIME_SELECTION_TOMORROW_PARAM) {
      from = moment(startToday).add(1, 'd').toDate()
      to = moment(endToday).add(1, 'd').toDate()
    } else if (date === TIME_SELECTION_THISWEEK_PARAM) {
      from = moment().startOf('week').toDate()
      to = moment().endOf('week').toDate()
    }
  }

  /* Fetch events with possible parameters */
  const response = yield call(api.fetchEvents, token, categories, subcategories, from, to, searchTerm)

  if (response.ok) {
    const events = response.data
    yield put(EventsActions.fetchEventsSuccess(events))
    if (!gotInitialNotification) yield put(FCMActions.getInitialNotification())
  } else {
    const error = checkErrorType(response)
    yield put(EventsActions.fetchEventsError(error))
  }
}

export function * refreshEvents (action) {
  yield put(EventsActions.fetchEvents())
}

export function * participate (api, action) {
  const { eventId, userId } = action
  const state = yield select(userState)
  const token = state.token

  const response = yield call(api.participate, token, userId, eventId)

  if (response.ok) {
    const event = response.data
    yield put(EventsActions.participateSuccess(event))
  } else {
    const error = checkErrorType(response)
    yield put(EventsActions.participateError(error))
  }
}

export function * createEvent (api, action) {
  const state = yield select(userState)
  const token = state.token
  const { event } = action

  const response = yield call(api.createEvent, token, event)

  if (response.ok) {
    yield put(EventsActions.createEventSuccess(response.data))
    yield put(UploadActions.resetUpload())
    yield put(NavigationActions.navigate({ routeName: 'EventsScreen' }))
  } else {
    const error = checkErrorType(response)
    yield put(EventsActions.createEventError(error))
  }
}
