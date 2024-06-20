import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { router } from 'expo-router';

import Input from '@/components/ui/Input';
import categories from '@/constants/categories';
import crops from '@/constants/crops';
import EmptyState from '@/components/EmptyState';
import { AppContext } from '@/context/AppContext';

import { Feather, AntDesign } from '@expo/vector-icons';

export default function Crops() {
  const { selectedSeason, setSelectedSeason } = useContext(AppContext);
  const [activeCategory, setActiveCategory] = useState<string>('Vegetables');
  const [searchInput, setSearchInput] = useState<string>('');

  const filteredCrops = crops.filter((crop) => {
    const seasonMatch = crop.season?.includes(selectedSeason);
    const categoryMatch = crop.category === activeCategory;
    const nameMatch = crop.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    return seasonMatch && categoryMatch && nameMatch;
  });

  return (
    <SafeAreaView className="flex-1 bg-secondary-100">
      <View className="space-y-4">
        <View className="p-2 bg-primary-200 rounded-full relative">
          <View className="absolute top-5 left-5 z-10">
            <Feather name="search" size={20} color="#008000" />
          </View>
          <Input
            type="text"
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder="Search crop..."
          />
          <TouchableOpacity
            onPress={() => setSearchInput('')}
            className={`absolute top-5 right-5 ${
              searchInput.length === 0 ? 'hidden' : 'block'
            }`}
          >
            <AntDesign name="close" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-x-4">
            {categories.map((category) => (
              <TouchableOpacity
                key={category.name}
                onPress={() => setActiveCategory(category.name)}
                className={`${
                  category.name === activeCategory && 'bg-secondary-default'
                } py-2 px-4 border border-gray-200 rounded-full relative`}
              >
                <Text
                  key={category.name}
                  className={`${
                    category.name === activeCategory
                      ? 'text-black font-semibold'
                      : 'text-secondary-200'
                  }`}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View className="items-center h-screen pb-52">
          {selectedSeason.length !== 0 && (
            <View className="self-start flex-row items-center gap-x-1">
              <Text className="text-secondary-200">Selected season:</Text>
              <TouchableOpacity onPress={() => setSelectedSeason('')}>
                <Text className="font-semibold">{selectedSeason}</Text>
              </TouchableOpacity>
            </View>
          )}
          <FlatList
            data={filteredCrops}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => router.push(`/crop-information/${item.id}`)}
                style={{
                  elevation: 5,
                }}
                className="m-2 w-32 h-32 p-2 bg-secondary-default rounded-3xl items-center justify-between"
              >
                <Image source={item.icon} className="h-24 w-24" />
                <Text className="text-xs">{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<EmptyState category={activeCategory} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
