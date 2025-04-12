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
  style,
  textInputProps,
}: {
  label: string;
  style?: StyleProp<ViewStyle>;
  textInputProps: TextInputProps;
}) {
  const inputStyle: StyleProp<TextStyle>[] = [styles.input];

  if (textInputProps.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputProps} style={inputStyle} />
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
    backgroundColor: GLOBAL_STYLES.colors.primary200,
    color: GLOBAL_STYLES.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default Input;
