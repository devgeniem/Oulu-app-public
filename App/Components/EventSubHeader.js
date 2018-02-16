import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/EventSubHeaderStyles'

export default class EventSubHeader extends React.PureComponent {
  render () {
    const { text } = this.props

    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{text.toUpperCase()}</Text>
      </View>
    )
  }
}
