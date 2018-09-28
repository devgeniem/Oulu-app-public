import React from 'react'
import { View } from 'react-native'
import styles from './Styles/FilterIconsStyles'
import CategoryIcon from './CategoryIcon'
import { Colors } from '../Themes'
import {EVENT_CULTURE, EVENT_MUSIC, EVENT_SPORTS} from '../Transforms/Constants'
import { MAIN_CATEGORIES } from '../Transforms/CategoryTypes'

export default class EventListHeader extends React.PureComponent {
  isSelected = (category) => {
    const { maincategories } = this.props
    return maincategories.includes(category)
  }

  categoryIconStyle = (category) => {
    const { maincategories } = this.props

    if (maincategories.length === 0 || maincategories.length === MAIN_CATEGORIES.length) {
      switch (category) {
        case EVENT_CULTURE:
          return styles.cultureIcon
        case EVENT_MUSIC:
          return styles.musicIcon
        case EVENT_SPORTS:
          return styles.sportsIcon
      }
    } else {
      switch (category) {
        case EVENT_CULTURE:
          return this.isSelected(category) ? styles.cultureIcon : styles.notSelectedIcon
        case EVENT_MUSIC:
          return this.isSelected(category) ? styles.musicIcon : styles.notSelectedIcon
        case EVENT_SPORTS:
          return this.isSelected(category) ? styles.sportsIcon : styles.notSelectedIcon
      }
    }
  }

  render () {
    const { containerExtraStyles } = this.props
    return (
      <View style={[styles.iconContainer, containerExtraStyles]}>
        <CategoryIcon icon='note' size={20} color={Colors.white} extraStyle={this.categoryIconStyle(EVENT_MUSIC)} />
        <CategoryIcon icon='baseball' size={20} color={Colors.white} extraStyle={this.categoryIconStyle(EVENT_SPORTS)} />
        <CategoryIcon icon='mask' size={16} color={Colors.white} extraStyle={this.categoryIconStyle(EVENT_CULTURE)} />
      </View>
    )
  }
}
