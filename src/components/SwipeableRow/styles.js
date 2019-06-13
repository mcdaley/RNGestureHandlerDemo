//-----------------------------------------------------------------------------
// src/components/SwipeableRow/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet }   from 'react-native'

const styles = StyleSheet.create({
  leftAction: {
    flex:                 1,
    backgroundColor:      '#497AFC',
    justifyContent:       'center',
  },
  actionText: {
    color:                'black',
    fontSize:             16,
    backgroundColor:      'transparent',
    padding:              10,
  },
  actionIcon: {
    color:                'white',
    fontSize:             30,
    backgroundColor:      'transparent',
    padding:              10,
  },
  rightAction: {
    alignItems:           'center',
    flex:                 1,
    justifyContent:       'center',
  },
})

// Export styles
export default styles
