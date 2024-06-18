// store/selectedItemStore.ts
import { create } from "zustand";

interface SelectedItemStore {
    selectedItems: string[];
    setSelectedItems: (items: string[]) => void;
    addSelectedItem: (item: string) => void;
    removeSelectedItem: (item: string) => void;
}

export const useSelectedItemStore = create<SelectedItemStore>((set) => ({
    selectedItems: [],
    setSelectedItems: (items) => set({ selectedItems: items }),
    addSelectedItem: (item) =>
        set((state) => ({ selectedItems: [...state.selectedItems, item] })),
    removeSelectedItem: (item) =>
        set((state) => ({
            selectedItems: state.selectedItems.filter(
                (selectedItem) => selectedItem !== item
            ),
        })),
}));
