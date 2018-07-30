import React from 'react'
import { View, Text, Image, ScrollView, Linking, Platform } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/EventScreenStyles'
import DateUtil from '../Transforms/DateUtil'
import images from '../Themes/Images'
import I18n from 'react-native-i18n'
import Button from '../Components/Button'
import EventHeader from '../Navigation/EventHeader'
import DescriptionSection from '../Components/EventDescriptionSection'
import TicketSection from '../Components/EventTicketsSection'
import OrganiserSection from '../Components/EventOrganiserSection'
import PollSection from '../Components/EventPollSection'
import EventsActions from '../Redux/EventsRedux'
import PollActions from '../Redux/PollRedux'
import ErrorMessage from '../Components/ErrorMessage'

class EventScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <EventHeader onBack={navigation.goBack} />
  })

  openMap = () => {
    const {lat, long, title} = this.props.selectedEvent

    if (Platform.OS === 'ios') {
      return Linking.openURL(`http://maps.apple.com/?q=${title}&ll=${lat},${long}`)
    }
    return Linking.openURL(`http://maps.google.com/maps?q=${lat}N,${long}N+(${title})&ll=${lat},${long}`)
  }

  renderParticipationButton = () => {
    if (!this.props.selectedEvent.amiparticipating) {
      return (
        <Button
          text={I18n.t('eventButtonText')}
          iconName='peace'
          onPress={this.onPress}
        />
      )
    }
    return null
  }

  renderParticipationError = () => {
    const { participateError, resetParticipateError } = this.props
    if (participateError) return <ErrorMessage text={I18n.t('participateError')} onPress={resetParticipateError} />
  }

  renderPollSection = (polls) => {
    if (polls && polls.length) {
      return <PollSection title={I18n.t('eventPolls')} polls={polls} onPress={this.goToPoll} />
    }
    return null
  }

  onPress = () => this.props.participate(this.props.user.id, this.props.selectedEvent.id)

  goToPoll = (poll) => {
    this.props.selectPoll(poll)
    this.props.navigation.navigate('PollScreen')
  }

  renderTicketSection = (price) => price ? <TicketSection title={I18n.t('tickets')} price={price} /> : null

  renderPicture = () => {
    const { picture } = this.props.selectedEvent
    if (picture) {
      return <Image source={{uri: picture}} style={styles.image} />
    }
    return <View style={styles.noImage} />
  }

  render () {
    const {organiser, desc, title, startDate, endDate, place, price, subcats, polls} = this.props.selectedEvent
    const dateDisplay = DateUtil.displayPeriod(startDate, endDate)

    return (
      <ScrollView style={styles.container}>
        { this.renderPicture() }
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        { this.renderParticipationButton() }
        <Button
          text={I18n.t('mapButtonText')}
          iconName='map_route'
          onPress={this.openMap}
        />
        <DescriptionSection title={I18n.t('mmm')} desc={desc} dateDisplay={dateDisplay} place={place} subcats={subcats} />
        { this.renderTicketSection(price) }
        <OrganiserSection title={I18n.t('organiser')} organiser={organiser} />
        { this.renderPollSection(polls) }
        <Image source={images.eventFooter} style={styles.imageFooter} />
        { this.renderParticipationError() }
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEvent: state.events.selectedEvent,
    user: state.user.user,
    participateError: state.events.participateError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    participate: (userId, eventId) => dispatch(EventsActions.participate(userId, eventId)),
    selectPoll: (poll) => dispatch(PollActions.selectPoll(poll)),
    resetParticipateError: () => dispatch(EventsActions.resetParticipateError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventScreen)
