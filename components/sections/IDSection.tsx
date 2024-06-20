import React from 'react';
import { View, Text, Image } from 'react-native';

interface IDSectionProps {
  description: string | undefined;
}

const IDSection: React.FC<IDSectionProps> = ({ description }) => {
  return (
    <View className="gap-y-2">
      <Image
        source={require('@/assets/images/tomato-bg.jpg')}
        height={50}
        width={50}
        className="h-52 w-full rounded-xl overflow-hidden"
      />
      <Text className="font-medium text-black dark:text-secondary-default ">
        {description}
      </Text>
    </View>
  );
};
export default IDSection;
