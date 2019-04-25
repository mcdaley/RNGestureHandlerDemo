//-----------------------------------------------------------------------------
// src/screens/Profile/Profile.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class ProfileScreen extends Component {
  static navigationOptions = { 
    drawerLabel:  'Profile',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    )
  }
}

// Export the ProfileScreen
export default ProfileScreen
