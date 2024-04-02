import axios, { AxiosError, AxiosResponse } from "axios";
import { handleError } from "./error_handler";

export const AXIOS = axios.create(
    {
        baseURL : "http://localhost:8000"
    }
)

AXIOS.interceptors.response.use(
    (response: AxiosResponse) => {
        // Do something with response data
        return response;
    },
    (error : AxiosError) => {
        return handleError(error);
    }
);