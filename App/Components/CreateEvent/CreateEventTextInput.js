import React from 'react'
import { TextInput } from 'react-native'
import styles from './Styles/CreateEventStyles'
import { Colors } from '../../Themes'

export default class CreateEventTextInput extends React.PureComponent {
  render () {
    const { extraStyle } = this.props

    return (
      <TextInput
        keyboardType='default'
        autoCorrect={false}
        style={[styles.textInput, extraStyle]}
        selectionColor={Colors.eventTypeHeader}
        underlineColorAndroid={Colors.transparent}
        {...this.props}
      />
    )
  }
}
