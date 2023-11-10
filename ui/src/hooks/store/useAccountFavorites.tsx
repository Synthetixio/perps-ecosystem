import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { useMemo } from 'react';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AccountFavoritesState {
  accountFavorites: string[];
  setAccountFavorites: (addresses: string[]) => void;
}

const useAccountFavoritesStore = create<AccountFavoritesState>()(
  persist(
    immer((set) => ({
      accountFavorites: [],
      setAccountFavorites: (addresses: string[]) => set({ accountFavorites: addresses }),
    })), {
      name: 'account-favorites',
      storage: createJSONStorage(() => localStorage),
    }),
);

const useAccountFavorites = (account?: string) => {
  const {
    accountFavorites, setAccountFavorites,
  } = useAccountFavoritesStore();
  const isFavorite = useMemo(() => (account ? accountFavorites.includes(account) : false), [account, accountFavorites]);

  const saveAccountFavorite = (address: string) => {
    if (!accountFavorites.includes(address)) {
      setAccountFavorites([address, ...accountFavorites]);
    }
  };
  const removeAccountFavorite = (address: string) => {
    if (accountFavorites.includes(address)) {
      setAccountFavorites(accountFavorites.filter((account) => account !== address));
    }
  };
  return {
    isFavorite,
    accountFavorites,
    saveAccountFavorite,
    removeAccountFavorite,
  };
};

export default useAccountFavorites;
