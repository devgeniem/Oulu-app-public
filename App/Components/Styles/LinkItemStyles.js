import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkText: {
    marginLeft: 15,
    fontSize: 16,
    color: Colors.baseFontColor,
    fontFamily: Fonts.type.medium
  }
})
