import axios from "axios";
import queryString from "query-string";
import { cookies } from "next/headers";
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const axiosClient = axios.create({
    baseURL: process.env.NEXT_API_URL,
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
    const token = cookies().get("token");
    if (token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
});

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    throw error;
});

export default axiosClient;
