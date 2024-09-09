import { Appearance, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export const queryClient = new QueryClient();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
          'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }

      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        setColorScheme(colorScheme);
      });
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView
          style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? 'black' : 'white' }}
        >
          <StatusBar style='dark' backgroundColor='white' />
          <Stack>
            <Stack.Screen
              name='(expenses)'
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </>
  );
}
