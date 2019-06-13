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
  },
  rectButton: {
    flex: 1,
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor:      'rgb(200, 199, 204)',
    height:               StyleSheet.hairlineWidth,
    marginTop:            5,
    marginBottom:         5,
  },
  fromText: {
    fontWeight:           'bold',
    backgroundColor:      'transparent',
    margin:               10,
  },
  messageText: {
    color:                '#999',
    backgroundColor:      'transparent',
    margin:               10,
  },
  dateText: {
    backgroundColor:      'transparent',
    position:             'absolute',
    right:                20,
    top:                  10,
    color:                '#999',
    fontWeight:           'bold',
  },
})

// Export the styles
export default styles
