import { Tabs } from "expo-router";
import { GLOBAL_STYLES } from "../../common/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import IconButton from "../../components/UI/IconButton";

export default function ExpensesLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: GLOBAL_STYLES.colors.primary500,
        },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GLOBAL_STYLES.colors.primary500,
        },
        tabBarActiveTintColor: GLOBAL_STYLES.colors.accent500,
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: {
          fontFamily: "open-sans-bold",
        },
        headerRight: ({ tintColor }: { tintColor: string }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => console.log("Pressed")}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="ExpenseList"
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ExpenseRecent"
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
