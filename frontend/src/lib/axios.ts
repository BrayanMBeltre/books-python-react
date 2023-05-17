import { backendURL } from "@/constant";
import { UninterceptedApiError } from "@/types/api";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error: AxiosError<UninterceptedApiError>) => {
    if (error.response?.data.error) {
      return Promise.reject({
        ...error,
        response: {
          ...error.response,
          data: {
            ...error.response.data,
            message:
              typeof error.response.data.error === "string"
                ? error.response.data.error
                : Object.values(error.response.data.error)[0],
          },
        },
      });
    }
    return Promise.reject(error);
  }
);

export default api;
