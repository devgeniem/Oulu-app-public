import React from 'react'
import { Keyboard, Platform } from 'react-native'
import styles from './Styles/MapStyles'
import { MAIN_CATEGORIES } from '../Transforms/CategoryTypes'
import { MAP_STYLE } from '../Transforms/Constants'
import CustomCallout from './CustomCallout'
import Icon from './Icon'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class Map extends React.PureComponent {
  renderMarkers = (events) => {
    return events.map((event, index) => {
      const latLng = {latitude: event.lat, longitude: event.long}
      const category = MAIN_CATEGORIES.find(category => category.type === event.cat)
      const calloutOffset = {x: 1, y: 0.5} // Positioning might need some re-adjusting later

      return (
        <MapView.Marker
          pinColor={category.color}
          coordinate={latLng}
          key={index}
          calloutOffset={calloutOffset}
          calloutAnchor={calloutOffset}
          onCalloutPress={() => this.onCalloutPress(event)}
        >
          <Icon name='map-pin' size={36} color={category.color} />
          <MapView.Callout tooltip>
            <CustomCallout text={event.title} />
          </MapView.Callout>
        </MapView.Marker>
      )
    })
  }

  onCalloutPress = (event) => this.props.onCalloutPress(event)

  onPress = () => Keyboard.dismiss()

  render () {
    const { events, region } = this.props

    return (
      <MapView
        onPress={this.onPress}
        style={styles.map}
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : null}
        customMapStyle={MAP_STYLE}
        region={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
      >
        {this.renderMarkers(events)}
      </MapView>
    )
  }
}
