import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';

import Header from '@/components/ui/Header';

export default function Settings() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="space-y-8">
        <Header title="Settings" />
        <View>
          <Text className="text-gray-500">Theme</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-black dark:text-secondary-default">
              Dark mode
            </Text>
            <Switch
              value={colorScheme === 'dark'}
              onChange={toggleColorScheme}
            />
          </View>
        </View>
      </View>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
}
