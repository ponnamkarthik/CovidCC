import axios, { AxiosError, AxiosRequestConfig } from "axios";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      ...config.headers,
    };
  }

  return config;
};
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const baseUrl = "https://covidhelp.commonscollective.cc:8000";
const config: AxiosRequestConfig = {
  baseURL: baseUrl,
};

const http = axios.create(config);

http.interceptors.request.use(onRequest, onRequestError);

export default http;
