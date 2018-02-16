import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    width: width,
    height: height
  }
})
