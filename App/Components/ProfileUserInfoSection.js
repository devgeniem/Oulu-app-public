import React from 'react'
import { View } from 'react-native'
import styles from './Styles/ProfileUserInfoSectionStyles'
import Divider from './Divider'
import I18n from 'react-native-i18n'
import Icon from './Icon'
import { Colors } from '../Themes'
import TextWithLabel from './TextWithLabel'

export default class ProfileUserInfoSection extends React.PureComponent {
  render () {
    const { email, username } = this.props

    if (username) {
      return (
        <View style={styles.container}>
          <View style={styles.pictureContainer}>
            <View style={styles.iconContainer}>
              <Icon name='photo' size={24} color={Colors.white} />
            </View>
          </View>
          <View style={styles.textContainer}>
            <TextWithLabel text={username} label={I18n.t('username')} />
            <Divider />
            <TextWithLabel text={email} label={I18n.t('email')} />
            <Divider />
          </View>
        </View>
      )
    } else {
      return null
    }
  }
}
