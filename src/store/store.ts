import { create } from "zustand";
import { IUser } from "../types/user";
import { getCurrentUser } from "../utils/services/auth";

type Store = {
  authUser: IUser | null;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};

const useStore = create<Store>((set) => ({
  authUser: getCurrentUser(),
  loading: false,
  setLoading: (loading) => set((state) => ({ ...state, loading })),
}));

export default useStore;
