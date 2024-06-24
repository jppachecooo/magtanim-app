import React from 'react';
import {
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from 'react-native';
import { router } from 'expo-router';

interface SeasonCardProps {
  name: string;
  icon: ImageSourcePropType | undefined;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ name, icon }) => {
  return (
    <TouchableOpacity
      onPress={() => router.push('crops')}
      className="border w-28"
    >
      <Image source={icon} className="w-16 h-16" />
      <Text className="text-lg text-black">{name}</Text>
    </TouchableOpacity>
  );
};

export default SeasonCard;
