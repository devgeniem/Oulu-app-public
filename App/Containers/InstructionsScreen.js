import React from 'react'
import { ScrollView, Text, View, Linking } from 'react-native'
import I18n from 'react-native-i18n'
import BackHeader from '../Navigation/BackHeader'
import styles from './Styles/InstructionsScreenStyles'
import HTML from 'react-native-render-html'
import { Colors, Fonts } from '../Themes'
import { INSTRUCTIONS } from '../Transforms/Constants'

const htmlStyles = {
  p: {
    color: Colors.instructionText,
    marginBottom: 16,
    fontFamily: Fonts.type.base
  },
  h2: {
    color: Colors.instructionText,
    marginBottom: 16,
    fontFamily: Fonts.type.medium,
    fontSize: 18
  }
}

export default class InstructionsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <BackHeader title={I18n.t('instructions_header')} back={navigation.goBack} />
  })

  handleLinkPress = (event, href) => Linking.openURL(href)

  renderTableHeader = () => {
    return (
      <View style={styles.row}>
        {INSTRUCTIONS.tableHeader.map(item => (
          <View style={styles.headerColumn} key={item}>
            <Text style={styles.tableHeaderText}>{item}</Text>
          </View>
        ))}
        <View style={styles.hr} />
      </View>
    )
  }

  renderTableContent = () => {
    return INSTRUCTIONS.tableContent.map((rootItem) => (
      <View key={`${rootItem.title}`}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.tableText}>{rootItem.title}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.tableText}>{' '}</Text>
          </View>
        </View>
        {rootItem.items && rootItem.items.map(subItem => (
          <View style={styles.row} key={`${rootItem.title}-${subItem}`}>
            <View style={styles.column}>
              <Text style={styles.tableText}>{' '}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.tableText}>{subItem}</Text>
            </View>
          </View>
        ))}
      </View>
    ))
  }

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <HTML
          html={INSTRUCTIONS.html1}
          tagsStyles={htmlStyles}
          onLinkPress={this.handleLinkPress}
        />
        <View style={styles.tableContainer}>
          {this.renderTableHeader()}
          {this.renderTableContent()}
        </View>
        <HTML
          html={INSTRUCTIONS.html2}
          tagsStyles={htmlStyles}
          onLinkPress={this.handleLinkPress}
        />
      </ScrollView>
    )
  }
}
