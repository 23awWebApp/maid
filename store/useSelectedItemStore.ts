import create from 'zustand';

interface SelectedItemStore {
  selectedItems: string[];
  daysMap: { [key: string]: string | null };
  addSelectedItem: (item: string) => void;
  removeSelectedItem: (item: string) => void;
  setDaysForItem: (item: string, days: string) => void;
}

const useSelectedItemStore = create<SelectedItemStore>((set) => ({
  selectedItems: [],
  daysMap: {},
  addSelectedItem: (item: string) => set((state) => ({
    selectedItems: [...state.selectedItems, item],
    daysMap: { ...state.daysMap, [item]: null },
  })),
  removeSelectedItem: (item: string) => set((state) => {
    const { [item]: _, ...newDaysMap } = state.daysMap;
    return {
      selectedItems: state.selectedItems.filter((i) => i !== item),
      daysMap: newDaysMap,
    };
  }),
  setDaysForItem: (item: string, days: string) => set((state) => ({
    daysMap: { ...state.daysMap, [item]: days },
  })),
}));

export default useSelectedItemStore;
