import {
  EVENT_MUSIC,
  EVENT_CULTURE,
  EVENT_SPORTS,
  SUB_CATEGORY_FREE,
  EVENT_MUSIC_ICON,
  EVENT_SPORT_ICON,
  EVENT_CULTURE_ICON,
  SUB_CATEGORY_FREE_ICON,
  SUB_CATEGORY_FREE_DESC,
  EVENT_MUSIC_DESC,
  EVENT_CULTURE_DESC,
  EVENT_SPORTS_DESC
} from './Constants'
import Colors from '../Themes/Colors'

export const MAIN_CATEGORIES = [
  {type: EVENT_MUSIC, icon: EVENT_MUSIC_ICON, desc: EVENT_MUSIC_DESC, color: Colors.music},
  {type: EVENT_SPORTS, icon: EVENT_SPORT_ICON, desc: EVENT_SPORTS_DESC, color: Colors.sports},
  {type: EVENT_CULTURE, icon: EVENT_CULTURE_ICON, desc: EVENT_CULTURE_DESC, color: Colors.culture}
]

export const SUB_CATEGORIES = [
  {type: SUB_CATEGORY_FREE, icon: SUB_CATEGORY_FREE_ICON, desc: SUB_CATEGORY_FREE_DESC, color: Colors.baseFontColor}
]
