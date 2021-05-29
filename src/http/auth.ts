import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "https://covidhelp.commonscollective.cc:8000";
const config: AxiosRequestConfig = {
  baseURL: baseUrl,
};

const auth = axios.create(config);

export default auth;
