//-----------------------------------------------------------------------------
// src/screens/Authentication/AuthLoading/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne,
}                     from '../../../styles/index'

/**
 * AuthLoadingScreen Styles
 */
const styles = StyleSheet.create({
  container: {
    flex:                 1,
    justifyContent:       'center',
    alignItems:           'center',
  },
  headerOne: {
    ...headerOne,
    fontWeight:           'bold',
  }
})

// Export the styles
export default styles
