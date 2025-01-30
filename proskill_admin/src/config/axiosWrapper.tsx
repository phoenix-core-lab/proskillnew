import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import request from "./request";

// Функция для обновления заголовков (например, добавление токена)
export const setAuthToken = (token: string | null) => {
  if (token) {
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete request.defaults.headers.common["Authorization"];
  }
};

// Обработчик ошибок
const handleError = (error: any) => {
  console.error("API Error:", error.response?.data || error.message);
  return Promise.reject(error);
};

// Враппер для запросов
const axiosWrapper = {
  get: async <T,>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await request.get(url, config);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  post: async <T,>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await request.post(url, data, config);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  put: async <T,>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await request.put(url, data, config);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  delete: async <T,>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
      const response: AxiosResponse<T> = await request.delete(url, config);
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },
};

export default axiosWrapper;
