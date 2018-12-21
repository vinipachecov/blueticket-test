import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from '../screens/AuthStack/LoginScreen/LoginScreen'
import UserHomeScreen from '../screens/AuthenticatedStack/UserHomeScreen/UserHomeScreen'

const AuthenticatedStack = createStackNavigator({
  userHome: UserHomeScreen
},{
  headerMode: 'none',
  initialRouteName: 'userHome'
})

const AuthStack = createStackNavigator({
  loginScreen: LoginScreen
}, {
  headerMode: 'none'
})

const navStack = createSwitchNavigator({
  AuthStack: AuthStack,    
  AuthenticatedStack: AuthenticatedStack 
},{
  headerMode: 'none',
  initialRouteName: 'AuthStack'
})

const AppStack = createAppContainer(navStack)
export default AppStack;
