import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { AppContext } from '@/context/AppContext';
import { router } from 'expo-router';

export default function SeasonSelection() {
  const { setSelectedSeason } = useContext(AppContext);

  const handleSeasonClick = (value: string) => {
    setSelectedSeason(value);
    router.push('crops');
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200 items-center justify-center space-y-8">
      <View>
        <Text className="text-lg text-center text-black dark:text-secondary-default">
          Filter the list of crops
        </Text>
        <Text className="text-lg text-center text-black dark:text-secondary-default">
          by selecting a{' '}
          <Text className="text-lg font-bold text-primary-200">Season</Text>
        </Text>
      </View>
      <View className="space-y-4">
        <View className="flex-row gap-x-4">
          <TouchableOpacity
            onPress={() => handleSeasonClick('Wet')}
            style={{
              elevation: 5,
            }}
            className="w-24 p-2 bg-blue-100 rounded-lg items-center space-y-2"
          >
            <Image
              source={require('@/assets/images/rain.png')}
              className="h-14 w-14"
            />
            <Text>Wet</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSeasonClick('Dry')}
            style={{
              elevation: 5,
            }}
            className="w-24 p-2 bg-yellow-100 rounded-lg items-center space-y-2"
          >
            <Image
              source={require('@/assets/images/sun.png')}
              className="h-14 w-14"
            />
            <Text>Dry</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => handleSeasonClick('Perennial')}
          style={{
            elevation: 5,
          }}
          className="w-24 p-2 bg-green-100 rounded-lg items-center space-y-2"
        >
          <Image
            source={require('@/assets/images/cycle.png')}
            className="h-14 w-14"
          />
          <Text>Perennial</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
