import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import styles from './Styles/ButtonStyles'
import images from '../Themes/Images'
import Icon from '../Components/Icon'
import { Colors } from '../Themes'

export default class Button extends React.PureComponent {
  render () {
    const { onPress, text, iconName } = this.props

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image source={images.eventFooter} style={styles.imageBackground} />
        <Text style={styles.text}>{text.toUpperCase()}</Text>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={24} color={Colors.white} style={styles.buttonIcon} />
        </View>
      </TouchableOpacity>
    )
  }
}
