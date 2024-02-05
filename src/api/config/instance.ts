import axios from 'axios';

import getTransformers from './transformers';

const instance = axios.create({
  // withCredentials: true,
  transformResponse: getTransformers(axios),

  baseURL: process.env.REACT_APP_BASE_API,
});

export default instance;
