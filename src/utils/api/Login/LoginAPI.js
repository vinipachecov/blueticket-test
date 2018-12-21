// @flow.
import { AxiosInstance } from "axios";
import { buildAuthorization } from "../API";

class LoginAPI {
  constructor(axios: AxiosInstance) {
    this.instance = axios;    
  }

  /**
   * Send user sign in call 
   * @param {*} email 
   * @param {*} password 
   */
  async signInUser (email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const body = {
          email, password
        }        
        const res = await this.instance.post('auth/login', body)        
        resolve(res.data);
      } catch (error) {
        reject(error);
      }
    });
  }    
  
  
  async getUserAuth (token) {
    return new Promise(async (resolve, reject) => {
      try {
        const config = buildAuthorization(token);              
        const res = await this.instance.get('auth/me', config);        
        resolve(res.data);
      } catch (error) {
        reject(error);
      }      
    })
  }
}

export default LoginAPI;