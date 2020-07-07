import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://food-builder-17e1e.firebaseio.com/',
});

export default instance;
