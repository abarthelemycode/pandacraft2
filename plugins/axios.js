import Vue from 'vue';
import axios from 'axios';

// axios instance if we want ajax requests
const instance = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`
})


instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

Vue.use(instance);
