import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import UserActions from '../Redux/UserRedux'
import EventTypesHeader from '../Navigation/EventTypesHeader'
import I18n from 'react-native-i18n'
import styles from './Styles/EventTypesSelectionScreenStyles'
import ToggleButton from '../Components/ToggleButton'
import { SUB_CATEGORIES, MAIN_CATEGORIES } from '../Transforms/CategoryTypes'
import CategoryTypes from '../Components/CategoryTypes'
import CustomButton from '../Components/CustomButton'
import { Colors } from '../Themes'
import ErrorMessage from '../Components/ErrorMessage'

class EventTypesSelectionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <EventTypesHeader onBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = {
      categories: this.props.searchParameters.cats,
      subcategories: this.props.searchParameters.subcats
    }
  }

  toggleCategoryChoice = (category) => {
    const { categories } = this.state
    if (categories.includes(category)) {
      const cats = categories.filter(cat => cat !== category)
      return this.setState({ categories: cats })
    }
    return this.setState({ categories: [...categories, category] })
  }

  toggleSubcategoryChoice = (subcategory) => {
    const { subcategories } = this.state
    if (subcategories.includes(subcategory)) {
      const subcats = subcategories.filter(cat => cat !== subcategory)
      return this.setState({ subcategories: subcats })
    }
    return this.setState({ subcategories: [...subcategories, subcategory] })
  }

  saveChoices = () => {
    const { categories, subcategories } = this.state
    const { date } = this.props.searchParameters
    const newParams = { date, cats: [...categories], subcats: [...subcategories] }
    this.props.updateSearch(newParams)
  }

  mainCategories = () => MAIN_CATEGORIES.map((mainCategory, index) => {
    return (
      <ToggleButton
        text={mainCategory.desc}
        type={mainCategory.type}
        iconName={mainCategory.icon}
        key={index}
        onPress={this.toggleCategoryChoice}
        toggleColor={mainCategory.color}
        toggled={this.state.categories.includes(mainCategory.type)}
      />
    )
  })

  subCategories = () => SUB_CATEGORIES.map((subCategory, index) => {
    return (
      <ToggleButton
        text={subCategory.desc}
        type={subCategory.type}
        iconName={subCategory.icon}
        key={index}
        onPress={this.toggleSubcategoryChoice}
        toggleColor={subCategory.color}
        toggled={this.state.subcategories.includes(subCategory.type)}
      />
    )
  })

  renderError = () => {
    const { error, clearError } = this.props
    if (error) return <ErrorMessage text={I18n.t('selectionError')} onPress={clearError} />
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
        <CategoryTypes title={I18n.t('interested')} categories={this.mainCategories()} />
        <CategoryTypes title={I18n.t('wish')} categories={this.subCategories()} />
        <CustomButton
          text={I18n.t('save')}
          onPress={this.saveChoices}
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          iosUnderlayColor={Colors.locationHeaderUnderlay}
          loading={this.props.fetching}
          upperCase
        />
        { this.renderError() }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.user.fetching,
    searchParameters: state.user.searchParameters,
    error: state.user.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (searchParameters) => dispatch(UserActions.updateSearch(searchParameters)),
    clearError: () => dispatch(UserActions.clearError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventTypesSelectionScreen)
