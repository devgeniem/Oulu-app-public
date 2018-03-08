import React from 'react'
import { BackHandler, Platform } from 'react-native'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import { getCurrentRouteName } from '../Transforms/Route'
import AppNavigation from './AppNavigation'

const ILLEGAL_BACK_ROUTES = ['EventsScreen']

// here is our redux-aware our smart component
class ReduxNavigation extends React.Component {
  componentDidMount () {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }
  }
  componentWillUnmount () {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props
    const currentRoute = getCurrentRouteName(nav)
    const cannotGoBack = ILLEGAL_BACK_ROUTES.includes(currentRoute)
    if (nav.index !== 0 && !cannotGoBack) {
      return dispatch(ReactNavigation.NavigationActions.back())
    }
  }

  render () {
    const { dispatch, nav } = this.props
    const navigation = ReactNavigation.addNavigationHelpers({
      dispatch,
      state: nav
    })
    return <AppNavigation navigation={navigation} />
  }
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
