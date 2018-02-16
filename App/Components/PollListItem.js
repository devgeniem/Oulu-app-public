import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/PollListItemStyles'
import Icon from './Icon'
import { Colors } from '../Themes'

export default class PollListItem extends React.PureComponent {
  open = () => this.props.onPress(this.props.item)

  renderIcon = () => {
    const { pollType } = this.props.item
    const icon = pollType === 'poll' ? 'questionnaire' : 'vote'
    return (
      <View style={styles.type}>
        <Icon name={icon} size={18} color={Colors.white} />
      </View>
    )
  }

  render () {
    const { title, organiser } = this.props.item
    return (
      <TouchableOpacity onPress={this.open} style={styles.container}>
        <View style={styles.organizerContainer}>
          { this.renderIcon() }
          <Text style={styles.organizer}>{organiser}</Text>
        </View>
        <Text style={styles.header}>{title}</Text>
      </TouchableOpacity>
    )
  }
}
