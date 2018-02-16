import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: Colors.white,
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: 12,
    fontWeight: '600'
  },
  eventButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 10
  },
  leftIcon: {
    position: 'absolute',
    left: 15
  },
  rightIcon: {
    position: 'absolute',
    right: 15
  },
  eventButtonText: {
    fontFamily: Fonts.type.medium,
    fontSize: 13,
    textAlign: 'left'
  }
})
