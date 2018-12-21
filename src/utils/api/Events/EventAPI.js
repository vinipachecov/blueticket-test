// @flow.
import { AxiosInstance } from "axios";

class EventAPI {
  constructor(axios: AxiosInstance) {
    this.instance = axios;    
  }

  /**
   *  Fetch user events list
   * @param {*} token 
   * @param {*} posCode 
   * @param {*} pdvId 
   */
  async fetchUserEvents (token, posCode, pdvId)   {
    return new Promise(async (resolve, reject) => {       
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'POS':`${posCode}`,
          'PDV':`${pdvId}`
        }
      }     
      try {                
        const res = await this.instance.get('test/events/list', config)        
        resolve(res.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }      

  async fetchEventProductReport (token, pdvId, posCode, eventId, range)   {
    return new Promise(async (resolve, reject) => {       
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'POS':`${posCode}`,
          'PDV':`${pdvId}`
        }
      }     
      try {                
        const res = await this.instance.get(`test/reports/products/${pdvId}/${eventId}/${range}`, config)        
        resolve(res.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }      

  async fetchEventDailyReport (token, pdvId, posCode, eventId, range)   {
    return new Promise(async (resolve, reject) => {       
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'POS':`${posCode}`,
          'PDV':`${pdvId}`
        }
      }     
      try {                
        const res = await this.instance.get(`test/reports/daily/${pdvId}/${eventId}/${range}`, config)        
        resolve(res.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }      
}

export default EventAPI;