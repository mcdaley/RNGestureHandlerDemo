//-----------------------------------------------------------------------------
// src/screens/App/Home/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne,
}                     from '../../../styles/index'

/**
 * HomeScreen Styles
 */
const styles = StyleSheet.create({
  container: {
    flex:                 1,
    justifyContent:       'center',
    alignItems:           'center',
  },
  headerOne: {
    ...headerOne,
  },
  headerIcon: {
    fontSize:           28,
    color:              '#fff',
    margin:             10,
  }
})

// Export the styles
export default styles
