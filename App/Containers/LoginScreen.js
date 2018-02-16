import React from 'react'
import { View, Text, Keyboard, Image } from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UserActions from '../Redux/UserRedux'
import I18n from 'react-native-i18n'
import BackHeader from '../Navigation/BackHeader'
import LoginInput from '../Components/LoginInput'
import CustomButton from '../Components/CustomButton'
import { Colors, Images } from '../Themes'
import styles from './Styles/LoginScreenStyles'

class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader title={I18n.t('login_header')} back={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChangeUsername = (text) => this.setState({ username: text })
  handleChangePassword = (text) => this.setState({ password: text })
  handlePressLogin = () => {
    this.props.login(this.state.username, this.state.password)
    this.dismissKeyboard()
  }
  dismissKeyboard = () => Keyboard.dismiss()

  renderError = () => {
    const { loginError } = this.props
    if (loginError) return <Text style={styles.error}>{I18n.t(loginError.key)}</Text>
    return <View style={styles.empty} />
  }

  componentWillUnmount () {
    this.props.clearError()
  }

  render () {
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
        <View style={styles.imageContainer}>
          <Image source={Images.city_v2} style={styles.image} />
        </View>
        <LoginInput
          value={this.state.username}
          returnKey='next'
          onChangeText={this.handleChangeUsername}
          onSubmitEditing={() => this.password.focus()}
          secureTextEntry={false}
          label={I18n.t('username')}
          blurOnSubmit={false}
        />
        <LoginInput
          onRef={(password) => this.password = password} // eslint-disable-line
          value={this.state.password}
          returnKey='done'
          onChangeText={this.handleChangePassword}
          onSubmitEditing={this.dismissKeyboard}
          label={I18n.t('password')}
          secureTextEntry
        />
        { this.renderError() }
        <CustomButton
          text={I18n.t('login')}
          onPress={this.handlePressLogin}
          containerStyle={styles.loginBtnContainer}
          buttonStyle={styles.loginBtn}
          iosUnderlayColor={Colors.loginButtonUnderlay}
          loading={this.props.fetching}
          upperCase
        />
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.user.fetching,
    loginError: state.user.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(UserActions.loginRequest(username, password)),
    clearError: () => dispatch(UserActions.clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
