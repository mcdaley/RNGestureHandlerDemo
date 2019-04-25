/**
 * Example of working with React Native Navigation to build an app.
 */

import React, { Component } from 'react';
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
}                           from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
}                           from 'react-navigation'

import Icon                 from 'react-native-vector-icons/Ionicons'

import HomeScreen           from './src/screens/Home/Home'
import TopicsScreen         from './src/screens/Topics/Topics'
import DetailsScreen        from './src/screens/Details/Details'
import ListScreen           from './src/screens/List/List'
import NotificationsScreen  from './src/screens/Notifications/Notifications';
import ProfileScreen        from './src/screens/Profile/Profile';
import SettingsScreen       from './src/screens/Settings/Settings';
import DoneButton           from './src/components/DoneButton/DoneButton'
import styles               from './src/screens/Settings/styles'

/**
 * Create Settings Screen using a StackNavigator
 */
const SettingsStack = createStackNavigator(
  {
    Settings:       SettingsScreen,
    Profile:        ProfileScreen,
    Notifications:  NotificationsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerRight:      ( 
          <DoneButton navigation={navigation} />
        ),
        headerTintColor:  '#FFFFFF',
        headerStyle:      { backgroundColor: '#f4511e' },
        headerTitleStyle: { fontWeight: 'bold' },
      }
    }
  }
)

const HomeStack = createStackNavigator(
  {
    Home:     HomeScreen,
    Details:  DetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor:  '#fff',
      headerStyle:      { backgroundColor: '#f4511e' },
      headerTitleStyle: { fontWeight: 'bold' }
    }
  }
)

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if(navigation.state.index > 0) {
    tabBarVisible = false
  }

  return { tabBarVisible }
}

const TopicsStack    = createStackNavigator(
  {
    Topics:    TopicsScreen,
    List:     ListScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor:  '#fff',
      headerStyle:      { backgroundColor: '#6C8AB7' },
      headerTitleStyle: { fontWeight: 'bold' }
    }
  }
)

TopicsStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true
  if(navigation.state.index > 0) {
    tabBarVisible = false
  }

  return { tabBarVisible }
}

/**
 * Return the Tab icon for each bottom tab on the screen
 * 
 * @param {*} navigation 
 * @param {*} focused 
 * @param {*} tintColor 
 */
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

const TabNavigator  = createBottomTabNavigator(
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

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App:          TabNavigator,
    UserSettings: SettingsStack,
  },
  {
    initialRouteName: 'App',
  }
))

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
