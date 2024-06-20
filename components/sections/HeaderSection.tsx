import React from 'react';
import { View, Text, Image } from 'react-native';

interface HeaderSectionProps {
  description: string | undefined;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ description }) => {
  return (
    <View className="gap-y-2">
      <Image
        source={require('@/assets/images/tomato-bg.jpg')}
        height={50}
        width={50}
        className="h-52 w-full rounded-xl overflow-hidden"
      />
      <Text className="font-medium">{description}</Text>
    </View>
  );
};
export default HeaderSection;
