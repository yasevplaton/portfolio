import axios from "axios";
import { setToken, getToken } from "@/helpers/token";

const token = getToken();

axios.defaults.baseURL = "https://webdev-api.loftschool.com";
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  error => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      return axios.post("/refreshToken").then(response => {
        const token = response.data.token;
        setToken(token);
        axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        originalRequest.headers["Authorization"] = `Bearer ${token}`;
        return axios(originalRequest);
      });
    }
    return Promise.reject(error);
  }
);

export default axios;