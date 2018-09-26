import { StackNavigator } from 'react-navigation'
import EventsScreen from '../Containers/EventsScreen'
import EventScreen from '../Containers/EventScreen'
import MenuScreen from '../Containers/MenuScreen'
import TimeSelectionScreen from '../Containers/TimeSelectionScreen'
import EventTypesSelectionScreen from '../Containers/EventTypesSelectionScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import MapScreen from '../Containers/MapScreen'
import PollsScreen from '../Containers/PollsScreen'
import PollScreen from '../Containers/PollScreen'
import InstructionsScreen from '../Containers/InstructionsScreen'
import LinksScreen from '../Containers/LinksScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  EventsScreen: { screen: EventsScreen },
  EventScreen: { screen: EventScreen },
  MenuScreen: { screen: MenuScreen },
  TimeSelectionScreen: { screen: TimeSelectionScreen },
  EventTypesSelectionScreen: { screen: EventTypesSelectionScreen },
  ProfileScreen: { screen: ProfileScreen },
  MapScreen: { screen: MapScreen },
  PollsScreen: { screen: PollsScreen },
  PollScreen: { screen: PollScreen },
  InstructionsScreen: { screen: InstructionsScreen },
  LinksScreen: { screen: LinksScreen }
}, {
  // Default config for all screens
  initialRouteName: 'EventsScreen',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default PrimaryNav
