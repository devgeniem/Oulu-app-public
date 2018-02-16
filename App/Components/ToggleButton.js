import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/ToggleButtonStyles'
import { Colors } from '../Themes'
import IconButton from './IconButton'
import { SUB_CATEGORY_ACCESSIBLE_DESC } from '../Transforms/Constants'

export default class ToggleButton extends React.PureComponent {
  getStyle = (toggleColor) => this.props.toggled ? [styles.icon, {backgroundColor: toggleColor}] : styles.icon
  getSize = () => this.props.text === SUB_CATEGORY_ACCESSIBLE_DESC ? 30 : 20
  onPress = () => this.props.onPress(this.props.type)

  render () {
    const { text, iconName, toggleColor } = this.props

    return (
      <View style={styles.container}>
        <IconButton
          name={iconName}
          size={this.getSize()}
          color={Colors.white}
          style={this.getStyle(toggleColor)}
          onPress={this.onPress}
        />
        <Text style={styles.text}>{text.toLowerCase()}</Text>
      </View>
    )
  }
}
