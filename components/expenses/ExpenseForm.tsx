import { StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import { GLOBAL_STYLES } from "../../common/colors";
import IconButton from "../UI/IconButton";
import Button from "../UI/Button";

function ExpenseForm({
  onCancel,
  onSubmit,
  isEditing,
  deleteExpenseHandler,
  defaultValues,
}: {
  onCancel: () => void;
  onSubmit: (expenseData: {
    amount: string;
    date: string;
    description: string;
  }) => void;
  isEditing: boolean;
  deleteExpenseHandler: () => void;
  defaultValues: {
    amount: string;
    date: string;
    description: string;
  };
}) {
  const [inputValues, setInputValues] = useState(defaultValues);

  function inputChangeHandler(inputIdentifier: string, value: string) {
    if (inputIdentifier === "amount") {
      // Replace comma with period and filter out any non-numeric characters except period
      value = value.replace(",", ".").replace(/[^\d.]/g, "");
      // Ensure only one decimal point
      const parts = value.split(".");
      if (parts.length > 2) value = parts[0] + "." + parts.slice(1).join("");
    }

    setInputValues((prevValues) => ({
      ...prevValues,
      [inputIdentifier]: value,
    }));
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Enter your expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label="Amount"
          textInputProps={{
            keyboardType: "decimal-pad",
            autoCapitalize: "none",
            onChangeText: (text) => inputChangeHandler("amount", text),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputProps={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: (text) => inputChangeHandler("date", text),
            value: inputValues.date,
          }}
          style={styles.rowInput}
        />
      </View>

      <Input
        label="Description"
        textInputProps={{
          multiline: true,
          onChangeText: (text) => inputChangeHandler("description", text),
          value: inputValues.description,
        }}
      />

      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={() => onSubmit(inputValues)}>
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
  form: {
    marginTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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

export default ExpenseForm;
