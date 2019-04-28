//-----------------------------------------------------------------------------
// src/screens/Settings/Settings/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne,
}                     from '../../../styles/index'

/**
 * SettingsScreen Styles
 */
const styles = StyleSheet.create({
  container: {
    flex:                 1,
    justifyContent:       'center',
    alignItems:           'center',
  },
  headerOne: {
    ...headerOne,
    fontSize:             22,
    fontWeight:           'bold',
  },
  logout: {
    marginTop:            30,
  }
})

// Export the styles
export default styles
