import { Pressable, StyleSheet, Text, View } from "react-native";
import { EXPENSE } from "../../types/expense";
import { GLOBAL_STYLES } from "../../common/colors";
import { getFormattedDate } from "../../utils/date";

function ExpenseItem({ expense }: { expense: EXPENSE }) {
  function expensePressHandler() {
    console.log("Pressed");
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: "#210644" }}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {expense.description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(expense.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{expense.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GLOBAL_STYLES.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GLOBAL_STYLES.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
  },
  textBase: {
    color: GLOBAL_STYLES.colors.primary,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GLOBAL_STYLES.colors.primary500,
    fontWeight: "bold",
  },
});
