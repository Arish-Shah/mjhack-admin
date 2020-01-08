import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mjhackrevolution.firebaseio.com'
});

export default instance;
