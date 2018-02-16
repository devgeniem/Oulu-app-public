import React from 'react'
import { FlatList, Image, View } from 'react-native'
import { connect } from 'react-redux'
import PollActions from '../Redux/PollRedux'
import I18n from 'react-native-i18n'
import BackHeader from '../Navigation/BackHeader'
import PollListItem from '../Components/PollListItem'
import TextUtil from '../Transforms/TextUtil'
import { Images } from '../Themes'
import styles from './Styles/PollsScreenStyles'
import ErrorMessage from '../Components/ErrorMessage'

class PollsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <BackHeader
        title={TextUtil.capitalizeFirstLetter(I18n.t('influence'))}
        back={navigation.goBack}
        bg={styles.headerBg}
      />
    )
  })

  componentDidMount () {
    this.props.fetchPolls()
  }

  open = (item) => {
    this.props.selectPoll(item)
    this.props.navigation.navigate('PollScreen')
  }

  renderError = () => {
    const { error, resetFetchPollsError } = this.props
    if (error) return <ErrorMessage text={I18n.t('pollFetchError')} onPress={resetFetchPollsError} />
  }

  /* Key to track each item */
  keyExtractor = (item, index) => index
  /* Component to render for each item */
  renderItem = ({item}) => <PollListItem item={item} onPress={this.open} />
  /* Render image between each item */
  listSeparator = () => <Image source={Images.eventFooter} style={styles.imageFooter} />
  /* Called on pull-to-refresh */
  onRefresh = () => this.props.refreshPolls()

  render () {
    const { polls, refreshing } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={polls}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.listSeparator}
          onRefresh={this.onRefresh}
          refreshing={refreshing}
        />
        { this.renderError() }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.poll.fetching,
    refreshing: state.poll.refreshing,
    polls: state.poll.polls,
    error: state.poll.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPolls: () => dispatch(PollActions.fetchPolls()),
    refreshPolls: () => dispatch(PollActions.refreshPolls()),
    selectPoll: (poll) => dispatch(PollActions.selectPoll(poll)),
    resetFetchPollsError: () => dispatch(PollActions.resetFetchPollsError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollsScreen)
