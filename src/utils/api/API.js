import RequestMaker from "./RequestMaker";
import LoginAPI from "./Login/LoginAPI";
import EventAPI from "./Events/EventAPI";


export const buildAuthorization = (token) => {  
  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };
}

class API extends RequestMaker {
  constructor() {
    super();
    this.LoginAPI = new LoginAPI(this.instance);
    this.EventAPI = new EventAPI(this.instance);
  }
}

export default new API();