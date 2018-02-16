import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  text: {
    color: Colors.white,
    fontFamily: Fonts.type.base,
    fontSize: 12,
    letterSpacing: 0.31,
    textAlign: 'center',
    zIndex: 2
  },
  container: {
    backgroundColor: Colors.calloutBackground,
    paddingHorizontal: 12,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 3,
    width: 160
  }
})
