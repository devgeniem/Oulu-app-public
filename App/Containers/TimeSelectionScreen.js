import React from 'react'
import { connect } from 'react-redux'
import { Text, FlatList, View } from 'react-native'
import UserActions from '../Redux/UserRedux'
import TimeSelectionHeader from '../Navigation/TimeSelectionHeader'
import I18n from 'react-native-i18n'
import styles from './Styles/TimeSelectionScreenStyles'
import TimeSelectionListItem from '../Components/TimeSelectionListItem'
import CustomButton from '../Components/CustomButton'
import { TIME_SELECTION_VALUES } from '../Transforms/TimeSelectionValues'
import { Colors } from '../Themes'
import ErrorMessage from '../Components/ErrorMessage'

class TimeSelectionScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <TimeSelectionHeader onBack={navigation.goBack} />
  })

  constructor (props) {
    super(props)
    this.state = { time: this.props.searchParameters.date }
  }

  selectItem = (text) => this.setState({ time: text })
  keyExtractor = (item, index) => index

  renderItem = ({item}) => {
    return (
      <TimeSelectionListItem
        item={item}
        onPress={this.selectItem}
        selected={item.param === this.state.time}
      />
    )
  }

  listSeparator = () => <View style={styles.separator} />

  saveChoice = () => {
    const { time } = this.state
    const searchParameters = this.props.searchParameters
    if (time && time !== searchParameters.date) {
      let newTime = null
      if (time === TIME_SELECTION_VALUES[0].param) newTime = TIME_SELECTION_VALUES[0].param
      else if (time === TIME_SELECTION_VALUES[1].param) newTime = TIME_SELECTION_VALUES[1].param
      else if (time === TIME_SELECTION_VALUES[2].param) newTime = TIME_SELECTION_VALUES[2].param
      else if (time === TIME_SELECTION_VALUES[3].param) newTime = TIME_SELECTION_VALUES[3].param
      const newParams = {
        cats: [...searchParameters.cats],
        subcats: [...searchParameters.subcats],
        date: newTime
      }
      this.props.updateSearch(newParams)
    }
  }

  renderError = () => {
    const { error, clearError } = this.props
    if (error) return <ErrorMessage text={I18n.t('selectionError')} onPress={clearError} />
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{I18n.t('interestedIn')}</Text>
        <FlatList
          data={TIME_SELECTION_VALUES}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          extraData={this.state}
          ItemSeparatorComponent={this.listSeparator}
        />
        <CustomButton
          text={I18n.t('save')}
          onPress={this.saveChoice}
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          iosUnderlayColor={Colors.locationHeaderUnderlay}
          loading={this.props.fetching}
          upperCase
        />
        { this.renderError() }
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeSelectionScreen)
