import { create } from "zustand";

type AuthStoreType = {
  id: string | null;
  setId: (id: string) => void;
  username: string | null;
  setUserName: (username: string) => void;
  email: string | null;
  setEmail: (email: string) => void;
  sex: string | null;
  setSex: (sex: string) => void;
  reset: () => void;
};

const useAuthStore = create<AuthStoreType>((set) => ({
  id: localStorage.getItem("id"),
  setId: (id: string) => {
    set({ id });
    localStorage.setItem("id", id);
  },
  username: localStorage.getItem("username"),
  setUserName: (username: string) => {
    set({ username });
    localStorage.setItem("username", username);
  },
  email: localStorage.getItem("email"),
  setEmail: (email: string) => {
    set({ email });
    localStorage.setItem("email", email);
  },
  sex: localStorage.getItem("sex"),
  setSex: (sex: string) => {
    set({ sex });
    localStorage.setItem("sex", sex);
  },
  reset: () => {
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("sex");
  },
}));

export default useAuthStore;
