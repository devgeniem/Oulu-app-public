import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Themes'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    backgroundColor: Colors.white,
    height: 150,
    padding: 20,
    overflow: 'hidden'
  },
  image: {
    position: 'absolute',
    height: 190,
    width: width
  },
  iconContainer: {
    marginBottom: 20
  }
})
