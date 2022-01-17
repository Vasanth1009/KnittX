import axios from 'axios';

const apiURL =
  process.env.REACT_APP_KNITTX_APIURL;

export default axios.create({
  baseURL: apiURL,
});
