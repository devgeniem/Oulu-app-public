import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/LoginInputStyles'
import { Colors } from '../Themes'

export default class LoginInput extends React.Component {
  render () {
    return (
      <View style={styles.centered}>
        <Text style={styles.labelText}>{this.props.label}</Text>
        <TextInput
          style={styles.textInput}
          ref={this.props.onRef ? (ref) => this.props.onRef(ref) : ''}
          value={this.props.value}
          keyboardType='default'
          returnKeyType={this.props.returnKey}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={this.props.secureTextEntry}
          onChangeText={this.props.onChangeText}
          underlineColorAndroid={Colors.transparent}
          selectionColor={Colors.lightBrown}
          onSubmitEditing={this.props.onSubmitEditing}
          blurOnSubmit={this.props.blurOnSubmit}
        />
      </View>
    )
  }
}
