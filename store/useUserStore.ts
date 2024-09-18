//user store with persist

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserState = {
  user: any;
};

export type User = {
  name?: string;
  surname?: string;
  email?: string;
  phone?: string;
  dob?: string;
  gender?: string;
  country?: string;
  city?: string;
};

export type UserAction = {
  setUser: (data: User) => void;
  user: User | null;
};

//use zustand persist
export const useUserStore = create<UserAction & UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (data) => set(() => ({ user: data })),
    }),
    {
      name: 'user',
      getStorage: () => localStorage,
    },
  ),
);
