import axios from 'axios';

const axiosInstance = axios.create({
  // TODO replace this with something from .env (duh)
  baseURL: 'http://localhost:3001/',
});

export default async <T>(url: string): Promise<T> =>
  (await axiosInstance.get(url)).data;
