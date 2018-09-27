import React from 'react'
import { WebView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import BackHeader from '../Navigation/BackHeader'
import ErrorMessage from '../Components/ErrorMessage'
import { Colors } from '../Themes'
import styles from './Styles/WebViewScreenStyles'

class WebViewScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader back={navigation.goBack} />
  })

  renderLoader = () => {
    return <ActivityIndicator size='large' color={Colors.loginHeader} style={styles.loader} />
  }

  renderError = () => <ErrorMessage text={I18n.t('linkOpenError')} />

  render () {
    const { currentLink } = this.props
    return (
      <WebView
        source={{ uri: currentLink }}
        renderError={this.renderError}
        renderLoading={this.renderLoader}
        startInLoadingState
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentLink: state.links.currentLink
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebViewScreen)
