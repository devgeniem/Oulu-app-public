import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes'

const { width, height } = Dimensions.get('window')

const fontSize = width > 330 ? 14 : 12
const imgHeight = width > 330 ? height / 2.5 : height / 3

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 40,
    alignItems: 'center'
  },
  loginBtnContainer: {
    height: 50,
    borderRadius: 10
  },
  loginBtn: {
    width: 120,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.pinkButton
  },
  empty: {
    height: 20
  },
  error: {
    marginTop: -10,
    height: 30,
    fontFamily: Fonts.type.base,
    fontSize: fontSize,
    fontWeight: 'bold',
    color: Colors.pinkFontColor
  },
  imageContainer: {
    position: 'absolute',
    width: width,
    height: height - 70,
    justifyContent: 'flex-end'
  },
  image: {
    width: width,
    height: imgHeight
  }
})
