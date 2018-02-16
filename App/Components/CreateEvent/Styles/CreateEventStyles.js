import { StyleSheet, Platform } from 'react-native'
import { Colors, Fonts } from '../../../Themes'

const textInputPaddingBottom = Platform.OS === 'ios' ? 5 : 0

export default StyleSheet.create({
  textInput: {
    fontFamily: Fonts.type.base,
    fontSize: 12,
    color: Colors.createEventGrey,
    borderBottomWidth: 1,
    borderBottomColor: Colors.textboxBorder,
    margin: 0,
    paddingBottom: textInputPaddingBottom
  },
  warning: {
    fontFamily: Fonts.type.base,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.addEventButton,
    marginTop: 15
  },
  multilineBox: {
    borderRadius: 7,
    borderColor: Colors.textboxBorder,
    borderWidth: 1,
    height: 100,
    padding: 8,
    textAlignVertical: 'top',
    marginTop: 15
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  subheader: {
    fontFamily: Fonts.type.base,
    fontSize: 14,
    color: Colors.createEventGrey,
    marginTop: 20
  },
  innerContainer: {
    width: '48%'
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
    marginBottom: 30,
    marginTop: 15
  },
  button: {
    width: 173,
    height: 40,
    borderRadius: 7,
    backgroundColor: Colors.addEventButton
  },
  pictureView: {
    height: 250,
    width: '100%',
    backgroundColor: Colors.pictureBackground,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    paddingHorizontal: 30
  },
  pictureText: {
    fontFamily: Fonts.type.base,
    fontSize: 12,
    marginTop: 10,
    color: Colors.white
  },
  image: {
    width: '100%',
    height: '100%'
  },
  empty: {
    height: 34
  }
})
