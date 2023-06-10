import axios, { AxiosError, AxiosResponse } from 'axios';

export const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:5002/api/',
  headers: {},
});

axiosClient.interceptors.request.use(
  function (config: any) {
    // const token: string = localStorage.getItem('accessToken') || '';
    // if (token) {
    //   (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    // }
    return config;
  },
  function (error) {
    console.error('axiosClient::request', error)
  },
);

axiosClient.interceptors.response?.use(
  function (response: AxiosResponse) {
    if (response && response?.data) {
      return response?.data;
    }
    return response;
  },
  function (error: AxiosError) {
    console.error('axiosClient::response', error)
    // if (error.response?.status == 401) {
    // }
    // if (error.response?.status == 403) {
    // }
    // not 200 => call api login or refesh token
  },
);
