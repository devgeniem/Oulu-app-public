import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../Themes'
import styles from './Styles/NavigationStyles'
import IconButton from '../Components/IconButton'

export default class BackHeader extends React.PureComponent {
  back = () => this.props.back()

  renderStyles = () => {
    if (this.props.bg) return [styles.container, this.props.bg]
    return [styles.container, styles.loginHeader]
  }

  renderIcon = () => {
    if (this.props.right) {
      return (
        <IconButton
          onPress={this.back}
          style={styles.rightIcon}
          name='arrow-right'
          size={12}
          color={Colors.white}
        />
      )
    }
    return (
      <IconButton
        onPress={this.back}
        style={styles.leftIcon}
        name='arrow'
        size={20}
        color={Colors.white}
      />
    )
  }

  render () {
    const { title } = this.props
    return (
      <View style={this.renderStyles()}>
        { this.renderIcon() }
        <Text style={styles.titleText}>{title}</Text>
      </View>
    )
  }
}
