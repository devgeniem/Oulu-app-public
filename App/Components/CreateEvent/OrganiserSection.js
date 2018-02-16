import React from 'react'
import { View } from 'react-native'
import Subheader from '../Subheader'
import I18n from 'react-native-i18n'
import CreateEventTextInput from './CreateEventTextInput'

export default class OrganiserSection extends React.PureComponent {
  render () {
    let subheader = (I18n.t('organiser') + '*')

    return (
      <View>
        <Subheader text={subheader} />
        <CreateEventTextInput returnKey='done' {...this.props} />
      </View>
    )
  }
}
