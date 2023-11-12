import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { useMemo } from 'react';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AccountFavoritesState {
  accountFavorites: string[];
  names: Record<string, string>;
  setAccountFavorites: (addresses: string[]) => void;
  setNames: (names: Record<string, string>) => void;
}

const useAccountFavoritesStore = create<AccountFavoritesState>()(
  persist(
    immer((set) => ({
      accountFavorites: [],
      names: {},
      setAccountFavorites: (addresses: string[]) => set({ accountFavorites: addresses }),
      setNames: (names: Record<string, string>) => set({ names }),
    })),
    {
      name: 'account-favorites',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

const useAccountFavorites = (account?: string) => {
  const { accountFavorites, names, setAccountFavorites, setNames } = useAccountFavoritesStore();
  const isFavorite = useMemo(
    () => (account ? accountFavorites.includes(account) : false),
    [account, accountFavorites]
  );

  const saveAccountFavorite = (address: string) => {
    if (!accountFavorites.includes(address)) {
      setAccountFavorites([address, ...accountFavorites]);
    }
  };

  const removeAccountFavorite = (address: string) => {
    if (accountFavorites.includes(address)) {
      setAccountFavorites(accountFavorites.filter((account) => account !== address));
      removeAccountName(address);
    }
  };

  const saveAccountName = ({ address, name }: { address: string; name: string }) => {
    setNames({ ...names, [address]: name });
  };

  const removeAccountName = (address: string) => {
    if (names[address]) {
      const { ...rest } = Object.fromEntries(
        Object.entries(names).filter(([key]) => key !== address)
      );
      setNames(rest);
    }
  };

  return {
    isFavorite,
    accountFavorites,
    names,
    saveAccountFavorite,
    removeAccountFavorite,
    saveAccountName,
    removeAccountName,
  };
};

export default useAccountFavorites;
