import React from 'react'
import { View } from 'react-native'
import PollHeader from './PollHeader'
import PollFooter from './PollFooter'
import PollContent from './PollContent'
import styles from './Styles/PollStyles'
import ErrorMessage from './ErrorMessage'
import I18n from 'react-native-i18n'

export default class Poll extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      pollAnswers: []
    }
  }

  select = (index, key) => {
    let { pollAnswers } = this.state
    pollAnswers[index] = key
    this.setState(pollAnswers)
  }

  submitDisabled = () => {
    if (this.props.poll) return this.state.pollAnswers.length !== this.props.poll.length || this.state.pollAnswers.includes(undefined)
  }

  submit = () => {
    let payload = {
      answers: this.state.pollAnswers,
      id: this.props.id
    }

    this.props.onSubmit(payload)
  }

  renderError = () => {
    const { submitError, onErrorPress } = this.props
    if (submitError) return <ErrorMessage text={I18n.t('pollSubmitError')} onPress={onErrorPress} />
  }

  render () {
    const { navigation, title, poll, submitting, isFinished, submitted, image, video } = this.props

    return (
      <View style={styles.container}>
        <PollHeader text={title} />
        <PollContent
          poll={poll}
          navigation={navigation}
          onSelect={this.select}
          isFinished={isFinished}
          submitted={submitted}
          image={image}
          video={video}
        />
        <PollFooter
          navigation={navigation}
          submitting={submitting}
          onSubmit={this.submit}
          submitDisabled={this.submitDisabled()}
          isFinished={isFinished}
          submitted={submitted}
        />
        { this.renderError() }
      </View>
    )
  }
}
