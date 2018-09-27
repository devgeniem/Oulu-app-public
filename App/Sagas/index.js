import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { EventsTypes } from '../Redux/EventsRedux'
import { UserTypes } from '../Redux/UserRedux'
import { PollTypes } from '../Redux/PollRedux'
import { FCMTypes } from '../Redux/FCMRedux'
import { AdsTypes } from '../Redux/AdsRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { fetchEvents, fetchMoreEvents, refreshEvents, participate } from './EventsSaga'
import { fetchToken, login, logout, updateSearchParameters, deleteStatistics, updateUser } from './UserSagas'
import { getInitialNotification, openNotification } from './FCMSagas'
import { fetchPolls, isPollFinished, refreshPolls, submitPoll, getPollCount } from './PollSagas'
import { fetchAds } from './AdsSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(EventsTypes.REFRESH_EVENTS, refreshEvents),
    takeLatest(StartupTypes.STARTUP, startup, api),
    takeLatest(EventsTypes.FETCH_EVENTS, fetchEvents, api),
    takeLatest(EventsTypes.FETCH_MORE_EVENTS, fetchMoreEvents, api),
    takeLatest(UserTypes.FETCH_TOKEN, fetchToken, api),
    takeLatest(UserTypes.LOGIN_REQUEST, login, api),
    takeLatest(UserTypes.LOGOUT, logout, api),
    takeLatest(UserTypes.UPDATE_SEARCH, updateSearchParameters, api),
    takeLatest(EventsTypes.PARTICIPATE, participate, api),
    takeLatest(PollTypes.FETCH_POLLS, fetchPolls, api),
    takeLatest(PollTypes.REFRESH_POLLS, refreshPolls),
    takeLatest(FCMTypes.GET_INITIAL_NOTIFICATION, getInitialNotification),
    takeLatest(FCMTypes.OPEN_NOTIFICATION, openNotification),
    takeLatest(PollTypes.SUBMIT_POLL, submitPoll, api),
    takeLatest(PollTypes.IS_POLL_FINISHED, isPollFinished),
    takeLatest(PollTypes.GET_POLL_COUNT, getPollCount),
    takeLatest(UserTypes.DELETE_STATISTICS, deleteStatistics, api),
    takeLatest(AdsTypes.FETCH_ADS, fetchAds, api),
    takeLatest(UserTypes.UPDATE_USER, updateUser, api)
  ])
}
