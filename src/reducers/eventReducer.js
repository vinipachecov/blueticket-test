import { SELECT_EVENT, FETCHING_EVENT_DATA_SUCCESS, SEND_USER_EVENTS } from "../actions/actionTypes";

const initialState = {
  eventList: [],
  productReport: [],
  dailyReport: null,
  selectedEventId: null,  
}

export default (state = initialState, { type, payload }) => {
  console.log(state, payload);
  switch (type) {
    case SEND_USER_EVENTS:
      return {
        ...state,
        eventList: payload
      }
    case FETCHING_EVENT_DATA_SUCCESS:
      return {
        ...state,
        productReport: payload.productReport,
        dailyReport: payload.dailyReport
      };
    case SELECT_EVENT:
      return {
        ...state,
        selectedEventId: payload        
      }
  default:
    return state
  }
}
