import { create } from "zustand";
import { axiosInstance } from "../src/lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isLoggingIn: false,
  isCreatingUser: false,

  createUser: async (formData) => {
    set({ isCreatingUser: false });
    try {
      const res = await axiosInstance.post("/api/auth/signup", formData);
      set({ authUser: res.data.data[0] });
      toast.success("Successfully created an account!");
    } catch (error) {
      console.log("error in createUser store", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isCreatingUser: true });
    }
  },

  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/api/auth/login", formData);
      set({ authUser: res.data.data[0] });
      toast.success("Logged in successfully!");
    } catch (error) {
      console.log("error in login store", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully!");
    } catch (error) {
      console.log("error in logout store", error);
      toast.error("Internal Server Error");
    }
  },
}));
