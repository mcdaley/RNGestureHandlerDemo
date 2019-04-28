//-----------------------------------------------------------------------------
// src/screens/Topics.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
}                             from 'react-native'

import styles                 from './styles'

class TopicsScreen extends Component {
  static navigationOptions = { 
    title:  'Topics',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Topics Screen</Text>
        <Button
          title   = 'Go to List'
          onPress = { () => this.props.navigation.navigate('List') }
        />
      </View>
    )
  }
}

export default TopicsScreen