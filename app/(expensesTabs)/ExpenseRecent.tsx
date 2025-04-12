import { Text, View } from "react-native";
import { ExpensesOutput } from "../../components/expenses/ExpensesOutput";
import { useExpenseStore } from "../../storage/expense-store";
import { useMemo } from "react";
import { isValidDate } from "../../utils/date";

export default function ExpenseRecentScreen() {
  const expenses = useExpenseStore((state) => state.expenses);

  const recentExpenses = useMemo(() => {
    const validExpenses = expenses.filter((expense) => {
      const isValid = expense.date && isValidDate(expense.date);
      if (!isValid) {
        console.warn("Invalid date found in expense:", {
          id: expense.id,
          description: expense.description,
          date: expense.date,
        });
      }
      return isValid;
    });

    return validExpenses
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 7);
  }, [expenses]);

  return (
    <ExpensesOutput
      expensesPeriod="7 Most Recent"
      expenses={recentExpenses}
      fallbackText="No expenses found."
    />
  );
}
