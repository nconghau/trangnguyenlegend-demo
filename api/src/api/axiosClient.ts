import axios, { AxiosError, AxiosHeaders, AxiosResponse } from 'axios';

export const axiosClient = axios.create({
  baseURL: `${process.env.API_KEY}`,
  headers: {},
});

axiosClient.interceptors.request.use(
  function (config: any) {
    const token = process.env.API_KEY;
    if (token) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);
    }
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
  },
);
