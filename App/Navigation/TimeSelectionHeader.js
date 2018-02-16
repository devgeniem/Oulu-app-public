import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../Themes'
import styles from './Styles/NavigationStyles'
import I18n from 'react-native-i18n'
import TextUtil from '../Transforms/TextUtil'
import IconButton from '../Components/IconButton'

export default class TimeSelectionHeader extends React.Component {
  back = () => this.props.onBack()

  render () {
    return (
      <View style={[styles.container, styles.timeSelectionHeader]}>
        <IconButton onPress={this.back} style={styles.leftIcon} name='arrow' size={20} color={Colors.white} />
        <Text style={styles.titleText}>{TextUtil.capitalizeFirstLetter(I18n.t('time'))}</Text>
      </View>
    )
  }
}
