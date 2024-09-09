import { Tabs } from 'expo-router';

export default function ExpensesLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
      }}
    >
      <Tabs.Screen
        name='ExpenseList'
        options={{
          title: 'Expenses List',
        }}
      />
      <Tabs.Screen
        name='ExpenseManage'
        options={{
          title: 'Expenses List',
        }}
      />
      <Tabs.Screen
        name='ExpenseRecent'
        options={{
          title: 'Expenses List',
        }}
      />
    </Tabs>
  );
}
