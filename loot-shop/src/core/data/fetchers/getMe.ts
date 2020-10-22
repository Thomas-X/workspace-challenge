import defaultFetcher from './defaultFetcher';
import { endpoints } from '../endpoints';
import { User } from '../models/User';

// TODO share typings between backend and frontend, but time-constrained to set this up for a challenge
export const getMe = async (key: string) => {
  return defaultFetcher<User>(endpoints.get.me);
};
