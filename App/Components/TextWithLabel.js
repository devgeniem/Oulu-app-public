import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/TextWithLabelStyles'

export default class TextWithLabel extends React.PureComponent {
  render () {
    const { label, text } = this.props

    return (
      <View>
        <Text style={styles.textLabel}>{label}</Text>
        <Text style={styles.textValue}>{text}</Text>
      </View>
    )
  }
}
