import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/EventDescriptionSectionStyles'
import EventSubHeader from '../Components/EventSubHeader'

export default class EventOrganiserSection extends React.PureComponent {
  render () {
    const { organiser, title } = this.props

    return (
      <View>
        <EventSubHeader text={title} />
        <View style={styles.container}>
          <Text style={styles.boldDescription}>{organiser}</Text>
        </View>
      </View>
    )
  }
}
