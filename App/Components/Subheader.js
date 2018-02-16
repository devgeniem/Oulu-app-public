import React from 'react'
import { Text } from 'react-native'
import styles from './Styles/SubheaderStyles'
import TextUtil from '../Transforms/TextUtil'

export default class Subheader extends React.PureComponent {
  render = () => (
    <Text style={[styles.text, this.props.extraStyles]}>
      {TextUtil.capitalizeFirstLetter(this.props.text)}
    </Text>
  )
}
