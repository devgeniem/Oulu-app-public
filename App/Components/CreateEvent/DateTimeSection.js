import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Subheader from '../Subheader'
import styles from './Styles/CreateEventStyles'
import DateTimePicker from 'react-native-modal-datetime-picker'
import I18n from 'react-native-i18n'
import DateUtil from '../../Transforms/DateUtil'

export default class DateTimeSection extends React.PureComponent {
  state = {
    datePickerVisible: false,
    timePickerVisible: false
  };

  toggleDate = () => this.setState({ datePickerVisible: !this.state.datePickerVisible });

  toggleTime = () => this.setState({ timePickerVisible: !this.state.timePickerVisible });

  handleDatePicked = (date) => {
    this.props.onDateChange(date)
    this.toggleDate()
  }

  handleTimePicked = (time) => {
    this.props.onTimeChange(time)
    this.toggleTime()
  }

  render () {
    const { date, time, subheader, minDate, maxDate } = this.props

    return (
      <View>
        <Subheader text={subheader} />
        <DateTimePicker
          isVisible={this.state.datePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.toggleDate}
          minimumDate={minDate || new Date()}
          maximumDate={maxDate}
          titleIOS={I18n.t('date')}
          cancelTextIOS={I18n.t('cancel')}
          confirmTextIOS={I18n.t('confirm')}
        />
        <DateTimePicker
          isVisible={this.state.timePickerVisible}
          onConfirm={this.handleTimePicked}
          onCancel={this.toggleTime}
          mode='time'
          titleIOS={I18n.t('clockTime')}
          cancelTextIOS={I18n.t('cancel')}
          confirmTextIOS={I18n.t('confirm')}
        />
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.subheader}>{I18n.t('date')}</Text>
            <TouchableOpacity onPress={this.toggleDate}>
              <View style={styles.blankInputContainer}>
                <Text style={styles.blankInput}>{DateUtil.displayDate(date)}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.subheader}>{I18n.t('clockTime')}</Text>
            <TouchableOpacity onPress={this.toggleTime}>
              <View style={styles.blankInputContainer}>
                <Text style={styles.blankInput}>{DateUtil.displayTime(time)}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
