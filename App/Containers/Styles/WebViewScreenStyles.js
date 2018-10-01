import { StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  loader: {
    marginTop: height / 3
  }
})
