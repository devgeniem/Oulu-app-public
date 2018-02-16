import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: Colors.white,
    flex: 1
  },
  title: {
    fontFamily: Fonts.type.base,
    color: Colors.pinkFontColor,
    fontWeight: '500',
    marginBottom: 25
  },
  btnContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
    height: 40,
    width: 170,
    borderRadius: 10
  },
  btn: {
    width: 170,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.locationHeader
  },
  separator: {
    height: 1,
    backgroundColor: Colors.timeHeader,
    opacity: 0.2
  }
})
