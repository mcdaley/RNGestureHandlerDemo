//-----------------------------------------------------------------------------
// src/components/SwipeableRow/SwipeableRow.js
//-----------------------------------------------------------------------------
import React, { Component }   from 'react'
import { 
  Animated, 
  Text, 
  View 
}                             from 'react-native'
import { RectButton }         from 'react-native-gesture-handler'
import Swipeable              from 'react-native-gesture-handler/Swipeable'

import styles                 from './styles'

/**
 * 
 */
class SwipeableRow extends Component {
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };

  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      this.close()
      alert(text)
    }

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans}] }}>
        <RectButton
          style   = {[styles.rightAction, {backgroundColor: color}]}
          onPress = {pressHandler}
        >
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    )

    /**
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
    */
  }

  /////////////////////////////////////////////////////////////////////////////
  // TODO: 06/12/2019
  //  - ADD A onPress CALLBACK TO THE ARGS, SO I CAN CONTROL WHAT I CALL
  //  - MIGRATE PARAMS TO AN OBJECT
  /////////////////////////////////////////////////////////////////////////////
  
  renderRightActions = (progress) => (
    <View style={{ width: 150, flexDirection: 'row' }}>
      {this.renderRightAction('More',   '#C8C7CD', 150, progress)}
      {this.renderRightAction('Delete', '#dd2c00', 75,  progress)}
    </View>
  )

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
        leftThreshold       = {30}
        rightThreshold      = {40}
        renderLeftActions   = {this.renderLeftActions}
        renderRightActions  = {this.renderRightActions}
        onSwipeFromRight    = {() => alert('swiped from right!')}
      >
        {children}
      </Swipeable>
    )
  }
}

// Export SwipeableRow
export default SwipeableRow
