import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './Styles/CustomPickerListItemStyles'
import Icon from './Icon'
import Colors from '../Themes/Colors'

export default class CustomPickerListItem extends React.PureComponent {
  select = () => this.props.onPress(this.props.item)

  renderIcon = (selected) => selected ? <Icon name='tick' size={18} color={Colors.pinkFontColor} /> : null

  render () {
    const {selected, label} = this.props

    return (
      <TouchableOpacity style={styles.container} onPress={this.select}>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.iconContainer}>
          {this.renderIcon(selected)}
        </View>
      </TouchableOpacity>
    )
  }
}
