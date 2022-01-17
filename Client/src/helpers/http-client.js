import axios from 'axios';

const apiURL =
  process.env.REACT_APP_KNITTX_APIURL;

export default axios.create({
  baseURL: apiURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
  },
});
