import { create } from "zustand";

interface SelectedItemStore {
    selectedItems: string[];
    addSelectedItem: (item: string) => void;
    removeSelectedItem: (item: string) => void;
}

const useSelectedItemStore = create<SelectedItemStore>((set) => ({
    selectedItems: [],
    addSelectedItem: (item: string) => set((state) => ({
        selectedItems: [...state.selectedItems, item],
    })),
    removeSelectedItem: (item: string) => set((state) => ({
        selectedItems: state.selectedItems.filter((i) => i !== item),
    })),
}));

export default useSelectedItemStore;
