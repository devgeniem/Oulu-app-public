import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Themes'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20
  },
  loader: {
    marginTop: height / 3
  },
  separator: {
    height: 1,
    backgroundColor: Colors.loginHeader,
    opacity: 0.2
  }
})
