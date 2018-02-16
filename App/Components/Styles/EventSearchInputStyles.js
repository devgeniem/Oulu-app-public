import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 70
  },
  input: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderColor: Colors.eventTypeHeader,
    borderWidth: 1,
    fontFamily: Fonts.type.base,
    paddingLeft: 45,
    height: 50,
    fontSize: 12
  },
  searchIcon: {
    position: 'absolute',
    left: 15,
    elevation: 1,
    zIndex: 2,
    backgroundColor: Colors.transparent
  }
})
