import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 45
  },
  header: {
    fontSize: 20,
    color: Colors.baseFontColor,
    fontFamily: Fonts.type.medium,
    padding: 20
  },
  organizerContainer: {
    position: 'absolute',
    top: 15,
    left: 0,
    height: 30,
    backgroundColor: Colors.pollHeader,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  type: {
    height: 30,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.sports
  },
  organizer: {
    fontSize: 14,
    fontFamily: Fonts.type.base,
    color: Colors.white,
    fontWeight: '500',
    marginLeft: 10
  }
})
