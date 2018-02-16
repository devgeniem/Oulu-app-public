import React from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import UserActions from '../Redux/UserRedux'
import NavButton from '../Components/NavButton'
import BackHeader from '../Navigation/BackHeader'
import { Images } from '../Themes'
import styles from './Styles/MenuScreenStyles'
import ErrorMessage from '../Components/ErrorMessage'

class MenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader title={I18n.t('menu')} back={navigation.goBack} right />
  })

  voting = () => this.props.navigation.navigate('PollsScreen')
  events = () => this.props.navigation.goBack()
  profile = () => this.props.navigation.navigate('ProfileScreen')
  instructions = () => this.props.navigation.navigate('InstructionsScreen')
  login = () => this.props.navigation.navigate('LoginScreen')
  logout = () => this.props.logout()

  renderLoginButton = () => {
    const { user, fetching } = this.props
    if (user && user.username) {
      return <NavButton text={I18n.t('logout')} icon='log-out' onPress={this.logout} loading={fetching} />
    }
    return <NavButton text={I18n.t('login')} icon='log-in' onPress={this.login} />
  }

  renderLogoutError = () => {
    const { logoutError, resetLogoutError } = this.props
    if (logoutError) return <ErrorMessage text={I18n.t('logoutError')} onPress={resetLogoutError} />
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={Images.city_v2} style={styles.image} />
        <View style={styles.topRow}>
          <NavButton text={I18n.t('influence')} icon='influence' onPress={this.voting} />
          <NavButton text={I18n.t('events')} icon='happenings' onPress={this.events} />
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <NavButton text={I18n.t('own_profile')} icon='happy-cute-face' onPress={this.profile} />
          <NavButton text={I18n.t('instructions')} icon='instructions' onPress={this.instructions} />
          { this.renderLoginButton() }
        </View>
        { this.renderLogoutError() }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.user.fetching,
    user: state.user.user,
    logoutError: state.user.logoutError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(UserActions.logout()),
    resetLogoutError: () => dispatch(UserActions.resetLogoutError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
