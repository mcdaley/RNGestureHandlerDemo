//-----------------------------------------------------------------------------
// src/screens/Authentication/SignUp/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne,
}                     from '../../../styles/index'

/**
 * SignUpScreen Styles
 */
const styles = StyleSheet.create({
  container: {
    flex:                 1,
    justifyContent:       'center',
    alignItems:           'center',
  },
  headerOne: {
    ...headerOne,
    marginBottom:         30,
    fontWeight:           'bold',
  }
})

// Export the styles
export default styles
