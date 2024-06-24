import React from 'react';
import { View, Text } from 'react-native';

interface UsesSectionProps {
  uses: string[] | undefined;
}

const UsesSection: React.FC<UsesSectionProps> = ({ uses }) => {
  return (
    <View>
      <Text className="text-lg font-bold text-secondary-200">Uses</Text>
      <View className="gap-y-2">
        {uses?.map((uses, idx) => (
          <Text key={idx} className="text-black dark:text-secondary-default">
            • {uses}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default UsesSection;
