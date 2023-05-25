
import axios from "axios";
import queryString from "query-string";
import { getCookie, setCookie } from 'cookies-next';


// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
  const newConfig = { ...config };
  
    const token = getCookie("accessToken") ?? "";
    if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
});

axiosClient.interceptors.response.use((response) => {
    if (response) {
        return response;
    }

    return response;
}, async (error) => {
       const originalConfig = error.config;

    if (originalConfig.url !== "/auth/login" && error.response) {
      // Access Token was expired
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const res = await axiosClient.post("auth/refresh-token", {
              accessToken: getCookie("accessToken"),
              refreshToken: getCookie("refreshToken"),
          });
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data?.data?.accessToken;
        setCookie('accessToken', res.data?.data?.accessToken)
        setCookie('refreshToken', res.data?.data?.refreshToken)

          return axiosClient(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(error);
});

export default axiosClient;


