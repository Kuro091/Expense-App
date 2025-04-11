import { StyleSheet, Text, View } from "react-native";
import { ExpensesOutput } from "../../components/expenses/ExpensesOutput";
import { useExpenseStore } from "../../storage/expense-store";
import Button from "../../components/UI/Button";
import { GLOBAL_STYLES } from "../../common/colors";

export default function ExpenseListScreen() {
  const expenses = useExpenseStore((state) => state.expenses);
  const resetExpenses = useExpenseStore((state) => state.resetExpenses);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expenses}
        expensesPeriod="Last 7 days"
        fallbackText="No expenses found."
      />
      <View style={styles.resetButtonContainer}>
        <Button onPress={resetExpenses} style={styles.resetButton}>
          Reset to Default Data
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resetButtonContainer: {
    padding: 16,
    paddingBottom: 24,
    alignItems: "center",
    backgroundColor: GLOBAL_STYLES.colors.primary700,
  },
  resetButton: {
    minWidth: 200,
  },
});
