import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';

import { Ionicons, Fontisto } from '@expo/vector-icons';

import crops from '@/constants/crops';
import HeaderSection from '@/components/sections/HeaderSection';
import QuickInfoSection from '@/components/sections/QuickInfoSection';
import PDBCSection from '@/components/sections/PDBCSection';

export default function CropInformation() {
  const navigation = useNavigation();

  const id = useLocalSearchParams().id;
  const crop = crops.find((crop) => crop.id === id);

  return (
    <SafeAreaView className="flex-1">
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
          <TouchableOpacity>
            <Fontisto name="heart" size={24} color="#FFFF" />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
          <View>
            <HeaderSection description={crop?.description} />
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
