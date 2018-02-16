import React from 'react'
import { Animated, Image } from 'react-native'
import styles from './Styles/EventListHeaderStyles'
import I18n from 'react-native-i18n'
import EventSearchInput from './EventSearchInput'
import { Images } from '../Themes'
import FilterIcons from './FilterIcons'

export default class EventListHeader extends React.PureComponent {
  render () {
    const { style, subcategories, maincategories, searchTerm, handleChangeSearchTerm, onSubmit } = this.props
    return (
      <Animated.View style={[styles.container, style]}>
        <Image source={Images.city_v2_header} style={styles.image} />
        <FilterIcons
          subcategories={subcategories}
          maincategories={maincategories}
          containerExtraStyles={styles.iconContainer}
        />
        <EventSearchInput
          value={searchTerm}
          onChangeText={handleChangeSearchTerm}
          onSubmitEditing={onSubmit}
          placeholder={I18n.t('searchDefault')}
        />
      </Animated.View>
    )
  }
}
