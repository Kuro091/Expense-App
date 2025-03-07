import { Text, View } from 'react-native';
import { EXPENSE } from '../../types/expense';

interface ExpensesSummaryProps {
  expenses: EXPENSE[];
  periodName: string;
}

export const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>Total expenses: ${expensesSum.toFixed(2)}</Text>
    </View>
  );
};
