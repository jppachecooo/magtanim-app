import React, { useContext, useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useColorScheme } from 'nativewind';

import { AppContext } from '@/context/AppContext';
import QInfoModal from '@/components/modals/QInfoModal';

import { EvilIcons } from '@expo/vector-icons';

const getSeasonIcon = (season: string | undefined) => {
  switch (season) {
    case 'Wet':
      return require('@/assets/images/rain.png');
    case 'Dry':
      return require('@/assets/images/sun.png');
    case 'Wet/Dry':
      return require('@/assets/images/wet-dry.png');
    default:
      return require('@/assets/images/cycle.png');
  }
};

export default function QuickInfoSection({ crop }: any) {
  const { colorScheme } = useColorScheme();

  const { qInfoModalVisible, setQInfoModalVisible } = useContext(AppContext);
  const [qInfoModalTitle, setQInfoModalTitle] = useState<string>('');
  const [qInfoModalDescription, setQInfoModalDescription] =
    useState<string>('');

  const seasonIcon = getSeasonIcon(crop?.season);

  const cropSpacing = crop?.spacing
    .replace('in', 'inches')
    .replace('m', 'meter');
  const cropDepth = crop?.depth
    .replace('in', 'inches')
    .replace('cm', 'centimeter')
    .replace('m', 'meter');
  const cropSeason = crop?.season
    .replace('Wet/Dry', 'both wet and dry')
    .replace('Wet', 'wet')
    .replace('Dry', 'dry');

  const handleQInfoClick = (title: string, description: string) => {
    setQInfoModalTitle(title);
    setQInfoModalDescription(description);
    setQInfoModalVisible(true);
  };

  return (
    <View className="gap-y-2">
      <Text className="text-lg font-bold text-secondary-200">Quick Info</Text>
      <QInfoModal
        isOpen={qInfoModalVisible}
        title={qInfoModalTitle}
        description={qInfoModalDescription}
      />
      <View className="space-y-2">
        <View className="flex-row gap-x-2">
          {/* Recommended Spacing */}
          <Pressable
            onPress={() =>
              handleQInfoClick(
                'Recommended Spacing',
                `${crop?.name} should be spaced ${cropSpacing} apart to ensure they have enough space to grow and access sufficient nutrients and sunlight.`
              )
            }
            style={{
              elevation: 5,
            }}
            className="flex-1 p-2 items-center justify-between bg-secondary-default dark:bg-accent-default rounded-md relative"
          >
            <View className="absolute top-1 right-1">
              <EvilIcons
                name="exclamation"
                size={20}
                color={`${colorScheme === 'light' ? 'black' : 'white'}`}
              />
            </View>
            <Text className="text-xs text-black dark:text-secondary-default">
              Spacing
            </Text>
            <Image
              source={require('@/assets/images/spacing.png')}
              className="w-10 h-10 my-1"
            />
            <Text className="text-black dark:text-secondary-default">
              {crop?.spacing}
            </Text>
          </Pressable>
          {/* Planting Depth */}
          <Pressable
            onPress={() =>
              handleQInfoClick(
                'Planting Depth',
                `${crop?.name} should be planted at a depth of ${cropDepth} in the soil. This helps them access the moisture they need to germinate while being close enough to the surface for warmth.`
              )
            }
            style={{
              elevation: 5,
            }}
            className="flex-1 p-2 items-center justify-between bg-secondary-default dark:bg-accent-default rounded-md relative"
          >
            <View className="absolute top-1 right-1">
              <EvilIcons
                name="exclamation"
                size={20}
                color={`${colorScheme === 'light' ? 'black' : 'white'}`}
              />
            </View>
            <Text className="text-xs text-black dark:text-secondary-default">
              Depth
            </Text>
            <Image
              source={require('@/assets/images/depth.png')}
              className="w-10 h-10 my-1"
            />
            <Text className="text-black dark:text-secondary-default">
              {crop?.depth}
            </Text>
          </Pressable>
          {/* Watering Requirements */}
          <Pressable
            onPress={() =>
              handleQInfoClick(
                'Watering Requirements',
                `${crop?.name} require consistent moisture, typically around ${crop?.water} of water per week. This can be through rainfall or manual watering.`
              )
            }
            style={{
              elevation: 5,
            }}
            className="flex-1 p-2 items-center justify-between bg-secondary-default dark:bg-accent-default rounded-md relative"
          >
            <View className="absolute top-1 right-1">
              <EvilIcons
                name="exclamation"
                size={20}
                color={`${colorScheme === 'light' ? 'black' : 'white'}`}
              />
            </View>
            <Text className="text-xs text-black dark:text-secondary-default">
              Water
            </Text>
            <Image
              source={require('@/assets/images/water.png')}
              className="w-10 h-10 my-1"
            />
            <Text className="text-black dark:text-secondary-default">
              {crop?.water} in/week
            </Text>
          </Pressable>
        </View>
        <View className="flex-row gap-x-2">
          {/* Growing Season */}
          <Pressable
            onPress={() =>
              handleQInfoClick(
                'Growing Season',
                `${
                  crop?.season !== 'Perennial'
                    ? `${crop?.name} thrive in ${cropSeason} season but prefer a stable climate.`
                    : `${crop?.name} will grow perennially and come back year after year.`
                }`
              )
            }
            style={{
              elevation: 5,
            }}
            className="flex-1 p-2 items-center justify-between bg-secondary-default dark:bg-accent-default rounded-md relative"
          >
            <View className="absolute top-1 right-1">
              <EvilIcons
                name="exclamation"
                size={20}
                color={`${colorScheme === 'light' ? 'black' : 'white'}`}
              />
            </View>
            <Text className="text-xs text-black dark:text-secondary-default">
              Season
            </Text>
            <Image source={seasonIcon} className="w-10 h-10 my-1" />
            <Text className="text-black dark:text-secondary-default">
              {crop?.season}
            </Text>
          </Pressable>
          {/* Germination Process */}
          <Pressable
            onPress={() =>
              handleQInfoClick(
                'Germination Process',
                `${crop?.name} seeds usually germinate within ${crop?.germination} when kept in the right conditions.`
              )
            }
            style={{
              elevation: 5,
            }}
            className="flex-1 p-2 items-center justify-between bg-secondary-default dark:bg-accent-default rounded-md relative"
          >
            <View className="absolute top-1 right-1">
              <EvilIcons
                name="exclamation"
                size={20}
                color={`${colorScheme === 'light' ? 'black' : 'white'}`}
              />
            </View>
            <Text className="text-xs text-black dark:text-secondary-default">
              Germination
            </Text>
            <Image
              source={require('@/assets/images/germination.png')}
              className="w-10 h-10 my-1"
            />
            <Text className="text-black dark:text-secondary-default">
              {crop?.germination}
            </Text>
          </Pressable>
          {/* Sprout to Harvest */}
          <Pressable
            onPress={() =>
              handleQInfoClick(
                'Sprout to Harvest',
                `The time from sprouting to harvesting ripe ${crop?.name.toLowerCase()} is generally between ${
                  crop?.sproutToHarvest
                }, after the ${crop?.germination} germination process.`
              )
            }
            style={{
              elevation: 5,
            }}
            className="flex-1 p-2 items-center justify-between bg-secondary-default dark:bg-accent-default rounded-md relative"
          >
            <View className="absolute top-1 right-1">
              <EvilIcons
                name="exclamation"
                size={20}
                color={`${colorScheme === 'light' ? 'black' : 'white'}`}
              />
            </View>
            <Text className="text-xs text-black dark:text-secondary-default">
              Sprout to Harvest
            </Text>
            <Image
              source={require('@/assets/images/calendar.png')}
              className="w-10 h-10 my-1"
            />
            <Text className="text-black dark:text-secondary-default">
              {crop?.sproutToHarvest}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
