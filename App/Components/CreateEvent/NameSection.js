import React from 'react'
import { View } from 'react-native'
import Subheader from '../Subheader'
import I18n from 'react-native-i18n'
import CreateEventTextInput from './CreateEventTextInput'

export default class NameSection extends React.PureComponent {
  render () {
    let subheader = (I18n.t('eventName') + '*')

    return (
      <View>
        <Subheader text={subheader} />
        <CreateEventTextInput returnKey='next' {...this.props} />
      </View>
    )
  }
}
