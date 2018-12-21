import axios from 'axios';

class RequestMaker {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://soul-api.test.btservers.com.br/api/',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

export default RequestMaker;