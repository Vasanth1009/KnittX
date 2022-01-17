import axios from 'axios';

const apiURL =
  process.env.REACT_APP_KNITTX_APIURL || 'http://localhost:5000/api';

export default axios.create({
  baseURL: apiURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
  },
});
