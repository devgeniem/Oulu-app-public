import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Themes'

const { width, height } = Dimensions.get('window')

const imgHeight = width > 330 ? height / 2.8 : height / 3
const bottom = width > 330 ? 0 : -20

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 50,
    alignItems: 'center'
  },
  topRow: {
    width: '75%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  row: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  separator: {
    alignSelf: 'center',
    width: 65,
    height: 1,
    backgroundColor: Colors.lightBrown,
    marginVertical: 50
  },
  image: {
    position: 'absolute',
    bottom: bottom,
    width: width,
    height: imgHeight
  }
})
