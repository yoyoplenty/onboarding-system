import { create } from "zustand";
import { IUser } from "../types/user";
import { getCurrentUser } from "../utils/services/auth";

type Store = {
  authUser: IUser | null;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  setAuthUser: (authUser: IUser | null) => void;
};

const useStore = create<Store>((set) => ({
  authUser: getCurrentUser(),
  loading: false,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setAuthUser: (authUser) => set((state) => ({ ...state, authUser })),
}));

export default useStore;
