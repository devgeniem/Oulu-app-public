import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  centered: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center'
  },
  labelText: {
    color: Colors.baseFontColor,
    fontSize: 14,
    fontFamily: Fonts.type.base,
    marginBottom: 8
  },
  textInput: {
    width: '65%',
    height: 40,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 0,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.lightBrown,
    fontFamily: Fonts.type.base,
    color: Colors.darkerFontColor,
    fontSize: 14
  }
})
