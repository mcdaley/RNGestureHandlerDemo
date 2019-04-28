//-----------------------------------------------------------------------------
// src/screens/Settings/Notifications/Notifications.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class NotificationsScreen extends Component {
  static navigationOptions = { 
    headerTitle:  'Notifications',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Notifications Screen</Text>
      </View>
    )
  }
}

// Export the NotificationsScreen
export default NotificationsScreen
