import { LOGIN_USER_START, LOGIN_USER_SUCCESS } from "../actions/actionTypes";

const initialState = {
  token: null,  
  expiresIn: '',
  user: null,
  user_org: null,
  pdv: null,
  pos: null,    
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
    return { 
      ...state, 
      loading: true      
    }  
  case LOGIN_USER_SUCCESS:
    return {
      ...state,
      loading: false,      
      token: action.payload.access_token,
      expiresIn: action.payload.expiresIn,
      user: action.payload.user,
      user_org: action.payload.user_org,
      pdv: action.payload.pdv[0],
      pos: action.payload.pos[0]
    }
  default:
    return state
  }
}
