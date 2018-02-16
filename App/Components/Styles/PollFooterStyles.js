import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  footer: {
    bottom: 0,
    left: 0,
    width: '100%',
    height: 53,
    position: 'absolute',
    flexDirection: 'row'
  },
  buttonContainer: {
    width: '50%'
  },
  button: {
    width: '100%',
    height: '100%'
  },
  abortButton: {
    backgroundColor: Colors.calloutBackground,
    left: 0
  },
  nextButton: {
    backgroundColor: Colors.pollButton
  },
  disabledButton: {
    backgroundColor: Colors.pollButtonDisabled,
    opacity: 0.6
  },
  image: {
    width: '100%',
    height: 53,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
})
