import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/CreateEventStyles'
import DescriptionSection from './DescriptionSection'
import NameSection from './NameSection'
import OrganiserSection from './OrganiserSection'
import TicketSection from './TicketSection'
import AddressSection from './AddressSection'
import DateTimeSection from './DateTimeSection'
import CategoriesSection from './CategoriesSection'
import PictureSection from './PictureSection'
import I18n from 'react-native-i18n'
import CustomButton from '../CustomButton'
import ErrorMessage from '../ErrorMessage'
import { MAIN_CATEGORIES, SUB_CATEGORIES } from '../../Transforms/CategoryTypes'

export default class CreateEventForm extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      eventName: undefined,
      eventOrganiser: undefined,
      eventDesc: undefined,
      ticketDesc: undefined,
      basePrice: undefined,
      place: undefined,
      location: undefined,
      startDate: undefined,
      startTime: undefined,
      endDate: undefined,
      endTime: undefined,
      mainCategory: [],
      subCategories: []
    }
  }

  name = (text) => this.setState({eventName: text})
  desc = (text) => this.setState({eventDesc: text})
  eventOrganiser = (text) => this.setState({eventOrganiser: text})
  mainCat = (array) => this.setState({mainCategory: array})
  subCats = (array) => this.setState({subCategories: array})
  location = (data, details) => this.setState({place: data.description, location: details.geometry.location})
  startDate = (date) => this.setState({startDate: date})
  endDate = (date) => this.setState({endDate: date})
  startTime = (time) => this.setState({startTime: time})
  endTime = (time) => this.setState({endTime: time})
  ticketDesc = (text) => this.setState({ticketDesc: text})
  basePrice = (text) => this.setState({basePrice: text})

  addEvent = () => {
    let now = new Date().getTime()
    let sDate = this.state.startDate
    let sTime = this.state.startTime
    let startDate

    if (sDate && sTime) {
      startDate = new Date(sDate.getFullYear(), sDate.getMonth(), sDate.getDate(), sTime.getHours(), sTime.getMinutes(), sTime.getSeconds()).getTime()
    } else {
      startDate = undefined
    }

    let eDate = this.state.endDate
    let eTime = this.state.endTime
    let endDate

    if (eDate && eTime) {
      endDate = new Date(eDate.getFullYear(), eDate.getMonth(), eDate.getDate(), eTime.getHours(), eTime.getMinutes(), eTime.getSeconds()).getTime()
    } else {
      endDate = undefined
    }

    let subCats = this.state.subCategories.map(subcat => subcat.type)

    let payload = {
      cat: this.state.mainCategory[0].type,
      content_type: 'event',
      createdAt: now,
      creator: this.props.userId,
      desc: this.state.eventDesc,
      endDate: endDate,
      lat: this.state.location.lat,
      long: this.state.location.lng,
      modifier: null,
      organiser: this.state.eventOrganiser,
      picture: this.props.imageUri,
      place: this.state.place,
      price: this.state.basePrice,
      startDate: startDate,
      status: 'published',
      subcats: subCats,
      title: this.state.eventName
    }

    this.props.onCreate(payload)
  }

  onPress = () => this.requiredFieldsFilled() ? this.addEvent() : this.setState({warningVisible: true})

  requiredFieldsFilled = () => {
    const { eventName, eventDesc, mainCategory, place, eventOrganiser, startDate, startTime, endTime, endDate } = this.state
    const { imageUri } = this.props
    return eventName && eventDesc && mainCategory.length && place && eventOrganiser && imageUri && startDate && startTime && endTime && endDate
  }

  renderWarning = () => {
    if (this.state.warningVisible) {
      return <Text style={styles.warning}>{I18n.t('createEventMissingAttributes')}</Text>
    }
    return <View style={styles.empty} />
  }

  renderCreateError = () => {
    const { createError, onErrorPress } = this.props
    if (createError) return <ErrorMessage text={I18n.t('createError')} onPress={onErrorPress} />
  }

  render () {
    const catSubheader = (I18n.t('eventType') + '*')
    const startSubheader = (I18n.t('eventStarts') + '*')
    const endSubheader = (I18n.t('eventEnds') + '*')
    const { uploading, uploadImage, imageUri, creating } = this.props
    const { eventName, eventDesc, mainCategory, subCategories, startDate, endDate,
            startTime, endTime, ticketDesc, basePrice, eventOrganiser } = this.state

    return (
      <View>
        <PictureSection uploading={uploading} uploadImage={uploadImage} imageUri={imageUri} />
        <View style={styles.formContainer}>
          <NameSection onChangeText={this.name} value={eventName} />
          <DescriptionSection onChangeText={this.desc} value={eventDesc} />
          <CategoriesSection
            title={catSubheader}
            data={MAIN_CATEGORIES}
            onChange={this.mainCat}
            value={mainCategory}
          />
          <CategoriesSection
            title={I18n.t('subCats')}
            data={SUB_CATEGORIES}
            onChange={this.subCats}
            value={subCategories}
            multiSelect
          />
          <AddressSection onPress={this.location} />
          <DateTimeSection
            date={startDate}
            time={startTime}
            subheader={startSubheader}
            onDateChange={this.startDate}
            onTimeChange={this.startTime}
            maxDate={this.state.endDate}
          />
          <DateTimeSection
            date={endDate}
            time={endTime}
            minDate={startDate}
            subheader={endSubheader}
            onDateChange={this.endDate}
            onTimeChange={this.endTime}
          />
          <TicketSection
            onChangeText={this.ticketDesc}
            value={ticketDesc}
            onChangeBasePrice={this.basePrice}
            basePrice={basePrice}
          />
          <OrganiserSection onChangeText={this.eventOrganiser} value={eventOrganiser} />
          { this.renderWarning() }
          <CustomButton
            text={I18n.t('createEvent')}
            onPress={this.onPress}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            loading={creating}
            disabled={creating}
            upperCase
          />
        </View>
        { this.renderCreateError() }
      </View>
    )
  }
}
