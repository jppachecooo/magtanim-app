import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <SafeAreaView>
      <View className="h-full items-center justify-center relative">
        <Image
          source={require('@/assets/images/logo.png')}
          className="w-36"
          resizeMode="contain"
        />

        <Link
          href="/seasonSelection"
          className="absolute bottom-4 font-bold text-primary-200"
        >
          Magtanim
        </Link>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
