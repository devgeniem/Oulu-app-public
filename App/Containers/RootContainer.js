import React, { Component } from 'react'
import { View, StatusBar, Platform } from 'react-native'
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm'
import { connect } from 'react-redux'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import StartupActions from '../Redux/StartupRedux'
import FCMActions from '../Redux/FCMRedux'
import ReduxPersist from '../Config/ReduxPersist'
import { Colors } from '../Themes'
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }

    /* Called regardless of app state: running, background or not running. Won't be called when app is killed by user in iOS */
    this.notificationListener = FCM.on(FCMEvent.Notification, notif => {
      /* App is open/resumed because user clicked banner */
      if (notif.opened_from_tray) {
        console.log('opened from tray, event ID: ' + notif.eventID)
        this.props.openNotification(notif.eventID)
      } else if (Platform.OS === 'android' && !notif.local_notification && notif.fcm) {
        console.log('notification arrived when in foreground')
        /* Create local notification for showing in a foreground (Android) */
        FCM.presentLocalNotification({
          title: notif.fcm.title,
          body: notif.fcm.body,
          eventID: notif.eventID,
          priority: 'high',
          sound: 'default',
          color: Colors.pinkFontColor,
          show_in_foreground: true
        })
      }

      /* iOS requires developers to call completionHandler to end notification process */
      if (Platform.OS === 'ios') {
        switch (notif._notificationType) {
          case NotificationType.Remote:
            notif.finish(RemoteNotificationResult.NewData)
            break
          case NotificationType.NotificationResponse:
            notif.finish()
            break
          case NotificationType.WillPresent:
            notif.finish(WillPresentNotificationResult.All)
            break
        }
      }
    })
  }

  componentWillUnmount () {
    this.notificationListener.remove()
  }

  renderStatusBar = () => {
    if (Platform.OS === 'android') return <StatusBar barStyle='light-content' />
    else {
      return (
        <View style={styles.statusBar}>
          <StatusBar barStyle='light-content' />
        </View>
      )
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        {this.renderStatusBar()}
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  openNotification: (eventID) => dispatch(FCMActions.openNotification(eventID))
})

export default connect(null, mapDispatchToProps)(RootContainer)
