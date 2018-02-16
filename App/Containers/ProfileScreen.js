import React from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import BackHeader from '../Navigation/BackHeader'
import styles from './Styles/ProfileScreenStyles'
import ProfileUserInfoSection from '../Components/ProfileUserInfoSection'
import ProfileStatisticsSection from '../Components/ProfileStatisticsSection'
import ProfileUserSettingsSection from '../Components/ProfileUserSettingsSection'
import UserActions from '../Redux/UserRedux'
import PollActions from '../Redux/PollRedux'
import ErrorMessage from '../Components/ErrorMessage'

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader title={I18n.t('profile_header')} back={navigation.goBack} />
  })

  componentWillMount () {
    this.props.getPollCount()
  }

  deleteStats = () => this.props.deleteStats()

  onClick = (allowNotifications) => this.props.updateUser(allowNotifications)

  renderUpdateError = () => {
    const { updateUserError, resetUpdateUserError } = this.props
    if (updateUserError) return <ErrorMessage text={I18n.t('updateUserError')} onPress={resetUpdateUserError} />
  }

  renderDeleteError = () => {
    const { deleteError, resetDeleteStatisticsError } = this.props
    if (deleteError) return <ErrorMessage text={I18n.t('deleteError')} onPress={resetDeleteStatisticsError} />
  }

  render () {
    const { email, username, allowNotifications } = this.props.user
    const { pollCount, updating, deleting } = this.props

    return (
      <ScrollView style={styles.container}>
        <ProfileUserInfoSection username={username} email={email} />
        <ProfileStatisticsSection
          pollCount={pollCount}
          onDelete={this.deleteStats}
          deleting={deleting}
        />
        <ProfileUserSettingsSection
          onClick={this.onClick}
          updating={updating}
          allowNotifications={allowNotifications}
        />
        { this.renderUpdateError() }
        { this.renderDeleteError() }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    deleting: state.user.deletingStatistics,
    updating: state.user.updatingUser,
    pollCount: state.poll.pollCount,
    updateUserError: state.user.updateUserError,
    deleteError: state.user.deleteError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStats: () => dispatch(UserActions.deleteStatistics()),
    getPollCount: () => dispatch(PollActions.getPollCount()),
    updateUser: (updated) => dispatch(UserActions.updateUser(updated)),
    resetUpdateUserError: () => dispatch(UserActions.resetUpdateUserError()),
    resetDeleteStatisticsError: () => dispatch(UserActions.resetDeleteStatisticsError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
