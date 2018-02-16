import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CustomCalloutStyles'

export default class CustomCallout extends React.PureComponent {
  render () {
    const { text } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )
  }
}
