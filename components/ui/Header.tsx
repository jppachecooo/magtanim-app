import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { Ionicons, Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View
      className="p-4
         bg-primary-200 flex-row items-center space-x-2 rounded-full"
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="#FFFF" />
      </TouchableOpacity>
      <Text className="text-lg font-bold text-secondary-default">{title}</Text>
    </View>
  );
};
export default Header;
