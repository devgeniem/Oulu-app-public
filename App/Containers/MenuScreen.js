import React from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import NavButton from '../Components/NavButton'
import BackHeader from '../Navigation/BackHeader'
import { Images } from '../Themes'
import styles from './Styles/MenuScreenStyles'

class MenuScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader title={I18n.t('menu')} back={navigation.goBack} right />
  })

  voting = () => this.props.navigation.navigate('PollsScreen')
  events = () => this.props.navigation.goBack()
  profile = () => this.props.navigation.navigate('ProfileScreen')
  instructions = () => this.props.navigation.navigate('InstructionsScreen')
  links = () => this.props.navigation.navigate('LinksScreen')

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
          <NavButton text={I18n.t('links').toLowerCase()} icon='instructions' onPress={this.links} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen)
