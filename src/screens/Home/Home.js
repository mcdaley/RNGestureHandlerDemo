//-----------------------------------------------------------------------------
// src/screens/Home.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Icon name='ios-home' size={48} color='blue' />
      </View>
    )
  }
}

// Export the HomeScreen
export default HomeScreen