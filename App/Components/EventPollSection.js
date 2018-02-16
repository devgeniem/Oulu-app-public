import React from 'react'
import { View } from 'react-native'
import styles from './Styles/EventPollSectionStyles'
import EventSubHeader from '../Components/EventSubHeader'
import CustomButton from './CustomButton'
import Colors from '../Themes/Colors'

export default class EventPollSection extends React.PureComponent {
  renderPollButtons = () => {
    return this.props.polls.map((poll, index) => {
      return (
        <CustomButton
          key={index}
          text={poll.title}
          onPress={() => this.props.onPress(poll)}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          isEventPollButton
          iosUnderlayColor={Colors.loginButtonUnderlay}
        />
      )
    })
  }

  render () {
    const { title } = this.props

    return (
      <View>
        <EventSubHeader text={title} />
        <View style={styles.container}>
          { this.renderPollButtons() }
        </View>
      </View>
    )
  }
}
