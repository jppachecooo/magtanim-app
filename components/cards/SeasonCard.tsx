import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
} from 'react-native';
import { router } from 'expo-router';

import { Feather } from '@expo/vector-icons';

interface SeasonCardProps {
  name: string;
  icon: ImageSourcePropType | undefined;
}

const SeasonCard: React.FC<SeasonCardProps> = ({ name, icon }) => {
  return (
    <TouchableOpacity onPress={() => router.push('crops')} className='border w-28'>
      <Image source={icon} className="w-16 h-16" />
      <Text className="text-lg text-black dark:text-white">{name}</Text>
    </TouchableOpacity>
  );
};

export default SeasonCard;

// const SeasonCard: React.FC<SeasonCardProps> = ({ name, icon }) => {
//   return (
//     <TouchableOpacity onPress={() => router.push('crops')}>
//       <View
//         style={{
//           elevation: 5,
//         }}
//         className="w-60 flex-row items-center gap-x-2 py-2 px-2 bg-secondary-default dark:bg-neutral-500 rounded-lg mb-4"
//       >
//         <Feather name={icon} size={20} color="#FFFF" />
//         <Text className="text-lg text-black dark:text-white">{name}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
