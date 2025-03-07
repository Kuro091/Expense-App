import { Text, View } from 'react-native';
import { ExpensesOutput } from '../../components/expenses/ExpensesOutput';
import { DUMMY_EXPENSES } from '../../types/expense';

export default function ExpenseListScreen() {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod='Last 7 days' />;
}
