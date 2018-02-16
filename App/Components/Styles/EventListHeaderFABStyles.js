import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  backdrop: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 150,
    backgroundColor: Colors.fabBackground
  },
  textStyle: {
    color: Colors.white,
    fontWeight: '500',
    fontFamily: Fonts.type.base,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  textContainerStyle: {
    backgroundColor: Colors.baseFontColor,
    height: 30,
    borderRadius: 6,
    borderWidth: 0,
    marginTop: -5
  }
})
