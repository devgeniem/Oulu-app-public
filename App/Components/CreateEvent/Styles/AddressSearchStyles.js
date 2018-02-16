import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../Themes'

export default StyleSheet.create({
  listView: {
    backgroundColor: Colors.white,
    borderColor: Colors.textboxBorder,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5
  },
  poweredContainer: {
    display: 'none'
  },
  description: {
    fontFamily: Fonts.type.base,
    fontSize: 12
  },
  container: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 0,
    margin: 0
  },
  textInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.textboxBorder,
    borderTopWidth: 0,
    height: 40,
    backgroundColor: Colors.white
  },
  textInput: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRadius: 0,
    fontFamily: Fonts.type.base,
    fontSize: 12,
    width: '100%',
    position: 'absolute',
    left: -15,
    bottom: 0
  }
})
