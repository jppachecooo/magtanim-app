import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CropsList from '@/constants/crops';

export const AppContext = createContext<any>(null);

interface IFavorites {
  id: string;
  name: string;
  icon: any;
  description: string;
  category: string;
  spacing: string;
  depth: string;
  water: string;
  season: string;
  germination: string;
  sproutToHarvest: string;
  pests: any[];
  diseases: any[];
}

export default function AppContextProvider({ children }: { children: any }) {
  const [selectedSeason, setSelectedSeason] = useState<string>('');
  const [qInfoModalVisible, setQInfoModalVisible] = useState<boolean>(false);
  const [pDBCModalVisible, setPDBCModalVisible] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<IFavorites[]>([]);

  const crops = CropsList();

  // Function the will fetch the favorite crops
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const favoritesData = await AsyncStorage.getItem('favorites');
        if (favoritesData) {
          setFavorites(JSON.parse(favoritesData));
        }
      } catch (error) {
        console.error('Failed to load favorites:', error);
      }
    };

    loadFavorites();
  }, []);

  const toggleFavorite = async (cropID: string | undefined) => {
    try {
      const isFavorite = favorites.some((favorite) => favorite.id === cropID);

      let updatedFavorites: any;
      if (isFavorite) {
        updatedFavorites = favorites.filter(
          (favorite) => favorite.id !== cropID
        );
      } else {
        const newFavoriteCrop = crops.find((crop) => crop.id === cropID);
        updatedFavorites = [...favorites, newFavoriteCrop];
      }
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Failed to toggle favorite:', error);
    }
  };

  const AppContextValue = {
    selectedSeason,
    setSelectedSeason,
    qInfoModalVisible,
    setQInfoModalVisible,
    pDBCModalVisible,
    setPDBCModalVisible,
    favorites,
    toggleFavorite,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
}
