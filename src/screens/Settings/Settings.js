//-----------------------------------------------------------------------------
// src/screens/Settings/Settings.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
}                             from 'react-native'
import AsyncStorage           from '@react-native-community/async-storage'

import DoneButton             from '../../components/DoneButton/DoneButton'
import styles                 from './styles'

/**
 * Settings screen that allows users to manage their user profiles.
 */
class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Settings',
      headerRight:  (
        <TouchableOpacity onPress = { () => navigation.navigate('App')}>
          <Text style={{color: '#fff', fontSize: 16, margin: 10}}>
            Done
          </Text>
        </TouchableOpacity>
      )
    }
  }

  /**
   * Sign out a user and navigate back to home screen
   */
  _signOut = async () => {
    try {
      await AsyncStorage.removeItem('userToken')
      this.props.navigation.navigate('SignIn')
    }
    catch(err) {
      console.log(`[ERROR]: Failed to sign out user= `, err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title   = 'Go to Profile'
          onPress = { () => this.props.navigation.navigate('Profile')}
        />
        <Button
          title   = 'Go to Notifications'
          onPress = { () => this.props.navigation.navigate('Notifications')}
        />
        <View style={styles.logout}>
          <Button
            title   = 'Sign Out'
            onPress = { this._signOut }
          />
        </View>
      </View>
    )
  }
}

// Export the SettingsScreen
export default SettingsScreen
