import { create } from 'zustand';

export type RegisterState = {
  currentAuthStage: 'phoneNumber' | 'code' | 'success' | 'error';
  phoneNumber: string;
  isLoggedIn: boolean;
  showAuth: boolean;
  authShown: boolean;
  email: string;
};

export type RegisterAction = {
  setCurrentAuthStage: (data: RegisterState['currentAuthStage']) => void;
  setPhoneNumber: (data: RegisterState['phoneNumber']) => void;
  setIsLoggedIn: (data: RegisterState['isLoggedIn']) => void;
  setAuthShown: (data: RegisterState['authShown']) => void;
  setShowAuth: (data: RegisterState['showAuth']) => void;
  setEmail: (data: RegisterState['email']) => void;
};

export const useAuthStore = create<RegisterAction & RegisterState>()((set) => ({
  currentAuthStage: 'phoneNumber',
  isLoggedIn: false,
  showAuth: false,
  authShown: false,
  phoneNumber: '',
  email: '',
  setCurrentAuthStage: (data) => set(() => ({ currentAuthStage: data })),
  setPhoneNumber: (data) => set(() => ({ phoneNumber: data })),
  setIsLoggedIn: (data: boolean) => set(() => ({ isLoggedIn: data })),
  setAuthShown: (data) => set(() => ({ authShown: data })),
  setShowAuth: (data) => set(() => ({ showAuth: data })),
  setEmail: (data) => set(() => ({ email: data })),
}));
