import React from 'react'
import { ScrollView, View, Text, Image, WebView } from 'react-native'
import styles from './Styles/PollContentStyles'
import PollMultiQuestion from './PollMultiQuestion'
import CustomButton from './CustomButton'
import I18n from 'react-native-i18n'
import Colors from '../Themes/Colors'

export default class PollContent extends React.PureComponent {
  toEventList = () => this.props.navigation.navigate('EventsScreen')
  toPollList = () => this.props.navigation.navigate('PollsScreen')

  onSelect = (index, key) => this.props.onSelect(index, key)

  renderQuestions = () => {
    if (this.props.poll) {
      return this.props.poll.map((question, index) => {
        switch (question.type) {
          case 'checkbox':
            return (
              <PollMultiQuestion
                key={index}
                values={question.data}
                title={question.title}
                onSelect={(key) => this.onSelect(index, key)}
              />
            )
          // Support for future in case of other types of questions
        }
      })
    }
  }

  renderImage = () => {
    if (this.props.image) return <Image source={{uri: this.props.image}} style={styles.image} />
    if (this.props.video) {
      let { video } = this.props
      let videoId = video.slice(video.lastIndexOf('=') + 1, video.length)
      return (
        <WebView
          style={styles.image}
          javaScriptEnabled
          domStorageEnabled
          source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        />
      )
    }
    return null
  }

  renderQuestionView = () => {
    return (
      <ScrollView style={styles.content}>
        { this.renderImage() }
        { this.renderQuestions() }
      </ScrollView>
    )
  }

  renderEndView = (submitted) => {
    let header

    if (submitted) {
      header = I18n.t('thanksForParticipation')
    } else {
      header = I18n.t('alreadyFilled')
    }

    return (
      <View style={styles.endView}>
        <Text style={styles.endText}>{header}</Text>
        <CustomButton
          text={I18n.t('morePolls')}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={this.toPollList}
          iosUnderlayColor={Colors.pollButtonUnderlay}
        />
        <CustomButton
          text={I18n.t('toEventList')}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={this.toEventList}
          iosUnderlayColor={Colors.pollButtonUnderlay}
        />
      </View>
    )
  }

  render () {
    const { submitted, isFinished } = this.props
    if (submitted || isFinished) {
      return this.renderEndView(submitted)
    } else {
      return this.renderQuestionView()
    }
  }
}
