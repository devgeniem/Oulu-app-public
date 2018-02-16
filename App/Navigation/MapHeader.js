import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../Themes'
import styles from './Styles/NavigationStyles'
import I18n from 'react-native-i18n'
import TextUtil from '../Transforms/TextUtil'
import IconButton from '../Components/IconButton'

export default class MapHeader extends React.Component {
  goToEvents = () => this.props.navigation.navigate('EventsScreen')

  render () {
    return (
      <View style={[styles.container, styles.eventsHeader]}>
        <IconButton
          onPress={this.goToEvents}
          style={styles.leftIcon}
          name='arrow'
          size={20}
          color={Colors.white}
        />
        <Text style={styles.titleText}>{TextUtil.capitalizeFirstLetter(I18n.t('events'))}</Text>
      </View>
    )
  }
}
