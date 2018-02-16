import React from 'react'
import { View, Text } from 'react-native'
import Icon from '../Components/Icon'
import { Colors } from '../Themes'
import styles from './Styles/NavigationStyles'
import { connect } from 'react-redux'
import IconButton from '../Components/IconButton'

class EventHeader extends React.Component {
  back = () => this.props.onBack()

  renderParticipantCount = () => {
    const { participantCount } = this.props.selectedEvent
    if (participantCount > 0) {
      return (
        <View style={styles.participantCountContainer}>
          <Text style={styles.participantCount}>{participantCount}</Text>
          <Icon name='peace' size={24} color={Colors.white} />
        </View>
      )
    }
    return null
  }

  render () {
    return (
      <View style={[styles.container, styles.eventHeader]}>
        <IconButton onPress={this.back} style={styles.leftIcon} name='arrow' size={20} color={Colors.white} />
        { this.renderParticipantCount() }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEvent: state.events.selectedEvent
  }
}

export default connect(mapStateToProps)(EventHeader)
