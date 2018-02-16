import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from './Icon'

export default class IconButton extends React.PureComponent {
  render () {
    const { name, size, color, style, onPress } = this.props
    const hitSlop = { top: 5, left: 5, bottom: 5, right: 5 }
    return (
      <TouchableOpacity onPress={onPress} style={style} hitSlop={hitSlop} >
        <Icon name={name} size={size} color={color} />
      </TouchableOpacity>
    )
  }
}
