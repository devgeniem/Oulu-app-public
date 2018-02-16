import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/TextButtonStyles'

export default class TextButton extends React.PureComponent {
  getStyle = (extraStyles) => this.props.disabled ? [styles.container, extraStyles, styles.disabled] : [styles.container, extraStyles]

  render () {
    const { onPress, text, disabled, extraStyles } = this.props

    return (
      <TouchableOpacity onPress={onPress} style={this.getStyle(extraStyles)} disabled={disabled}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}
