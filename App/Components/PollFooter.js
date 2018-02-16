import React from 'react'
import { View, Image } from 'react-native'
import styles from './Styles/PollFooterStyles'
import CustomButton from './CustomButton'
import I18n from 'react-native-i18n'
import images from '../Themes/Images'
import Colors from '../Themes/Colors'

export default class PollFooter extends React.PureComponent {
  goBack = () => this.props.navigation.goBack()

  submit = () => this.props.onSubmit()

  renderFooter = () => {
    if (this.props.isFinished || this.props.submitted) return <Image source={images.eventFooter} style={styles.image} />

    const { submitting, submitDisabled } = this.props
    return (
      <View style={styles.footer}>
        <CustomButton
          text={I18n.t('abort')}
          buttonStyle={[styles.button, styles.abortButton]}
          containerStyle={styles.buttonContainer}
          onPress={this.goBack}
          iosUnderlayColor={Colors.pollButtonUnderlay}
        />
        <CustomButton
          text={I18n.t('finished')}
          disabled={submitting || submitDisabled}
          loading={submitting}
          buttonStyle={[styles.button, styles.nextButton]}
          containerStyle={styles.buttonContainer}
          disabledStyle={styles.disabledButton}
          onPress={this.submit}
          iosUnderlayColor={Colors.loginButtonUnderlay}
        />
      </View>
    )
  }

  render = () => this.renderFooter()
}
