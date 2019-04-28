//-----------------------------------------------------------------------------
// src/screens/Settings/PersonalInfo/PersonalInfo.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

/**
 * Example screen on that is pushed onto the Stack and navigates back
 * by popping itself form the stack.
 */
class PersonalInfoScreen extends Component {
  static navigationOptions = { 
    headerTitle:  'Personal Info',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Personal Info Screen</Text>
        <Button
          title   = 'Go Back'
          onPress = { () => this.props.navigation.pop() }
        />
      </View>
    )
  }
}

// Export the PersonalInfoScreen
export default PersonalInfoScreen
