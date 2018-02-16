import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/EventDescriptionSectionStyles'
import EventSubHeader from '../Components/EventSubHeader'
import IconUtil from '../Transforms/IconUtil'

export default class EventDescriptionSection extends React.PureComponent {
  render () {
    const { desc, place, dateDisplay, title, subcats } = this.props

    return (
      <View style={styles.mainContainer}>
        <EventSubHeader text={title} />
        <View style={styles.container}>
          <Text style={styles.description}>{desc}</Text>
          <View style={styles.iconContainer}>{IconUtil.renderSubCategoryIcons(subcats)}</View>
          <Text style={styles.boldDescription}>{place}</Text>
          <Text style={styles.boldDescription}>{dateDisplay}</Text>
        </View>
      </View>
    )
  }
}
