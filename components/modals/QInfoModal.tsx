import React, { useContext } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';

import { AppContext } from '@/context/AppContext';

import { AntDesign } from '@expo/vector-icons';

interface QInfoModalProps {
  isOpen: boolean;
  title: string;
  description: string;
}

const QInfoModal: React.FC<QInfoModalProps> = ({
  isOpen,
  title,
  description,
}) => {
  const { setQInfoModalVisible } = useContext(AppContext);
  return (
    <Modal
      visible={isOpen}
      transparent
      statusBarTranslucent
      animationType="none"
    >
      <View className="flex-1 items-center justify-center">
        <View
          style={{ elevation: 5 }}
          className="bg-white w-[90%] rounded-lg p-4 space-y-4"
        >
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">{title}</Text>
            <Pressable onPress={() => setQInfoModalVisible(false)}>
              <AntDesign name="close" size={15} color="black" />
            </Pressable>
          </View>
          <Text>{description}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default QInfoModal;
