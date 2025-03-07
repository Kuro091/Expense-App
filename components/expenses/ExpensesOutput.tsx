import { FlatList, Text, View } from 'react-native';
import { EXPENSE } from '../../types/expense';
import { ExpensesSummary } from './ExpensesSummary';
import { ExpensesList } from './ExpensesList';

interface ExpensesOutputProps {
  expenses: EXPENSE[];
  expensesPeriod: string;
}

export const ExpensesOutput = ({ expenses, expensesPeriod }: ExpensesOutputProps) => {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};
