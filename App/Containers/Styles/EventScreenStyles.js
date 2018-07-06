import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  image: {
    height: 250,
    width: '100%'
  },
  noImage: {
    height: 250,
    backgroundColor: Colors.errorMessageBackground
  },
  imageFooter: {
    width: '100%',
    height: 20,
    marginTop: 15
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.eventNameBackground
  },
  titleContainer: {
    width: '100%',
    marginBottom: 15
  },
  container: {
    backgroundColor: Colors.white
  }
})
