import { Dimensions } from 'react-native'
import { SUB_CATEGORIES } from './CategoryTypes'
import CategoryIcon from '../Components/CategoryIcon'
import { Colors } from '../Themes'
import { SUB_CATEGORY_ACCESSIBLE } from './Constants'
import React from 'react'

const { width } = Dimensions.get('window')
const size = width > 330 ? 18 : 16
const margin = size === 18 ? 8 : 6

export default class IconUtil {
  static renderSubCategoryIcons = (subcats) => {
    if (subcats && Array.isArray(subcats)) {
      /* Render all event subcategories */
      const subcategories = subcats.map((subcat, index) => {
        /* Find the given subcategory */
        let subcategory = SUB_CATEGORIES.find(constant => subcat === constant.type)
        /* Accessible icon must be given larger size */
        const iconSize = subcategory.type === SUB_CATEGORY_ACCESSIBLE ? 24 : size
        return (
          <CategoryIcon
            icon={subcategory.icon}
            color={Colors.white}
            size={iconSize}
            extraStyle={{ marginRight: margin }}
            key={index}
          />
        )
      })
      return subcategories
    }
    return null
  }
}
