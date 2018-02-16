import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Colors } from '../Themes'
import Config from 'react-native-config'

export default class PlacesSearch extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      styles: undefined
    }
  }

  query = {
    key: Config.GOOGLE_MAPS_API_KEY,
    language: 'fi',
    location: '65.0080916,25.4953595',
    radius: 20000,
    strictbounds: true
  }

  textInputProps = {
    selectionColor: Colors.eventTypeHeader,
    autoCorrect: false,
    keyboardType: 'default',
    autoCapitalize: 'none'
  }

  /**
   *  The purpose of changing the styles is to get rid of the list view border showing up
   *  before the list shows any results for locations. Border is set to transparent until
   *  there are results and the list expands
   */

  listViewStyle = {listView: {borderColor: Colors.transparent}}
  originalStyles = Object.assign({}, this.props.styles)
  modifiedStyles = Object.assign({}, this.originalStyles, this.listViewStyle)

  componentDidMount () {
    this.setModifiedStyle()
  }

  setModifiedStyle = () => this.setState({styles: this.modifiedStyles})
  setOriginalStyle = () => this.setState({styles: this.originalStyles})

  onPress = (data, details) => this.props.onPress(data, details)

  setListStyle = (height) => {
    if (height === 2 || height === 0) {
      this.setModifiedStyle()
    } else {
      this.setOriginalStyle()
    }
  }

  render () {
    const { styles } = this.state

    return (
      <GooglePlacesAutocomplete
        {...this.props}
        onLayout={(e) => this.setListStyle(e.nativeEvent.layout.height)}
        minLength={2}
        autoFocus={false}
        returnKeyType='default'
        fetchDetails
        currentLocation={false}
        query={this.query}
        onPress={this.onPress}
        enablePoweredByContainer={false}
        placeholderTextColor={Colors.inactive}
        textInputProps={this.textInputProps}
        styles={styles}
      />
    )
  }
}
