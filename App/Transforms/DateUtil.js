import I18n from 'react-native-i18n'
import moment from 'moment'

export default class DateUtil {
  static longDayFormat = (index) => I18n.t('day'.concat(index))

  static shortDayFormat = (index) => I18n.t('shortday'.concat(index))

  static displayPeriod = (startDate, endDate, datesOnly = false) => {
    if (startDate && endDate) {
      const fullStartDate = moment(startDate).format('DD.MM.YYYY')
      const shortStartDate = moment(startDate).format('DD')
      const fullEndDate = moment(endDate).format('DD.MM.YYYY')
      const longStartDay = DateUtil.longDayFormat(moment(startDate).day())
      const shortStartDay = DateUtil.shortDayFormat(moment(startDate).day())
      const startTime = `${moment(startDate).format('kk')}:${moment(startDate).format('mm')}`
      const endTime = `${moment(endDate).format('kk')}:${moment(endDate).format('mm')}`
      const shortEndDay = DateUtil.shortDayFormat(moment(endDate).day())

      if (datesOnly) {
        if (moment(startDate).isSame(endDate, 'day')) {
          return fullStartDate
        } else if (!moment(startDate).isSame(endDate, 'month')) {
          return `${fullStartDate}.-${fullEndDate}`
        } else {
          return `${shortStartDate}.-${fullEndDate}`
        }
      } else {
        if (moment(startDate).isSame(endDate, 'day')) {
          return `${fullStartDate} | ${longStartDay}, ${startTime}`
        } else if (!moment(startDate).isSame(endDate, 'month')) {
          return `${fullStartDate}.-${fullEndDate} | ${shortStartDay}, ${startTime} - ${shortEndDay}, ${endTime}`
        } else {
          return `${shortStartDate}.-${fullEndDate} | ${shortStartDay}, ${startTime} - ${shortEndDay}, ${endTime}`
        }
      }
    }
  }

  static displayDate = (date) => date ? moment(date).format('DD.MM.YYYY') : null
  static displayTime = (time) => time ? `${moment(time).format('kk')}:${moment(time).format('mm')}` : null
}
