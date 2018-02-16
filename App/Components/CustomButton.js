import React from 'react'
import { View, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, Platform, ActivityIndicator } from 'react-native'
import { Colors } from '../Themes'
import styles from './Styles/CustomButtonStyles'
import Icon from './Icon'

export default class CustomButton extends React.Component {
  onPress = () => window.requestAnimationFrame(() => this.props.onPress())

  renderText = () => {
    if (this.props.upperCase) return this.props.text.toUpperCase()
    return this.props.text
  }

  renderButtonContent = () => {
    /** Temporary quick solution to display 2 icons inside the button in EventScreen PollSection
     *  Further development is required for more generic support for icons
     */
    if (this.props.isEventPollButton) {
      return (
        <View style={styles.eventButtonContainer}>
          <Icon name='questionnaire' size={20} color={Colors.white} style={styles.leftIcon} />
          <Text style={[styles.buttonText, styles.eventButtonText]}>{this.renderText()}</Text>
          <Icon name='arrow-right' size={14} color={Colors.white} style={styles.rightIcon} />
        </View>
      )
    }

    if (this.props.loading) return <ActivityIndicator color={Colors.white} size='small' />
    else if (this.props.textStyle) {
      return (
        <Text style={[styles.buttonText, this.props.textStyle]}>
          {this.renderText()}
        </Text>
      )
    }
    return <Text style={styles.buttonText}>{this.renderText()}</Text>
  }

  getRippleColor = () => {
    if (this.props.rippleColor) return this.props.rippleColor
    return Colors.white
  }

  renderButton = () => {
    const { buttonStyle, iosUnderlayColor, disabled, disabledStyle, loading, selected, selectedStyle } = this.props
    let stylesVar = []

    if (disabled && !loading && !selected) {
      stylesVar = [styles.button, buttonStyle, disabledStyle]
    } else if (selected) {
      stylesVar = [styles.button, buttonStyle, selectedStyle]
    } else {
      stylesVar = [styles.button, buttonStyle]
    }

    if (Platform.OS === 'android' && Platform.Version > 20) {
      return (
        <TouchableNativeFeedback
          onPress={this.onPress}
          background={TouchableNativeFeedback.Ripple(this.getRippleColor(), true)}
          disabled={disabled}
        >
          <View style={stylesVar}>
            { this.renderButtonContent() }
          </View>
        </TouchableNativeFeedback>
      )
    } else {
      if (this.props.opacity) {
        return (
          <TouchableOpacity
            style={stylesVar}
            onPress={this.onPress}
            disabled={disabled}
          >
            { this.renderButtonContent() }
          </TouchableOpacity>
        )
      }
      return (
        <TouchableHighlight
          style={stylesVar}
          onPress={this.onPress}
          underlayColor={iosUnderlayColor}
          disabled={disabled}
        >
          { this.renderButtonContent() }
        </TouchableHighlight>
      )
    }
  }

  render () {
    return (
      <View style={this.props.containerStyle}>
        { this.renderButton() }
      </View>
    )
  }
}
