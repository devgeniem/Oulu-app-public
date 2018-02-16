import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import MapHeader from '../Navigation/MapHeader'
import styles from './Styles/MapScreenStyles'
import { connect } from 'react-redux'
import Map from '../Components/Map'
import EventListHeaderFAB from '../Components/EventListHeaderFAB'
import PlacesSearch from '../Components/PlacesSearch'
import EventsActions from '../Redux/EventsRedux'
import Icon from '../Components/Icon'
import Colors from '../Themes/Colors'
import I18n from 'react-native-i18n'
import { GPAstyles } from '../Components/Styles/GooglePlacesAutocompleteStyles'
import FilterIcons from '../Components/FilterIcons'

class MapScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <MapHeader navigation={navigation} />
  })

  constructor (props) {
    super(props)

    this.state = {
      region: {
        latitude: 65.0080916,
        longitude: 25.4953595
      }
    }
  }

  changeRegion = (data, details) => this.setState({region: {latitude: details.geometry.location.lat, longitude: details.geometry.location.lng}})

  goToEvent = (event) => {
    this.props.selectEvent(event)
    this.props.navigation.navigate('EventScreen')
  }

  renderLoader = () => {
    if (this.props.fetching) {
      return <ActivityIndicator size='large' color={Colors.sports} style={styles.loading} />
    }
    return null
  }

  renderLeftButton = () => (
    <Icon
      name='search'
      color={Colors.eventTypeHeader}
      style={styles.leftButton}
      size={20}
    />
  )

  render () {
    const { events, user, searchParameters } = this.props

    return (
      <View style={styles.container}>
        <Map
          events={events}
          region={this.state.region}
          onCalloutPress={this.goToEvent}
        />
        <FilterIcons
          subcategories={searchParameters ? searchParameters.subcats : []}
          maincategories={searchParameters ? searchParameters.cats : []}
          containerExtraStyles={styles.iconContainer}
        />
        <PlacesSearch
          onPress={this.changeRegion}
          renderLeftButton={this.renderLeftButton}
          placeholder={I18n.t('wp')}
          underlineColorAndroid={Colors.transparent}
          styles={GPAstyles}
        />
        <EventListHeaderFAB
          navigation={this.props.navigation}
          offsetY={75}
          offsetX={10}
          backdropExtraStyles={styles.backdropExtraStyles}
          user={user}
        />
        { this.renderLoader() }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    user: state.user.user,
    searchParameters: state.user.searchParameters,
    fetching: state.events.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectEvent: (event) => dispatch(EventsActions.selectEvent(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
