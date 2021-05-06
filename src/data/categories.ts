import desertImage from "../assets/desert.png";
import farmlandImage from "../assets/farmland.png";
import forestAndRiverImage from "../assets/forestAndRiver.png";
import mountainAndGrasslandImage from "../assets/mountainAndGrassland.png";
import wetlandImage from "../assets/wetland.png";

export interface CategoryItem {
  key: string;
  title: string;
}

export interface Category {
  items: Array<CategoryItem>;
  key: string;
  title: string;
  image: string;
}

export const categories: Array<Category> = [
  {
    title: "Farmland",
    key: "farmland",
    image: farmlandImage,
    items: [
      { key: "cow", title: "Florida Cracker Cow" },
      { key: "angusBull", title: "Angus Bull" },
      { key: "devonBull", title: "Devon Bull" },
      { key: "herefordBull", title: "Hereford Bull" },
      { key: "angusOx", title: "Angus Ox" },
      { key: "devonOx", title: "Devon Ox" },
      { key: "oldSpotPig", title: "Old Spot Pig" },
      { key: "berkshirePig", title: "Berkshire Pig" },
      { key: "bigChinaPig", title: "Big China Pig" },
      { key: "merinoSheep", title: "Merino Sheep" },
      { key: "alpineGoat", title: "Alpine Goat" },
    ],
  },
  {
    title: "Desert",
    key: "desert",
    image: desertImage,
    items: [
      { key: "desertIguana", title: "Desert Iguana" },
      { key: "bandedGilaMonster", title: "Banded Gila Monster" },
      { key: "nineBandedArmadillo", title: "Nine-Banded Armadillo" },
      {
        key: "bajaCaliforniaPronghornBuck",
        title: "Baja California Pronghorn Buck",
      },
      {
        key: "bajaCaliforniaPronghornDoe",
        title: "Baja California Pronghorn Doe",
      },
      { key: "collaredPeccary", title: "Collared Peccary" },
      { key: "sonoranPronghornBuck", title: "Sonoran Pronghorn Buck" },
      { key: "sonoranPronghornDoe", title: "Sonoran Pronghorn Doe" },
      { key: "desertBighornRam", title: "Desert Bighorn Ram" },
      { key: "desertBighornSheep", title: "Desert Bighorn Sheep" },
      { key: "sierraNevadaBighornRam", title: "Sierra Nevada Bighorn Ram" },
      { key: "sierraNevadaBighornSheep", title: "Sierra Nevada Bighorn Sheep" },
      { key: "blackTailedRattlesnake", title: "Black-Tailed Rattlesnake" },
      { key: "cougar", title: "Cougar" },
    ],
  },
  {
    title: "Wetland",
    key: "wetland",
    image: wetlandImage,
    items: [
      { key: "americanAlligatorSmall", title: "American Alligator (Small)" },
      { key: "greenIguana", title: "Green Iguana" },
      { key: "alligatorSnappingTutrle", title: "Alligator Snapping Turtle" },
      { key: "panther", title: "Panther" },
      { key: "floridaPanther", title: "Florida Panther" },
      { key: "americanAlligator", title: "American Alligator" },
      {
        key: "diamondbackRattlesnake",
        title: "Diamondback Rattlesnake",
      },
      { key: "midlandWaterSnake", title: "Midland Water Snake" },
      { key: "timberRatttlesnake", title: "Timber Rattlesnake" },
      { key: "northernCopperheadSnake", title: "Northern Copperhead Snake" },
      { key: "southernCopperheadSnake", title: "Southern Copperhead Snake" },
      { key: "cottonmouthWaterSnake", title: "Cottonmouth Water Snake" },
      { key: "nothernWaterSnake", title: "Northern Water Snak" },
    ],
  },
  {
    title: "Mountain & Grassland",
    key: "mountainAndGrassland",
    image: mountainAndGrasslandImage,
    items: [
      { key: "rockyMountainBullElk", title: "Rocky Mountain Bull Elk" },
      { key: "rockyMountainCowElk", title: "Rocky Mountain Cow Elk" },
      { key: "americanBadger", title: "American Badger" },
      { key: "grayWolf", title: "Gray Wolf" },
      { key: "timberWolf", title: "Timber Wolf" },
      { key: "rockyMountainBighornRam", title: "Rocky Mountain Bighorn Ram" },
      {
        key: "rockyMountainBighornSheep",
        title: "Rocky Mountain Bighorn Sheep",
      },
      { key: "califorinaValleyCoyote", title: "California Valley Coyote" },
      { key: "whitetailBuck", title: "Whitetail Buck" },
      { key: "whitetailDeer", title: "Whitetail Deer" },
      { key: "wildBoar", title: "Wild Boar" },
      { key: "americanBison", title: "American Bison" },
      { key: "americanPronghornBuck", title: "American Pronghorn Buck" },
      { key: "americanPronghornDoe", title: "American Pronghorn Doe" },
    ],
  },
  {
    title: "Forest & River",
    key: "forestAndRiver",
    image: forestAndRiverImage,
    items: [
      { key: "americanBlackBear", title: "American Black Bear" },
      { key: "northAmericanBeaver", title: "North American Beaver" },
      { key: "northAmericanRaccoon", title: "North American Raccoon" },
      { key: "americanRedFox", title: "American Red Fox" },
      { key: "americanGrayFox", title: "American Gray Fox" },
      { key: "americanSilverFox", title: "Silver Fox" },
      { key: "stripedSkunk", title: "Striped Skunk" },
      { key: "virginiaOpossum", title: "Virginia Opossum" },
      { key: "americanMuskrat", title: "American Muskrat" },
      { key: "westernBullMoose", title: "Western Bull Moose" },
      { key: "westernMoose", title: "Western Moose" },
      { key: "grizzlyBear", title: "Grizzly Bear" },
      { key: "blackTailedJackrabbit", title: "Black-Tailed Jackrabbit" },
    ],
  },
];
