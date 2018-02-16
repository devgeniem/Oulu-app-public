import React from 'react'
import { View, TextInput, Keyboard } from 'react-native'
import IconButton from './IconButton'
import { Colors } from '../Themes'
import styles from './Styles/EventSearchInputStyles'

export default class EventSearchInput extends React.PureComponent {
  onPress = () => {
    this.props.onSubmitEditing()
    Keyboard.dismiss()
  }

  render () {
    const { onChangeText, onSubmitEditing, placeholder, value, containerExtraStyles } = this.props
    return (
      <View style={[styles.container, containerExtraStyles]}>
        <IconButton
          name='search'
          color={Colors.eventTypeHeader}
          style={styles.searchIcon}
          size={20}
          onPress={this.onPress}
        />
        <TextInput
          keyboardType='default'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={onChangeText}
          underlineColorAndroid={Colors.transparent}
          selectionColor={Colors.eventTypeHeader}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          placeholderTextColor={Colors.inactive}
          style={styles.input}
          value={value}
          returnKeyType='search'
        />
      </View>
    )
  }
}
