import create from 'zustand';

interface SelectedItemStore {
  selectedItems: string[];
  daysMap: { [key: string]: string | null };
  addSelectedItem: (item: string) => void;
  removeSelectedItem: (item: string) => void;
  setDaysForItem: (item: string, days: string) => void;
  updateCleaningTime: (item: string) => void;
  incrementDaysMap: () => void;
}

const useSelectedItemStore = create<SelectedItemStore>((set) => ({
  selectedItems: [],
  daysMap: {},
  addSelectedItem: (item: string) => set((state) => ({
    selectedItems: state.selectedItems.includes(item) ? state.selectedItems : [...state.selectedItems, item],
    daysMap: state.daysMap[item] === undefined ? { ...state.daysMap, [item]: null } : state.daysMap,
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
  updateCleaningTime: (item: string) => set((state) => ({
    daysMap: { ...state.daysMap, [item]: "0" }, // Set the cleaning time to today
  })),
  incrementDaysMap: () => set((state) => {
    const newDaysMap = { ...state.daysMap };
    Object.keys(newDaysMap).forEach((item) => {
      if (newDaysMap[item] !== null) {
        newDaysMap[item] = (parseInt(newDaysMap[item] as string) + 1).toString();
      }
    });
    return { daysMap: newDaysMap };
  }),
}));

export default useSelectedItemStore;
