//-----------------------------------------------------------------------------
// src/screens/Authentication/AuthLoading/AuthLoading.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  ActivityIndicator,
  StatusBar,
  View,
  Text,
}                             from 'react-native'
import AsyncStorage           from '@react-native-community/async-storage'

import styles                 from './styles'

/**
 * Loading screen app displays when the user starts the app. If the user is 
 * not logged in then the user is directed to the sign in screen, otherwise
 * the user is directed to the home screen.
 */
class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props)
    this._bootstrapAync()
  }

  _bootstrapAync = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken')
      this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }
    catch(err) {
      // TODO: Should navigate to error/support screen
      console.log(`[ERROR]: Failed to verify if user is signed-in`, err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>
          Welcome to the App
        </Text>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

// Export the AuthLoadingScreen
export default AuthLoadingScreen
