import React from "react";
import { View, Text, Image } from "react-native";

interface IDSectionProps {
  background: any;
  descriptions: string[] | undefined;
}

const IDSection: React.FC<IDSectionProps> = ({ background, descriptions }) => {
  console.log(descriptions);
  return (
    <View className="gap-y-2">
      <Image
        source={background}
        height={50}
        width={50}
        className="h-52 w-full rounded-xl overflow-hidden"
      />
      <View className="space-y-2">
        {descriptions?.map((description, idx) => (
          <Text key={idx} className="text-black dark:text-secondary-default">
            {description}
          </Text>
        ))}
      </View>
    </View>
  );
};
export default IDSection;
