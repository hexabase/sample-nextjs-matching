import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiResponse<T> {
  data: T;
  status: number;
}

export class ApiError extends Error {
  response: AxiosResponse;

  constructor(response: AxiosResponse) {
    super(`API error ${response.status}`);
    this.response = response;
  }
}

export const createAxiosInstance = (
  config?: AxiosRequestConfig
): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_LINKER_API,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        throw new ApiError(error.response);
      }
      throw error;
    }
  );

  return axiosInstance;
};
