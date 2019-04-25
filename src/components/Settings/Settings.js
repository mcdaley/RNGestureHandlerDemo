//-----------------------------------------------------------------------------
// src/components/Settings/Settings.js
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
}                           from 'react-native'

class SettingsDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer()
  }

  render() {
    return (
      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer}>
          <Text style={{color: '#fff'}}>Settings</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SettingsDrawerStructure