import { StyleSheet, Text, View } from "react-native";
import { EXPENSE } from "../../types/expense";
import { GLOBAL_STYLES } from "../../common/colors";

interface ExpensesSummaryProps {
  expenses: EXPENSE[];
  periodName: string;
}

export const ExpensesSummary = ({
  expenses,
  periodName,
}: ExpensesSummaryProps) => {
  const expensesSum = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>Total expenses: ${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GLOBAL_STYLES.colors.primary,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GLOBAL_STYLES.colors.primary600,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GLOBAL_STYLES.colors.primary500,
  },
});
