//-----------------------------------------------------------------------------
// src/components/DoneButton/DoneButton.js
//-----------------------------------------------------------------------------
import React          from 'react'
import {
  View,
  Text,
  TouchableOpacity,
}                     from 'react-native'

import styles         from './styles'

const DoneButton = (props) => {
  return (
    <TouchableOpacity onPress = { () => props.navigation.navigate('App')}>
      <Text styles={styles.headerLink}>
        Done
      </Text>
    </TouchableOpacity>
  )
}

export default DoneButton
