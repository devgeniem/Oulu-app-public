import { call, put, select } from 'redux-saga/effects'
import FCM from 'react-native-fcm'
import { NavigationActions } from 'react-navigation'
import EventsActions from '../Redux/EventsRedux'
import UserActions from '../Redux/UserRedux'

const eventsState = (state) => state.events

export function * getInitialNotification (action) {
  /* Check if closed app was opened by push notification */
  const notif = yield call(FCM.getInitialNotification)
  if (notif && notif.eventID) {
    console.log('Initial notification: ' + notif.eventID)
    const state = yield select(eventsState)
    const events = state.events
    const event = events.find(event => event.id === parseInt(notif.eventID))

    if (event) {
      yield put(EventsActions.selectEvent(event))
      yield put(NavigationActions.navigate({ routeName: 'EventScreen' }))
      yield put(UserActions.gotInitialNotification())
    }
  }
}

export function * openNotification (action) {
  const { eventID } = action
  if (eventID) {
    const state = yield select(eventsState)
    const events = state.events
    const event = events.find(event => event.id === parseInt(eventID))

    if (event) {
      yield put(EventsActions.selectEvent(event))
      yield put(NavigationActions.navigate({ routeName: 'EventScreen' }))
    }
  }
}
