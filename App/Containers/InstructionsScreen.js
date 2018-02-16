import React from 'react'
import { ScrollView, Text } from 'react-native'
import I18n from 'react-native-i18n'
import BackHeader from '../Navigation/BackHeader'
import styles from './Styles/InstructionsScreenStyles'

export default class InstructionsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader title={I18n.t('instructions_header')} back={navigation.goBack} />
  })

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>{I18n.t('instructions_general')}</Text>
        <Text style={styles.text}>{I18n.t('instructions1')}</Text>
        <Text style={styles.text}>{I18n.t('instructions2')}</Text>
        <Text style={styles.text}>{I18n.t('instructions3')}</Text>
        <Text style={styles.header}>{I18n.t('instructions_logging_in')}</Text>
        <Text style={styles.text}>{I18n.t('instructions4')}</Text>
        <Text style={styles.text}>{I18n.t('instructions5')}</Text>
      </ScrollView>
    )
  }
}
