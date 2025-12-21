
const townNames = [
  "Ashbarrow",
  "Stonehollow",
  "Brightwater",
  "Ravenford",
  "Willowmark",
  "Dustreach",
  "Highspire",
  "Coppershade",
  "Moonridge",
  "Ironvale",
  "Saltmeadow",
  "Frostmarch",
  "Glimmerford",
  "Redwillow",
  "Cragspire",
  "Starwatch",
  "Mirebrook",
  "Thornwall",
  "Windbreak",
  "Riverstar",
  "Hollowmere",
  "Northlight",
  "Sootcross",
  "Lakefall",
  "Barrowhusk",
  "Pineward",
  "Ridgestone",
  "Elderbay",
  "Fallowbend",
  "Stormrise",
  "Sagefell",
  "Briarbank",
  "Suncrest",
  "Marshrun",
  "Echoheart",
  "Mudwharf",
  "Crestmoor",
  "Fogreach",
  "Wheatspire",
  "Goldbranch",
  "Shadowmere",
  "Tempest Hill",
  "Fernrock",
  "Oakspire",
  "Brushhaven",
  "Thundervale",
  "Tidebreak",
  "Ridgefall",
  "Wyvernford",
  "Eclipse Hollow",
  "Silvermaw",
  "Quietshore",
  "Grainhold",
  "Cactus Run",
  "Hearthbarrow",
  "Graveshade",
  "Deepwillow",
  "Copperhill",
  "Westgate",
  "Maplebarrow",
  "Wintercrest",
  "Mosslanding",
  "Tanglebridge",
  "Burnt Peak",
  "Stonefen",
  "Eaglebrook",
  "Sandwharf",
  "New Ember",
  "Lilymarsh",
  "Blue Hollow",
  "Shaleshore",
  "Ivyham",
  "Thornreach",
  "Cobalt Run",
  "Veldenport",
  "Lockhaven",
  "Faybrook",
  "Dire Wharf",
  "Evenrest",
  "Miner's Wake",
  "Crossfall",
  "Bloomspire",
  "Nightwell",
  "Stillwater Hold",
  "Drywind",
  "Oathfield",
  "Slatehaven",
  "Sunwharf",
  "Hawkspear",
  "Gleamford",
  "Froststar",
  "Dunelight",
  "Greenmarrow",
  "Soot Haven",
  "Veilwater",
  "Duskward",
  "Rowanspire",
  "Brightfen",
  "Highbarrow"
]

const shopTypes = [
  {
    type: "General Goods",
    catalogueIndex: ["adventuring-gear", "standard-gear", "kits", "equipment-packs", "mounts-and-other-animals"]
  },
  {
    type: "Simple Weapons",
    catalogueIndex: ["simple-weapons", "simple-melee-weapons", "simple-ranged-weapons"]
  },
  {
    type: "Martial Weapons",
    catalogueIndex: ["martial-weapons", "martial-melee-weapons", "martial-ranged-weapons", "melee-weapons", "ranged-weapons", "weapon"]
  },
  {
    type: "Ammunition",
    catalogueIndex: ["ammunition"]
  },
  {
    type: "Armor",
    catalogueIndex: ["armor", "light-armor", "medium-armor", "heavy-armor", "shields"]
  },
  {
    type: "Mounts & Vehicles",
    catalogueIndex: ["mounts-and-vehicles", "land-vehicles", "waterborne-vehicles", "tack-harness-and-drawn-vehicles"]
  },
  {
    type: "Tools & Supplies",
    catalogueIndex: ["artisans-tools", "tools", "other-tools"]
  },
  {
    type: "Entertainment",
    catalogueIndex: ["gaming-sets", "musical-instruments"]
  },
  {
    type: "Magic Implements",
    catalogueIndex: ["arcane-foci", "druidic-foci", "holy-symbols", "wand", "rod", "staff", "ring"]
  },
  {
    type: "Potions & Scrolls",
    catalogueIndex: ["potion", "scroll"]
  },
  {
    type: "Wondrous Items",
    catalogueIndex: ["wondrous-items"]
  }
]

export const defaultTowns = [{
    id: crypto.randomUUID(),
    name: getRandomTown(null),
    size: 0,
    magicRarity: 0,
    PcLevel: 0,
    shopList: [{
    id: "610843d9-2312-4738-92b5-17aac964cfb2",
    name: "Whispering Vault",
    shopKeeper: "Talvos Ashwind",
    type: [
      "general goods"
    ],
    catalogueIndex: [
      "adventuring-gear",
      "standard-gear",
      "equipment-packs",
      "kits"
    ],
    goods: [
      "/api/2014/equipment/abacus",
      "/api/2014/equipment/grappling-hook",
      "/api/2014/equipment/holy-water-flask",
      "/api/2014/equipment/lamp",
      "/api/2014/equipment/piton",
      "/api/2014/equipment/shovel",
      "/api/2014/equipment/small-knife",
      "/api/2014/magic-items/bag-of-holding",
    ]
  },
  {
    id: "2b443c86-b948-4346-a5d2-a339945bfc60",
    name: "Iron Outfitter",
    shopKeeper: "Lorin Thornfield",
    type: [
      "weapons"
    ],
    "catalogueIndex": [
      "martial-weapons",
      "martial-melee-weapons",
      "martial-ranged-weapons",
      "melee-weapons",
      "ranged-weapons",
      "simple-weapons",
      "simple-melee-weapons",
      "simple-ranged-weapons"
    ],
    goods: []
  },
  {
    id: "ee7fea43-b891-41b9-8d75-be280a319267",
    name: "Iron Atelier",
    shopKeeper: "Cassian Riversong",
    type: [
      "armor"
    ],
    catalogueIndex: [
      "light-armor",
      "medium-armor",
      "heavy-armor",
      "shields"
    ],
    goods: []
  },]
},
{
    id: crypto.randomUUID(),
    name: 'Emptyville',
    size: 0,
    magicRarity: 0,
    PcLevel: 0,
    shopList: []
}
]

export function getRandomTown(townList){
  let randChoice = townNames[Math.floor(Math.random()*townNames.length)]
  if (!townList) return randChoice;
  while (townList.includes(randChoice)) {
    randChoice = townNames[Math.floor(Math.random()*townNames.length)]
  }
  return randChoice;
}
