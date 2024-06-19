import { View } from 'react-native';
import { Stack } from 'expo-router';

import AppContextProvider from '@/context/AppContext';

export default function RootLayout() {
  return (
    <AppContextProvider>
      <View className="flex-1">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="crop-information/[id]" />
        </Stack>
      </View>
    </AppContextProvider>
  );
}
