import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  title: {
    color: Colors.pinkFontColor,
    fontSize: 12,
    fontFamily: Fonts.type.base,
    fontWeight: '500',
    marginBottom: 30,
    alignSelf: 'center'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
})
