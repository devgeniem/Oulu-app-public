import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/PollHeaderStyles'

export default class PollHeader extends React.PureComponent {
  render () {
    const { text } = this.props

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    )
  }
}
