import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  image: {
    height: 200,
    width: '100%'
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontFamily: Fonts.type.base
  },
  description: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 20,
    fontFamily: Fonts.type.base,
    marginBottom: 15
  },
  date: {
    marginTop: 10,
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.type.base
  },
  adHeader: {
    fontSize: 14,
    fontFamily: Fonts.type.base,
    paddingVertical: 5,
    color: Colors.sponsoredRed
  },
  imageBadge: {
    position: 'absolute',
    top: 15,
    right: 0,
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: Colors.instructionText
  },
  container: {
    marginBottom: 0
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: Colors.instructionText
  }
})
