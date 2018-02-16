import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './Styles/AdListItemStyles'
import I18n from 'react-native-i18n'
import DateUtil from '../Transforms/DateUtil'

export default class AdListItem extends React.PureComponent {
  open = () => this.props.onPress(this.props.item)

  dateDisplay = () => {
    const {publishDate, expireDate, showDates} = this.props.item
    const text = `${I18n.t('valid')}: ${DateUtil.displayPeriod(publishDate, expireDate, true)}`
    if (showDates) return <Text style={styles.date}>{text}</Text>
  }

  getDisabled = () => this.props.item.link.length === 0

  getText = () => this.props.item.adtype === 'sponsored' ? I18n.t('sponsored') : I18n.t('announcement')

  render () {
    const {advertiser, desc, picture, title} = this.props.item

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.open} disabled={this.getDisabled()}>
          <Image source={{uri: picture}} style={styles.image} />
          <Text style={styles.imageBadge}>{advertiser}</Text>
          <View style={styles.textContainer}>
            <Text style={styles.adHeader}>{this.getText()}</Text>
            <Text style={styles.title}>{title}</Text>
            { this.dateDisplay() }
            <Text style={styles.description} numberOfLines={3}>{desc}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
