import { FlatList, Text, View } from 'react-native';
import { EXPENSE } from '../../types/expense';

interface ExpensesListProps {
  expenses: EXPENSE[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text>{item.description}</Text>;
      }}
    />
  );
};
