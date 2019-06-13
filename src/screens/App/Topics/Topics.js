//-----------------------------------------------------------------------------
// src/screens/App/Topics.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
}                             from 'react-native'
import {
  RectButton,
  FlatList,
}                             from 'react-native-gesture-handler'

import SwipeableRow           from '../../../components/SwipeableRow/SwipeableRow'
import styles                 from './styles'

// Example data
const RECORDS = [{
  from:     "D'Artagnan",
  when:     '3:11 PM',
  message:  'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
}]

const Row = ({item}) => (
  <RectButton style={styles.RectButton} onPress={() => alert(item.from)}>
    <View style={styles.photoContainer}>
      <Text style={styles.fromText}>
        {item.from}
      </Text>
      <Text numberOfLines={2} style={styles.messageText}>
        {item.message}
      </Text>
    </View>
  </RectButton>
)

const SwipeMe = ({item, index}) => (
  <SwipeableRow>
    <Row item={item} />
  </SwipeableRow>
)

class TopicsScreen extends Component {
  static navigationOptions = { 
    title:  'Topics',
  }

  /**
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Swipeable Example</Text>
        <FlatList
          data          = {RECORDS}
          keyExtractor  = {(item, index) => `message ${index}`}
          renderItem    = {({ item, index }) => (
            <SwipeMe item={item} index={index} />
          )}
          ItemSeparatorComponent = {() => <View style={styles.separator} />}
        />
      </View>
    )
  }
  ***/

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Swipeable Example</Text>
        <SwipeableRow>
          <Row item={RECORDS[0]} />
        </SwipeableRow>
      </View>
    )
  }
}

export default TopicsScreen