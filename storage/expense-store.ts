import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { createJSONStorage, persist, subscribeWithSelector } from 'zustand/middleware';
import { zustandStorage } from '../lib/zustand-async-storage';

export interface ExpenseState {
}

export const useMealsStore = create<ExpenseState>()(
  subscribeWithSelector(
    persist(
      (set, get) => ({
      }),
      {
        name: 'async-storage',
        storage: createJSONStorage(() => zustandStorage),
      }
    )
  )
);

export const useShallowMealsStore = () => useMealsStore(useShallow((state) => state));
