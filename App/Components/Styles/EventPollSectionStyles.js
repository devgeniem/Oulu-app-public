import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginVertical: 10,
    width: '100%',
    borderRadius: 7,
    backgroundColor: Colors.pinkButton,
    flexDirection: 'row',
    minHeight: 40
  },
  button: {
    width: '100%',
    borderRadius: 7,
    backgroundColor: Colors.pinkButton,
    minHeight: 40
  }
})
