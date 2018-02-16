import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  header: {
    top: 0,
    left: 0,
    width: '100%',
    height: 72,
    position: 'absolute',
    backgroundColor: Colors.calloutBackground,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  headerText: {
    fontFamily: Fonts.type.medium,
    fontSize: 14,
    color: Colors.white,
    paddingHorizontal: 10,
    textAlign: 'center'
  }
})
