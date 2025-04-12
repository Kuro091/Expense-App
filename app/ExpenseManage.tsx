import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton";
import { GLOBAL_STYLES } from "../common/colors";
import Button from "../components/UI/Button";
import { useExpenseStore } from "../storage/expense-store";
import ExpenseForm from "../components/expenses/ExpenseForm";
import { getFormattedDate } from "../utils/date";

export default function ExpenseManageScreen() {
  const navigation = useNavigation();
  const { expenseId } = useLocalSearchParams<{ expenseId: string }>();
  const isEditing = !!expenseId;

  const { addExpense, updateExpense, deleteExpense, expenses } =
    useExpenseStore();
  const selectedExpense = expenses.find((expense) => expense.id === expenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing]);

  function deleteExpenseHandler() {
    deleteExpense(expenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(inputValues: {
    description: string;
    amount: string;
    date: string;
  }) {
    const parsedAmount = parseFloat(inputValues.amount.replace(",", "."));

    if (isEditing) {
      updateExpense(expenseId, {
        ...inputValues,
        amount: parsedAmount,
        date: new Date(inputValues.date),
      });
    } else {
      addExpense({
        ...inputValues,
        amount: parsedAmount,
        date: new Date(inputValues.date),
      });
    }
    navigation.goBack();
  }

  const defaultValues = {
    description: selectedExpense?.description || "",
    amount: selectedExpense?.amount.toString() || "",
    date:
      getFormattedDate(selectedExpense?.date) || getFormattedDate(new Date()),
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        isEditing={isEditing}
        deleteExpenseHandler={deleteExpenseHandler}
        defaultValues={defaultValues}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GLOBAL_STYLES.colors.primary800,
  },
});
