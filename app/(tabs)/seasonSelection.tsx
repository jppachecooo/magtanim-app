import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { AppContext } from '@/context/AppContext';

export default function SeasonSelection() {
  const { setSelectedSeason } = useContext(AppContext);
  const { t } = useTranslation();

  const handleSeasonClick = (value: string) => {
    setSelectedSeason(value);
    router.push('crops');
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="h-full items-center justify-center gap-y-8">
        <Text className="text-lg text-center text-black dark:text-secondary-default">
          {t('season')}
        </Text>
        <View className="space-y-4">
          <View className="flex-row gap-x-4">
            <TouchableOpacity
              onPress={() => handleSeasonClick(`${t('wet')}`)}
              style={{
                elevation: 5,
              }}
              className="w-24 p-2 bg-blue-100 rounded-3xl items-center space-y-2"
            >
              <Image
                source={require('@/assets/images/rain.png')}
                className="h-14 w-14"
              />
              <Text className="text-xs">{t('wet')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSeasonClick(`${t('dry')}`)}
              style={{
                elevation: 5,
              }}
              className="w-24 p-2 bg-yellow-100 rounded-3xl items-center space-y-2"
            >
              <Image
                source={require('@/assets/images/sun.png')}
                className="h-14 w-14"
              />
              <Text className="text-xs">{t('dry')}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => handleSeasonClick(`${t('perennial')}`)}
            style={{
              elevation: 5,
            }}
            className="w-24 p-2 bg-green-100 rounded-3xl items-center space-y-2"
          >
            <Image
              source={require('@/assets/images/cycle.png')}
              className="h-14 w-14"
            />
            <Text className="text-xs">{t('perennial')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
