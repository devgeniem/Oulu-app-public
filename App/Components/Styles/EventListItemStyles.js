import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Fonts } from '../../Themes'

const { width } = Dimensions.get('window')

const titleFontSize = width > 375 ? 24 : 18
const descriptionFontSize = width > 375 ? 14 : 12
const dateFontSize = width > 375 ? 18 : 13
const eventHeaderFontSize = width > 375 ? 14 : 12
const badgeFontSize = width > 375 ? 14 : 12
const likeCountFontSize = width > 375 ? 16 : 13

export default StyleSheet.create({
  image: {
    height: 200,
    width: '100%'
  },
  title: {
    color: Colors.baseFontColor,
    fontSize: titleFontSize,
    fontFamily: Fonts.type.medium
  },
  description: {
    marginTop: 10,
    color: Colors.baseFontColor,
    fontSize: descriptionFontSize,
    fontFamily: Fonts.type.medium,
    marginBottom: 15,
    lineHeight: 22
  },
  date: {
    marginTop: 10,
    color: Colors.baseFontColor,
    fontSize: dateFontSize,
    fontFamily: Fonts.type.medium
  },
  eventHeader: {
    fontSize: eventHeaderFontSize,
    fontFamily: Fonts.type.medium,
    marginVertical: 10
  },
  imageBadge: {
    position: 'absolute',
    top: 15,
    right: 0,
    paddingVertical: 8,
    paddingHorizontal: 20,
    color: Colors.white,
    fontSize: badgeFontSize,
    fontFamily: Fonts.type.medium
  },
  musicBadge: {
    backgroundColor: Colors.music
  },
  cultureBadge: {
    backgroundColor: Colors.culture
  },
  sportsBadge: {
    backgroundColor: Colors.sports
  },
  musicHeader: {
    color: Colors.music
  },
  cultureHeader: {
    color: Colors.culture
  },
  sportsHeader: {
    color: Colors.sports
  },
  likeIcon: {
    position: 'absolute',
    right: 0
  },
  eventIconsContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeCount: {
    position: 'absolute',
    right: 25,
    fontSize: likeCountFontSize,
    fontWeight: 'bold',
    color: Colors.eventTypeHeader,
    fontFamily: Fonts.type.medium,
    backgroundColor: Colors.transparent
  },
  container: {
    marginBottom: 15
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5
  }
})
