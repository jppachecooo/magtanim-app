import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import Header from '@/components/ui/Header';
import { AppContext } from '@/context/AppContext';
import FavoriteCard from '@/components/cards/FavoriteCard';
import EmptyState from '@/components/EmptyState';

export default function Favorites() {
  const { favorites } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-secondary-100 dark:bg-accent-200">
      <View className="space-y-4 pb-28">
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
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <EmptyState
                title={`${t('noFavoritesYet')}`}
                description={`${t('noFavoritesYetDescription')}`}
              />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
