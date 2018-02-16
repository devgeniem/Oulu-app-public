import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.navItem,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 12,
    color: Colors.navItemText,
    fontFamily: Fonts.type.base,
    marginTop: 8
  }
})
