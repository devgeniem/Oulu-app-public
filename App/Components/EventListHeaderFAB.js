import React from 'react'
import { View, Animated } from 'react-native'
import I18n from 'react-native-i18n'
import ActionButton from 'react-native-action-button'
import Icon from './Icon'
import { Colors } from '../Themes'
import styles from './Styles/EventListHeaderFABStyles'

const AnimatedActionButton = Animated.createAnimatedComponent(ActionButton)

export default class EventListHeaderFAB extends React.PureComponent {
  renderIcon = () => <Icon name='settings' size={20} color={Colors.white} />
  renderBackdrop = () => <View style={[styles.backdrop, this.props.backdropExtraStyles]} />

  toEventTypes = () => this.props.navigation.navigate('EventTypesSelectionScreen')
  toTimeSelection = () => this.props.navigation.navigate('TimeSelectionScreen')

  renderItem = (title, icon, onPress) => (
    <ActionButton.Item
      key={'key'}
      buttonColor={Colors.eventTypeHeader}
      title={title}
      textStyle={styles.textStyle}
      textContainerStyle={styles.textContainerStyle}
      onPress={onPress}
      size={50}
      spacing={20}
      hideLabelShadow
      hideShadow
      useNativeFeedback={false}
    >
      <Icon name={icon} size={20} color={Colors.white} />
    </ActionButton.Item>
  )

  renderButtons = (user) => {
    return [
      this.renderItem(I18n.t('eventTypes'), 'tapahtumatyypit', this.toEventTypes),
      this.renderItem(I18n.t('setTimeWindow'), 'aikaikkuna', this.toTimeSelection)
    ]
  }

  render () {
    const offsetY = this.props.offsetY ? this.props.offsetY : 76
    const offsetX = this.props.offsetX ? this.props.offsetX : 20
    const { user } = this.props

    return (
      <AnimatedActionButton
        buttonColor={Colors.eventTypeHeader}
        verticalOrientation='down'
        position='right'
        offsetX={offsetX}
        offsetY={offsetY}
        degrees={180}
        size={50}
        spacing={50}
        icon={this.renderIcon()}
        fixNativeFeedbackRadius
        backdrop={this.renderBackdrop()}
        style={this.props.style}
        hideShadow
      >
        { this.renderButtons(user) }
      </AnimatedActionButton>
    )
  }
}
