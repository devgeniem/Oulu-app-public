import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: '100%'
  },
  header: {
    color: Colors.navItemText,
    fontFamily: Fonts.type.medium,
    fontSize: 14
  },
  text: {
    color: Colors.navItemText,
    fontFamily: Fonts.type.medium,
    fontSize: 12,
    width: '80%'
  },
  checkBox: {
    borderWidth: 1,
    borderColor: Colors.pinkButton,
    borderRadius: 0,
    height: 26,
    width: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  pushContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
})
