//-----------------------------------------------------------------------------
// src/components/GmailStyleSwipeableRow/styles.js
//-----------------------------------------------------------------------------
import { StyleSheet }   from 'react-native'

const styles = StyleSheet.create({
  leftAction: {
    flex:                 1,
    backgroundColor:      '#388e3c',
    justifyContent:       'center',
  },
  actionIcon: {
    width:                30,
    marginHorizontal:     10,
  },
  rightAction: {
    alignItems:           'flex-end',
    backgroundColor:      '#dd2c00',
    flex:                 1,
    justifyContent:       'center',
  }
})

// Export styles
export default styles