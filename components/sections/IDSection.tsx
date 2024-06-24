import React from 'react';
import { View, Text, Image } from 'react-native';

interface IDSectionProps {
  background: any;
  description: string | undefined;
}

const IDSection: React.FC<IDSectionProps> = ({ background, description }) => {
  return (
    <View className="gap-y-2">
      <Image
        source={background}
        height={50}
        width={50}
        className="h-52 w-full rounded-xl overflow-hidden"
      />
      <Text className="text-black dark:text-secondary-default">
        {description}
      </Text>
    </View>
  );
};
export default IDSection;
