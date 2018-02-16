import React from 'react'
import { View, Text } from 'react-native'
import Icon from './Icon'
import styles from './Styles/CategoryIconStyles'

export default class CategoryIcon extends React.PureComponent {
  renderContent = () => {
    const { icon, size, color, count } = this.props
    if (count) return <Text style={styles.count}>+{count}</Text>
    return <Icon name={icon} size={size} color={color} />
  }

  render () {
    const { extraStyle } = this.props
    return (
      <View style={[styles.container, extraStyle]}>
        { this.renderContent() }
      </View>
    )
  }
}
