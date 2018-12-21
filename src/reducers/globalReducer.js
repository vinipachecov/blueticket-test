import { LOGIN_USER_START, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, FETCHING_EVENT_DATA_FAIL, FETCHING_EVENT_DATA_START, FETCHING_EVENT_DATA_SUCCESS } from "../actions/actionTypes";

const initialState = {
  loading: false,  
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_START:
      return { 
        ...state, 
        loading: true,
        error: null      
      }
    case LOGIN_USER_FAIL: 
      return {
        ...state,
        loading: false      
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false
      }  
    case FETCHING_EVENT_DATA_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case FETCHING_EVENT_DATA_FAIL:
      return {
        ...state,
        loading: false
      }
    case FETCHING_EVENT_DATA_START:
      return {
        ...state,
        loading: true
      }
  default:
    return state
  }
}
