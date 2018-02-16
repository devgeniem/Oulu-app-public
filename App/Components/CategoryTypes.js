import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CategoryTypesStyles'

export default class CategoryTypes extends React.PureComponent {
  render () {
    const { title, categories } = this.props

    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconContainer}>
          {categories}
        </View>
      </View>
    )
  }
}
