/**
 * Example of working with React Native Navigation to build an app.
 */

import React, { Component } from 'react';
import { 
  View,
  Text,
  Button,
}                           from 'react-native';
import {
  createStackNavigator,
  createAppContainer
}                           from 'react-navigation'

class HomeScreen extends Component {
  static navigationOptions = {
    title:            'Home',
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title   = 'Go to Details'
          onPress = { () => this.props.navigation.navigate('Details', {
            itemId:     86,
            otherParam: 'Something Else',
          })}
        />
      </View>
    )
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen')
    }
  }
  
  render() {
    const { navigation }  = this.props
    const itemId          = navigation.getParam('itemId', 'NO-ID')
    const otherParam      = navigation.getParam('otherParam', 'Some DefaultValue')

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Text>ItemId:     {JSON.stringify(itemId)}</Text>
        <Text>OtherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title   = 'Go to Home'
          onPress = { () => this.props.navigation.navigate('Home')}
        />
        <Button
          title   = 'Go to Details...again'
          onPress = { () => this.props.navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100)
          })}
        />
        <Button
          title = 'Update the title'
          onPress = { () => this.props.navigation.setParams('otherParam', 'Updated!')}
        />
        <Button
          title   = 'Go Back'
          onPress = { () => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home:     HomeScreen,
    Details:  DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle:      { backgroundColor: '#f4511e' },
      headerTintColor:  '#fff',
      headerTitleStyle: { fontWeight: 'bold' }
    }
    
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
