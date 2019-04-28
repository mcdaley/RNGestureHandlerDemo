//-----------------------------------------------------------------------------
// src/screens/List/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne,
}                     from '../../styles/index'

/**
 * ListScreen Styles
 */
const styles = StyleSheet.create({
  container: {
    flex:                 1,
    justifyContent:       'center',
    alignItems:           'center',
  },
  headerOne: {
    ...headerOne,
    marginBottom:         40,
  }
})

// Export the styles
export default styles
