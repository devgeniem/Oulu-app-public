import React from 'react'
import { View } from 'react-native'
import Subheader from '../Subheader'
import I18n from 'react-native-i18n'
import PlacesSearch from '../PlacesSearch'
import { addressInputStyles } from '../Styles/GooglePlacesAutocompleteStyles'
import { Colors } from '../../Themes'

export default class AddressSection extends React.PureComponent {
  onPress = (data, details) => this.props.onPress(data, details)

  render () {
    let subheader = (I18n.t('address') + '*')

    return (
      <View>
        <Subheader text={subheader} />
        <PlacesSearch
          onPress={this.onPress}
          styles={addressInputStyles}
          placeholder={null}
          underlineColorAndroid={Colors.transparent}
        />
      </View>
    )
  }
}
