import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  title: {
    fontFamily: Fonts.type.medium,
    fontSize: 18,
    color: Colors.pollQuestion,
    alignSelf: 'center',
    marginVertical: 30
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginVertical: 10,
    width: '66%',
    minHeight: 40,
    borderRadius: 7,
    backgroundColor: Colors.calloutBackground
  },
  button: {
    width: '100%',
    minHeight: 40,
    borderRadius: 7,
    backgroundColor: Colors.calloutBackground,
    padding: 5
  },
  selectedStyle: {
    backgroundColor: Colors.pollButton
  }
})
