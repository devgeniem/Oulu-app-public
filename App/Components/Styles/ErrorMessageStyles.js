import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  text: {
    fontSize: 11,
    color: Colors.baseFontColor,
    fontFamily: Fonts.type.medium,
    padding: 25,
    textAlign: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingVertical: 50
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.errorMessageBackground,
    width: '90%'
  }
})
