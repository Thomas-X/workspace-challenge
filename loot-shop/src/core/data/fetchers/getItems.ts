import defaultFetcher from './defaultFetcher';
import { ShopItem } from '../models/ShopItem';
import { endpoints } from '../endpoints';

// TODO share typings between backend and frontend, but time-constrained to set this up for a challenge
export const getItems = async (key: string) => {
  const c = await defaultFetcher<ShopItem[]>(endpoints.get.items);

  console.log('getitems', c);
  return c;
};
