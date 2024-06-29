import React from 'react';
import { View, Text, Image } from 'react-native';

interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description }) => {
  return (
    <View className="items-center justify-center gap-y-2">
      <Image
        source={require('@/assets/images/404.png')}
        className="w-52 h-52"
        resizeMode="contain"
      />
      <Text className="font-bold text-black dark:text-secondary-default">
        {title}
      </Text>
      <Text className="text-xs text-secondary-200">{description}</Text>
    </View>
  );
};

export default EmptyState;
