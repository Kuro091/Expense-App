import { Text, View } from "react-native";
import { ExpensesOutput } from "../../components/expenses/ExpensesOutput";
import { useExpenseStore } from "../../storage/expense-store";
import { useMemo } from "react";

export default function ExpenseRecentScreen() {
  const expenses = useExpenseStore((state) => state.expenses);

  const recentExpenses = useMemo(() => {
    return [...expenses]
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
