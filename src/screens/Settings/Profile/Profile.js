//-----------------------------------------------------------------------------
// src/screens/Settings/Profile/Profile.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class ProfileScreen extends Component {
  static navigationOptions = { 
    headerTitle:  'Profile',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Profile Screen</Text>
        <Button
          title   = 'Go To Personal Info'
          onPress = { () => this.props.navigation.push('PersonalInfo') }
        />
      </View>
    )
  }
}

// Export the ProfileScreen
export default ProfileScreen
