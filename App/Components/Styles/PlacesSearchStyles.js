import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes'

const { width } = Dimensions.get('window')
const containerWidth = width - 80

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 75,
    left: 10,
    zIndex: 2,
    shadowRadius: 0,
    padding: 0,
    backgroundColor: Colors.transparent,
    width: containerWidth
  },
  textInput: {
    fontFamily: Fonts.type.base,
    fontSize: 11,
    zIndex: 2,
    marginBottom: 5
  },
  textInputContainer: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.eventTypeHeader,
    borderLeftWidth: 1,
    borderLeftColor: Colors.eventTypeHeader,
    borderTopWidth: 1,
    borderTopColor: Colors.eventTypeHeader,
    borderRightWidth: 1,
    borderRightColor: Colors.eventTypeHeader,
    borderRadius: 10,
    height: 50,
    alignItems: 'center'
  },
  listView: {
    backgroundColor: Colors.white,
    borderColor: Colors.eventTypeHeader,
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
  }
})
