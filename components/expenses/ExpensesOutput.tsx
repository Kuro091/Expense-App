import { Text, View } from 'react-native';
import { EXPENSE } from '../../types/expense';

interface ExpensesOutputProps {
  expenses: EXPENSE[];
}
export const ExpensesOutput = ({ expenses }: ExpensesOutputProps) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};
