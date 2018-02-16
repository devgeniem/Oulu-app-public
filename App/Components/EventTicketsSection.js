import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/EventDescriptionSectionStyles'
import EventSubHeader from '../Components/EventSubHeader'

export default class EventTicketsSection extends React.PureComponent {
  render () {
    const { price, title } = this.props

    return (
      <View>
        <EventSubHeader text={title} />
        <View style={styles.container}>
          <Text style={styles.boldDescription}>{price} €</Text>
        </View>
      </View>
    )
  }
}
