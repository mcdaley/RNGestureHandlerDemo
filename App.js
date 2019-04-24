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
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
}                           from 'react-navigation'
import Icon                 from 'react-native-vector-icons/Ionicons'

import HomeScreen           from './src/screens/Home/Home'
import TopicsScreen         from './src/screens/Topics/Topics'
import DetailsScreen        from './src/screens/Details/Details'
import ListScreen           from './src/screens/List/List'

/**********
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
*********/

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName }   = navigation.state
  let   iconName

  if(routeName === 'Home') {
    iconName = 'ios-home'
  }
  else if(routeName === 'Topics') {
    iconName = `ios-desktop`
  }

  // Return the icon component
  return <Icon name={iconName} size={24} color={tintColor} />
}

const HomeStack     = createStackNavigator({
  Home:     HomeScreen,
  Details:  DetailsScreen,
})

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if(navigation.state.index > 0) {
    tabBarVisible = false
  }

  return { tabBarVisible }
}

const TopicsStack    = createStackNavigator({
  Topics:    TopicsScreen,
  List:     ListScreen,
})

TopicsStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if(navigation.state.index > 0) {
    tabBarVisible = false
  }

  return { tabBarVisible }
}

const AppNavigator  = createBottomTabNavigator(
  {
    Home:     { screen: HomeStack },
    Topics:   { screen: TopicsStack },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        return getTabBarIcon(navigation, focused, tintColor)
      },
    }),
    tabBarOptions: {
      activeTintColor:    'tomato',
      inactiveTintColor:  'gray',
      labelStyle: {
        fontSize:         16,
      },
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
