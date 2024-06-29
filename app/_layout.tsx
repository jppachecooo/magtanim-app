// import 'intl';
// import 'plurals-cldr';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { I18nextProvider } from 'react-i18next';

import AppContextProvider from '@/context/AppContext';
import i18n from '@/utils/i18n';

export default function RootLayout() {
  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}
