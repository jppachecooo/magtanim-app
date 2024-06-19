import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

import Header from '@/components/ui/Header';

export default function Favorites() {
  return (
    <SafeAreaView className="flex-1 bg-secondary-100">
      <View>
        <Header title="Favorites" />
      </View>
    </SafeAreaView>
  );
}
