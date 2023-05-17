import axios from "axios";
import { cookies } from "next/headers";
import queryString from "query-string";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: false,
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    paramsSerializer: (params) => queryString.stringify(params)
});

axiosClient.interceptors.request.use(async (config) => {
    const newConfig = { ...config };
    const cookieStore = cookies();
    const token = cookieStore.get('accessToken')?.value;
  

    if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
});

axiosClient.interceptors.response.use((response) => {
    if (response.data && response) {
        return response;
    }

    return response;
}, async (error) => {
       const originalConfig = error.config;

    if (originalConfig.url !== "/auth/signin" && error.response) {
      // Access Token was expired
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axiosClient.post("auth/staff/refresh-token", {
              accessToken: cookies().get("accessToken")?.value,
              refreshToken: cookies().get("refreshToken")?.value,
          });

         

          return axiosClient(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(error);
});

export default axiosClient;
