//-----------------------------------------------------------------------------
// src/screens/List/List.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class ListScreen extends Component {
  static navigationOptions = { 
    title:        'List',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>List Screen</Text>
        <Icon name='ios-radio' size={48} color='cyan' />
      </View>
    )
  }
}

// Export the ListScreen
export default ListScreen
