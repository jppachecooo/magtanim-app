import React, { useContext } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import { AppContext } from '@/context/AppContext';

import { AntDesign } from '@expo/vector-icons';

interface PDBCModalProps {
  isOpen: boolean;
  name: string;
  description: string;
}

const PDBCModal: React.FC<PDBCModalProps> = ({ isOpen, name, description }) => {
  const { setPDBCModalVisible } = useContext(AppContext);
  return (
    <Modal
      visible={isOpen}
      transparent
      statusBarTranslucent
      animationType="none"
    >
      <View className="flex-1 items-center justify-center">
        <View className="bg-white w-[90%] rounded-lg p-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">{name}</Text>
            <Pressable onPress={() => setPDBCModalVisible(false)}>
              <AntDesign name="close" size={20} color="black" />
            </Pressable>
          </View>
          <Text>{description}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default PDBCModal;
