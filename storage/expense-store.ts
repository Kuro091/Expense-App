import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { createJSONStorage, persist, subscribeWithSelector } from 'zustand/middleware';
import { zustandStorage } from '../lib/zustand-async-storage';
import { EXPENSE } from '../types/expense';
import { DUMMY_EXPENSES } from '../types/expense';
import { isValidDate } from '../utils/date';

export interface ExpenseState {
  expenses: EXPENSE[];
  addExpense: (expense: Omit<EXPENSE, 'id'>) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expense: Partial<Omit<EXPENSE, 'id'>>) => void;
  resetExpenses: () => void;
}

const deserializeExpenses = (expenses: EXPENSE[]): EXPENSE[] => {
  return expenses.map(expense => ({
    ...expense,
    date: new Date(expense.date)
  }));
};

export const useExpenseStore = create<ExpenseState>()(
  subscribeWithSelector(
    persist(
      (set) => ({
        expenses: DUMMY_EXPENSES,
        addExpense: (expense) =>
          set((state) => ({
            expenses: [
              {
                ...expense,
                id: Math.random().toString(),
                date: new Date(expense.date)
              },
              ...state.expenses,
            ],
          })),
        deleteExpense: (id) =>
          set((state) => ({
            expenses: state.expenses.filter((expense) => expense.id !== id),
          })),
        updateExpense: (id, updatedExpense) =>
          set((state) => ({
            expenses: state.expenses.map((expense) =>
              expense.id === id
                ? {
                  ...expense,
                  ...updatedExpense,
                  date: new Date(updatedExpense.date || expense.date)
                }
                : expense
            ),
          })),
        resetExpenses: () => set({ expenses: DUMMY_EXPENSES }),
      }),
      {
        name: 'expense-storage',
        storage: createJSONStorage(() => zustandStorage),
        onRehydrateStorage: () => (state) => {
          if (state) {
            state.expenses = deserializeExpenses(state.expenses);
          }
        }
      }
    )
  )
);

export const useShallowExpenseStore = () => useExpenseStore(useShallow((state) => state));
