import React, { useContext } from 'react';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';

import { AppContext } from '@/context/AppContext';

import { AntDesign, Ionicons } from '@expo/vector-icons';

export default function Tabslayout() {
  const { favorites } = useContext(AppContext);

  return (
    <View className="flex-1 py-2 px-4 bg-secondary-100 dark:bg-accent-200">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: '#A9DFBF',
          tabBarActiveTintColor: '#FDFEFE',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 55,
            width: 260,
            backgroundColor: '#008000',
            borderRadius: 100,
            alignSelf: 'center',
            paddingBottom: 5,
            paddingHorizontal: 15,
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="seasonSelection"
          options={{
            title: 'Seasons',
            tabBarIcon: ({ color, focused }) => (
              <View className="mt-1">
                <AntDesign
                  name="appstore-o"
                  size={24}
                  color={color}
                  focuses={focused}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="crops"
          options={{
            title: 'Crops',
            tabBarIcon: ({ color, focused }) => (
              <View className="mt-1">
                <Ionicons
                  name="leaf-outline"
                  size={24}
                  color={color}
                  focuses={focused}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: 'Favorites',
            tabBarIcon: ({ color, focused }) => (
              <View className="mt-1 relative">
                <AntDesign
                  name="hearto"
                  size={24}
                  color={color}
                  focuses={focused}
                />
                <View className="absolute -top-1 -right-3 px-1 bg-[#E74C3C] border border-primary-200 rounded-full">
                  <Text className="text-xs text-secondary-default">
                    {favorites.length}
                  </Text>
                </View>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, focused }) => (
              <View className="mt-1">
                <AntDesign
                  name="setting"
                  size={24}
                  color={color}
                  focuses={focused}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
