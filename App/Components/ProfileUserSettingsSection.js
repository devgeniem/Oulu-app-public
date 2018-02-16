import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from './Styles/ProfileUserSettingsSectionStyles'
import Divider from './Divider'
import I18n from 'react-native-i18n'
import Colors from '../Themes/Colors'
import Checkbox from './Checkbox'

export default class ProfileUserSettingsSection extends React.PureComponent {
  onClick = () => this.props.onClick({allowNotifications: !this.props.allowNotifications})

  renderCheckbox = () => {
    const { updating, allowNotifications } = this.props
    if (updating) return <ActivityIndicator size='large' color={Colors.pinkButton} />
    return (
      <Checkbox
        onChange={this.onClick}
        checked={allowNotifications}
        checkColor={Colors.pinkButton}
        style={styles.checkBox}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{I18n.t('pushNotifications_header')}</Text>
        <Divider />
        <View style={styles.pushContainer}>
          <Text style={styles.text}>{I18n.t('pushNotifications')}</Text>
          { this.renderCheckbox() }
        </View>
      </View>
    )
  }
}
