import React from 'react'
import { FlatList, Image, View, Animated, ActivityIndicator, Linking, Text } from 'react-native'
import { connect } from 'react-redux'
import EventsActions from '../Redux/EventsRedux'
import EventListItem from '../Components/EventListItem'
import AdListItem from '../Components/AdListItem'
import styles from './Styles/EventsScreenStyles'
import images from '../Themes/Images'
import EventListHeader from '../Components/EventListHeader'
import EventListHeaderFAB from '../Components/EventListHeaderFAB'
import EventsHeader from '../Navigation/EventsHeader'
import { Colors } from '../Themes'
import ArrayUtil from '../Transforms/ArrayUtil'
import Immutable from 'seamless-immutable'
import I18n from 'react-native-i18n'
import ErrorMessage from '../Components/ErrorMessage'

const HEADER_MIN_HEIGHT = 0
const HEADER_MAX_HEIGHT = 150
const IOS_CONTENT_OFFSET = { x: 0, y: -HEADER_MAX_HEIGHT }
const IOS_CONTENT_INSET = { top: HEADER_MAX_HEIGHT }
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

class EventsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: <EventsHeader navigation={navigation} />
  })

  constructor (props) {
    super(props)

    const scrollY = new Animated.Value(0)
    const offset = new Animated.Value(0)

    this.state = {
      scrollY,                      /* Current scrollY position */
      offset,                       /* Used to offset the header */
      clamped: Animated.diffClamp(
        Animated.add(
          scrollY.interpolate({ inputRange: [0, 1], outputRange: [0, 1], extrapolateLeft: 'clamp' }),
          offset
        ),
        HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT
      ),                            /* Used to animate the header */
      searchTerm: ''
    }
  }

  clampedScrollValue = 0
  offsetValue = 0
  scrollValue = 0

  componentWillMount () {
    /* Use diffClamp manually because the method does not support adding listeners to it */
    this.state.scrollY.addListener(({ value }) => {
      /* Calculate the difference between current and last */
      const diff = value - this.scrollValue
      this.scrollValue = value
      /* Clamp the value within bounds */
      this.clampedScrollValue = Math.min(Math.max(this.clampedScrollValue + diff, HEADER_MIN_HEIGHT), HEADER_MAX_HEIGHT)
    })
    this.state.offset.addListener(({ value }) => { this.offsetValue = value })
  }

  componentWillUnmount () {
    this.state.scrollY.removeAllListeners()
    this.state.offset.removeAllListeners()
  }

  /* Set timer that calls a function after scroll has finished */
  onScrollEndDrag = () => { this.scrollEndTimer = setTimeout(this.onMomentumScrollEnd, 250) }
  /* Scroll has started, clear timer */
  onMomentumScrollBegin = () => clearTimeout(this.scrollEndTimer)
  /* Handle animation after scroll ends */
  onMomentumScrollEnd = () => {
    let toValue = 0
    /* Check if scroll has passed half of the header height */
    if (this.scrollValue > HEADER_MAX_HEIGHT && this.clampedScrollValue > (HEADER_MAX_HEIGHT / 2)) {
      toValue = this.offsetValue + HEADER_MAX_HEIGHT
    } else {
      toValue = this.offsetValue - HEADER_MAX_HEIGHT
    }

    Animated.timing(this.state.offset, { toValue, duration: 350, useNativeDriver: true }).start()
  }

  open = (item) => {
    this.props.selectEvent(item)
    this.props.navigation.navigate('EventScreen')
  }

  onAdPress = (item) => item.link ? Linking.openURL(item.link) : null
  handleChangeSearchTerm = (text) => this.setState({ searchTerm: text })

  /* Key to track each item */
  keyExtractor = (item, index) => index
  /* Component to render for each item */
  renderItem = ({item}) => {
    if (item.content_type === 'event') return <EventListItem item={item} onPress={this.open} />
    return <AdListItem item={item} onPress={this.onAdPress} />
  }
  /* Render image between each item */
  listSeparator = () => <Image source={images.eventFooter} style={styles.imageFooter} />
  /* Called on pull-to-refresh */
  onRefresh = () => {
    this.setState({searchTerm: ''})
    this.props.refreshEvents()
  }
  submit = () => this.props.fetchEvents(this.state.searchTerm)

  /* Render loader when fetching events */
  renderLoader = () => {
    if (this.props.fetching && !this.props.refreshing) {
      return <ActivityIndicator size='large' color={Colors.sports} style={styles.loading} />
    }
    return null
  }

  getListData = () => {
    let { ads } = this.props
    const { events } = this.props

    if (ads.length === 0) return events
    if (ads.length > 1) ads = ArrayUtil.shuffle(Immutable.asMutable(ads))

    let data = []
    let adCounter = 0

    events.forEach((event, index) => {
      const eventCounter = index + 1
      if (ads[adCounter] && eventCounter % 3 === 0) {
        data.push(event)
        data.push(ads[adCounter])
        adCounter++
      } else {
        data.push(event)
      }
    })

    return data
  }

  listEmpty = () => {
    const { fetching, refreshing, fetchError } = this.props
    if (fetching || refreshing || fetchError) {
      return null
    } else {
      return (
        <View style={styles.listEmptyContainer}>
          <View style={styles.listEmptyTextContainer}>
            <Text style={styles.listEmptyText}>{I18n.t('noEventsFound')}</Text>
          </View>
        </View>
      )
    }
  }

  renderFetchError = () => {
    const { fetchError, resetFetchEventsError } = this.props
    if (fetchError) return <ErrorMessage text={I18n.t('fetchError')} onPress={resetFetchEventsError} />
  }

  /**
  renderLoginError = () => {
    const { loginError } = this.props
    console.log('loginError', loginError)
    if (loginError) return <ErrorMessage text={I18n.t('loginError')} uncloseable />
  }
  **/

  onEndReached = () => {
    const { fetching, fetchingMore, allFetched, events } = this.props
    if (events.length && !fetching && !fetchingMore && !allFetched) {
      const searchTerm = this.state.searchTerm || null
      this.props.fetchMoreEvents(searchTerm)
    }
  }

  renderPage = () => {
    if (!this.props.fetchingToken && this.props.token) {
      const { clamped, scrollY, searchTerm } = this.state
      const { refreshing, navigation, searchParameters, user } = this.props
      const translateY = clamped.interpolate({
        inputRange: [HEADER_MIN_HEIGHT, HEADER_MAX_HEIGHT],
        outputRange: [HEADER_MIN_HEIGHT, -HEADER_MAX_HEIGHT],
        extrapolate: 'clamp'
      })

      const data = this.getListData()

      return (
        <View style={styles.container}>
          <AnimatedFlatList
            data={data}
            ListEmptyComponent={this.listEmpty}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.listSeparator}
            onRefresh={this.onRefresh}
            onEndReached={this.onEndReached}
            refreshing={refreshing}
            progressViewOffset={HEADER_MAX_HEIGHT}
            contentOffset={IOS_CONTENT_OFFSET}
            contentInset={IOS_CONTENT_INSET}
            scrollEventThrottle={1}
            contentContainerStyle={styles.list}
            onMomentumScrollBegin={this.onMomentumScrollBegin}
            onMomentumScrollEnd={this.onMomentumScrollEnd}
            onScrollEndDrag={this.onScrollEndDrag}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: true }
            )}
          />
          <EventListHeader
            navigation={navigation}
            handleChangeSearchTerm={this.handleChangeSearchTerm}
            onSubmit={this.submit}
            searchTerm={searchTerm}
            maincategories={searchParameters ? searchParameters.cats : []}
            style={{transform: [{translateY}]}}
          />
          <EventListHeaderFAB navigation={navigation} style={{transform: [{translateY}]}} user={user} />
          { this.renderLoader() }
          { this.renderFetchError() }
        </View>
      )
    }
    return null
  }

  render () {
    return this.renderPage()
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    fetching: state.events.fetching,
    fetchingMore: state.events.fetchingMore,
    allFetched: state.events.allFetched,
    refreshing: state.events.refreshing,
    fetchingToken: state.user.fetchingToken,
    user: state.user.user,
    token: state.user.token,
    searchParameters: state.user.searchParameters,
    ads: state.ads.ads,
    fetchError: state.events.error,
    userError: state.user.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: (searchTerm) => dispatch(EventsActions.fetchEvents(searchTerm)),
    fetchMoreEvents: (searchTerm) => dispatch(EventsActions.fetchMoreEvents(searchTerm)),
    selectEvent: (event) => dispatch(EventsActions.selectEvent(event)),
    refreshEvents: () => dispatch(EventsActions.refreshEvents()),
    resetFetchEventsError: () => dispatch(EventsActions.resetFetchEventsError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsScreen)
