import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
// import Icon from './Icon'
// import { Colors } from '../Themes'
import styles from './Styles/LinkItemStyles'

export default class LinkItem extends React.PureComponent {
  open = () => this.props.onPress(this.props.item)
  render () {
    const { title } = this.props.item
    return (
      <TouchableOpacity onPress={this.open} style={styles.container}>
        <Text style={styles.linkText}>{title}</Text>
      </TouchableOpacity>
    )
  }
}
