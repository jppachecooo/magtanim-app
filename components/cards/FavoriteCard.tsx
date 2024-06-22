import React, { useContext } from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';

import { AppContext } from '@/context/AppContext';

import { Fontisto } from '@expo/vector-icons';
import { router } from 'expo-router';

interface FavoriteCardProps {
  id: string;
  name: string;
  category: string;
  icon: any;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({
  id,
  name,
  category,
  icon,
}) => {
  const { toggleFavorite } = useContext(AppContext);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/crop-information/${id}`)}
      style={{
        elevation: 5,
      }}
      className="flex-row space-x-2 p-2 bg-secondary-100 dark:bg-accent-default rounded-xl mb-4 relative"
    >
      <View className="border border-gray-200 dark:border-accent-200 rounded-xl">
        <Image source={icon} className="h-24 w-24" />
      </View>
      <View>
        <Text className="text-lg text-black dark:text-secondary-default">
          {name}
        </Text>
        <Text className="dark:text-secondary-100">{category}</Text>
      </View>
      <Pressable
        onPress={() => toggleFavorite(id)}
        className="absolute top-2 right-2"
      >
        <Fontisto name="heart" size={24} color="#E74C3C" />
      </Pressable>
    </TouchableOpacity>
  );
};

export default FavoriteCard;
