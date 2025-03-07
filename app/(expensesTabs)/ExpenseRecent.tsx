import { Text, View } from 'react-native';
import { ExpensesOutput } from '../../components/expenses/ExpensesOutput';
import { DUMMY_EXPENSES } from '../../types/expense';

export default function ExpenseRecentScreen() {
  return <ExpensesOutput expensesPeriod='Last 7 days' expenses={DUMMY_EXPENSES} />;
}
