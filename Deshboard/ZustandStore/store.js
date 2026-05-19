import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginInfo = create((set) => ({
  user: null,
  addUserInfo: (userData) => set(() => ({ user: userData })),
 removeUserInfo: () => set({ user: null }),

}));

export default useLoginInfo;
