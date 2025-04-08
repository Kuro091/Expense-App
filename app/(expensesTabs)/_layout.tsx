import { Tabs } from "expo-router";
import { GLOBAL_STYLES } from "../../common/colors";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../../components/UI/IconButton";
import { useRouter } from "expo-router";

export default function ExpensesLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={({ navigation }) => ({
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
        headerRight: () => (
          <IconButton
            icon="add"
            size={24}
            color="white"
            onPress={() => {
              router.push({ pathname: "/ExpenseManage" });
            }}
          />
        ),
      })}
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
