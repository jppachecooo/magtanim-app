import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View } from 'react-native';

import Header from '@/components/ui/Header';
import { AppContext } from '@/context/AppContext';
import FavoriteCard from '@/components/cards/FavoriteCard';

export default function Favorites() {
  const { favorites } = useContext(AppContext);

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="space-y-4">
        <Header title="Favorites" />
        <View className="gap-y-4">
          <FlatList
            data={favorites}
            numColumns={1}
            renderItem={({ item }) => (
              <FavoriteCard
                id={item?.id}
                name={item?.name}
                category={item?.category}
                icon={item?.icon}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
