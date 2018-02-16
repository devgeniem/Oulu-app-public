import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  headerText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.white,
    fontFamily: Fonts.type.base
  },
  headerContainer: {
    backgroundColor: Colors.baseFontColor,
    width: '100%',
    height: 40,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
