//-----------------------------------------------------------------------------
// src/screens/Authentication/SignIn/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne,
}                     from '../../../styles/index'

/**
 * SignInScreen Styles
 */
const styles = StyleSheet.create({
  container: {
    flex:                 1,
    justifyContent:       'center',
    alignItems:           'center',
  },
  headerOne: {
    ...headerOne,
    fontSize:             20,
  }
})

// Export the styles
export default styles
