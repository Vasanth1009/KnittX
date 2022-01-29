import axios from 'axios';
import { auth } from './firebase-config';

const apiURL = process.env.REACT_APP_KNITTX_APIURL;

const axiosInstance = axios.create({
  baseURL: apiURL,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const user = auth.currentUser;
    const token = user && (await user.getIdToken());
    console.log(user);
    return {
      ...config,
      headers: {
        ...config.headers,
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    };
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
