import { FlatList, StyleSheet, Text, View } from "react-native";
import { EXPENSE } from "../../types/expense";
import { ExpensesSummary } from "./ExpensesSummary";
import { ExpensesList } from "./ExpensesList";
import { GLOBAL_STYLES } from "../../common/colors";

interface ExpensesOutputProps {
  expenses: EXPENSE[];
  expensesPeriod: string;
  fallbackText?: string;
}

export const ExpensesOutput = ({
  expenses,
  expensesPeriod,
  fallbackText,
}: ExpensesOutputProps) => {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
