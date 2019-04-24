//-----------------------------------------------------------------------------
// src/screens/Stack.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
}                             from 'react-native'

import styles                 from './styles'

class StackScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Stacked Screen</Text>
      </View>
    )
  }
}

export default StackScreen