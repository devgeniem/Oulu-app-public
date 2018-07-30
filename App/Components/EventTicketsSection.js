import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/EventDescriptionSectionStyles'
import EventSubHeader from '../Components/EventSubHeader'

export default class EventTicketsSection extends React.PureComponent {
  renderPrices = () => {
    const { price } = this.props

    return price.map(({ name, value }, index) => (
      <View style={styles.container} key={index}>
        <Text style={styles.priceTitle}>{name}</Text>
        <Text style={styles.priceValue}>{value} €</Text>
      </View>
    ))
  }

  renderTicketsSection = () => {
    const { title } = this.props
    return (
      <View>
        <EventSubHeader text={title} />
        { this.renderPrices() }
      </View>
    )
  }

  render () {
    const { price } = this.props

    if (Array.isArray(price) && price.length) {
      return this.renderTicketsSection()
    }
    return null
  }
}
