import React, { useContext } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';

import { AppContext } from '@/context/AppContext';

import { AntDesign } from '@expo/vector-icons';

interface PDBCModalProps {
  isOpen: boolean;
  name: string;
  description: string;
}

const PDBCModal: React.FC<PDBCModalProps> = ({ isOpen, name, description }) => {
  const { colorScheme } = useColorScheme();
  const { setPDBCModalVisible } = useContext(AppContext);

  return (
    <Modal
      visible={isOpen}
      transparent
      statusBarTranslucent
      animationType="none"
    >
      <View className="flex-1 items-center justify-center">
        <View className="w-[90%] bg-secondary-default dark:bg-accent-default rounded-lg p-4 space-y-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold text-black dark:text-secondary-default">
              {name}
            </Text>
            <Pressable onPress={() => setPDBCModalVisible(false)}>
              <AntDesign
                name="close"
                size={20}
                color={`${colorScheme === 'light' ? 'black' : 'white'}`}
              />
            </Pressable>
          </View>
          <Text className="text-black dark:text-secondary-default">
            {description}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default PDBCModal;
