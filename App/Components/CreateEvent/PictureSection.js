import React from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import I18n from 'react-native-i18n'
import styles from './Styles/CreateEventStyles'
import Icon from '../Icon'
import { Colors } from '../../Themes'
import ImagePicker from 'react-native-image-picker'

export default class PictureSection extends React.PureComponent {
  onPress = () => {
    const options = {}

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error')
      } else {
        this.props.uploadImage(response.data)
      }
    })
  }

  renderView = (uploading, imageUri) => {
    if (uploading) {
      return (
        <View style={styles.pictureView}>
          <ActivityIndicator color={Colors.white} size='large' />
        </View>
      )
    } else if (imageUri) {
      return (
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.pictureView}>
            <Image source={{uri: imageUri}} style={styles.image} />
          </View>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.pictureView}>
            <Icon name='photo' size={50} color={Colors.white} />
            <Text style={styles.pictureText}>{I18n.t('addPicture')}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }

  render () {
    const { uploading, imageUri } = this.props

    return this.renderView(uploading, imageUri)
  }
}
