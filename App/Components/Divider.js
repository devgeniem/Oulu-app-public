import React from 'react'
import { View } from 'react-native'
import styles from './Styles/DividerStyles'

export default class Divider extends React.PureComponent {
  render () {
    return (
      <View style={styles.divider} />
    )
  }
}
