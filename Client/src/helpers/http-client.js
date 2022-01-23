import axios from "axios";
import { getAuth } from "firebase/auth";

const apiURL = process.env.REACT_APP_KNITTX_APIURL;

const axiosInstance = axios.create({
  baseURL: apiURL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    const auth = getAuth();
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
