import { create } from "zustand";

const useEventsStore = create((set) => ({
    events: [],
    addEvent: (newEvent) => set((state) => ({
        events: [...state.events, newEvent]
      })),
  }));
  
  export default useEventsStore;