import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.translations = {
  fi: require('./languages/fi.json')
}

I18n.defaultLocale = 'fi'

let languageCode = I18n.locale.substr(0, 2)

switch (languageCode) {
  case 'fi':
    I18n.translations.fi = require('./languages/fi.json')
    break
}
