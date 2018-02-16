import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 20
  },
  contentContainer: {
    paddingBottom: 40
  },
  btnContainer: {
    marginTop: 20,
    alignSelf: 'center',
    height: 40,
    width: 170,
    borderRadius: 10
  },
  btn: {
    width: 170,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.locationHeader
  }
})
