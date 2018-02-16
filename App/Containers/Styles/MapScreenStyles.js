import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Themes'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1
  },
  backdropExtraStyles: {
    top: 0
  },
  searchInputExtraStyles: {
    elevation: 1,
    position: 'absolute',
    top: 15,
    left: 15,
    width: '75%'
  },
  leftButton: {
    marginLeft: 15
  },
  loading: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: (height / 2),
    backgroundColor: Colors.transparent
  },
  iconContainer: {
    width: '100%',
    position: 'absolute',
    backgroundColor: Colors.transparent,
    padding: 20,
    height: 150,
    overflow: 'hidden'
  }
})
