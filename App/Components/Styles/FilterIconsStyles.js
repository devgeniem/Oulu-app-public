import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  iconContainer: {
    flexDirection: 'row'
  },
  sportsIcon: {
    backgroundColor: Colors.sports,
    marginRight: 15
  },
  cultureIcon: {
    backgroundColor: Colors.culture,
    marginRight: 15
  },
  musicIcon: {
    backgroundColor: Colors.music,
    marginRight: 15
  },
  notSelectedIcon: {
    backgroundColor: Colors.inactive,
    marginRight: 15
  },
  count: {
    backgroundColor: Colors.baseFontColor
  }
})
