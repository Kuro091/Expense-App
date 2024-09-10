import { Tabs } from 'expo-router';
import { GLOBAL_STYLES } from '../../common/colors';

export default function ExpensesLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        headerStyle: {
          backgroundColor: GLOBAL_STYLES.colors.primary500,
        },
        headerTintColor: GLOBAL_STYLES.colors.primary100,
      }}
    >
      <Tabs.Screen
        name='ExpenseList'
        options={{
          title: 'Expenses List',
        }}
      />
      <Tabs.Screen
        name='ExpenseRecent'
        options={{
          title: 'Expenses Recent',
        }}
      />
    </Tabs>
  );
}
