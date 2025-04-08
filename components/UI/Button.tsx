import { Pressable, StyleSheet, Text, View } from "react-native";
import { GLOBAL_STYLES } from "../../common/colors";

function Button({
  children,
  onPress,
  mode = "contained",
  style,
}: {
  children: React.ReactNode;
  onPress: () => void;
  mode?: "flat" | "contained";
  style?: object;
}) {
  return (
    <View style={[style]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <View style={[styles.buttonContainer, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GLOBAL_STYLES.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GLOBAL_STYLES.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GLOBAL_STYLES.colors.primary100,
    borderRadius: 4,
  },
});

export default Button;
