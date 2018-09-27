import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from './Icon'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import { Colors } from '../Themes'
import styles from './Styles/LinkItemStyles'

export default class LinkItem extends React.PureComponent {
  open = () => this.props.onPress(this.props.item)
  render () {
    const { title } = this.props.item
    return (
      <TouchableOpacity onPress={this.open} style={styles.container}>
        <View style={styles.contentContainer}>
          <SimpleIcon size={18} color={Colors.loginHeader} name='badge' />
          <Text style={styles.linkText}>{title}</Text>
        </View>
        <Icon size={16} color={Colors.loginHeader} name='arrow-right' />
      </TouchableOpacity>
    )
  }
}
