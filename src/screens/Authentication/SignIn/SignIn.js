//-----------------------------------------------------------------------------
// src/screens/Authentication/SignIn/SignIn.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
}                             from 'react-native'
import AsyncStorage           from '@react-native-community/async-storage'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class SignInScreen extends Component {
  static navigationOptions = { 
    headerTitle:  'Sign In',
  }

  /**
   * Sign the user in
   */
  _signInAsync = async (userId) => {
    try {
      await AsyncStorage.setItem('userToken', userId)
      this.props.navigation.navigate('App')
    }
    catch(err) {
      // TODO: Add error message to the screen
      console.log(`[ERROR]: Failed to sign-in user= `, err)
    }
  }

  render() {
    const DEFAULT_USER_ID = 'me'

    return (
      <View style={styles.container}>
        <Text>Sign In Screen</Text>
        <Button 
          title     = 'Sign In'
          onPress   = { () => this._signInAsync(DEFAULT_USER_ID) }
        />
        <View>
          <Text>Do not have an account?</Text>
          <Button
            title   = 'Sign Up'
            onPress = { () => this.props.navigation.push('SignUp') }
          />
        </View>
      </View>
    )
  }
}

// Export the SignInScreen
export default SignInScreen
