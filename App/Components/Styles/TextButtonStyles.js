import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: Colors.white,
    fontSize: 12,
    fontFamily: Fonts.type.base,
    fontWeight: '600',
    backgroundColor: Colors.transparent
  },
  container: {
    width: 200,
    marginVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10
  },
  disabled: {
    backgroundColor: Colors.inactive
  }
})
