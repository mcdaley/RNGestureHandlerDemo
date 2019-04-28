//-----------------------------------------------------------------------------
// src/screens/Authentication/SignUp/SignUp.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import {
  View,
  Text,
  Button,
}                             from 'react-native'
import Icon                   from 'react-native-vector-icons/Ionicons'

import styles                 from './styles'

class SignUpScreen extends Component {
  static navigationOptions = { 
    headerTitle:  'Sign Up',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerOne}>Sign Up Screen</Text>
        <View>
          <Text>Already have an account?</Text>
          <Button
          title   = 'Sign In'
          onPress = { () => this.props.navigation.navigate('SignIn') }
        />
        </View>
      </View>
    )
  }
}

// Export the SignUpScreen
export default SignUpScreen
