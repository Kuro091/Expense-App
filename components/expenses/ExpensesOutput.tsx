import { FlatList, StyleSheet, Text, View } from "react-native";
import { EXPENSE } from "../../types/expense";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import { GLOBAL_STYLES } from "../../common/colors";

interface ExpensesOutputProps {
  expenses: EXPENSE[];
  expensesPeriod: string;
}

export const ExpensesOutput = ({
  expenses,
  expensesPeriod,
}: ExpensesOutputProps) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GLOBAL_STYLES.colors.primary700,
  },
});
