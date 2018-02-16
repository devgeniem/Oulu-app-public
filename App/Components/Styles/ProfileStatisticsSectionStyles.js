import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30
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
    marginBottom: 13,
    marginTop: 10
  },
  buttonContainer: {
    width: 173,
    height: 40,
    borderRadius: 7
  },
  button: {
    width: 173,
    height: 40,
    borderRadius: 7,
    backgroundColor: Colors.pinkButton
  }
})
