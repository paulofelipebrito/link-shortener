import axios from 'axios';

export const key = process.env.REACT_APP_KEY;

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/', 
  headers:{
    'Authorization': `Bearer ${key}`
  }
})

export default api;