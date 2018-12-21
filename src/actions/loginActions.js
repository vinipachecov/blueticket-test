import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./actionTypes"
import { AsyncStorage } from 'react-native';
import API from "../utils/api/API";
import NavigationService from "../Navigation/NavigationService";
import { asyncStorageKey } from "../utils";
import { sendUserEvents } from "./eventActions";


export const signInUser = (email, password ) => {
  return async dispatch  => {
    try {
      dispatch(loginStart())                    
      // send api request
      const tokenData = await API.LoginAPI.signInUser(email, password)      
      // get User auth data
      const userData = await API.LoginAPI.getUserAuth(tokenData.access_token)
      const token = tokenData.access_token

      //get event data 
      const pdvId = userData.pdv[0].codigo_ponto_venda
      const posCode = userData.pos[0].codigo      
      const eventList = await API.EventAPI.fetchUserEvents(token, posCode, pdvId)      
      dispatch(sendUserEvents(eventList));
      dispatch(loginSuccess(tokenData, userData)) 
      // save user data in local storage
       await AsyncStorage.mergeItem(asyncStorageKey, JSON.stringify({
          email,
          password
        })
      )  
      NavigationService.navigate('AuthenticatedStack')    
    } catch (error) {      
      console.log(error)
      dispatch(loginFail())      
      ToastAndroid.show('Sign in failed. Check your internet connection and your user credentials and try again.', ToastAndroid.LONG);
    }
  }
} 

export const relogin = () => {
  return async dispatch => {    
    try {
      dispatch(loginStart())                    


      // get event data
      NavigationService.navigate('AuthenticatedStack')    
    } catch (error) {      
      dispatch(loginFail())      
      ToastAndroid.show('Sign in failed. Check your internet connection and your user credentials and try again.', ToastAndroid.LONG);
    }
  }
}


export const loginStart = () => ({
  type: LOGIN_USER_START,  
})

export const loginSuccess = (tokenData, userData) => ({
  type: LOGIN_USER_SUCCESS,
  payload: {
    ...tokenData,
    ...userData
  }
})

export const loginFail = (error) => ({
  type: LOGIN_USER_FAIL,  
  error
})



