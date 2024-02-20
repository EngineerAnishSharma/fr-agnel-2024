import {create} from 'zustand';

type DevCheckStore = {
    devMode: boolean;
    setDevMode: (devMode: boolean) => void;
    toggleDevMode: () => void; // Added toggleDevMode function
};

const useDevCheckStore = create<DevCheckStore>((set) => ({
    devMode: false,
    setDevMode: (devMode) => set({ devMode }),
    toggleDevMode: () => set((state) => ({ devMode: !state.devMode })), // Implemented toggleDevMode function
}));

export default useDevCheckStore;

