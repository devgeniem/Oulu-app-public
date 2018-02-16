import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes'

const { width } = Dimensions.get('window')

const fontSize = width > 375 ? 14 : 12

export default StyleSheet.create({
  mainContainer: {
    marginTop: 10
  },
  description: {
    marginTop: 10,
    color: Colors.baseFontColor,
    fontSize: fontSize,
    fontFamily: Fonts.type.medium,
    marginBottom: 20,
    lineHeight: 24
  },
  boldDescription: {
    color: Colors.baseFontColor,
    fontSize: fontSize,
    fontFamily: Fonts.type.heavy,
    marginVertical: 5
  },
  container: {
    paddingHorizontal: 25,
    paddingVertical: 5
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 15
  }
})
