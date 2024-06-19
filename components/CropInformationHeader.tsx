import React from 'react';
import { View, Text, Image } from 'react-native';

interface CropInformationHeaderProps {
  description: string | undefined;
}

const CropInformationHeader: React.FC<CropInformationHeaderProps> = ({
  description,
}) => {
  return (
    <View>
      <View className="space-y-4">
        <Image
          source={require('@/assets/images/tomato-bg.jpg')}
          height={50}
          width={50}
          className="h-52 w-full rounded-xl overflow-hidden"
        />
        <Text className="font-semibold">{description}</Text>
      </View>
    </View>
  );
};

export default CropInformationHeader;
