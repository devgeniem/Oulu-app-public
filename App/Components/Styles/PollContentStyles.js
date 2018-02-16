import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  content: {
    marginTop: 72,
    marginBottom: 53
  },
  endView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  endText: {
    fontFamily: Fonts.type.medium,
    color: Colors.pollQuestion,
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center'
  },
  buttonContainer: {
    marginVertical: 10,
    width: '66%',
    height: 53,
    borderRadius: 0
  },
  button: {
    width: '100%',
    height: 53,
    borderRadius: 0,
    backgroundColor: Colors.calloutBackground
  },
  image: {
    width: '100%',
    height: 200
  }
})
