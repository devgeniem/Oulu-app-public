import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from './Icon'

export default class IconButton extends React.PureComponent {
  getIconStyle = () => {
    const { padding, paddingLeft, paddingRight, paddingTop, paddingBottom } = this.props
    const styles = {}

    if (padding) styles.padding = padding
    if (paddingLeft) styles.paddingLeft = paddingLeft
    if (paddingRight) styles.paddingRight = paddingRight
    if (paddingTop) styles.paddingTop = paddingTop
    if (paddingBottom) styles.paddingBottom = paddingBottom

    return styles
  }

  render () {
    const { name, size, color, style, onPress } = this.props
    const hitSlop = { top: 5, left: 5, bottom: 5, right: 5 }
    const iconStyle = this.getIconStyle()
    return (
      <TouchableOpacity onPress={onPress} style={style} hitSlop={hitSlop} >
        <Icon name={name} size={size} color={color} style={iconStyle} />
      </TouchableOpacity>
    )
  }
}
