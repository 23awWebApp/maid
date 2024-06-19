// selectedItemStore.ts
import { create } from 'zustand';


interface SelectedItemStore {
    selectedItems: string[];
    addSelectedItem: (item: string) => void;
    removeSelectedItem: (item: string) => void; // Assuming 'item' is a string
}

const useSelectedItemStore = create<SelectedItemStore>((set) => ({
    selectedItems: [],
    addSelectedItem: (item) => set((state) => ({ selectedItems: [...state.selectedItems, item] })),
    removeSelectedItem: (item: string) => set((state) => ({ selectedItems: state.selectedItems.filter((i) => i !== item) })),
}));

export default useSelectedItemStore;
