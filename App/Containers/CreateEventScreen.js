import React from 'react'
import CreateEventHeader from '../Navigation/CreateEventHeader'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './Styles/CreateEventScreenStyles'
import { connect } from 'react-redux'
import CreateEventForm from '../Components/CreateEvent/CreateEventForm'
import EventsActions from '../Redux/EventsRedux'
import UploadActions from '../Redux/UploadRedux'

class CreateEventScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <CreateEventHeader navigation={navigation} back={navigation.goBack} />
  })

  createEvent = (event) => this.props.createEvent(event)

  render () {
    const { userId, creating, uploading, uploadImage, imageUri, createError, resetCreateEventError } = this.props

    return (
      <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
        <CreateEventForm
          onCreate={this.createEvent}
          creating={creating}
          userId={userId}
          uploading={uploading}
          uploadImage={uploadImage}
          imageUri={imageUri}
          createError={createError}
          onErrorPress={resetCreateEventError}
        />
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    createError: state.events.createError,
    creating: state.events.creating,
    userId: state.user.user.id,
    uploading: state.upload.uploading,
    imageUri: state.upload.uri
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(EventsActions.createEvent(event)),
    uploadImage: (data) => dispatch(UploadActions.uploadImage(data)),
    resetCreateEventError: () => dispatch(EventsActions.resetCreateEventError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventScreen)
