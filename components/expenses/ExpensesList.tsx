import { FlatList, Text, View } from "react-native";
import { EXPENSE } from "../../types/expense";
import ExpenseItem from "./ExpenseItem";

interface ExpensesListProps {
  expenses: EXPENSE[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <ExpenseItem expense={item} />;
      }}
    />
  );
};
