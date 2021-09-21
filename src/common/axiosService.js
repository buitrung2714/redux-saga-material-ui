import axios from "axios";

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleFailed);
    this.instance = instance;
  }

  handleSuccess(response) {
    return response;
  }

  handleFailed(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, req) {
    return this.instance.post(url, req);
  }
}

export default new AxiosService();
