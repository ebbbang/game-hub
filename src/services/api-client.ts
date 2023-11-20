import axios, { AxiosRequestConfig } from "axios";

export interface DataResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '86efd87b07734db8941e703ab79bb4eb'
  }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = async (config?: AxiosRequestConfig) => {
    return axiosInstance.get<DataResponse<T>>(this.endpoint, config).then(res => res.data);
  }
}

export default APIClient