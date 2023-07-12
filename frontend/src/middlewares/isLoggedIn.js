import { useAuthStore } from "@/stores/auth";

export const isLoggedIn = () => {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return { path: "/" };
  } else {
    return true;
  }
};
