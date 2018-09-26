import React from 'react'
import { TouchableOpacity } from 'react-native'
// import Icon from './Icon'
// import { Colors } from '../Themes'
import styles from './Styles/LinkItemStyles'

export default class LinkItem extends React.PureComponent {
  open = () => this.props.onPress(this.props.item)
  render () {
    return (
      <TouchableOpacity onPress={this.open} style={styles.container} />
    )
  }
}
