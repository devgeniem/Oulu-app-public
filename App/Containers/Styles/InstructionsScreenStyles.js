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
  tableContainer: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: Colors.instructionText,
    marginBottom: 24,
    marginTop: 8
  },
  row: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    padding: 6,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.instructionText
  },
  headerColumn: {
    flex: 1,
    flexDirection: 'column',
    padding: 6,
    backgroundColor: Colors.instructionText,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.instructionText
  },
  tableText: {
    color: Colors.instructionText,
    fontFamily: Fonts.type.base,
    fontSize: 13
  },
  tableHeaderText: {
    color: Colors.white,
    fontFamily: Fonts.type.base,
    fontSize: 13
  }
})
