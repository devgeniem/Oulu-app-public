import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './Styles/EventListItemStyles'
import {EVENT_CULTURE, EVENT_MUSIC, EVENT_SPORTS} from '../Transforms/Constants'
import I18n from 'react-native-i18n'
import DateUtil from '../Transforms/DateUtil'
import Icon from './Icon'
import { Colors } from '../Themes'
import IconUtil from '../Transforms/IconUtil'

export default class EventListItem extends React.PureComponent {
  open = () => this.props.onPress(this.props.item)

  categoryHeaderColor = (category) => {
    switch (category) {
      case EVENT_CULTURE:
        return styles.cultureHeader
      case EVENT_MUSIC:
        return styles.musicHeader
      case EVENT_SPORTS:
        return styles.sportsHeader
    }
  }

  imageBadgeColor = (category) => {
    switch (category) {
      case EVENT_CULTURE:
        return styles.cultureBadge
      case EVENT_MUSIC:
        return styles.musicBadge
      case EVENT_SPORTS:
        return styles.sportsBadge
    }
  }

  renderPicture = () => {
    const { picture } = this.props.item
    if (picture) {
      return <Image source={{uri: picture}} style={styles.image} />
    }
    return <View style={styles.noImage} />
  }

  render () {
    const {organiser, cat, desc, title, startDate, endDate, participantCount, subcats} = this.props.item
    const categoryColor = this.categoryHeaderColor(cat)
    const badgeColor = this.imageBadgeColor(cat)
    const dateDisplay = DateUtil.displayPeriod(startDate, endDate)

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.open} delayPressIn={1}>
          { this.renderPicture() }
          <Text style={[styles.imageBadge, badgeColor]}>{organiser}</Text>
          <View style={styles.textContainer}>
            <Text style={[styles.eventHeader, categoryColor]}>{I18n.t(cat)}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{dateDisplay}</Text>
            <Text style={styles.description} numberOfLines={3}>{desc}</Text>
            <View style={styles.eventIconsContainer}>
              {IconUtil.renderSubCategoryIcons(subcats)}
              <Text style={styles.likeCount}>{participantCount}</Text>
              <Icon name='peace' size={24} color={Colors.eventTypeHeader} style={styles.likeIcon} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
