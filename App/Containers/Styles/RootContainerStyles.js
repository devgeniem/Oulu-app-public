import {StyleSheet} from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  statusBar: {
    height: 20,
    zIndex: 2,
    backgroundColor: Colors.black
  },
  extraStatusBar: {
    height: 24,
    zIndex: 2,
    backgroundColor: Colors.black
  }
})
