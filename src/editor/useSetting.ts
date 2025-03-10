import { create } from "zustand";
import { persist } from "zustand/middleware";

type SettingsState = {
  isMenuOpen: boolean;
  showControls: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
  toggleControls: () => void;
  setShowControls: (show: boolean) => void;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      isMenuOpen: false,
      showControls: true,
      setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      toggleControls: () =>
        set((state) => ({ showControls: !state.showControls })),
      setShowControls: (show) => set({ showControls: show }),
    }),
    {
      name: "settings-storage",
    }
  )
);

// Simple hook to access the store
export const useSetting = () => useSettingsStore();
