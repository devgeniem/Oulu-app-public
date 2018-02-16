import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../Themes'
import styles from './Styles/NavigationStyles'
import IconButton from '../Components/IconButton'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import UploadActions from '../Redux/UploadRedux'

class CreateEventHeader extends React.Component {
  back = () => {
    if (this.props.imageUri) this.props.resetUpload()
    this.props.back()
  }

  render () {
    return (
      <View style={[styles.container, styles.createEventHeader]}>
        <IconButton
          onPress={this.back}
          style={styles.leftIcon}
          name='arrow'
          size={20}
          color={Colors.white}
        />
        <Text style={styles.titleText}>{I18n.t('createEvent')}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imageUri: state.upload.uri
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetUpload: () => dispatch(UploadActions.resetUpload())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventHeader)
