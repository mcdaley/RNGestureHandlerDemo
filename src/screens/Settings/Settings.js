//-----------------------------------------------------------------------------
// src/screens/Settings/Settings.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class SettingsScreen extends Component {
  static navigationOptions = { 
    drawerLabel:  'Settings',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Drawer</Text>
      </View>
    )
  }
}

// Export the SettingsScreen
export default SettingsScreen
