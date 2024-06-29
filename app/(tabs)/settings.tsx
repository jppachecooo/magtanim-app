import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '@/components/ui/Header';
import i18n from '@/utils/i18n';

export default function Settings() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isFilipino, setIsFilipino] = useState(i18n.language === 'fil');

  const { t } = useTranslation();

  // Retrieve and set the initial language preference
  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('appLanguage');
        if (savedLanguage) {
          setIsFilipino(savedLanguage === 'fil');
          i18n.changeLanguage(savedLanguage);
        }
      } catch (error) {
        console.error('Error retrieving language preference:', error);
      }
    };
    initializeLanguage();
  }, []);

  // Toggle language and persist the new preference
  const toggleLanguage = async () => {
    const newLanguage = isFilipino ? 'en' : 'fil';
    try {
      await AsyncStorage.setItem('appLanguage', newLanguage);
      i18n.changeLanguage(newLanguage);
      setIsFilipino(!isFilipino);
    } catch (error) {
      console.error('Error setting language preference:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="space-y-8">
        <Header title="Settings" />
        <View>
          <Text className="text-gray-500">{t('theme')}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-black dark:text-secondary-default">
              {t('darkMode')}
            </Text>
            <Switch
              value={colorScheme === 'dark'}
              onChange={toggleColorScheme}
            />
          </View>
        </View>
        <View>
          <Text className="text-gray-500">{t('language')}</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-black dark:text-secondary-default">
              Filipino
            </Text>
            <Switch value={isFilipino} onChange={toggleLanguage} />
          </View>
        </View>
      </View>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
}
