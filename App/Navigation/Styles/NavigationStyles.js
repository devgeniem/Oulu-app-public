import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  participantCount: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.white,
    fontFamily: Fonts.type.base,
    marginRight: 5
  },
  participantCountContainer: {
    flexDirection: 'row'
  },
  backButtonIcon: {
    paddingLeft: 6,
    paddingTop: 6,
    paddingBottom: 6
  },
  leftIcon: {
    position: 'absolute',
    left: 20
  },
  rightIcon: {
    position: 'absolute',
    right: 20
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 50
  },
  eventHeader: {
    backgroundColor: Colors.eventHeaderBackground,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  eventTypesHeader: {
    backgroundColor: Colors.eventTypeHeader
  },
  eventsHeader: {
    backgroundColor: Colors.pinkFontColor
  },
  timeSelectionHeader: {
    backgroundColor: Colors.timeHeader
  },
  locationHeader: {
    backgroundColor: Colors.locationHeader
  },
  loginHeader: {
    backgroundColor: Colors.loginHeader
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.white,
    fontFamily: Fonts.type.base
  }
})
