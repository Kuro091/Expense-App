import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { GLOBAL_STYLES } from "../../common/colors";

function Input({
  label,
  textInputProps,
  style,
  invalid,
}: {
  label: string;
  textInputProps: TextInputProps;
  style?: StyleProp<ViewStyle>;
  invalid?: boolean;
}) {
  const inputStyles: StyleProp<TextStyle>[] = [styles.input];

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  if (textInputProps.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GLOBAL_STYLES.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GLOBAL_STYLES.colors.primary100,
    color: GLOBAL_STYLES.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GLOBAL_STYLES.colors.error500,
  },
  invalidInput: {
    backgroundColor: GLOBAL_STYLES.colors.error50,
    borderWidth: 1,
    borderColor: GLOBAL_STYLES.colors.error500,
  },
});

export default Input;
