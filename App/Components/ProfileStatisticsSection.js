import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/ProfileStatisticsSectionStyles'
import Divider from './Divider'
import I18n from 'react-native-i18n'
import CustomButton from './CustomButton'

export default class ProfileStatisticsSection extends React.PureComponent {
  deleteStats = () => this.props.onDelete()

  render () {
    const { pollCount, deleting } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.header}>{I18n.t('yourStats')}</Text>
        <Divider />
        <Text style={styles.text}>{I18n.t('answeredPolls')}: {pollCount}</Text>
        <CustomButton
          text={I18n.t('delStats')}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          upperCase
          onPress={this.deleteStats}
          loading={deleting}
          disabled={deleting}
        />
      </View>
    )
  }
}
