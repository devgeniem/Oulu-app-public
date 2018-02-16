import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes'

const { width } = Dimensions.get('window')

const size = width > 330 ? 36 : 34
const radius = width > 330 ? 18 : 17

export default StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: radius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.baseFontColor
  },
  count: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.white,
    fontFamily: Fonts.type.base
  }
})
