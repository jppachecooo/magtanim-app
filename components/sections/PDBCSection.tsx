import React, { useContext, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import PDBCModal from '../modals/PDBCModal';
import { AppContext } from '@/context/AppContext';

export default function PDBCSection({ pests, diseases }: any) {
  const { pDBCModalVisible, setPDBCModalVisible } = useContext(AppContext);
  const [pDBCName, setPDBCName] = useState<string>('');
  const [pDBCDescription, setPDBCDescription] = useState<string>('');

  const handlePDBCClick = (name: string, description: string) => {
    setPDBCName(name);
    setPDBCDescription(description);
    setPDBCModalVisible(true);
  };

  return (
    <View className="h-full gap-y-4">
      <PDBCModal
        isOpen={pDBCModalVisible}
        name={pDBCName}
        description={pDBCDescription}
      />
      <View className="gap-y-2">
        <Text className="text-lg font-bold text-black dark:text-secondary-default">
          Pests
        </Text>
        <View className="flex-row flex-wrap justify-center gap-1">
          {pests.map((pest: any) => (
            <Pressable
              onPress={() => handlePDBCClick(pest?.name, pest.description)}
              key={pest.name}
              style={{ elevation: 5 }}
              className="relative"
            >
              <Image source={pest.image} className="w-24 h-24 rounded-md" />
              <Text className="absolute bottom-1 left-1 text-white text-xs">
                {pest.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View className="gap-y-2">
        <Text className="text-lg font-bold text-black dark:text-secondary-default">
          Deases
        </Text>
        <View className="flex-row flex-wrap justify-center gap-1">
          {diseases.map((disease: any) => (
            <Pressable
              onPress={() =>
                handlePDBCClick(disease?.name, disease.description)
              }
              key={disease.name}
              style={{ elevation: 5 }}
              className="relative"
            >
              <Image source={disease.image} className="w-24 h-24 rounded-md" />
              <Text className="absolute bottom-1 left-1 text-white text-xs">
                {disease.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View className="gap-y-2">
        <Text className="text-lg font-bold text-black dark:text-secondary-default">
          Beneficial Critters
        </Text>
        <View className="flex-row flex-wrap justify-center gap-1">
          {diseases.map((disease: any) => (
            <View
              style={{ elevation: 5 }}
              key={disease.name}
              className="relative"
            >
              <Image source={disease.image} className="w-24 h-24 rounded-md" />
              <Text className="absolute bottom-1 left-1 text-white text-xs">
                {disease.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
