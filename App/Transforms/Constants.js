import I18n from 'react-native-i18n'

export const PAGE_SIZE = 50

export const EVENT_MUSIC = 'musiikki'
export const EVENT_CULTURE = 'kulttuuri'
export const EVENT_SPORTS = 'urheilu'

export const EVENT_MUSIC_ICON = 'note'
export const EVENT_SPORT_ICON = 'baseball'
export const EVENT_CULTURE_ICON = 'mask'

export const EVENT_MUSIC_DESC = I18n.t('mainCatExplanation0')
export const EVENT_SPORTS_DESC = I18n.t('mainCatExplanation1')
export const EVENT_CULTURE_DESC = I18n.t('mainCatExplanation2')

export const SUB_CATEGORY_ACCESSIBLE = 'esteeton'
export const SUB_CATEGORY_ALCOHOL = 'anniskelu'
export const SUB_CATEGORY_FAMILY = 'perheille'
export const SUB_CATEGORY_OPENAIR = 'ulkona'
export const SUB_CATEGORY_FREE = 'ilmainen'
export const SUB_CATEGORY_AGELIMITLESS = 'ikarajaton'

export const SUB_CATEGORY_ACCESSIBLE_ICON = 'accessibility'
export const SUB_CATEGORY_ALCOHOL_ICON = 'drink'
export const SUB_CATEGORY_FAMILY_ICON = 'love_bird'
export const SUB_CATEGORY_OPENAIR_ICON = 'sun_field_cloud'
export const SUB_CATEGORY_FREE_ICON = 'emoticons_money'
export const SUB_CATEGORY_AGELIMITLESS_ICON = 'open_door'

export const SUB_CATEGORY_ACCESSIBLE_DESC = I18n.t('subCatExplanation0')
export const SUB_CATEGORY_ALCOHOL_DESC = I18n.t('subCatExplanation1')
export const SUB_CATEGORY_FAMILY_DESC = I18n.t('subCatExplanation2')
export const SUB_CATEGORY_OPENAIR_DESC = I18n.t('subCatExplanation3')
export const SUB_CATEGORY_FREE_DESC = I18n.t('subCatExplanation4')
export const SUB_CATEGORY_AGELIMITLESS_DESC = I18n.t('subCatExplanation5')

export const TIME_SELECTION_WHENEVER = I18n.t('whenever')
export const TIME_SELECTION_TODAY = I18n.t('today')
export const TIME_SELECTION_TOMORROW = I18n.t('tomorrow')
export const TIME_SELECTION_THISWEEK = I18n.t('thisWeek')

export const TIME_SELECTION_WHENEVER_PARAM = 'anytime'
export const TIME_SELECTION_TODAY_PARAM = 'today'
export const TIME_SELECTION_TOMORROW_PARAM = 'tomorrow'
export const TIME_SELECTION_THISWEEK_PARAM = 'week'

export const TOKEN = {
  default: 'no_token_found',
  empty: '',
  token: 'token'
}

export const MAP_STYLE = [
  {
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#f5f5f5'
      }
    ]
  },
  {
    'elementType': 'labels.icon',
    'stylers': [
      {
        'visibility': 'off'
      }
    ]
  },
  {
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#616161'
      }
    ]
  },
  {
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'color': '#f5f5f5'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#eeeeee'
      }
    ]
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#e5e5e5'
      }
    ]
  },
  {
    'featureType': 'road',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#ffffff'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#757575'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#dadada'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#616161'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry.stroke',
    'stylers': [
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#9e9e9e'
      },
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'labels.text.stroke',
    'stylers': [
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'transit.line',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#e5e5e5'
      }
    ]
  },
  {
    'featureType': 'transit.station',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#eeeeee'
      }
    ]
  },
  {
    'featureType': 'water',
    'stylers': [
      {
        'color': '#8b8c69'
      },
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [
      {
        'color': '#c9c9c9'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry.fill',
    'stylers': [
      {
        'color': '#484db0'
      },
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'labels.text.fill',
    'stylers': [
      {
        'color': '#ffffff'
      }
    ]
  }
]
