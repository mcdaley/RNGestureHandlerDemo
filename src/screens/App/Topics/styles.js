//-----------------------------------------------------------------------------
// src/screens/App/Topics/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet } from 'react-native'

import {
  headerOne, 
  border,
}                     from '../../../styles/index'

/**
 * StackScreen Styles
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
  rectButton: {
    flex:                 1,
    height:               80,
    paddingVertical:      10,
    paddingHorizontal:    20,
    justifyContent:       'space-between',
    flexDirection:        'column',
    backgroundColor:      'white',
  },
  separator: {
    backgroundColor:      'rgb(200, 199, 204)',
    height:               StyleSheet.hairlineWidth,
    marginTop:            5,
    marginBottom:         5,
  },
  photoContainer: {
    width:                '100%',
    margin:               0,
    padding:              5,
    backgroundColor:      'pink',
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
})

// Export the styles
export default styles
