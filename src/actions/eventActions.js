import { 
  SEND_USER_EVENTS, 
  FETCHING_EVENT_DATA_FAIL, 
  FETCHING_EVENT_DATA_SUCCESS, 
  SELECT_EVENT, 
  FETCHING_EVENT_DATA_START
} from "./actionTypes";
import API from "../utils/api/API";

export const sendUserEvents = (events) => ({
  type: SEND_USER_EVENTS,
  payload: events
})

export const fetchingEventDataStart = () => ({
  type: FETCHING_EVENT_DATA_START  
})

export const fetchingEventDataFail = () => ({
  type: FETCHING_EVENT_DATA_FAIL,
  payload: payload
})

export const fetchingEventDataSucess = (productReport, dailyReport) => ({
  type: FETCHING_EVENT_DATA_SUCCESS,
  payload: {
    productReport,
    dailyReport
  }
})

export const selectEvent = (eventId) => ({
  type: SELECT_EVENT,
  payload: eventId
})



export const loadEventData = (eventId, token, pdvId, posCode, range = 7) => {
  return async dispatch => {
    try {
      dispatch(selectEvent(eventId));
      dispatch(fetchingEventDataStart()) 
      const productReport = await API.EventAPI.fetchEventProductReport(
        token, 
        pdvId, 
        posCode, 
        eventId, 
        range
        );
      
        const dailyReport = await API.EventAPI.fetchEventDailyReport(
          token,
          pdvId,
          posCode,
          eventId,
          range
        );
        console.log('daily report = ', dailyReport)

      dispatch(fetchingEventDataSucess(productReport, dailyReport))      
    } catch (error) {
      console.log(error);      
    }
  }
}