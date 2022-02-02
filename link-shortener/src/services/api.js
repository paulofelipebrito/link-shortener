import axios from 'axios';

export const key = "6e3537666080b25ca73a7b25b22c9bda44f1856f";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/', 
  headers:{
    'Authorization': `Bearer ${key}`
  }
})

export default api;