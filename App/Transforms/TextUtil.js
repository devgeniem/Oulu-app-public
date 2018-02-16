export default class TextUtil {
  static capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase().concat(text.slice(1).toLowerCase())
}
