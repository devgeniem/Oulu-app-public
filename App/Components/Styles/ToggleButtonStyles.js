import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes'

const { width } = Dimensions.get('window')

const buttonSize = width > 330 ? 60 : 50
const buttonRadius = width > 330 ? 30 : 25
const fontSize = width > 330 ? 12 : 10

export default StyleSheet.create({
  icon: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonRadius,
    backgroundColor: Colors.inactive,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.pinkFontColor,
    fontSize: fontSize,
    fontFamily: Fonts.type.base,
    marginTop: 5,
    textAlign: 'center'
  },
  container: {
    alignItems: 'center',
    width: '33%',
    marginBottom: 30
  }
})
