import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

interface QInfoCardProps {
  label: string;
  icon: ImageSourcePropType | undefined;
  value: string;
}

const QInfoCard: React.FC<QInfoCardProps> = ({ label, icon, value }) => {
  return (
    <View
      className={`flex-1 p-2 items-center justify-between bg-primary-100 rounded-md relative mb-2 shadow-[30px] ${
        label !== 'Water' && label !== 'Sprout to Harvest' && 'mr-2'
      }`}
    >
      <View className="absolute top-2 right-2">
        <EvilIcons name="exclamation" size={20} color="black" />
      </View>
      <Text className="text-xs text-center">{label}</Text>
      <Image source={icon} className="w-10 h-10 my-1" />
      <Text>{value}</Text>
    </View>
  );
};

export default QInfoCard;
