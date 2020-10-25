import create from 'zustand';

type Store = {
  money: number;
  items: { [key: string]: number };
  setMoney: (money: number) => void;
  onCount: (id: string | number, count: number) => void;
};

export const useItemsStore = create<Store>((set) => ({
  money: 0,
  items: {},
  setMoney: (money) => set({ money }),
  onCount: (id, count) =>
    set((state) => ({
      items: {
        ...state.items,
        [id]: count,
      },
    })),
}));
