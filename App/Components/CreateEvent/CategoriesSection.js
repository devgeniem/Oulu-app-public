import React from 'react'
import { View } from 'react-native'
import Subheader from '../Subheader'
import CustomPicker from '../CustomPicker'

export default class CategoriesSection extends React.PureComponent {
  select = (array) => this.props.onChange(array)

  render () {
    const { value, title, data, multiSelect } = this.props

    return (
      <View>
        <Subheader text={title} />
        <CustomPicker
          data={data}
          onSave={this.select}
          value={value}
          multiSelect={multiSelect}
        />
      </View>
    )
  }
}
