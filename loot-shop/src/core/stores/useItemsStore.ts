import create from 'zustand';
import { ShopItem } from '../data/models/ShopItem';

type ShopItemExtended = Pick<ShopItem, 'id'> & {
  count?: number;
};

type Store = {
  items: ShopItemExtended[];
  getItem: (id: number | string) => void;
  setItems: (items: ShopItemExtended[]) => void;
  updateItemCount: (id: number | string, count: number) => void;
};

export const useItemsStore = create<Store>((set, get) => ({
  items: [],
  getItem: (id) => get().items.filter((x) => x.id === id)[0],
  setItems: (items) => set({ items }),
  updateItemCount: (id, count) =>
    set((state) => ({
      items: state.items.map((shopItem) =>
        shopItem.id === id ? { ...shopItem, count } : shopItem
      ),
    })),
}));
