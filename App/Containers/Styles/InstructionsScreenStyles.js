import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20
  },
  contentContainer: {
    paddingBottom: 40
  },
  header: {
    color: Colors.instructionText,
    fontFamily: Fonts.type.medium,
    fontSize: 18
  },
  text: {
    color: Colors.instructionText,
    fontFamily: Fonts.type.base,
    fontSize: 13,
    marginVertical: 15
  }
})
