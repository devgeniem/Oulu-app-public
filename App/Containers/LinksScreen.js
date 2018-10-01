import React from 'react'
import { View, FlatList, Linking, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import LinksActions from '../Redux/LinksRedux'
import I18n from 'react-native-i18n'
import BackHeader from '../Navigation/BackHeader'
import LinkItem from '../Components/LinkItem'
import ErrorMessage from '../Components/ErrorMessage'
import { Colors } from '../Themes'
import styles from './Styles/LinksScreenStyles'

class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader title={I18n.t('links')} back={navigation.goBack} />
  })

  componentDidMount () {
    this.props.fetchLinks()
  }

  open = (item) => {
    if (item.openInWebView) {
      this.props.setCurrentLink(item.href)
      return this.props.navigation.navigate('WebViewScreen')
    }
    return Linking.openURL(item.href)
  }

  /* Key to track each item */
  keyExtractor = (item, index) => index
  /* Component to render for each item */
  renderItem = ({item}) => <LinkItem item={item} onPress={this.open} />
  renderSeparator = () => <View style={styles.separator} />

  renderError = () => {
    const { error, resetFetchLinksError } = this.props
    if (error) {
      return <ErrorMessage text={I18n.t('linkFetchError')} onPress={resetFetchLinksError} />
    }
    return null
  }

  renderPage = () => {
    const { fetching, links } = this.props
    if (fetching) {
      return <ActivityIndicator size='large' color={Colors.loginHeader} style={styles.loader} />
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={links}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
        { this.renderError() }
      </View>
    )
  }

  render () {
    return this.renderPage()
  }
}

const mapStateToProps = (state) => {
  return {
    links: state.links.links,
    fetching: state.links.fetching,
    error: state.links.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLinks: () => dispatch(LinksActions.fetchLinks()),
    resetFetchPollsError: () => dispatch(LinksActions.resetFetchPollsError()),
    setCurrentLink: (link) => dispatch(LinksActions.setCurrentLink(link))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen)
