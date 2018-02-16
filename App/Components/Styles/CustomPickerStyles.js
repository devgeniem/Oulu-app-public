import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: Colors.inactive
  },
  list: {
    padding: 30,
    margin: 30
  },
  blankInput: {
    fontFamily: Fonts.type.base,
    fontSize: 12,
    color: Colors.createEventGrey,
    paddingBottom: 5
  },
  blankInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.textboxBorder,
    width: '100%',
    height: 40,
    justifyContent: 'flex-end'
  },
  buttonContainer: {
    marginBottom: 30
  },
  button: {
    width: 173,
    height: 40,
    borderRadius: 7,
    backgroundColor: Colors.addEventButton
  },
  modalContent: {
    backgroundColor: Colors.white,
    flex: 1
  }
})
