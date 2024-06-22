import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import crops from '@/constants/crops';
import IDSection from '@/components/sections/IDSection';
import QuickInfoSection from '@/components/sections/QuickInfoSection';
import PDBCSection from '@/components/sections/PDBCSection';
import { AppContext } from '@/context/AppContext';

import { Ionicons, Fontisto } from '@expo/vector-icons';

export default function CropInformation() {
  const { favorites, toggleFavorite } = useContext(AppContext);

  const navigation = useNavigation();

  const id = useLocalSearchParams().id;
  const crop = crops.find((crop) => crop.id === id);

  const isFavorite = favorites.some((favorite: any) => favorite.id === id);

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="p-4 gap-y-4">
        <View
          className="py-2 px-4
         bg-primary-200 flex-row items-center justify-between rounded-full"
        >
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={24} color="#FFFF" />
            </TouchableOpacity>
            <View className="ml-2">
              <Text className="text-lg font-bold text-secondary-default">
                {crop?.name}
              </Text>
              <Text className="text-secondary-100 -mt-1">{crop?.category}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => toggleFavorite(crop?.id)}>
            <Fontisto
              name="heart"
              size={24}
              color={`${isFavorite ? '#E74C3C' : 'white'}`}
            />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
          <View>
            <IDSection description={crop?.description} />
          </View>
          <View>
            <QuickInfoSection crop={crop} />
          </View>
          <View>
            <PDBCSection pests={crop?.pests} diseases={crop?.diseases} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
