import React from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import styles from './Styles/CustomPickerStyles'
import CustomPickerListItem from './CustomPickerListItem'
import CustomButton from './CustomButton'
import I18n from 'react-native-i18n'
import Modal from 'react-native-modal'

/**
 * This component only supports MAIN_CATEGORY and SUB_CATEGORY shaped objects {type, desc, icon, color}
 * Further development is required if the component needs to be used elsewhere
 *
 * @return Array
 */

export default class CustomPicker extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      modalOpen: false,
      selected: []
    }
  }

  selectItem = (value, index) => {
    if (!this.props.multiSelect) {
      let selected = [].concat(value)
      this.setState({selected})
    } else {
      if (this.state.selected.includes(value)) {
        let selected = this.state.selected.filter(selectedValues => {
          return selectedValues !== value
        })

        this.setState({selected})
      } else {
        let selected = this.state.selected.concat(value)
        this.setState({selected})
      }
    }
  }

  renderItem = ({item, index}) => {
    return (
      <CustomPickerListItem
        item={item}
        onPress={this.selectItem}
        label={item.desc}
        selected={this.state.selected.includes(item)}
      />
    )
  }

  onSave = () => {
    this.toggleModal()
    this.props.onSave(this.state.selected)
  }

  listSeparator = () => <View style={styles.separator} />

  toggleModal = () => this.setState({modalOpen: !this.state.modalOpen})

  keyExtractor = (item, index) => index

  renderValue = (value) => {
    if (value.length > 1) {
      let displayText = []
      value.map(object => {
        displayText.push(object.desc)
      })
      return displayText.join(', ')
    } else if (value[0]) {
      return value[0].desc
    }
  }

  render () {
    const { value, data } = this.props

    return (
      <View>
        <TouchableOpacity onPress={this.toggleModal}>
          <View style={styles.blankInputContainer}>
            <Text style={styles.blankInput}>{ this.renderValue(value) }</Text>
          </View>
        </TouchableOpacity>
        <Modal isVisible={this.state.modalOpen}>
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              extraData={this.state}
              ItemSeparatorComponent={this.listSeparator}
              style={styles.list}
            />
            <CustomButton
              text={I18n.t('save')}
              onPress={this.onSave}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              upperCase
            />
          </View>
        </Modal>
      </View>
    )
  }
}
