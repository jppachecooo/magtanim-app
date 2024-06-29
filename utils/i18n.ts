import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fallbackLng = 'en';

const resources = {
  en: {
    translation: {
      wet: 'Wet',
      dry: 'Dry',
      perennial: 'Perennial',
      wetDry: 'Wet/Dry',
      searchCrop: 'Search crop...',

      // Categories
      vegetable: 'Vegetable',
      fruit: 'Fruit',
      herb: 'Herb',
      rootCrop: 'Root crop',
      selectedSeason: 'Selected season',

      // Crops
      tomato: 'Tomato',
      tomatoDescription:
        'Tomato is an herbaceous annual in the family Solanaceae grown for its edible fruit. The plant can be erect with short stems or vine-like with long, spreading stems.',
      bitterGourd: 'Bitter Gourd',
      pumpkin: 'Pumpkin',
      pumpkinDescription:
        'Pumpkins have long-running, bristled stems, large deeply-lobed leaves often containing white blotches, and yellow or orange flowers separated into male and female types on the same plant. The fruit is variable in shape and color but is often white, cream, or green, containing about 70% flesh and several large white seeds.',
      ladysFinger: 'Lady’s Finger',
      lettuce: 'Lettuce',
      lettuceDescription:
        'The lettuce plant can vary greatly in size, shape and leaf type but generally, the leaves of the plant form a dense head or loose rosette. The stem of the plant is short, with larger leaves arranged at the bottom and becoming progressively smaller further up the stem. Leaves can be smooth or curly and are usually green or red in color. The lettuce plant can grow to a height of 30–100 cm (12–40 in) in height and is typically grown as an annual, harvested after only one growing season.',
      cucumber: 'Cucumber',
      cucumberDescription:
        'The cucumber plant is a sprawling vine with large leaves and curling tendrils. The plant may have 4 or 5 main stems from which the tendrils branch. The leaves of the plant are arranged alternately on the vines, have 3–7 pointed lobes and are hairy. The cucumber plant produces yellow flowers that are 4 cm (1.6 in) in diameter. The cucumber fruit varies in shape but is generally a curved cylinder rounded at both ends that can reach up to 60 cm (24 in) in length 10 cm (3.9 in) in diameter. Cucumber plants are annual plants, surviving only one growing season and the vines can reach up to 5 m (16.4 ft) in length.',
      moringa: 'Moringa',
      stringBean: 'String Bean',
      chineseCabbage: 'Chinese Cabbage',
      chineseCabbageDescription:
        'Chinese cabbage is made up of about 30 individual leaves arranged into a loose, spiral head and are dark green and shiny. The petioles, or stalks, are white or light green and thick and fleshy. Chinese cabbage can reach a height of 15–60 cm (0.5 to 2 ft) and spread outwards by 15–46 cm (0.5–1.5 ft).',
      mustardGreen: 'Mustard Green',
      chilli: 'Chilli',
      chilliDescription:
        'The plants produces flowers with five teeth (petals) which are usually white in color. Chilli pepper plants can reach heights in the range of 0.5 to 1.5 m (1.6–4.9 ft) tall and although they are perennial species, they are commonly grown as annuals, with fruit being harvested for one growing season. Chilli peppers may also be referred to as hot peppers or hot chillis.',
      longSquash: 'Long Squash',
      limaBean: 'Lima Bean',
      wingedBean: 'Winged Bean',
      silkSquash: 'Silk Squash',
      chayote: 'Chayote',
      eggplant: 'Eggplant',
      waterSpinach: 'Water Spinach',
      spinach: 'Spinach',
      blackPepper: 'Black Pepper',
      papaya: 'Papaya',
      lime: 'Lime',
      banana: 'Banana',
      mango: 'Mango',
      guava: 'Guava',
      pineapple: 'Pineapple',
      avocado: 'Avocado',
      pomelo: 'Pomelo',
      coconut: 'Coconut',
      passionFruit: 'Passion Fruit',
      soursop: 'Soursop',
      cottonFruit: 'Cotton Fruit',
      javaPlum: 'Jave Plum',
      custardApple: 'Custard Apple',
      starApple: 'Star Apple',
      velvetApple: 'Velvet Apple',
      cucumberTree: 'Cucumber Tree',
      spanishPlum: 'Spanish Plum',
      tamarind: 'Tamarind',
      sweetTamarind: 'Sweet Tamarind',
      basil: 'Basil',
      mint: 'Mint',
      oregano: 'Oregano',
      lemongrass: 'Lemongrass',
      screwPine: 'Screw pine',
      turmeric: 'Turmeric',
      coriander: 'Coriander',
      parsley: 'Parsley',
      rosemary: 'Rosemary',
      aloeVera: 'Aloe Vera',
      sweetPotato: 'Sweet Potato',
      potato: 'Potato',
      taro: 'Taro',
      purpleYam: 'Purple Yam',
      carrot: 'Carrot',
      garlic: 'Garlic',
      onion: 'Onion',
      radish: 'Radish',
      turnip: 'Turnip',
      ginger: 'Ginger',

      cropNotFound: 'Crop not found',
      cropNotFoundDescription: 'Try to change the active category',
      noFavoritesYet: 'There are no favorite crops yet',
      noFavoritesYetDescription: 'Add your favorite crops first',

      theme: 'Theme',
      darkMode: 'Dark mode',
      language: 'Language',
      spacing: 'Spacing',
      depth: 'Depth',
      water: 'Water',
      season: 'Season',
      germination: 'Germination',
      sproutToHarvest: 'Sprout to Harvest',
    },
  },
  fil: {
    translation: {
      wet: 'Basa',
      dry: 'Tuyo',
      perennial: 'Matagalan',
      wetDry: 'Basa/Tuyo',
      searchCrop: 'Maghanap ng halaman...',

      // Categories
      vegetable: 'Gulay',
      fruit: 'Prutas',
      herb: 'Halamang gamot',
      rootCrop: 'Halamang ugat',
      selectedSeason: 'Napiling panahon',

      // Crops
      tomato: 'Kamatis',
      tomatoDescription:
        'Ang kamatis ay isang mala-damo na taunang sa pamilyang Solanaceae na pinatubo para sa nakakain nitong prutas. Ang halaman ay maaaring tuwid na may maiikling tangkay o tulad ng baging na may mahaba at kumakalat na tangkay.',
      bitterGourd: 'Ampalaya',
      pumpkin: 'Kalabasa',
      pumpkinDescription:
        'Pumpkins have long-running, bristled stems, large deeply-lobed leaves often containing white blotches, and yellow or orange flowers separated into male and female types on the same plant. The fruit is variable in shape and color but is often white, cream, or green, containing about 70% flesh and several large white seeds.',
      ladysFinger: 'Okra',
      lettuce: 'Litsugas',
      cucumber: 'Pipino',
      moringa: 'Malungay',
      stringBean: 'Sitaw',
      chineseCabbage: 'Pechay',
      mustardGreen: 'Mustasa',
      chilli: 'Sili',
      longSquash: 'Upo',
      limaBean: 'Patani',
      wingedBean: 'Sigarilyas',
      silkSquash: 'Patola',
      chayote: 'Sayote',
      eggplant: 'Talong',
      waterSpinach: 'KangKong',
      spinach: 'Espinika',
      blackPepper: 'Paminta',
      papaya: 'Papaya',
      lime: 'Kalamansi',
      banana: 'Saging',
      mango: 'Mangga',
      guava: 'Bayabas',
      pineapple: 'Pinya',
      avocado: 'Abokado',
      pomelo: 'Suha',
      coconut: 'Buko',
      passionFruit: 'Kurumbot',
      soursop: 'Guyabano',
      cottonFruit: 'Santol',
      javaPlum: 'Duhat',
      custardApple: 'Atis',
      starApple: 'Kaymito',
      velvetApple: 'Mabolo',
      cucumberTree: 'Kamias',
      spanishPlum: 'Sineguelas',
      tamarind: 'Sampalok',
      sweetTamarind: 'Kamatsile',
      basil: 'Basil',
      mint: 'Mint',
      oregano: 'Oregano',
      lemongrass: 'Tanglad',
      screwPine: 'Pandan',
      turmeric: 'Luyang Dilaw',
      coriander: 'Cilantro',
      parsley: 'Kinchay',
      rosemary: 'Rosemary',
      aloeVera: 'Aloe Vera',
      sweetPotato: 'Kamote',
      potato: 'Patatas',
      taro: 'Gabi',
      purpleYam: 'Ube',
      carrot: 'Karot',
      garlic: 'Bawang',
      onion: 'Sibuyas',
      radish: 'Labanos',
      turnip: 'Singkamas',
      ginger: 'Luya',

      cropNotFound: 'Walang natagpuang pananim',
      cropNotFoundDescription: 'Subukang baguhin ang aktibong kategorya',
      noFavoritesYet: 'Wala pang paboritong mga pananim',
      noFavoritesYetDescription:
        'Idagdag muna ang iyong mga paboritong pananim',

      theme: 'Tema',
      darkMode: 'Madilim na mode',
      language: 'Wika',
      spacing: 'Pagitan',
      depth: 'Lalim',
      water: 'Tubig',
      season: 'Panahon',
      germination: 'Pagtubo',
      sproutToHarvest: 'Mula sa buto hanggang sa pag-ani',
    },
  },
};

// Function that will retrieve the selected language
const getSelectedLanguage = async () => {
  try {
    const selectedLanguage = await AsyncStorage.getItem('appLanguage');
    return selectedLanguage || fallbackLng;
  } catch (error) {
    console.error('Error retrieving language preference:', error);
    return fallbackLng;
  }
};

// Set the language on app startup
getSelectedLanguage().then((savedLanguage) => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    fallbackLng,
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18n;
