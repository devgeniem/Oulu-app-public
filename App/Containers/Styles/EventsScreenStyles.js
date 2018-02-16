import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  imageFooter: {
    width: '100%',
    height: 20
  },
  list: {
    paddingTop: Platform.OS === 'android' ? 150 : 0
  },
  loading: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: (height / 2)
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: (height - 230)
  },
  listEmptyTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.errorMessageBackground,
    width: '90%'
  },
  listEmptyText: {
    fontSize: 11,
    color: Colors.baseFontColor,
    fontFamily: Fonts.type.medium,
    padding: 25,
    textAlign: 'center'
  }
})
