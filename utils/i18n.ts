import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fallbackLng = "en";

const resources = {
  en: {
    translation: {
      wet: "Wet",
      dry: "Dry",
      perennial: "Perennial",
      wetDry: "Wet/Dry",
      searchCrop: "Search crop...",

      // Categories
      vegetable: "Vegetable",
      fruit: "Fruit",
      herb: "Herb",
      rootCrop: "Root crop",
      selectedSeason: "Selected season",

      // Crops
      tomato: "Tomato",
      tomatoDescriptions: [
        "Tomato is an herbaceous annual in the family Solanaceae grown for its edible fruit. The plant can be erect with short stems or vine-like with long, spreading stems.",
        "The stems are covered in coarse hairs and the leaves are arranged spirally. The tomato plant produces yellow flowers, which can develop into a cyme of 3–12, and usually, a round fruit (berry) that is fleshy, smoothed skin, and can be red, pink, purple, brown, orange, or yellow in color.",
        "The tomato plant can grow 0.7–2 m (2.3–6.6 ft) in height and as an annual, is harvested after only one growing season. Tomato may also be referred to as the love apple and originates from South America.",
        "Tomatoes are native to South and Central America, but they are now grown all over the world.",
        "Tomatoes are one of Africa's most widely grown vegetable crops. They are grown for home consumption in almost every homestead's backyard across Sub-Saharan Africa.",
        "They are a good source of vitamins as well as a cash crop for smallholders and medium-scale commercial farmers. Tomatoes used as flavor enhancers in food are always in high demand, both fresh and processed.",
      ],
      bitterGourd: "Bitter Gourd",
      bitterGourdDescriptions: [
        "Bitter Gourd is a climbing vine, nearly or quite smooth, annual vine. Tendrils are simple, up to 20 centimeters long. Leaves are 2.5 to 10 centimeters in diameter, cut nearly to the base into 5 to 7 lobes, oblong-ovate, variously toothed, and heart shaped at the base.",
      ],
      pumpkin: "Pumpkin",
      pumpkinDescriptions: [
        "Pumpkin is the name given to a group of plant species in the genus Cucurbita, including Cucurbita pepo, Cucurbita mixta, Cucurbita maxima, and Cucurbita moschata. It is grown primarily as a vegetable or ornamental plant.",
        "Pumpkins have long-running, bristled stems, large deeply-lobed leaves often containing white blotches, and yellow or orange flowers separated into male and female types on the same plant. The fruit is variable in shape and color but is often white, cream, or green, containing about 70% flesh and several large white seeds.",
        "Pumpkin plants are short-lived annual or perennial vines with branching tendrils and broad lobed leaves. The plant produces large yellow or orange flowers and a pepo fruit (berry with a thick rind) known as a pumpkin. The fruit can range greatly in size, from miniature pumpkins weighing a few ounces to giant pumpkins which can reach over 75 lbs (34 kg). The skin of the pumpkin is usually ribbed and is usually orange in color although some varieties are green, grey, yellow, or red. Pumpkin plants are usually grown as annuals, surviving one growing season and the vines are capable of reaching 15 m (50 ft) in length if vines are allowed to root. Pumpkin may also be referred to as squash or marrow and is believed to have originated in Mexico and South America.",
      ],
      ladysFinger: "Lady’s Finger",
      ladysFingerDescriptions: [
        "Okra, or ladies' fingers as the pods are sometimes referred to because of their long, tapered, finger-like shape, is thought by many historians to have originated in east Africa. It was cultivated as early as the 12th century BC in and around Ethiopia, including portions of Eritrea, and Egypt.",
      ],
      lettuce: "Lettuce",
      lettuceDescriptions: [
        "Lettuce, Lactuca sativa, is a leafy herbaceous annual or biennial plant in the family Asteraceae grown for its leaves which are used as a salad green. The lettuce plant can vary greatly in size, shape and leaf type but generally, the leaves of the plant form a dense head or loose rosette. The stem of the plant is short, with larger leaves arranged at the bottom and becoming progressively smaller further up the stem. Leaves can be smooth or curly and are usually green or red in color. The lettuce plant can grow to a height of 30–100 cm (12–40 in) in height and is typically grown as an annual, harvested after only one growing season. Lettuce may be referred to as garden lettuce and is believed to originate from Asia Minor and the Middle East.",
      ],
      cucumber: "Cucumber",
      cucumberDescriptions: [
        "Cucumber, Cucumis sativus, is a warm season, vining, annual plant in the family Cucurbitaceae grown for its edible cucumber fruit. The cucumber plant is a sprawling vine with large leaves and curling tendrils. The plant may have 4 or 5 main stems from which the tendrils branch. The leaves of the plant are arranged alternately on the vines, have 3–7 pointed lobes and are hairy. The cucumber plant produces yellow flowers that are 4 cm (1.6 in) in diameter. The cucumber fruit varies in shape but is generally a curved cylinder rounded at both ends that can reach up to 60 cm (24 in) in length 10 cm (3.9 in) in diameter. Cucumber plants are annual plants, surviving only one growing season and the vines can reach up to 5 m (16.4 ft) in length. Cucumber may also be referred to as gherkin and originates from the foothills of the Himalayas, likely in India.",
      ],
      moringa: "Moringa",
      moringaDescriptions: [
        "CucumberThe malunggay tree known as the moringa oleifera (simply referred to as moringa for short) has an economic life span of 30 to 50 years. Each tree can produce 10,000 seeds per year. The seeds of Moringa produce 38-40% oil. Moringa can be used to fortify noodles, soups and bread.",
      ],
      stringBean: "String Bean",
      stringBeanDescriptions: [
        "Sitaw is an herbaceous climbing plant grown for it strikingly long edible pods. Leaves are trifoliate, green, oval and smooth-edged. Flowers are purplish, about 1.5 centimeters long, giving out green and slender yardlong pods. Cultivated.",
      ],
      chineseCabbage: "Chinese Cabbage",
      chineseCabbageDescriptions: [
        "Chinese cabbage can refer to two subspecies of cabbage belonging to the family Brassicaceae, Brassica rapa pekinensis (napa cabbage) and Brassica rapa chinensis (bok-choy). Napa cabbage has a barrel shaped, elongated rosette of overlapping leaves which point inwardly and can grow 25–51 cm (10–20 in) tall, with a diameter of 15–20 cm (6–8 in). Napa cabbage may also be called Chinese leaf or wong-bok and originates from the Beijing region of China. The bok choy type cabbage is made up of about 30 individual leaves arranged into a loose, spiral head and are dark green and shiny. The petioles, or stalks, are white or light green and thick and fleshy. Bok choy can reach a height of 15–60 cm (0.5 to 2 ft) and spread outwards by 15–46 cm (0.5–1.5 ft). Bok choy may also be referred to as pak choi, Chinese chard, Chinese mustard, celery mustard or spoon cabbage and also originates from China",
      ],
      mustardGreen: "Mustard Green",
      mustardGreenbageDescriptions: [
        "Mustasa is an erect, branched, smooth annual, 0.4 to 1 meter high. Leaves are oblong-obovate to oblong-lanceolate, 5 to 15 centimeters long, or in some cultivated forms much larger, thin, irregularly toothed or subentire, the lower ones sometimes lobed or pinnatifid. Flowers are yellow, 6 to 8 millimeters long.",
      ],
      chilli: "Chilli",
      chilliDescriptions: [
        "Mustasa is an erect, branched, smooth annual, 0.4 to 1 meter high. Leaves are oblong-obovate to oblong-lanceolate, 5 to 15 centimeters long, or in some cultivated forms much larger, thin, irregularly toothed or subentire, the lower ones sometimes lobed or pinnatifid. Flowers are yellow, 6 to 8 millimeters long.",
      ],
      longSquash: "Long Squash",
      limaBean: "Lima Bean",
      wingedBean: "Winged Bean",
      silkSquash: "Silk Squash",
      chayote: "Chayote",
      eggplant: "Eggplant",
      waterSpinach: "Water Spinach",
      spinach: "Spinach",
      blackPepper: "Black Pepper",
      papaya: "Papaya",
      lime: "Lime",
      banana: "Banana",
      mango: "Mango",
      guava: "Guava",
      pineapple: "Pineapple",
      avocado: "Avocado",
      pomelo: "Pomelo",
      coconut: "Coconut",
      passionFruit: "Passion Fruit",
      soursop: "Soursop",
      cottonFruit: "Cotton Fruit",
      javaPlum: "Jave Plum",
      custardApple: "Custard Apple",
      starApple: "Star Apple",
      velvetApple: "Velvet Apple",
      cucumberTree: "Cucumber Tree",
      spanishPlum: "Spanish Plum",
      tamarind: "Tamarind",
      sweetTamarind: "Sweet Tamarind",
      basil: "Basil",
      mint: "Mint",
      oregano: "Oregano",
      lemongrass: "Lemongrass",
      screwPine: "Screw pine",
      turmeric: "Turmeric",
      coriander: "Coriander",
      parsley: "Parsley",
      rosemary: "Rosemary",
      aloeVera: "Aloe Vera",
      sweetPotato: "Sweet Potato",
      potato: "Potato",
      taro: "Taro",
      purpleYam: "Purple Yam",
      carrot: "Carrot",
      garlic: "Garlic",
      onion: "Onion",
      radish: "Radish",
      turnip: "Turnip",
      ginger: "Ginger",

      cropNotFound: "Crop not found",
      cropNotFoundDescription: "Try to change the active category",
      noFavoritesYet: "There are no favorite crops yet",
      noFavoritesYetDescription: "Add your favorite crops first",

      pests: "Pests",

      theme: "Theme",
      darkMode: "Dark mode",
      language: "Language",
      spacing: "Spacing",
      depth: "Depth",
      water: "Water",
      season: "Season",
      germination: "Germination",
      sproutToHarvest: "Sprout to Harvest",
    },
  },
  fil: {
    translation: {
      wet: "Basa",
      dry: "Tuyo",
      perennial: "Matagalan",
      wetDry: "Basa/Tuyo",
      searchCrop: "Maghanap ng halaman...",

      // Categories
      vegetable: "Gulay",
      fruit: "Prutas",
      herb: "Halamang gamot",
      rootCrop: "Halamang ugat",
      selectedSeason: "Napiling panahon",

      // Crops
      tomato: "Kamatis",
      tomatoDescription:
        "Ang kamatis ay isang mala-damo na taunang sa pamilyang Solanaceae na pinatubo para sa nakakain nitong prutas. Ang halaman ay maaaring tuwid na may maiikling tangkay o tulad ng baging na may mahaba at kumakalat na tangkay.",
      bitterGourd: "Ampalaya",
      pumpkin: "Kalabasa",
      pumpkinDescription:
        "Pumpkins have long-running, bristled stems, large deeply-lobed leaves often containing white blotches, and yellow or orange flowers separated into male and female types on the same plant. The fruit is variable in shape and color but is often white, cream, or green, containing about 70% flesh and several large white seeds.",
      ladysFinger: "Okra",
      ladysFingerDescription: "",
      lettuce: "Litsugas",
      cucumber: "Pipino",
      moringa: "Malungay",
      stringBean: "Sitaw",
      chineseCabbage: "Pechay",
      mustardGreen: "Mustasa",
      chilli: "Sili",
      longSquash: "Upo",
      limaBean: "Patani",
      wingedBean: "Sigarilyas",
      silkSquash: "Patola",
      chayote: "Sayote",
      eggplant: "Talong",
      waterSpinach: "KangKong",
      spinach: "Espinika",
      blackPepper: "Paminta",
      papaya: "Papaya",
      lime: "Kalamansi",
      banana: "Saging",
      mango: "Mangga",
      guava: "Bayabas",
      pineapple: "Pinya",
      avocado: "Abokado",
      pomelo: "Suha",
      coconut: "Buko",
      passionFruit: "Kurumbot",
      soursop: "Guyabano",
      cottonFruit: "Santol",
      javaPlum: "Duhat",
      custardApple: "Atis",
      starApple: "Kaymito",
      velvetApple: "Mabolo",
      cucumberTree: "Kamias",
      spanishPlum: "Sineguelas",
      tamarind: "Sampalok",
      sweetTamarind: "Kamatsile",
      basil: "Basil",
      mint: "Mint",
      oregano: "Oregano",
      lemongrass: "Tanglad",
      screwPine: "Pandan",
      turmeric: "Luyang Dilaw",
      coriander: "Cilantro",
      parsley: "Kinchay",
      rosemary: "Rosemary",
      aloeVera: "Aloe Vera",
      sweetPotato: "Kamote",
      potato: "Patatas",
      taro: "Gabi",
      purpleYam: "Ube",
      carrot: "Karot",
      garlic: "Bawang",
      onion: "Sibuyas",
      radish: "Labanos",
      turnip: "Singkamas",
      ginger: "Luya",

      cropNotFound: "Walang natagpuang pananim",
      cropNotFoundDescription: "Subukang baguhin ang aktibong kategorya",
      noFavoritesYet: "Wala pang paboritong mga pananim",
      noFavoritesYetDescription:
        "Idagdag muna ang iyong mga paboritong pananim",

      pests: "Mga Peste",

      theme: "Tema",
      darkMode: "Madilim na mode",
      language: "Wika",
      spacing: "Pagitan",
      depth: "Lalim",
      water: "Tubig",
      season: "Panahon",
      germination: "Pagtubo",
      sproutToHarvest: "Mula sa buto hanggang sa pag-ani",
    },
  },
};

// Function that will retrieve the selected language
const getSelectedLanguage = async () => {
  try {
    const selectedLanguage = await AsyncStorage.getItem("appLanguage");
    return selectedLanguage || fallbackLng;
  } catch (error) {
    console.error("Error retrieving language preference:", error);
    return fallbackLng;
  }
};

// Set the language on app startup
getSelectedLanguage().then((savedLanguage) => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    fallbackLng,
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18n;
