import React from 'react'
import { connect } from 'react-redux'
import Poll from '../Components/Poll'
import PollActions from '../Redux/PollRedux'

class PollScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  submit = (poll) => this.props.submitPoll(poll)

  componentWillMount () {
    this.props.isPollFinished(this.props.selectedPoll.id)
  }

  render () {
    const { title, poll, id, link, image } = this.props.selectedPoll
    const { navigation, submitting, userId, finished, submitted, submitError, clearSubmitError } = this.props

    return (
      <Poll
        title={title}
        id={id}
        userId={userId}
        poll={poll}
        navigation={navigation}
        onSubmit={this.submit}
        submitting={submitting}
        isFinished={finished}
        submitted={submitted}
        video={link}
        image={image}
        submitError={submitError}
        onErrorPress={clearSubmitError}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPoll: state.poll.selectedPoll,
    submitting: state.poll.submitting,
    userId: state.user.user.id,
    finished: state.poll.selectedPollFinished,
    submitted: state.poll.pollSubmitted,
    submitError: state.poll.submitError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitPoll: (poll) => dispatch(PollActions.submitPoll(poll)),
    isPollFinished: (id) => dispatch(PollActions.isPollFinished(id)),
    clearSubmitError: () => dispatch(PollActions.resetSubmitPollError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollScreen)
