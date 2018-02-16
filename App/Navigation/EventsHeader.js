import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../Themes'
import styles from './Styles/NavigationStyles'
import I18n from 'react-native-i18n'
import TextUtil from '../Transforms/TextUtil'
import IconButton from '../Components/IconButton'

export default class EventsHeader extends React.Component {
  goToMenu = () => this.props.navigation.navigate('MenuScreen')

  goToMap = () => this.props.navigation.navigate('MapScreen')

  render () {
    return (
      <View style={[styles.container, styles.eventsHeader]}>
        <IconButton
          onPress={this.goToMenu}
          style={styles.leftIcon}
          name='burger'
          size={20}
          color={Colors.white}
        />
        <Text style={styles.titleText}>{TextUtil.capitalizeFirstLetter(I18n.t('events'))}</Text>
        <IconButton
          onPress={this.goToMap}
          style={styles.rightIcon}
          name='map'
          size={20}
          color={Colors.white}
        />
      </View>
    )
  }
}
