/**
 * Example of working with React Native Navigation to build an app.
 */

import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
}                           from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

import Icon                 from 'react-native-vector-icons/Ionicons'

import HomeScreen           from './src/screens/Home/Home'
import TopicsScreen         from './src/screens/Topics/Topics'
import DetailsScreen        from './src/screens/Details/Details'
import ListScreen           from './src/screens/List/List'
import SettingsScreen       from './src/screens/Settings/Settings/Settings'
import NotificationsScreen  from './src/screens/Settings/Notifications/Notifications'
import ProfileScreen        from './src/screens/Settings/Profile/Profile'
import PersonalInfoScreen   from './src/screens/Settings/PersonalInfo/PersonalInfo'
import AuthLoadingScreen    from './src/screens/Authentication/AuthLoading/AuthLoading'
import SignInScreen         from './src/screens/Authentication/SignIn/SignIn'
import SignUpScreen         from './src/screens/Authentication/SignUp/SignUp'
import {
  headerTextColor,
  authHeaderBackgroundColor,
  headerFontWeight,
  appHeaderBackgroundColor,
  topicsHeaderBackgroundColor,
}                           from './src/styles/index'

/**
 * Authentication Flow
 */
const AuthenticationStack = createStackNavigator(
  {
    SignIn:           SignInScreen,
    SignUp:           SignUpScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor:  headerTextColor,
      headerStyle:      { backgroundColor: authHeaderBackgroundColor },
      headerTitleStyle: { fontWeight: headerFontWeight },
    }
  },
)

/**
 * Create Settings Screen using a StackNavigator
 */
const SettingsStack = createStackNavigator(
  {
    Settings:       SettingsScreen,
    Profile:        ProfileScreen,
    Notifications:  NotificationsScreen,
    PersonalInfo:   PersonalInfoScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor:  headerTextColor,
      headerStyle:      { backgroundColor: appHeaderBackgroundColor },
      headerTitleStyle: { fontWeight: headerFontWeight },
    }
  },
)

const HomeStack = createStackNavigator(
  {
    Home:     HomeScreen,
    Details:  DetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor:  headerTextColor,
      headerStyle:      { backgroundColor: appHeaderBackgroundColor },
      headerTitleStyle: { fontWeight: headerFontWeight }
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
      headerTintColor:  headerTextColor,
      headerStyle:      { backgroundColor: topicsHeaderBackgroundColor },
      headerTitleStyle: { fontWeight: headerFontWeight }
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

const AppContainer = createAppContainer(createAnimatedSwitchNavigator(
  {
    AuthLoading:  AuthLoadingScreen,
    Auth:         AuthenticationStack,
    App:          TabNavigator,
    UserSettings: SettingsStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
))

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
