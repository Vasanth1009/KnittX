import axios from 'axios';

const apiURL =
  process.env.REACT_APP_KNITTX_APIURL || 'http://localhost:5000/api';

export default axios.create({
  baseURL: apiURL,
});
