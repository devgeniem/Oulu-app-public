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
  imageBackground: {
    height: 48,
    borderRadius: 8,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  container: {
    height: 48,
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  buttonIcon: {
    position: 'absolute',
    left: 15,
    backgroundColor: Colors.transparent
  },
  iconContainer: {
    marginTop: -25
  }
})
