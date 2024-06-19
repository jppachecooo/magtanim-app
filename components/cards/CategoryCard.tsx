import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

interface CategoryProps {
  name: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ name }) => {
  return (
    <TouchableOpacity>
      <View className="py-2 px-4 bg-primary-100 rounded-full">
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
