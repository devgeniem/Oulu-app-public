import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ErrorMessageStyles'
import Modal from 'react-native-modal'
import Colors from '../Themes/Colors'

export default class ErrorMessage extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: true
    }
  }

  closeModal = () => this.setState({modalOpen: false})

  onPress = () => {
    const { onPress, uncloseable } = this.props

    if (!uncloseable) this.closeModal()
    if (onPress) onPress()
  }

  renderModal = () => {
    const { text } = this.props

    return (
      <Modal isVisible={this.state.modalOpen} backdropColor={Colors.white}>
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }

  render () {
    return this.renderModal()
  }
}
