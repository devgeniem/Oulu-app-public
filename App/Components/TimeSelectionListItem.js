import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './Styles/TimeSelectionListItemStyles'
import Icon from './Icon'
import Colors from '../Themes/Colors'

export default class TimeSelectionListItem extends React.PureComponent {
  select = () => this.props.onPress(this.props.item.param)

  renderIcon = (selected) => selected ? <Icon name='tick' size={18} color={Colors.pinkFontColor} /> : null

  render () {
    const {text} = this.props.item
    const {selected} = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={this.select}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.iconContainer}>
          {this.renderIcon(selected)}
        </View>
      </TouchableOpacity>
    )
  }
}
