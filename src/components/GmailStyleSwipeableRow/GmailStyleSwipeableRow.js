//-----------------------------------------------------------------------------
// src/components/GmailStyleSwipeableRow/GmailSwipeableRow.js
//-----------------------------------------------------------------------------
import React, { Component }     from 'react'
import {
  Animated,
  Text,
  View,
}                               from 'react-native'
import { 
  RectButton,
  Swipeable,
}                               from 'react-native-gesture-handler'
import Icon                     from 'react-native-vector-icons/Ionicons'

import styles                   from './styles'

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

class GmailStyleSwipeableRow extends Component {
  /**
   * 
   */
  renderLeftActions = (progess, dragX) => {
    const scale = dragX.interpolate({
      inputRange:   [0, 80],
      outputRange:  [0, 1],
      extrapolate:  'clamp',
    })

    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <AnimatedIcon
          name  = 'ios-archive'
          size  = {30}
          color = '#fff'
          style = {[styles.actionIcon, { transform: [{scale}] } ]}
        />
      </RectButton>
    )
  }

  renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange:   [-80, 0],
      outputRange:  [1, 0],
      extrapolate:  'clamp',
    })

    return (
      <RectButton style={styles.rightAction} onPress={this.close}>
        <View style={{margin: 5, padding: 5}}>
          <AnimatedIcon
            name    = 'ios-trash'
            size    = {30}
            color   = '#fff'
            styles  = {[ styles.actionIcon, {transform: [{ scale }]} ]}
          />
        </View>
      </RectButton>
    )
  }

  updateRef = (ref) => {
    this._swipeableRow = ref
  }
  
  close = () => {
    this._swipeableRow.close()
  }
  
  render() {
    const { children } = this.props 
  
    return (
      <Swipeable
        ref                 = {this.updateRef}
        friction            = {2}
        leftThreshold       = {80}
        rightThreshold      = {40}
        renderLeftActions   = {this.renderLeftActions}
        renderRightActions  = {this.renderRightActions}
      >
        {children}
      </Swipeable>
    )
  }
}

// Export GmailStyleSwipeableRow
export default GmailStyleSwipeableRow
