import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import LinksActions from '../Redux/LinksRedux'
import I18n from 'react-native-i18n'
import BackHeader from '../Navigation/BackHeader'
import LinkItem from '../Components/LinkItem'
import styles from './Styles/LinksScreenStyles'

const LINKS = [
  {
    title: 'Oulun kaupunki',
    href: 'https://www.ouka.fi/etusivu',
    openInWebView: true
  },
  {
    title: 'Kirjasto',
    href: 'https://www.ouka.fi/oulu/kirjasto',
    openInWebView: false
  },
  {
    title: 'Google',
    href: 'https://google.fi/',
    openInWebView: false
  }
]

class LinksScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader title={I18n.t('links')} back={navigation.goBack} />
  })

  componentDidMount () {
    // this.props.fetchLinks()
  }

  open = (item) => {
    return null
  }

  renderError = () => {
    return null
  }

  /* Key to track each item */
  keyExtractor = (item, index) => index
  /* Component to render for each item */
  renderItem = ({item}) => <LinkItem item={item} onPress={this.open} />

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={LINKS}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
        { this.renderError() }
      </View>
    )
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
    fetchLinks: () => dispatch(LinksActions.fetchLinks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksScreen)
