import { combineReducers } from 'redux'
import userReducer from './userReducer'
import globalReducer from './globalReducer'
import eventReducer from './eventReducer';

export default combineReducers({
  userData: userReducer,
  global: globalReducer,
  eventData: eventReducer
});