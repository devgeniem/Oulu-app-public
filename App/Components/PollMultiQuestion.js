import React from 'react'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'
import styles from './Styles/PollMultiQuestionStyles'
import Colors from '../Themes/Colors'

export default class PollMultiQuestion extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      selectedKey: undefined
    }
  }

  onPress = (key) => {
    this.setState({selectedKey: key})
    this.props.onSelect(key)
  }

  renderValues = () => {
    return Object.entries(this.props.values).map(([key, value], index) => {
      if (value) {
        return (
          <CustomButton
            key={index}
            text={value}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            selectedStyle={styles.selectedStyle}
            selected={this.state.selectedKey === key}
            upperCase
            iosUnderlayColor={Colors.pollButtonUnderlay}
            onPress={() => this.onPress(key)}
          />
        )
      }
    })
  }

  render () {
    const { title } = this.props

    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonsContainer}>
          { this.renderValues() }
        </View>
      </View>
    )
  }
}
