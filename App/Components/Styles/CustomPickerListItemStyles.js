import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    height: 50,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontFamily: Fonts.type.base,
    color: Colors.pinkFontColor
  },
  iconContainer: {
    position: 'absolute',
    right: 10
  }
})
