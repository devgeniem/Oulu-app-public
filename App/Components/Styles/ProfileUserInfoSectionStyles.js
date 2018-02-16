import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 40
  },
  pictureContainer: {
    width: '40%'
  },
  textContainer: {
    width: '60%'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.inactive
  }
})
