import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GLOBAL_STYLES } from "../common/colors";
import Button from "../components/UI/Button";

export default function ExpenseManageScreen() {
  const navigation = useNavigation();
  const { expenseId } = useLocalSearchParams<{ expenseId: string }>();
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [isEditing]);

  function deleteExpenseHandler() {}

  function cancelHandler() {}

  function confirmHandler() {}

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GLOBAL_STYLES.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GLOBAL_STYLES.colors.primary800,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GLOBAL_STYLES.colors.primary200,
    alignItems: "center",
  },
});
