//-----------------------------------------------------------------------------
// src/screens/Notifications/Notifications.js
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
    drawerLabel:  'Notifications',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications Screen</Text>
      </View>
    )
  }
}

// Export the NotificationsScreen
export default NotificationsScreen
