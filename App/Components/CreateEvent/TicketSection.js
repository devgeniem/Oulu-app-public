import React from 'react'
import { View, Text } from 'react-native'
import Subheader from '../Subheader'
import I18n from 'react-native-i18n'
import CreateEventTextInput from './CreateEventTextInput'
import styles from './Styles/CreateEventStyles'

export default class TicketSection extends React.PureComponent {
  render () {
    const { onChangeBasePrice, basePrice } = this.props

    return (
      <View>
        <Subheader text={I18n.t('tickets')} />
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.subheader}>{I18n.t('basePrice')}</Text>
            <CreateEventTextInput
              {...this.props}
              onChangeText={onChangeBasePrice}
              value={basePrice}
              keyboardType='numeric'
              returnKey='next'
            />
          </View>
        </View>
        <Text style={styles.subheader}>{I18n.t('ticketWho')}</Text>
        <CreateEventTextInput
          {...this.props}
          multiline
          numberOfLines={6}
          extraStyle={styles.multilineBox}
        />
      </View>
    )
  }
}
