import { StackNavigator } from 'react-navigation'
import EventsScreen from '../Containers/EventsScreen'
import EventScreen from '../Containers/EventScreen'
import MenuScreen from '../Containers/MenuScreen'
import TimeSelectionScreen from '../Containers/TimeSelectionScreen'
import EventTypesSelectionScreen from '../Containers/EventTypesSelectionScreen'
import LoginScreen from '../Containers/LoginScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import MapScreen from '../Containers/MapScreen'
import CreateEventScreen from '../Containers/CreateEventScreen'
import PollsScreen from '../Containers/PollsScreen'
import PollScreen from '../Containers/PollScreen'
import InstructionsScreen from '../Containers/InstructionsScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  EventsScreen: { screen: EventsScreen },
  EventScreen: { screen: EventScreen },
  MenuScreen: { screen: MenuScreen },
  TimeSelectionScreen: { screen: TimeSelectionScreen },
  EventTypesSelectionScreen: { screen: EventTypesSelectionScreen },
  CreateEventScreen: { screen: CreateEventScreen },
  LoginScreen: { screen: LoginScreen },
  ProfileScreen: { screen: ProfileScreen },
  MapScreen: { screen: MapScreen },
  PollsScreen: { screen: PollsScreen },
  PollScreen: { screen: PollScreen },
  InstructionsScreen: { screen: InstructionsScreen }
}, {
  // Default config for all screens
  initialRouteName: 'EventsScreen',
  navigationOptions: {
    gesturesEnabled: false
  }
})

export default PrimaryNav
