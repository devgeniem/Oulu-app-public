import React from 'react'
import { View } from 'react-native'
import Subheader from '../Subheader'
import I18n from 'react-native-i18n'
import CreateEventTextInput from './CreateEventTextInput'
import styles from './Styles/CreateEventStyles'

export default class DescriptionSection extends React.PureComponent {
  render () {
    let subheader = (I18n.t('eventDesc') + '*')

    return (
      <View>
        <Subheader text={subheader} />
        <CreateEventTextInput
          {...this.props}
          multiline
          returnKey='next'
          extraStyle={styles.multilineBox}
        />
      </View>
    )
  }
}
