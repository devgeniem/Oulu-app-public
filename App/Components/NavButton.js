import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Colors } from '../Themes'
import Icon from './Icon'
import styles from './Styles/NavButtonStyles'

export default class NavButton extends React.PureComponent {
  renderBtnContent = () => {
    const { loading, icon } = this.props
    if (loading) return <ActivityIndicator size='small' color={Colors.white} />
    else if (icon) return <Icon name={icon} size={24} color={Colors.white} />
    return null
  }

  render () {
    const { text, onPress } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          { this.renderBtnContent() }
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}
