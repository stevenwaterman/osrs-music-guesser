// TODO
// - exact coords for prif
// - detect whether a point is inside a polygon
// - detect the nearest point inside a polygon
// - add missing tracks that weren't on music map eg ape-ex predator

import type { Coordinate, Polygon } from "./coordinates";

function rectangle(
  left: number,
  top: number,
  right: number,
  bottom: number
): Polygon {
  const topLeft: Coordinate = [left, top];
  const bottomLeft: Coordinate = [left, bottom];
  const bottomRight: Coordinate = [right, bottom];
  const topRight: Coordinate = [right, top];
  return {
    coordinates: [topLeft, bottomLeft, bottomRight, topRight],
    inMap: true,
  };
}

// Banned transport:
// - keldagrim minecart to dwarvern mine
// - keldagrim minecart to white wolf mountain
// - keldagrim - doregsh kaan train
// - passageway between catacombs and forthos
// - passageway between dorgesh kaan and kalphite lair
// - fairy rings
// - crop circles (puro puro is in the lumbridge swamp shed)

const mythsDungeon = [
  // myths
  rectangle(2455, 2849, 2459, 2845),
  // wrath altar
  rectangle(2447, 2817, 2443, 2821),
  // corsair north
  rectangle(2481, 2893, 2485, 2889),
  // corsair south
  rectangle(2521, 2863, 2525, 2859),
];
const brimhavenDungeon = [
  // north
  rectangle(2742, 3156, 2746, 3152),
  // south
  rectangle(2762, 3060, 2758, 3064),
];
const karuulmSlayerDungeon = rectangle(1313, 3804, 1307, 3810);
const zanaris = rectangle(3201, 3171, 3206, 3166);
const clockTower = rectangle(2567, 3227, 2571, 3231);
const ourania = rectangle(2450, 3229, 2454, 3233);
const varrockStatue = rectangle(3280, 3465, 3287, 3471);
const godWars = rectangle(2916, 3748, 2920, 3744);
const taverleyDungeon = [
  // main entrance
  rectangle(2886, 3395, 2882, 3399),
  // fire obelisk entrance
  rectangle(2840, 3426, 2844, 3422),
];
const tob = rectangle(3675, 3221, 3679, 3217);
const wildyGodWars = rectangle(3019, 3737, 3015, 3741);
const barbAssault = rectangle(2537, 3575, 2528, 3566);
const tzhaar = [
  // Karamja volcano
  rectangle(2854, 3170, 2858, 3166),
  // Crandor
  rectangle(2832, 3258, 2836, 3254),
];
const lavaMaze = rectangle(3067, 3858, 3071, 3854);
const iorwerthCamp = rectangle(2199, 3264, 2203, 3260);
const yanilleAgility = [
  // north
  rectangle(2567, 3124, 2571, 3120),
  // south
  rectangle(2602, 3080, 2606, 3076),
];
const kbd = rectangle(3015, 3851, 3019, 3847);
const lithkren = rectangle(3559, 3988, 3546, 4007);
const ogreEnclave = rectangle(2504, 3041, 2508, 3037);
const braindeath = rectangle(3679, 3540, 3683, 3536);
const brimhavenAgility = rectangle(2807, 3196, 2811, 3192);
const corp = rectangle(3201, 3683, 3205, 3679);
const nightmare = rectangle(3726, 3302, 3730, 3298);
const ancientCavern = rectangle(2510, 3510, 2514, 3506);
const werewolfAgility = rectangle(3541, 3463, 3545, 3459);
const sophanemDungeon = rectangle(3313, 2799, 3317, 2795);
const catacombsGiantsDen = [
  // statue
  rectangle(1635, 3675, 1639, 3671),
  // arceuus
  rectangle(1693, 3867, 1697, 3863),
  // lovakenj
  rectangle(1561, 3793, 1565, 3790),
  // shayzien
  rectangle(1467, 3656, 1471, 3652),
  // giants den
  rectangle(1418, 3590, 1422, 3586),
];
const strongholdSlayerCave = rectangle(2426, 3426, 2430, 3422);
const warriorsGuildBasement = rectangle(2831, 3544, 2835, 3540);
const whiteWolfTunnel = [
  // west
  rectangle(2818, 3486, 2822, 3482),
  // east
  rectangle(2875, 3482, 2879, 3478),
];
const iceQueen = [
  // west
  rectangle(2821, 3512, 2825, 3508),
  // middle
  rectangle(2845, 3518, 2849, 3514),
  // east
  rectangle(2855, 3521, 2859, 3517),
];
const abyss = rectangle(3099, 3563, 3107, 3556);
const myrequeLaboratories = [
  // canifis
  rectangle(3507, 3450, 3511, 3446),
  // meiyerrditch
  rectangle(3641, 3306, 3645, 3303),
];
const experiments = [
  // graves
  rectangle(3574, 3528, 3578, 3524),
  // north - mausoleum
  rectangle(3502, 3572, 3507, 3569),
];
const pollnivneachSmokeDungeon = rectangle(3308, 2964, 3312, 2960);
const mimic = rectangle(1641, 3575, 1649, 3570);
const phasmatysBrewery = rectangle(3678, 3500, 3682, 3496);
const brimstail = rectangle(2401, 3421, 2405, 3417);
const keldagrim = [
  // main entrance
  rectangle(2729, 3715, 2733, 3711),
  // GE
  rectangle(3138, 3506, 3142, 3502),
];
const forthos = [
  // west
  rectangle(1668, 3569, 1672, 3565),
  // east
  rectangle(1700, 3576, 1704, 3572),
];
const cabinFever = rectangle(3708, 3499, 3712, 3495);
const goblinCave = rectangle(2621, 3395, 2625, 3391);
const ardySewerEast = [
  // Jimmy dazzler
  rectangle(2559, 3322, 2563, 3318),
  // Ardy entrance
  rectangle(2630, 3296, 2634, 3292),
];
const dwarvernMine = [
  rectangle(3017, 3341, 3021, 3337),
  rectangle(3016, 3452, 3020, 3448),
];
const kendalCave = rectangle(2802, 3706, 2807, 3701);
const swampCavesDoreshKaanTears = [
  // Lumbridge castle basement
  rectangle(3207, 3220, 3211, 3216),
  // Lumbridge swamp
  rectangle(3167, 3174, 3171, 3170),
  // Watermill
  rectangle(3225, 3286, 3236, 3278),
];
const deepWildyDungeon = rectangle(3043, 3926, 3047, 3922);
const ardySewerWest = rectangle(2585, 3237, 2589, 3233);
const elenaPrisonPlagueCity = rectangle(2534, 3271, 2538, 3267);
const carnelianBasement = rectangle(2567, 3271, 2570, 3267);
const varrockWestBankVault = rectangle(3185, 3436, 3190, 3432);
const templeOfIkov = [
  // Main entrance
  rectangle(2675, 3406, 2679, 3402),
  // McGrubbor's wood
  rectangle(2657, 3494, 2661, 3490),
];
const hauntedMine = [
  // north east
  rectangle(3451, 3246, 3455, 3242),
  // south west
  rectangle(3438, 3234, 3442, 3230),
];
const culinaromancer = rectangle(3207, 3220, 3209, 3218);
const rantz = rectangle(2624, 2997, 2637, 2985);
const sirTiffy = rectangle(2994, 3376, 3000, 3371);
const clanWars = rectangle(3126, 3625, 3132, 3618);
const lms = rectangle(3137, 3645, 3145, 3632);
const clanHall = rectangle(3183, 3474, 3188, 3468);
const wizardTowerBasement = rectangle(3102, 3164, 3106, 3159);
const burthorpeGamesRoom = rectangle(2896, 3568, 2901, 3566);
const chaosAltar = rectangle(3053, 3597, 3068, 3584);
const tasteOfHopeSpying = rectangle(3653, 3239, 3659, 3234);
const serafinaBasement = rectangle(3592, 3275, 3595, 3272);
const sotfSpying = rectangle(3754, 3303, 3709, 3328);
const damienLeucurte = rectangle(3713, 3362, 3722, 3354);
const miscDungeon = [
  // misc
  rectangle(2507, 3848, 2511, 3844),
  // etc
  rectangle(2618, 3867, 2622, 3863),
];
const heroesGuild = rectangle(2890, 3509, 2894, 3505);
const witchsBasement = rectangle(2906, 3477, 2908, 3475);
const towerOfLife = rectangle(2648, 3215, 2652, 3211);
const wrathAltar = rectangle(2443, 2827, 2449, 2823);
const rabbitCave = rectangle(2263, 3420, 2266, 3417);
const undergroundPass = [
  // west
  rectangle(2311, 3217, 2315, 3213),
  // east
  rectangle(2432, 3317, 2436, 3313),
];
const dks = [
  // main
  rectangle(2519, 3742, 2523, 3738),
  // top
  rectangle(2541, 3743, 2545, 3739),
];
const strongholdOfSecurity = rectangle(3079, 3422, 3083, 3418);
const wildySlayerCave = [
  // south
  rectangle(3258, 3668, 3262, 3664),
  // north
  rectangle(3291, 3748, 3295, 3744),
];
const barrows = rectangle(3545, 3308, 3584, 3268);
const chasmOfFire = rectangle(1431, 3672, 1435, 3668);
const mogreCamp = rectangle(2666, 3165, 2671, 3161);
const templeTrekking = [
  // north
  rectangle(3431, 3491, 3440, 3484),
  // south
  rectangle(3475, 3243, 3485, 3234),
];
const smokeDungeon = rectangle(2410, 3063, 2414, 3059);
const draynorSewers = [
  // north
  rectangle(3082, 3274, 3086, 3270),
  // south
  rectangle(3116, 3246, 3120, 3242),
];
const lunarIsleMine = rectangle(2140, 3946, 2144, 3942);
const earthAltar = rectangle(3302, 3478, 3308, 3472);
const whiteKnightsCrypt = rectangle(2963, 3333, 2967, 3329);
const fisherRealm = rectangle(2738, 3236, 2745, 3229);
const mta = rectangle(3357, 3323, 3369, 3313);
const witchaven = rectangle(2694, 3285, 2698, 3281);
const penguin = rectangle(2623, 4056, 2679, 3999);
const dream = rectangle(2071, 3913, 2074, 3910);
const trollArenaPassage = [
  // north
  rectangle(2905, 3656, 2910, 3651),
  // south
  rectangle(2901, 3646, 2907, 3641),
];
const observatoryDungeon = [
  // south west
  rectangle(2435, 3165, 2439, 3161),
  // north east
  rectangle(2457, 3188, 2461, 3184),
];
const camdozaal = rectangle(2997, 3495, 3001, 3491);
const roguesDen = rectangle(2904, 3539, 2908, 3535);
const glod = rectangle(2920, 3427, 2924, 3423);
const soulsBane = rectangle(3307, 3452, 3311, 3448);
const mournerTunnels = rectangle(2541, 3326, 2544, 3323);
const apeAtollDungeonMM1 = rectangle(2761, 2705, 2765, 2701);
const cox = rectangle(1231, 3575, 1235, 3571);
const lletya = rectangle(2310, 3198, 2363, 3143);
const uzer = rectangle(3491, 3092, 3495, 3088);
const beneathCursedSands = rectangle(3406, 2850, 3410, 2846);
const fossilIslandWyverns = [
  // north
  rectangle(3676, 3856, 3680, 3852),
  // south
  rectangle(3744, 3781, 3748, 3777),
];
const giantsFoundry = rectangle(3359, 3152, 3363, 3148);
const sorceressGarden = rectangle(3319, 3143, 3323, 3139);
// TODO this is approx
const gauntlet = rectangle(2199, 3367, 2210, 3355);
const genieCave = rectangle(3370, 2907, 3375, 2902);
const natureGrotto = rectangle(3437, 3339, 3442, 3335);
const goblinVillage = rectangle(2944, 3516, 2970, 3489);
const hamHideout = rectangle(3163, 3254, 3167, 3250);
const bodyAltar = rectangle(3049, 3447, 3056, 3440);
const saba = rectangle(2851, 3579, 2856, 3574);
const yarlo = rectangle(3236, 3398, 3242, 3392);
const pohPortals = [
  // rimmington
  rectangle(2950, 3226, 2954, 3221),
  // taverley
  rectangle(2890, 3467, 2894, 3462),
  // pollnivneach
  rectangle(3338, 3003, 3342, 2999),
  // hosidius
  rectangle(1739, 3519, 1743, 3515),
  // rellekka
  rectangle(2668, 3632, 2672, 3628),
  // brimhaven
  rectangle(2754, 3180, 2758, 3175),
  // yanille
  rectangle(2542, 3099, 2546, 3095),
  // prifddinas TODO very approx
  rectangle(2202, 3332, 2225, 3311),
];
const xericsLookoutBasement = rectangle(1588, 3528, 1592, 3524);
const icthlarinPyramid = rectangle(3287, 2779, 3302, 2765);
const kalphiteLair = rectangle(3225, 3110, 3229, 3106);
const kalphiteCave = rectangle(3318, 3124, 3322, 3120);
const toa = rectangle(3356, 2713, 3360, 2709);

export const finishedData: Record<
  string,
  { title: string; file: string; polygons: Polygon[] }
> = {
  "7th Realm": {
    title: "7th Realm",
    file: "7th_Realm",
    polygons: [...mythsDungeon, ...brimhavenDungeon],
  },
  Adventure: {
    title: "Adventure",
    file: "Adventure",
    polygons: [
      {
        coordinates: [
          [3200, 3456],
          [3200, 3520],
          [3264, 3520],
          [3264, 3456],
          [3200, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Al Kharid ": {
    title: "Al Kharid ",
    file: "Al_Kharid_(music_track)",
    polygons: [
      {
        coordinates: [
          [3264, 3136],
          [3264, 3200],
          [3392, 3200],
          [3392, 3136],
          [3264, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Alchemical Attack!": {
    title: "Alchemical Attack!",
    file: "Alchemical_Attack!",
    polygons: [karuulmSlayerDungeon],
  },
  "All's Fairy in Love &amp; War": {
    title: "All's Fairy in Love &amp; War",
    file: "All%27s_Fairy_in_Love_%26_War",
    polygons: [],
  },
  Alone: {
    title: "Alone",
    file: "Alone",
    polygons: [
      clockTower,
      {
        coordinates: [
          [2994, 3520],
          [2994, 3524],
          [2998, 3528],
          [2998, 3534],
          [3008, 3544],
          [3022, 3544],
          [3029, 3537],
          [3029, 3532],
          [3041, 3520],
          [3072, 3520],
          [3072, 3456],
          [3008, 3456],
          [3008, 3462],
          [2994, 3462],
          [2990, 3458],
          [2988, 3458],
          [2988, 3457],
          [2985, 3457],
          [2979, 3463],
          [2979, 3475],
          [2990, 3486],
          [2990, 3510],
          [2994, 3514],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3008, 3518],
          [3008, 3514],
          [3009, 3513],
          [3012, 3513],
          [3013, 3514],
          [3014, 3514],
          [3015, 3515],
          [3018, 3515],
          [3019, 3514],
          [3019, 3513],
          [3021, 3513],
          [3021, 3510],
          [3025, 3510],
          [3025, 3506],
          [3027, 3506],
          [3027, 3505],
          [3028, 3504],
          [3031, 3504],
          [3033, 3506],
          [3033, 3508],
          [3031, 3510],
          [3031, 3517],
          [3029, 3519],
          [3020, 3519],
          [3018, 3517],
          [3017, 3517],
          [3017, 3520],
          [3015, 3520],
          [3015, 3517],
          [3014, 3517],
          [3012, 3519],
          [3009, 3519],
          [3008, 3518],
        ],
        inMap: true,
      },
    ],
  },
  "Altar Ego": {
    title: "Altar Ego",
    file: "Altar_Ego",
    polygons: [ourania],
  },
  "Alternative Root": {
    title: "Alternative Root",
    file: "Alternative_Root",
    polygons: [varrockStatue],
  },
  "Ambient Jungle": {
    title: "Ambient Jungle",
    file: "Ambient_Jungle",
    polygons: [
      {
        coordinates: [
          [2816, 2944],
          [2816, 3008],
          [2880, 3008],
          [2880, 2944],
          [2816, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "The Ancient Prison": {
    title: "The Ancient Prison",
    file: "The_Ancient_Prison",
    polygons: [godWars],
  },
  "The Angel's Fury": {
    title: "The Angel's Fury",
    file: "The_Angel%27s_Fury",
    polygons: [godWars],
  },
  Anywhere: {
    title: "Anywhere",
    file: "Anywhere",
    polygons: [
      {
        coordinates: [
          [2688, 2752],
          [2688, 2816],
          [2752, 2816],
          [2752, 2752],
          [2688, 2752],
        ],
        inMap: true,
      },
    ],
  },
  Arabian: {
    title: "Arabian",
    file: "Arabian",
    polygons: [
      {
        coordinates: [
          [3392, 3136],
          [3392, 3200],
          [3456, 3200],
          [3456, 3136],
          [3392, 3136],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3264, 3200],
          [3264, 3264],
          [3328, 3264],
          [3328, 3200],
          [3264, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Arabian 2": {
    title: "Arabian 2",
    file: "Arabian_2",
    polygons: [
      {
        coordinates: [
          [3264, 3264],
          [3264, 3328],
          [3328, 3328],
          [3328, 3264],
          [3264, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Arabian 3": {
    title: "Arabian 3",
    file: "Arabian_3",
    polygons: [
      {
        coordinates: [
          [3200, 3072],
          [3200, 3136],
          [3264, 3136],
          [3264, 3072],
          [3200, 3072],
        ],
        inMap: true,
      },
    ],
  },
  Arabique: {
    title: "Arabique",
    file: "Arabique",
    polygons: taverleyDungeon,
  },
  "Arachnids of Vampyrium ": {
    title: "Arachnids of Vampyrium ",
    file: "Arachnids_of_Vampyrium_(music_track)",
    polygons: [tob],
  },
  Arboretum: {
    title: "Arboretum",
    file: "Arboretum",
    polygons: [
      {
        coordinates: [
          [3615, 3365],
          [3615, 3359],
          [3621, 3359],
          [3626, 3354],
          [3632, 3354],
          [3637, 3359],
          [3637, 3365],
          [3632, 3370],
          [3626, 3370],
          [3621, 3365],
          [3615, 3365],
        ],
        inMap: true,
      },
    ],
  },
  "Arcane ": {
    title: "Arcane ",
    file: "Arcane_(music_track)",
    polygons: [
      {
        coordinates: [
          [1603, 3876],
          [1595, 3876],
          [1595, 3860],
          [1555, 3860],
          [1555, 3835],
          [1556, 3835],
          [1556, 3834],
          [1557, 3834],
          [1557, 3833],
          [1558, 3833],
          [1558, 3832],
          [1559, 3832],
          [1559, 3831],
          [1560, 3831],
          [1560, 3830],
          [1561, 3830],
          [1561, 3829],
          [1562, 3829],
          [1562, 3812],
          [1575, 3799],
          [1584, 3799],
          [1586, 3797],
          [1586, 3785],
          [1587, 3785],
          [1587, 3784],
          [1588, 3784],
          [1588, 3783],
          [1590, 3783],
          [1590, 3782],
          [1592, 3782],
          [1592, 3781],
          [1594, 3781],
          [1594, 3780],
          [1595, 3780],
          [1596, 3779],
          [1598, 3779],
          [1598, 3776],
          [1597, 3775],
          [1598, 3774],
          [1598, 3772],
          [1600, 3770],
          [1605, 3770],
          [1610, 3765],
          [1612, 3765],
          [1614, 3763],
          [1614, 3760],
          [1618, 3756],
          [1618, 3732],
          [1621, 3729],
          [1621, 3726],
          [1625, 3722],
          [1625, 3718],
          [1636, 3718],
          [1636, 3717],
          [1642, 3711],
          [1657, 3711],
          [1658, 3710],
          [1677, 3710],
          [1680, 3707],
          [1690, 3707],
          [1691, 3708],
          [1702, 3708],
          [1705, 3711],
          [1715, 3711],
          [1715, 3709],
          [1716, 3708],
          [1734, 3708],
          [1735, 3709],
          [1735, 3724],
          [1742, 3724],
          [1742, 3781],
          [1736, 3781],
          [1736, 3785],
          [1740, 3785],
          [1740, 3802],
          [1728, 3814],
          [1701, 3824],
          [1701, 3844],
          [1700, 3843],
          [1699, 3843],
          [1698, 3842],
          [1690, 3842],
          [1681, 3851],
          [1680, 3851],
          [1678, 3853],
          [1670, 3853],
          [1667, 3856],
          [1624, 3856],
          [1617, 3849],
          [1614, 3852],
          [1606, 3852],
          [1603, 3855],
          [1603, 3876],
        ],
        inMap: true,
      },
    ],
  },
  "Armadyl Alliance": {
    title: "Armadyl Alliance",
    file: "Armadyl_Alliance",
    polygons: [godWars],
  },
  Armageddon: {
    title: "Armageddon",
    file: "Armageddon",
    polygons: [godWars, wildyGodWars],
  },
  "Army of Darkness": {
    title: "Army of Darkness",
    file: "Army_of_Darkness",
    polygons: [
      {
        coordinates: [
          [3008, 3584],
          [3008, 3712],
          [3072, 3712],
          [3072, 3584],
          [3008, 3584],
        ],
        inMap: true,
      },
    ],
  },
  Arrival: {
    title: "Arrival",
    file: "Arrival",
    polygons: [
      {
        coordinates: [
          [2880, 3328],
          [2880, 3392],
          [2944, 3392],
          [2944, 3328],
          [2880, 3328],
        ],
        inMap: true,
      },
    ],
  },
  Artistry: {
    title: "Artistry",
    file: "Artistry",
    polygons: [],
  },
  "Assault and Battery": {
    title: "Assault and Battery",
    file: "Assault_and_Battery",
    polygons: [barbAssault],
  },
  "Attack 1": {
    title: "Attack 1",
    file: "Attack_1",
    polygons: [
      {
        coordinates: [
          [2432, 3306],
          [2432, 3264],
          [2496, 3264],
          [2496, 3200],
          [2560, 3200],
          [2560, 3264],
          [2510, 3264],
          [2510, 3280],
          [2460, 3280],
          [2460, 3306],
          [2432, 3306],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2432, 3328],
          [2432, 3324],
          [2463, 3324],
          [2463, 3328],
          [2432, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Attack 2": {
    title: "Attack 2",
    file: "Attack_2",
    polygons: tzhaar,
  },
  "Attack 3": {
    title: "Attack 3",
    file: "Attack_3",
    polygons: [lavaMaze],
  },
  "Attack 4": {
    title: "Attack 4",
    file: "Attack_4",
    polygons: [
      iorwerthCamp,
      ...yanilleAgility,
      {
        coordinates: [
          [2560, 3136],
          [2560, 3200],
          [2624, 3200],
          [2624, 3136],
          [2560, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Attack 5": {
    title: "Attack 5",
    file: "Attack_5",
    polygons: [kbd, lithkren],
  },
  "Attack 6": {
    title: "Attack 6",
    file: "Attack_6",
    polygons: [ogreEnclave],
  },
  Attention: {
    title: "Attention",
    file: "Attention",
    polygons: [
      {
        coordinates: [
          [2976, 3136],
          [2976, 3168],
          [2944, 3168],
          [2944, 3200],
          [3008, 3200],
          [3008, 3136],
          [2976, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Autumn Voyage": {
    title: "Autumn Voyage",
    file: "Autumn_Voyage",
    polygons: [
      {
        coordinates: [
          [3200, 3264],
          [3200, 3328],
          [3264, 3328],
          [3264, 3264],
          [3200, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Aye Car Rum Ba": {
    title: "Aye Car Rum Ba",
    file: "Aye_Car_Rum_Ba",
    polygons: [braindeath],
  },
  Aztec: {
    title: "Aztec",
    file: "Aztec",
    polygons: [brimhavenAgility],
  },
  "Back to Life": {
    title: "Back to Life",
    file: "Back_to_Life",
    polygons: [
      {
        coordinates: [
          [3264, 2748],
          [3264, 2810],
          [3323, 2810],
          [3323, 2748],
          [3264, 2748],
        ],
        inMap: true,
      },
    ],
  },
  Background: {
    title: "Background",
    file: "Background",
    polygons: [
      {
        coordinates: [
          [2752, 3328],
          [2752, 3392],
          [2880, 3392],
          [2880, 3328],
          [2752, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Ballad of Enchantment": {
    title: "Ballad of Enchantment",
    file: "Ballad_of_Enchantment",
    polygons: [
      {
        coordinates: [
          [2560, 3200],
          [2560, 3264],
          [2624, 3264],
          [2624, 3200],
          [2560, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Bandit Camp ": {
    title: "Bandit Camp ",
    file: "Bandit_Camp_(music_track)",
    polygons: [
      {
        coordinates: [
          [3136, 2944],
          [3136, 3008],
          [3200, 3008],
          [3200, 2944],
          [3136, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "Bandos Battalion": {
    title: "Bandos Battalion",
    file: "Bandos_Battalion",
    polygons: [godWars],
  },
  Bane: {
    title: "Bane",
    file: "Bane",
    polygons: [corp],
  },
  "The Bane of Ashihama": {
    title: "The Bane of Ashihama",
    file: "The_Bane_of_Ashihama",
    polygons: [nightmare],
  },
  "Barb Wire": {
    title: "Barb Wire",
    file: "Barb_Wire",
    polygons: [lithkren, ancientCavern],
  },
  Barbarianism: {
    title: "Barbarianism",
    file: "Barbarianism",
    polygons: [
      {
        coordinates: [
          [3072, 3392],
          [3072, 3456],
          [3136, 3456],
          [3136, 3392],
          [3072, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Barking Mad": {
    title: "Barking Mad",
    file: "Barking_Mad",
    polygons: [werewolfAgility],
  },
  Baroque: {
    title: "Baroque",
    file: "Baroque",
    polygons: [
      {
        coordinates: [
          [2624, 3264],
          [2624, 3328],
          [2688, 3328],
          [2688, 3264],
          [2624, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Barren Land": {
    title: "Barren Land",
    file: "Barren_Land",
    polygons: [
      {
        coordinates: [
          [2816, 3952],
          [2847, 3952],
          [2847, 3961],
          [2880, 3961],
          [2880, 4032],
          [2816, 4032],
          [2816, 3952],
        ],
        inMap: true,
      },
    ],
  },
  "Beetle Juice": {
    title: "Beetle Juice",
    file: "Beetle_Juice",
    polygons: [sophanemDungeon],
  },
  "Beneath the Kingdom": {
    title: "Beneath the Kingdom",
    file: "Beneath_the_Kingdom",
    polygons: catacombsGiantsDen,
  },
  "Beneath the Stronghold": {
    title: "Beneath the Stronghold",
    file: "Beneath_the_Stronghold",
    polygons: [strongholdSlayerCave],
  },
  Beyond: {
    title: "Beyond",
    file: "Beyond",
    polygons: [...whiteWolfTunnel, ...iceQueen, warriorsGuildBasement],
  },
  "Beyond the Meadow": {
    title: "Beyond the Meadow",
    file: "Beyond_the_Meadow",
    polygons: [
      {
        coordinates: [
          [1607, 3636],
          [1601, 3624],
          [1601, 3608],
          [1605, 3598],
          [1602, 3586],
          [1596, 3580],
          [1580, 3578],
          [1580, 3576],
          [1576, 3573],
          [1576, 3548],
          [1605, 3548],
          [1605, 3522],
          [1601, 3520],
          [1601, 3511],
          [1607, 3511],
          [1607, 3513],
          [1608, 3514],
          [1610, 3514],
          [1612, 3516],
          [1621, 3516],
          [1624, 3519],
          [1631, 3519],
          [1633, 3517],
          [1654, 3517],
          [1655, 3516],
          [1655, 3510],
          [1658, 3507],
          [1658, 3503],
          [1657, 3502],
          [1656, 3502],
          [1656, 3497],
          [1650, 3491],
          [1664, 3491],
          [1664, 3490],
          [1684, 3496],
          [1710, 3496],
          [1718, 3510],
          [1725, 3510],
          [1730, 3515],
          [1730, 3520],
          [1721, 3536],
          [1721, 3546],
          [1722, 3547],
          [1722, 3555],
          [1709, 3564],
          [1704, 3564],
          [1698, 3560],
          [1693, 3560],
          [1686, 3572],
          [1686, 3586],
          [1684, 3588],
          [1684, 3590],
          [1687, 3593],
          [1694, 3593],
          [1704, 3588],
          [1712, 3588],
          [1715, 3591],
          [1715, 3604],
          [1717, 3608],
          [1717, 3616],
          [1709, 3624],
          [1709, 3639],
          [1708, 3639],
          [1708, 3640],
          [1707, 3640],
          [1707, 3641],
          [1700, 3641],
          [1700, 3642],
          [1699, 3642],
          [1699, 3643],
          [1698, 3643],
          [1698, 3644],
          [1697, 3644],
          [1697, 3645],
          [1696, 3645],
          [1696, 3646],
          [1695, 3646],
          [1695, 3647],
          [1691, 3647],
          [1690, 3646],
          [1607, 3646],
          [1607, 3636],
        ],
        inMap: true,
      },
    ],
  },
  "Big Chords": {
    title: "Big Chords",
    file: "Big_Chords",
    polygons: [
      {
        coordinates: [
          [2496, 3072],
          [2496, 3136],
          [2560, 3136],
          [2560, 3072],
          [2496, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "Blistering Barnacles": {
    title: "Blistering Barnacles",
    file: "Blistering_Barnacles",
    polygons: [braindeath],
  },
  Bloodbath: {
    title: "Bloodbath",
    file: "Bloodbath",
    polygons: [
      ...myrequeLaboratories,
      abyss,
      {
        coordinates: [
          [3680, 3239],
          [3648, 3239],
          [3648, 3330],
          [3663, 3330],
          [3663, 3334],
          [3668, 3334],
          [3668, 3349],
          [3671, 3349],
          [3671, 3385],
          [3663, 3385],
          [3663, 3392],
          [3712, 3392],
          [3712, 3456],
          [3776, 3456],
          [3776, 3264],
          [3680, 3264],
          [3680, 3239],
        ],
        inMap: true,
      },
    ],
  },
  "Body Parts": {
    title: "Body Parts",
    file: "Body_Parts",
    polygons: experiments,
  },
  "Bone Dance": {
    title: "Bone Dance",
    file: "Bone_Dance",
    polygons: [
      {
        coordinates: [
          [3392, 3268],
          [3392, 3328],
          [3456, 3328],
          [3456, 3264],
          [3424, 3264],
          [3424, 3268],
          [3392, 3268],
        ],
        inMap: true,
      },
    ],
  },
  "Bone Dry": {
    title: "Bone Dry",
    file: "Bone_Dry",
    polygons: [pollnivneachSmokeDungeon],
  },
  "Book of Spells": {
    title: "Book of Spells",
    file: "Book_of_Spells",
    polygons: [
      {
        coordinates: [
          [3136, 3136],
          [3136, 3200],
          [3200, 3200],
          [3200, 3136],
          [3136, 3136],
        ],
        inMap: true,
      },
    ],
  },
  Borderland: {
    title: "Borderland",
    file: "Borderland",
    polygons: [
      {
        coordinates: [
          [2688, 3648],
          [2688, 3776],
          [2752, 3776],
          [2752, 3648],
          [2688, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "Box of Delights": {
    title: "Box of Delights",
    file: "Box_of_Delights",
    polygons: [mimic],
  },
  Breeze: {
    title: "Breeze",
    file: "Breeze",
    polygons: [
      {
        coordinates: [
          [2240, 3200],
          [2240, 3264],
          [2304, 3264],
          [2304, 3200],
          [2240, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Brew Hoo Hoo!": {
    title: "Brew Hoo Hoo!",
    file: "Brew_Hoo_Hoo!",
    polygons: [phasmatysBrewery],
  },
  "Brimstail's Scales": {
    title: "Brimstail's Scales",
    file: "Brimstail%27s_Scales",
    polygons: [brimstail],
  },
  "Bubble and Squeak": {
    title: "Bubble and Squeak",
    file: "Bubble_and_Squeak",
    polygons: keldagrim,
  },
  "Burning Desire": {
    title: "Burning Desire",
    file: "Burning_Desire",
    polygons: [
      {
        coordinates: [
          [1344, 3757],
          [1344, 3798],
          [1360, 3798],
          [1360, 3872],
          [1240, 3872],
          [1240, 3796],
          [1264, 3772],
          [1300, 3772],
          [1304, 3768],
          [1314, 3768],
          [1318, 3772],
          [1324, 3772],
          [1339, 3757],
          [1344, 3757],
        ],
        inMap: true,
      },
    ],
  },
  "Cabin Fever ": {
    title: "Cabin Fever ",
    file: "Cabin_Fever_(music_track)",
    polygons: [cabinFever],
  },
  "Camelot ": {
    title: "Camelot ",
    file: "Camelot_(music_track)",
    polygons: [
      {
        coordinates: [
          [2752, 3456],
          [2752, 3584],
          [2816, 3584],
          [2816, 3456],
          [2752, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Castle Wars ": {
    title: "Castle Wars ",
    file: "Castle_Wars_(music_track)",
    polygons: [
      {
        coordinates: [
          [2368, 3072],
          [2368, 3136],
          [2432, 3136],
          [2432, 3072],
          [2368, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "Catacombs and Tombs": {
    title: "Catacombs and Tombs",
    file: "Catacombs_and_Tombs",
    polygons: [goblinCave],
  },
  "Catch Me If You Can": {
    title: "Catch Me If You Can",
    file: "Catch_Me_If_You_Can",
    polygons: ardySewerEast,
  },
  "Cave Background": {
    title: "Cave Background",
    file: "Cave_Background",
    polygons: [...dwarvernMine, ...taverleyDungeon],
  },
  "Cave of Beasts": {
    title: "Cave of Beasts",
    file: "Cave_of_Beasts",
    polygons: [kendalCave],
  },
  "Cave of the Goblins": {
    title: "Cave of the Goblins",
    file: "Cave_of_the_Goblins",
    polygons: swampCavesDoreshKaanTears,
  },
  Cavern: {
    title: "Cavern",
    file: "Cavern",
    polygons: [...yanilleAgility, deepWildyDungeon],
  },
  "The Cellar Dwellers": {
    title: "The Cellar Dwellers",
    file: "The_Cellar_Dwellers",
    polygons: [ardySewerWest, elenaPrisonPlagueCity, carnelianBasement],
  },
  "Cellar Song": {
    title: "Cellar Song",
    file: "Cellar_Song",
    polygons: [varrockWestBankVault],
  },
  "Chain of Command": {
    title: "Chain of Command",
    file: "Chain_of_Command",
    polygons: templeOfIkov,
  },
  Chamber: {
    title: "Chamber",
    file: "Chamber",
    polygons: hauntedMine,
  },
  "Chef Surprise": {
    title: "Chef Surprise",
    file: "Chef_Surprise",
    polygons: [culinaromancer],
  },
  "Chickened Out": {
    title: "Chickened Out",
    file: "Chickened_Out",
    polygons: [zanaris],
  },
  "Chompy Hunt": {
    title: "Chompy Hunt",
    file: "Chompy_Hunt",
    polygons: [
      rantz,
      {
        coordinates: [
          [2624, 2944],
          [2624, 3008],
          [2688, 3008],
          [2688, 2944],
          [2624, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "The Chosen": {
    title: "The Chosen",
    file: "The_Chosen",
    polygons: [sirTiffy],
  },
  "City of the Dead": {
    title: "City of the Dead",
    file: "City_of_the_Dead",
    polygons: [
      {
        coordinates: [
          [3200, 2880],
          [3200, 2748],
          [3323, 2748],
          [3323, 2810],
          [3264, 2810],
          [3264, 2880],
          [3200, 2880],
        ],
        inMap: true,
      },
    ],
  },
  "Clan Wars ": {
    title: "Clan Wars ",
    file: "Clan_Wars_(music_track)",
    polygons: [clanWars],
  },
  Clanliness: {
    title: "Clanliness",
    file: "Clanliness",
    polygons: [clanHall],
  },
  Claustrophobia: {
    title: "Claustrophobia",
    file: "Claustrophobia",
    polygons: keldagrim,
  },
  "Close Quarters": {
    title: "Close Quarters",
    file: "Close_Quarters",
    polygons: [
      {
        coordinates: [
          [3136, 3712],
          [3136, 3776],
          [3200, 3776],
          [3200, 3712],
          [3136, 3712],
        ],
        inMap: true,
      },
    ],
  },
  Coil: {
    title: "Coil",
    file: "Coil",
    polygons: [
      {
        coordinates: [
          [2256, 3066],
          [2280, 3066],
          [2280, 3080],
          [2256, 3080],
          [2256, 3066],
        ],
        inMap: true,
      },
    ],
  },
  "Colossus of the Deep": {
    title: "Colossus of the Deep",
    file: "Colossus_of_the_Deep",
    polygons: [wizardTowerBasement],
  },
  Competition: {
    title: "Competition",
    file: "Competition",
    polygons: [burthorpeGamesRoom],
  },
  Complication: {
    title: "Complication",
    file: "Complication",
    polygons: [abyss, chaosAltar],
  },
  "The Consortium ": {
    title: "The Consortium ",
    file: "The_Consortium_(music_track)",
    polygons: keldagrim,
  },
  Conspiracy: {
    title: "Conspiracy",
    file: "Conspiracy",
    polygons: [tasteOfHopeSpying, serafinaBasement, sotfSpying, damienLeucurte],
  },
  Contest: {
    title: "Contest",
    file: "Contest",
    polygons: [
      {
        coordinates: [
          [2880, 3584],
          [2880, 3648],
          [2944, 3648],
          [2944, 3584],
          [2880, 3584],
        ],
        inMap: true,
      },
    ],
  },
  "Corporal Punishment": {
    title: "Corporal Punishment",
    file: "Corporal_Punishment",
    polygons: [],
  },
  "Corridors of Power": {
    title: "Corridors of Power",
    file: "Corridors_of_Power",
    polygons: miscDungeon,
  },
  "Country Jig": {
    title: "Country Jig",
    file: "Country_Jig",
    polygons: [
      {
        coordinates: [
          [1664, 3490],
          [1664, 3456],
          [1728, 3456],
          [1728, 3392],
          [1856, 3392],
          [1856, 3456],
          [1920, 3456],
          [1920, 3584],
          [1856, 3584],
          [1856, 3648],
          [1824, 3648],
          [1824, 3595],
          [1814, 3595],
          [1814, 3594],
          [1813, 3594],
          [1813, 3593],
          [1812, 3593],
          [1812, 3592],
          [1811, 3592],
          [1811, 3591],
          [1810, 3591],
          [1810, 3590],
          [1809, 3590],
          [1809, 3589],
          [1808, 3589],
          [1808, 3588],
          [1807, 3588],
          [1807, 3587],
          [1806, 3587],
          [1806, 3586],
          [1805, 3586],
          [1805, 3585],
          [1804, 3585],
          [1804, 3582],
          [1806, 3580],
          [1806, 3577],
          [1807, 3576],
          [1807, 3573],
          [1805, 3573],
          [1804, 3572],
          [1804, 3571],
          [1800, 3571],
          [1800, 3570],
          [1798, 3570],
          [1798, 3569],
          [1796, 3569],
          [1796, 3568],
          [1794, 3568],
          [1794, 3567],
          [1790, 3567],
          [1789, 3566],
          [1789, 3562],
          [1788, 3561],
          [1777, 3561],
          [1777, 3558],
          [1781, 3558],
          [1781, 3543],
          [1762, 3543],
          [1762, 3546],
          [1758, 3546],
          [1757, 3545],
          [1756, 3545],
          [1754, 3543],
          [1748, 3543],
          [1746, 3545],
          [1735, 3545],
          [1734, 3546],
          [1732, 3546],
          [1729, 3543],
          [1729, 3542],
          [1721, 3542],
          [1721, 3536],
          [1730, 3520],
          [1730, 3515],
          [1725, 3510],
          [1718, 3510],
          [1710, 3496],
          [1684, 3496],
          [1664, 3490],
        ],
        inMap: true,
      },
    ],
  },
  Courage: {
    title: "Courage",
    file: "Courage",
    polygons: [...taverleyDungeon, witchsBasement, heroesGuild],
  },
  "Creature Cruelty": {
    title: "Creature Cruelty",
    file: "Creature_Cruelty",
    polygons: [towerOfLife],
  },
  "Creeping Vines": {
    title: "Creeping Vines",
    file: "Creeping_Vines",
    polygons: [
      {
        coordinates: [
          [1216, 10048],
          [1216, 10112],
          [1280, 10112],
          [1280, 10048],
          [1216, 10048],
        ],
        inMap: false,
      },
    ],
  },
  "Crystal Castle": {
    title: "Crystal Castle",
    file: "Crystal_Castle",
    polygons: [
      {
        coordinates: [
          [2112, 3264],
          [2112, 3392],
          [2304, 3392],
          [2304, 3264],
          [2112, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Crystal Cave": {
    title: "Crystal Cave",
    file: "Crystal_Cave",
    polygons: [zanaris],
  },
  "Crystal Sword": {
    title: "Crystal Sword",
    file: "Crystal_Sword",
    polygons: [
      ...ardySewerEast,
      {
        coordinates: [
          [3200, 3520],
          [3200, 3584],
          [3264, 3584],
          [3264, 3520],
          [3200, 3520],
        ],
        inMap: true,
      },
    ],
  },
  Cursed: {
    title: "Cursed",
    file: "Cursed",
    polygons: [wrathAltar, rabbitCave, ...undergroundPass],
  },
  "The Curtain Closes": {
    title: "The Curtain Closes",
    file: "The_Curtain_Closes",
    polygons: [tob],
  },
  "Dagannoth Dawn": {
    title: "Dagannoth Dawn",
    file: "Dagannoth_Dawn",
    polygons: dks,
  },
  "Dance of Death": {
    title: "Dance of Death",
    file: "Dance_of_Death",
    polygons: [strongholdOfSecurity],
  },
  "Dance of the Nylocas": {
    title: "Dance of the Nylocas",
    file: "Dance_of_the_Nylocas",
    polygons: [tob],
  },
  "Dance of the Undead": {
    title: "Dance of the Undead",
    file: "Dance_of_the_Undead",
    polygons: [
      {
        coordinates: [
          [3520, 3264],
          [3520, 3328],
          [3584, 3328],
          [3584, 3264],
          [3520, 3264],
        ],
        inMap: true,
      },
    ],
  },
  Dangerous: {
    title: "Dangerous",
    file: "Dangerous",
    polygons: [
      {
        coordinates: [
          [3264, 3776],
          [3264, 3840],
          [3392, 3840],
          [3392, 3776],
          [3264, 3776],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3072, 3520],
          [3072, 3584],
          [3136, 3584],
          [3136, 3520],
          [3072, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "A Dangerous Game": {
    title: "A Dangerous Game",
    file: "A_Dangerous_Game",
    polygons: wildySlayerCave,
  },
  "Dangerous Road": {
    title: "Dangerous Road",
    file: "Dangerous_Road",
    polygons: tzhaar,
  },
  "Dangerous Way": {
    title: "Dangerous Way",
    file: "Dangerous_Way",
    polygons: [barrows],
  },
  Dark: {
    title: "Dark",
    file: "Dark",
    polygons: [
      {
        coordinates: [
          [3264, 3648],
          [3264, 3712],
          [3392, 3712],
          [3392, 3648],
          [3264, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "The Dark Beast Sotetseg": {
    title: "The Dark Beast Sotetseg",
    file: "The_Dark_Beast_Sotetseg",
    polygons: [tob],
  },
  "Darkly Altared": {
    title: "Darkly Altared",
    file: "Darkly_Altared",
    polygons: catacombsGiantsDen,
  },
  "Darkness in the Depths": {
    title: "Darkness in the Depths",
    file: "Darkness_in_the_Depths",
    polygons: [chasmOfFire],
  },
  "Davy Jones' Locker": {
    title: "Davy Jones' Locker",
    file: "Davy_Jones%27_Locker",
    polygons: [mogreCamp],
  },
  "Dead Can Dance": {
    title: "Dead Can Dance",
    file: "Dead_Can_Dance",
    polygons: [
      {
        coordinates: [
          [3136, 3648],
          [3136, 3712],
          [3200, 3712],
          [3200, 3648],
          [3136, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "Dead Quiet": {
    title: "Dead Quiet",
    file: "Dead_Quiet",
    polygons: [
      ...templeTrekking,
      {
        coordinates: [
          [3392, 3392],
          [3392, 3456],
          [3456, 3456],
          [3456, 3392],
          [3392, 3392],
        ],
        inMap: true,
      },
    ],
  },
  Deadlands: {
    title: "Deadlands",
    file: "Deadlands",
    polygons: [
      {
        coordinates: [
          [3520, 3520],
          [3648, 3520],
          [3648, 3456],
          [3712, 3456],
          [3712, 3392],
          [3636, 3392],
          [3636, 3399],
          [3592, 3399],
          [3592, 3392],
          [3584, 3392],
          [3584, 3456],
          [3520, 3456],
          [3520, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "Deep Down": {
    title: "Deep Down",
    file: "Deep_Down",
    polygons: hauntedMine,
  },
  "Deep Wildy": {
    title: "Deep Wildy",
    file: "Deep_Wildy",
    polygons: [
      {
        coordinates: [
          [2944, 3776],
          [2944, 3904],
          [3008, 3904],
          [3008, 3776],
          [2944, 3776],
        ],
        inMap: true,
      },
    ],
  },
  "The Depths": {
    title: "The Depths",
    file: "The_Depths",
    polygons: [sophanemDungeon],
  },
  "Desert Heat ": {
    title: "Desert Heat ",
    file: "Desert_Heat_(music_track)",
    polygons: [
      {
        coordinates: [
          [3392, 2944],
          [3392, 3072],
          [3520, 3072],
          [3520, 2944],
          [3392, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "Desert Voyage": {
    title: "Desert Voyage",
    file: "Desert_Voyage",
    polygons: [
      {
        coordinates: [
          [3264, 3072],
          [3392, 3072],
          [3392, 3008],
          [3328, 3008],
          [3328, 2944],
          [3264, 2944],
          [3264, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "The Desert": {
    title: "The Desert",
    file: "The_Desert",
    polygons: [
      {
        coordinates: [
          [3136, 3008],
          [3136, 3072],
          [3264, 3072],
          [3264, 3008],
          [3136, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "The Desolate Isle": {
    title: "The Desolate Isle",
    file: "The_Desolate_Isle",
    polygons: [
      {
        coordinates: [
          [2496, 3712],
          [2496, 3776],
          [2560, 3776],
          [2560, 3712],
          [2496, 3712],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2240, 4032],
          [2240, 4096],
          [2304, 4096],
          [2304, 4032],
          [2240, 4032],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2260, 4053],
          [2260, 4077],
          [2285, 4077],
          [2285, 4053],
          [2260, 4053],
        ],
        inMap: true,
      },
    ],
  },
  "The Desolate Mage": {
    title: "The Desolate Mage",
    file: "The_Desolate_Mage",
    polygons: [
      {
        coordinates: [
          [1229, 3545],
          [1219, 3555],
          [1219, 3574],
          [1224, 3579],
          [1265, 3579],
          [1265, 3571],
          [1269, 3571],
          [1272, 3568],
          [1266, 3562],
          [1266, 3557],
          [1258, 3550],
          [1247, 3550],
          [1242, 3545],
          [1229, 3545],
        ],
        inMap: true,
      },
    ],
  },
  "Devils May Care": {
    title: "Devils May Care",
    file: "Devils_May_Care",
    polygons: [smokeDungeon],
  },
  "Dimension X": {
    title: "Dimension X",
    file: "Dimension_X",
    polygons: [],
  },
  "Distant Land": {
    title: "Distant Land",
    file: "Distant_Land",
    polygons: [
      ...templeTrekking,
      {
        coordinates: [
          [3520, 3136],
          [3520, 3152],
          [3456, 3152],
          [3456, 3264],
          [3584, 3264],
          [3584, 3136],
          [3520, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Distillery Hilarity": {
    title: "Distillery Hilarity",
    file: "Distillery_Hilarity",
    polygons: [
      {
        coordinates: [
          [3776, 3008],
          [3776, 3072],
          [3840, 3072],
          [3840, 3008],
          [3776, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "Dogs of War": {
    title: "Dogs of War",
    file: "Dogs_of_War",
    polygons: [strongholdOfSecurity],
  },
  "The Doors of Dinh": {
    title: "The Doors of Dinh",
    file: "The_Doors_of_Dinh",
    polygons: [
      {
        coordinates: [
          [1528, 3904],
          [1472, 3904],
          [1472, 3968],
          [1728, 3968],
          [1728, 3904],
          [1633, 3904],
          [1620, 3891],
          [1600, 3891],
          [1600, 3876],
          [1595, 3876],
          [1595, 3860],
          [1528, 3860],
          [1528, 3904],
        ],
        inMap: true,
      },
    ],
  },
  Doorways: {
    title: "Doorways",
    file: "Doorways",
    polygons: [
      {
        coordinates: [
          [3264, 3456],
          [3264, 3520],
          [3328, 3520],
          [3328, 3456],
          [3264, 3456],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2048, 2816],
          [2048, 3008],
          [2368, 3008],
          [2368, 2816],
          [2304, 2816],
          [2304, 2752],
          [2112, 2752],
          [2112, 2816],
          [2048, 2816],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2112, 2880],
          [2112, 2944],
          [2304, 2944],
          [2304, 2880],
          [2240, 2880],
          [2240, 2816],
          [2176, 2816],
          [2176, 2880],
        ],
        inMap: true,
      },
    ],
  },
  "Dorgeshuun City": {
    title: "Dorgeshuun City",
    file: "Dorgeshuun_City",
    polygons: swampCavesDoreshKaanTears,
  },
  "Dorgeshuun Deep": {
    title: "Dorgeshuun Deep",
    file: "Dorgeshuun_Deep",
    polygons: swampCavesDoreshKaanTears,
  },
  "Down Below": {
    title: "Down Below",
    file: "Down_Below",
    polygons: draynorSewers,
  },
  "Down and Out": {
    title: "Down and Out",
    file: "Down_and_Out",
    polygons: [lunarIsleMine],
  },
  "Down by the Docks": {
    title: "Down by the Docks",
    file: "Down_by_the_Docks",
    polygons: [
      {
        coordinates: [
          [1740, 3785],
          [1736, 3785],
          [1736, 3781],
          [1742, 3781],
          [1742, 3703],
          [1769, 3703],
          [1769, 3704],
          [1775, 3704],
          [1775, 3703],
          [1786, 3703],
          [1786, 3702],
          [1787, 3702],
          [1787, 3701],
          [1788, 3701],
          [1788, 3700],
          [1789, 3700],
          [1789, 3699],
          [1790, 3699],
          [1790, 3692],
          [1788, 3692],
          [1788, 3688],
          [1792, 3688],
          [1792, 3684],
          [1804, 3672],
          [1856, 3672],
          [1856, 3820],
          [1800, 3802],
          [1740, 3802],
          [1740, 3785],
        ],
        inMap: true,
      },
    ],
  },
  "Down to Earth": {
    title: "Down to Earth",
    file: "Down_to_Earth",
    polygons: [earthAltar, abyss],
  },
  "Dragontooth Island ": {
    title: "Dragontooth Island ",
    file: "Dragontooth_Island_(music_track)",
    polygons: [
      {
        coordinates: [
          [3776, 3520],
          [3776, 3584],
          [3840, 3584],
          [3840, 3520],
          [3776, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "Dream ": {
    title: "Dream ",
    file: "Dream_(music_track)",
    polygons: [
      {
        coordinates: [
          [3136, 3200],
          [3136, 3264],
          [3200, 3264],
          [3200, 3200],
          [3136, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Dunes of Eternity": {
    title: "Dunes of Eternity",
    file: "Dunes_of_Eternity",
    polygons: [
      {
        coordinates: [
          [3323, 2752],
          [3392, 2752],
          [3392, 2688],
          [3272, 2688],
          [3272, 2748],
          [3323, 2748],
          [3323, 2752],
        ],
        inMap: true,
      },
    ],
  },
  Dunjun: {
    title: "Dunjun",
    file: "Dunjun",
    polygons: [...taverleyDungeon, whiteKnightsCrypt],
  },
  "Dusk in Yu'biusk": {
    title: "Dusk in Yu'biusk",
    file: "Dusk_in_Yu%27biusk",
    polygons: [],
  },
  "Dwarf Theme": {
    title: "Dwarf Theme",
    file: "Dwarf_Theme",
    polygons: [
      {
        coordinates: [
          [3008, 3392],
          [3008, 3456],
          [3072, 3456],
          [3072, 3392],
          [3008, 3392],
        ],
        inMap: true,
      },
    ],
  },
  Dynasty: {
    title: "Dynasty",
    file: "Dynasty",
    polygons: [
      {
        coordinates: [
          [3328, 2944],
          [3328, 3008],
          [3392, 3008],
          [3392, 2944],
          [3328, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "Eagles' Peak ": {
    title: "Eagles' Peak ",
    file: "Eagles%27_Peak_(music_track)",
    polygons: [
      {
        coordinates: [
          [2240, 3456],
          [2240, 3520],
          [2368, 3520],
          [2368, 3456],
          [2240, 3456],
        ],
        inMap: true,
      },
    ],
  },
  Egypt: {
    title: "Egypt",
    file: "Egypt",
    polygons: [
      {
        coordinates: [
          [3264, 3072],
          [3264, 3136],
          [3392, 3136],
          [3392, 3072],
          [3264, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "Elven Mist": {
    title: "Elven Mist",
    file: "Elven_Mist",
    polygons: [
      {
        coordinates: [
          [2304, 3200],
          [2304, 3264],
          [2368, 3264],
          [2368, 3200],
          [2304, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Elven Seed": {
    title: "Elven Seed",
    file: "Elven_Seed",
    polygons: [
      {
        coordinates: [
          [2184, 3392],
          [2184, 3456],
          [2221, 3456],
          [2221, 3408],
          [2218, 3408],
          [2218, 3392],
          [2184, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "The Emir's Arena": {
    title: "The Emir's Arena",
    file: "The_Emir%27s_Arena",
    polygons: [
      {
        coordinates: [
          [3328, 3200],
          [3424, 3200],
          [3424, 3268],
          [3392, 3268],
          [3392, 3264],
          [3328, 3264],
          [3328, 3200],
        ],
        inMap: true,
      },
    ],
  },
  Emotion: {
    title: "Emotion",
    file: "Emotion",
    polygons: [
      fisherRealm,
      {
        coordinates: [
          [2496, 3136],
          [2496, 3200],
          [2560, 3200],
          [2560, 3136],
          [2496, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "The Enchanter": {
    title: "The Enchanter",
    file: "The_Enchanter",
    polygons: [mta],
  },
  "The Enclave": {
    title: "The Enclave",
    file: "The_Enclave",
    polygons: [
      {
        coordinates: [
          [3131, 3617],
          [3130, 3618],
          [3126, 3618],
          [3126, 3622],
          [3124, 3622],
          [3123, 3623],
          [3123, 3632],
          [3124, 3633],
          [3125, 3633],
          [3125, 3640],
          [3138, 3640],
          [3138, 3645],
          [3139, 3646],
          [3145, 3646],
          [3146, 3645],
          [3148, 3645],
          [3148, 3647],
          [3156, 3647],
          [3156, 3641],
          [3158, 3641],
          [3158, 3636],
          [3155, 3636],
          [3155, 3634],
          [3158, 3634],
          [3158, 3628],
          [3154, 3628],
          [3153, 3627],
          [3153, 3626],
          [3152, 3625],
          [3152, 3624],
          [3151, 3623],
          [3151, 3620],
          [3144, 3620],
          [3144, 3618],
          [3140, 3618],
          [3139, 3617],
          [3131, 3617],
        ],
        inMap: true,
      },
    ],
  },
  Escape: {
    title: "Escape",
    file: "Escape",
    polygons: [witchaven],
  },
  Espionage: {
    title: "Espionage",
    file: "Espionage",
    polygons: [penguin],
  },
  "Etceteria ": {
    title: "Etceteria ",
    file: "Etceteria_(music_track)",
    polygons: [
      {
        coordinates: [
          [2560, 3840],
          [2560, 3904],
          [2624, 3904],
          [2624, 3840],
          [2560, 3840],
        ],
        inMap: true,
      },
    ],
  },
  Everlasting: {
    title: "Everlasting",
    file: "Everlasting",
    polygons: [dream],
  },
  "Everlasting Fire": {
    title: "Everlasting Fire",
    file: "Everlasting_Fire",
    polygons: [
      {
        coordinates: [
          [3328, 3904],
          [3328, 3968],
          [3392, 3968],
          [3392, 3904],
          [3328, 3904],
        ],
        inMap: true,
      },
    ],
  },
  "The Everlasting Slumber": {
    title: "The Everlasting Slumber",
    file: "The_Everlasting_Slumber",
    polygons: [nightmare],
  },
  Everywhere: {
    title: "Everywhere",
    file: "Everywhere",
    polygons: [
      {
        coordinates: [
          [2221, 3456],
          [2221, 3408],
          [2218, 3408],
          [2218, 3392],
          [2304, 3392],
          [2304, 3456],
          [2221, 3456],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2112, 3392],
          [2184, 3392],
          [2184, 3456],
          [2112, 3456],
          [2112, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Evil Bob's Island": {
    title: "Evil Bob's Island",
    file: "Evil_Bob%27s_Island",
    polygons: [],
  },
  Expanse: {
    title: "Expanse",
    file: "Expanse",
    polygons: [
      {
        coordinates: [
          [3200, 3328],
          [3200, 3392],
          [3264, 3392],
          [3264, 3328],
          [3200, 3328],
        ],
        inMap: true,
      },
    ],
  },
  Expecting: {
    title: "Expecting",
    file: "Expecting",
    polygons: [
      ...undergroundPass,
      {
        coordinates: [
          [2368, 3200],
          [2368, 3264],
          [2496, 3264],
          [2496, 3200],
          [2368, 3200],
        ],
        inMap: true,
      },
    ],
  },
  Expedition: {
    title: "Expedition",
    file: "Expedition",
    polygons: [...trollArenaPassage, ...observatoryDungeon],
  },
  Exposed: {
    title: "Exposed",
    file: "Exposed",
    polygons: [
      {
        coordinates: [
          [2432, 3968],
          [2432, 4032],
          [2496, 4032],
          [2496, 3968],
          [2432, 3968],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2176, 3072],
          [2176, 3136],
          [2240, 3136],
          [2240, 3072],
          [2176, 3072],
        ],
        inMap: true,
      },
    ],
  },
  Faerie: {
    title: "Faerie",
    file: "Faerie",
    polygons: [zanaris],
  },
  Faithless: {
    title: "Faithless",
    file: "Faithless",
    polygons: [
      {
        coordinates: [
          [3200, 3584],
          [3200, 3648],
          [3328, 3648],
          [3328, 3584],
          [3200, 3584],
        ],
        inMap: true,
      },
    ],
  },
  "The Fallen Empire ": {
    title: "The Fallen Empire ",
    file: "The_Fallen_Empire_(music_track)",
    polygons: [camdozaal],
  },
  Fanfare: {
    title: "Fanfare",
    file: "Fanfare",
    polygons: [
      {
        coordinates: [
          [2944, 3328],
          [2944, 3392],
          [3008, 3392],
          [3008, 3328],
          [2944, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Fanfare 2": {
    title: "Fanfare 2",
    file: "Fanfare_2",
    polygons: [
      {
        coordinates: [
          [2944, 3008],
          [2944, 3072],
          [3008, 3072],
          [3008, 3008],
          [2944, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "Fanfare 3": {
    title: "Fanfare 3",
    file: "Fanfare_3",
    polygons: [
      {
        coordinates: [
          [2624, 3136],
          [2624, 3200],
          [2688, 3200],
          [2688, 3136],
          [2624, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Fangs for the Memory": {
    title: "Fangs for the Memory",
    file: "Fangs_for_the_Memory",
    polygons: [],
  },
  "Far Away": {
    title: "Far Away",
    file: "Far_Away",
    polygons: [
      {
        coordinates: [
          [2304, 3136],
          [2304, 3200],
          [2368, 3200],
          [2368, 3136],
          [2304, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "The Far Side": {
    title: "The Far Side",
    file: "The_Far_Side",
    polygons: [roguesDen],
  },
  "A Farmer's Grind": {
    title: "A Farmer's Grind",
    file: "A_Farmer%27s_Grind",
    polygons: [
      {
        coordinates: [
          [1244, 3732],
          [1243, 3732],
          [1243, 3735],
          [1238, 3740],
          [1228, 3740],
          [1223, 3735],
          [1223, 3726],
          [1229, 3720],
          [1238, 3720],
          [1243, 3725],
          [1243, 3728],
          [1244, 3728],
          [1244, 3732],
        ],
        inMap: true,
      },
    ],
  },
  "The Fat Lady Sings": {
    title: "The Fat Lady Sings",
    file: "The_Fat_Lady_Sings",
    polygons: [tob],
  },
  "Fe Fi Fo Fum": {
    title: "Fe Fi Fo Fum",
    file: "Fe_Fi_Fo_Fum",
    polygons: [glod],
  },
  "Fear and Loathing": {
    title: "Fear and Loathing",
    file: "Fear_and_Loathing",
    polygons: [soulsBane],
  },
  "Fenkenstrain's Refrain": {
    title: "Fenkenstrain's Refrain",
    file: "Fenkenstrain%27s_Refrain",
    polygons: [
      {
        coordinates: [
          [3456, 3520],
          [3456, 3584],
          [3584, 3584],
          [3584, 3520],
          [3456, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "Fight or Flight": {
    title: "Fight or Flight",
    file: "Fight_or_Flight",
    polygons: [mournerTunnels, abyss],
  },
  "Find My Way": {
    title: "Find My Way",
    file: "Find_My_Way",
    polygons: [apeAtollDungeonMM1],
  },
  "Fire and Brimstone": {
    title: "Fire and Brimstone",
    file: "Fire_and_Brimstone",
    polygons: tzhaar,
  },
  "Fire in the Deep": {
    title: "Fire in the Deep",
    file: "Fire_in_the_Deep",
    polygons: [cox],
  },
  "The Fires of Lletya": {
    title: "The Fires of Lletya",
    file: "The_Fires_of_Lletya",
    polygons: [lletya],
  },
  "Fishing ": {
    title: "Fishing ",
    file: "Fishing_(music_track)",
    polygons: [
      {
        coordinates: [
          [2816, 3392],
          [2816, 3456],
          [2880, 3456],
          [2880, 3392],
          [2816, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Flute Salad": {
    title: "Flute Salad",
    file: "Flute_Salad",
    polygons: [
      {
        coordinates: [
          [3136, 3264],
          [3136, 3328],
          [3200, 3328],
          [3200, 3264],
          [3136, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Food for Thought": {
    title: "Food for Thought",
    file: "Food_for_Thought",
    polygons: [strongholdOfSecurity],
  },
  Forbidden: {
    title: "Forbidden",
    file: "Forbidden",
    polygons: [
      {
        coordinates: [
          [3264, 3520],
          [3264, 3584],
          [3392, 3584],
          [3392, 3520],
          [3264, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "Forest ": {
    title: "Forest ",
    file: "Forest_(music_track)",
    polygons: [
      {
        coordinates: [
          [2240, 3136],
          [2240, 3200],
          [2304, 3200],
          [2304, 3136],
          [2240, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "The Forests of Shayzien": {
    title: "The Forests of Shayzien",
    file: "The_Forests_of_Shayzien",
    polygons: [
      {
        coordinates: [
          [1472, 3456],
          [1472, 3478],
          [1476, 3478],
          [1476, 3483],
          [1482, 3486],
          [1482, 3495],
          [1475, 3500],
          [1475, 3511],
          [1481, 3517],
          [1485, 3517],
          [1491, 3514],
          [1498, 3514],
          [1504, 3520],
          [1504, 3523],
          [1505, 3523],
          [1505, 3525],
          [1506, 3525],
          [1506, 3527],
          [1507, 3527],
          [1507, 3536],
          [1494, 3536],
          [1490, 3540],
          [1470, 3540],
          [1462, 3553],
          [1462, 3563],
          [1459, 3570],
          [1464, 3576],
          [1467, 3590],
          [1476, 3594],
          [1486, 3606],
          [1506, 3606],
          [1512, 3600],
          [1522, 3600],
          [1530, 3592],
          [1538, 3592],
          [1548, 3577],
          [1568, 3577],
          [1577, 3583],
          [1582, 3583],
          [1594, 3587],
          [1598, 3595],
          [1596, 3604],
          [1591, 3606],
          [1591, 3610],
          [1595, 3611],
          [1601, 3608],
          [1601, 3624],
          [1607, 3636],
          [1607, 3646],
          [1602, 3651],
          [1599, 3651],
          [1599, 3652],
          [1598, 3652],
          [1598, 3653],
          [1597, 3653],
          [1597, 3654],
          [1587, 3658],
          [1576, 3647],
          [1564, 3647],
          [1559, 3652],
          [1543, 3652],
          [1543, 3651],
          [1548, 3646],
          [1549, 3646],
          [1550, 3647],
          [1551, 3648],
          [1552, 3648],
          [1556, 3648],
          [1558, 3648],
          [1558, 3647],
          [1558, 3641],
          [1557, 3640],
          [1556, 3639],
          [1556, 3637],
          [1557, 3636],
          [1558, 3635],
          [1558, 3632],
          [1557, 3631],
          [1557, 3627],
          [1555, 3627],
          [1554, 3626],
          [1554, 3621],
          [1553, 3620],
          [1550, 3620],
          [1550, 3618],
          [1549, 3618],
          [1549, 3617],
          [1548, 3617],
          [1547, 3617],
          [1547, 3615],
          [1541, 3615],
          [1541, 3617],
          [1539, 3617],
          [1539, 3618],
          [1537, 3618],
          [1536, 3617],
          [1535, 3617],
          [1535, 3616],
          [1534, 3616],
          [1534, 3615],
          [1533, 3614],
          [1531, 3614],
          [1530, 3613],
          [1529, 3612],
          [1526, 3612],
          [1525, 3611],
          [1524, 3610],
          [1521, 3610],
          [1520, 3609],
          [1519, 3608],
          [1512, 3608],
          [1511, 3609],
          [1510, 3609],
          [1509, 3610],
          [1508, 3611],
          [1508, 3614],
          [1506, 3616],
          [1506, 3620],
          [1508, 3622],
          [1508, 3624],
          [1507, 3625],
          [1506, 3625],
          [1506, 3624],
          [1504, 3624],
          [1504, 3625],
          [1503, 3625],
          [1500, 3622],
          [1498, 3622],
          [1498, 3621],
          [1490, 3621],
          [1490, 3623],
          [1488, 3625],
          [1475, 3625],
          [1475, 3624],
          [1473, 3624],
          [1473, 3626],
          [1470, 3629],
          [1468, 3629],
          [1468, 3631],
          [1469, 3631],
          [1469, 3641],
          [1468, 3641],
          [1468, 3643],
          [1470, 3643],
          [1473, 3646],
          [1473, 3654],
          [1470, 3657],
          [1468, 3657],
          [1468, 3659],
          [1469, 3659],
          [1469, 3667],
          [1468, 3667],
          [1468, 3669],
          [1468, 3682],
          [1470, 3682],
          [1470, 3686],
          [1472, 3686],
          [1472, 3688],
          [1468, 3688],
          [1468, 3692],
          [1469, 3692],
          [1471, 3694],
          [1471, 3699],
          [1469, 3701],
          [1468, 3701],
          [1468, 3709],
          [1469, 3710],
          [1469, 3714],
          [1468, 3715],
          [1468, 3723],
          [1469, 3723],
          [1471, 3725],
          [1471, 3730],
          [1469, 3732],
          [1468, 3732],
          [1468, 3736],
          [1465, 3736],
          [1465, 3732],
          [1464, 3732],
          [1462, 3730],
          [1462, 3725],
          [1461, 3724],
          [1461, 3703],
          [1457, 3699],
          [1457, 3688],
          [1411, 3688],
          [1402, 3679],
          [1402, 3678],
          [1401, 3678],
          [1401, 3677],
          [1400, 3677],
          [1400, 3676],
          [1399, 3676],
          [1399, 3675],
          [1398, 3675],
          [1398, 3674],
          [1397, 3674],
          [1397, 3673],
          [1396, 3673],
          [1396, 3672],
          [1395, 3672],
          [1387, 3664],
          [1387, 3586],
          [1415, 3558],
          [1415, 3547],
          [1412, 3544],
          [1412, 3526],
          [1415, 3523],
          [1415, 3507],
          [1390, 3482],
          [1382, 3482],
          [1382, 3456],
          [1472, 3456],
        ],
        inMap: true,
      },
    ],
  },
  Forever: {
    title: "Forever",
    file: "Forever",
    polygons: [
      {
        coordinates: [
          [3072, 3456],
          [3072, 3520],
          [3136, 3520],
          [3136, 3456],
          [3072, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Forgettable Melody": {
    title: "Forgettable Melody",
    file: "Forgettable_Melody",
    polygons: keldagrim,
  },
  Forgotten: {
    title: "Forgotten",
    file: "Forgotten",
    polygons: [uzer],
  },
  "A Forgotten Religion": {
    title: "A Forgotten Religion",
    file: "A_Forgotten_Religion",
    polygons: forthos,
  },
  "The Forgotten Tomb": {
    title: "The Forgotten Tomb",
    file: "The_Forgotten_Tomb",
    polygons: [beneathCursedSands],
  },
  "The Forlorn Homestead": {
    title: "The Forlorn Homestead",
    file: "The_Forlorn_Homestead",
    polygons: [
      {
        coordinates: [
          [1709, 3636],
          [1742, 3643],
          [1742, 3659],
          [1756, 3659],
          [1756, 3660],
          [1757, 3661],
          [1760, 3661],
          [1761, 3660],
          [1767, 3660],
          [1768, 3659],
          [1768, 3658],
          [1779, 3658],
          [1781, 3656],
          [1782, 3656],
          [1783, 3655],
          [1783, 3654],
          [1824, 3654],
          [1824, 3595],
          [1814, 3595],
          [1814, 3594],
          [1813, 3594],
          [1813, 3593],
          [1812, 3593],
          [1812, 3592],
          [1811, 3592],
          [1811, 3591],
          [1810, 3591],
          [1810, 3590],
          [1809, 3590],
          [1809, 3589],
          [1808, 3589],
          [1808, 3588],
          [1807, 3588],
          [1807, 3587],
          [1806, 3587],
          [1806, 3586],
          [1805, 3586],
          [1805, 3585],
          [1804, 3585],
          [1804, 3582],
          [1806, 3580],
          [1806, 3577],
          [1807, 3576],
          [1807, 3573],
          [1805, 3573],
          [1804, 3572],
          [1804, 3571],
          [1800, 3571],
          [1800, 3570],
          [1798, 3570],
          [1798, 3569],
          [1796, 3569],
          [1796, 3568],
          [1794, 3568],
          [1794, 3567],
          [1790, 3567],
          [1789, 3566],
          [1789, 3562],
          [1788, 3561],
          [1777, 3561],
          [1777, 3558],
          [1781, 3558],
          [1781, 3543],
          [1762, 3543],
          [1762, 3546],
          [1758, 3546],
          [1757, 3545],
          [1756, 3545],
          [1754, 3543],
          [1748, 3543],
          [1746, 3545],
          [1735, 3545],
          [1734, 3546],
          [1732, 3546],
          [1729, 3543],
          [1729, 3542],
          [1721, 3542],
          [1721, 3546],
          [1722, 3547],
          [1722, 3555],
          [1709, 3564],
          [1704, 3564],
          [1698, 3560],
          [1693, 3560],
          [1686, 3572],
          [1686, 3586],
          [1684, 3588],
          [1684, 3590],
          [1687, 3593],
          [1694, 3593],
          [1704, 3588],
          [1712, 3588],
          [1715, 3591],
          [1715, 3604],
          [1717, 3608],
          [1717, 3616],
          [1709, 3624],
          [1709, 3636],
        ],
        inMap: true,
      },
    ],
  },
  "The Forsaken Tower ": {
    title: "The Forsaken Tower ",
    file: "The_Forsaken_Tower_(music_track)",
    polygons: [
      {
        coordinates: [
          [1376, 3830],
          [1376, 3822],
          [1377, 3821],
          [1377, 3820],
          [1379, 3818],
          [1381, 3818],
          [1382, 3817],
          [1383, 3817],
          [1384, 3818],
          [1386, 3818],
          [1388, 3820],
          [1388, 3821],
          [1389, 3822],
          [1389, 3830],
          [1376, 3830],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1368, 10240],
          [1400, 10240],
          [1400, 10208],
          [1368, 10208],
          [1368, 10240],
        ],
        inMap: false,
      },
    ],
  },
  "The Forsaken": {
    title: "The Forsaken",
    file: "The_Forsaken",
    polygons: [lithkren],
  },
  Fossilised: {
    title: "Fossilised",
    file: "Fossilised",
    polygons: fossilIslandWyverns,
  },
  "The Foundry": {
    title: "The Foundry",
    file: "The_Foundry",
    polygons: [giantsFoundry],
  },
  "The Fragment": {
    title: "The Fragment",
    file: "The_Fragment",
    polygons: undergroundPass,
  },
  Frogland: {
    title: "Frogland",
    file: "Frogland",
    polygons: [],
  },
  Frostbite: {
    title: "Frostbite",
    file: "Frostbite",
    polygons: [
      {
        coordinates: [
          [2816, 3776],
          [2816, 3840],
          [2944, 3840],
          [2944, 3776],
          [2816, 3776],
        ],
        inMap: true,
      },
    ],
  },
  "Fruits de Mer": {
    title: "Fruits de Mer",
    file: "Fruits_de_Mer",
    polygons: [
      {
        coordinates: [
          [2808, 3264],
          [2808, 3328],
          [2752, 3328],
          [2752, 3264],
          [2808, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Ful to the Brim": {
    title: "Ful to the Brim",
    file: "Ful_to_the_Brim",
    polygons: [karuulmSlayerDungeon],
  },
  "The Galleon": {
    title: "The Galleon",
    file: "The_Galleon",
    polygons: [
      {
        coordinates: [
          [2176, 3776],
          [2176, 3840],
          [2240, 3840],
          [2240, 3776],
          [2176, 3776],
        ],
        inMap: true,
      },
    ],
  },
  Gaol: {
    title: "Gaol",
    file: "Gaol",
    polygons: [
      {
        coordinates: [
          [2496, 3008],
          [2496, 3072],
          [2560, 3072],
          [2560, 3008],
          [2496, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "Garden ": {
    title: "Garden ",
    file: "Garden_(music_track)",
    polygons: [
      {
        coordinates: [
          [3200, 3456],
          [3253, 3456],
          [3253, 3442],
          [3264, 3442],
          [3264, 3392],
          [3200, 3392],
          [3200, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Garden of Autumn": {
    title: "Garden of Autumn",
    file: "Garden_of_Autumn",
    polygons: [sorceressGarden],
  },
  "Garden of Spring": {
    title: "Garden of Spring",
    file: "Garden_of_Spring",
    polygons: [sorceressGarden],
  },
  "Garden of Summer": {
    title: "Garden of Summer",
    file: "Garden_of_Summer",
    polygons: [sorceressGarden],
  },
  "Garden of Winter": {
    title: "Garden of Winter",
    file: "Garden_of_Winter",
    polygons: [sorceressGarden],
  },
  "The Gauntlet ": {
    title: "The Gauntlet ",
    file: "The_Gauntlet_(music_track)",
    polygons: [gauntlet],
  },
  "The Genie": {
    title: "The Genie",
    file: "The_Genie",
    polygons: [genieCave],
  },
  "Gill Bill": {
    title: "Gill Bill",
    file: "Gill_Bill",
    polygons: [
      {
        coordinates: [
          [1352, 3648],
          [1352, 3624],
          [1384, 3624],
          [1384, 3648],
          [1352, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "Gnome King": {
    title: "Gnome King",
    file: "Gnome_King",
    polygons: [
      {
        coordinates: [
          [2432, 3456],
          [2432, 3584],
          [2496, 3584],
          [2496, 3456],
          [2432, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Gnome Village": {
    title: "Gnome Village",
    file: "Gnome_Village",
    polygons: [
      {
        coordinates: [
          [2432, 3392],
          [2432, 3456],
          [2496, 3456],
          [2496, 3392],
          [2432, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Gnome Village 2": {
    title: "Gnome Village 2",
    file: "Gnome_Village_2",
    polygons: [
      {
        coordinates: [
          [2304, 3392],
          [2304, 3456],
          [2432, 3456],
          [2432, 3392],
          [2304, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Gnomeball ": {
    title: "Gnomeball ",
    file: "Gnomeball_(music_track)",
    polygons: [
      {
        coordinates: [
          [2368, 3456],
          [2368, 3520],
          [2432, 3584],
          [2432, 3456],
          [2368, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Goblin Game": {
    title: "Goblin Game",
    file: "Goblin_Game",
    polygons: [goblinCave],
  },
  "Goblin Village ": {
    title: "Goblin Village ",
    file: "Goblin_Village_(music_track)",
    polygons: [
      {
        coordinates: [
          [2949, 3479],
          [2959, 3479],
          [2959, 3485],
          [2961, 3487],
          [2961, 3495],
          [2969, 3503],
          [2969, 3514],
          [2966, 3517],
          [2949, 3517],
          [2944, 3512],
          [2944, 3500],
          [2949, 3495],
          [2949, 3479],
        ],
        inMap: true,
      },
    ],
  },
  "Golden Touch": {
    title: "Golden Touch",
    file: "Golden_Touch",
    polygons: [mta],
  },
  "The Golem ": {
    title: "The Golem ",
    file: "The_Golem_(music_track)",
    polygons: [
      {
        coordinates: [
          [3392, 3136],
          [3456, 3136],
          [3456, 3152],
          [3520, 3152],
          [3520, 3072],
          [3392, 3072],
          [3392, 3136],
        ],
        inMap: true,
      },
    ],
  },
  Greatness: {
    title: "Greatness",
    file: "Greatness",
    polygons: [
      {
        coordinates: [
          [3136, 3328],
          [3136, 3392],
          [3200, 3392],
          [3200, 3328],
          [3136, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Grotto ": {
    title: "Grotto ",
    file: "Grotto_(music_track)",
    polygons: [natureGrotto],
  },
  "Grow Grow Grow": {
    title: "Grow Grow Grow",
    file: "Grow_Grow_Grow",
    polygons: [
      {
        coordinates: [
          [1251, 3745],
          [1251, 3746],
          [1256, 3746],
          [1259, 3749],
          [1259, 3761],
          [1256, 3764],
          [1242, 3764],
          [1239, 3761],
          [1238, 3761],
          [1236, 3763],
          [1232, 3763],
          [1232, 3766],
          [1226, 3766],
          [1226, 3763],
          [1223, 3763],
          [1220, 3760],
          [1220, 3750],
          [1223, 3747],
          [1226, 3747],
          [1226, 3744],
          [1232, 3744],
          [1232, 3747],
          [1236, 3747],
          [1238, 3749],
          [1239, 3749],
          [1239, 3748],
          [1241, 3746],
          [1247, 3746],
          [1247, 3745],
          [1251, 3745],
        ],
        inMap: true,
      },
    ],
  },
  Grumpy: {
    title: "Grumpy",
    file: "Grumpy",
    polygons: [
      ...mythsDungeon,
      {
        coordinates: [
          [2560, 2944],
          [2560, 3008],
          [2624, 3008],
          [2624, 2944],
          [2560, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "The Guardians Prepare": {
    title: "The Guardians Prepare",
    file: "The_Guardians_Prepare",
    polygons: [wizardTowerBasement],
  },
  "Guardians of the Rift ": {
    title: "Guardians of the Rift ",
    file: "Guardians_of_the_Rift_(music_track)",
    polygons: [wizardTowerBasement],
  },
  "H.A.M. Attack": {
    title: "H.A.M. Attack",
    file: "H.A.M._Attack",
    polygons: [goblinVillage],
  },
  "H.A.M. Fisted": {
    title: "H.A.M. Fisted",
    file: "H.A.M._Fisted",
    polygons: [hamHideout],
  },
  "H.A.M. and Seek": {
    title: "H.A.M. and Seek",
    file: "H.A.M._and_Seek",
    polygons: [hamHideout],
  },
  "Harmony ": {
    title: "Harmony ",
    file: "Harmony_(music_track)",
    polygons: [
      {
        coordinates: [
          [3200, 3200],
          [3200, 3264],
          [3264, 3264],
          [3264, 3200],
          [3200, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Harmony 2": {
    title: "Harmony 2",
    file: "Harmony_2",
    polygons: swampCavesDoreshKaanTears,
  },
  "Haunted Mine ": {
    title: "Haunted Mine ",
    file: "Haunted_Mine_(music_track)",
    polygons: hauntedMine,
  },
  "Have a Blast": {
    title: "Have a Blast",
    file: "Have_a_Blast",
    polygons: keldagrim,
  },
  "Have an Ice Day": {
    title: "Have an Ice Day",
    file: "Have_an_Ice_Day",
    polygons: [
      {
        coordinates: [
          [2624, 3968],
          [2624, 4096],
          [2688, 4096],
          [2688, 3968],
          [2624, 3968],
        ],
        inMap: true,
      },
    ],
  },
  "Head to Head": {
    title: "Head to Head",
    file: "Head_to_Head",
    polygons: [],
  },
  "Heart and Mind": {
    title: "Heart and Mind",
    file: "Heart_and_Mind",
    polygons: [bodyAltar, abyss],
  },
  "Hells Bells": {
    title: "Hells Bells",
    file: "Hells_Bells",
    polygons: [
      {
        coordinates: [
          [2752, 3712],
          [2752, 3840],
          [2816, 3840],
          [2816, 3712],
          [2752, 3712],
        ],
        inMap: true,
      },
    ],
  },
  Hermit: {
    title: "Hermit",
    file: "Hermit",
    polygons: [saba],
  },
  "High Seas": {
    title: "High Seas",
    file: "High_Seas",
    polygons: [
      {
        coordinates: [
          [2752, 3136],
          [2752, 3200],
          [2816, 3200],
          [2816, 3136],
          [2752, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Hoe Down": {
    title: "Hoe Down",
    file: "Hoe_Down",
    polygons: [
      {
        coordinates: [
          [1244, 3728],
          [1245, 3728],
          [1245, 3723],
          [1253, 3723],
          [1253, 3728],
          [1255, 3728],
          [1255, 3726],
          [1261, 3720],
          [1270, 3720],
          [1275, 3725],
          [1275, 3735],
          [1270, 3740],
          [1267, 3740],
          [1267, 3743],
          [1269, 3745],
          [1269, 3751],
          [1268, 3752],
          [1262, 3752],
          [1261, 3751],
          [1261, 3746],
          [1263, 3744],
          [1263, 3740],
          [1260, 3740],
          [1255, 3735],
          [1255, 3732],
          [1253, 3732],
          [1253, 3738],
          [1256, 3738],
          [1256, 3744],
          [1251, 3744],
          [1251, 3745],
          [1247, 3745],
          [1247, 3744],
          [1242, 3744],
          [1242, 3738],
          [1245, 3738],
          [1245, 3732],
          [1244, 3732],
          [1244, 3728],
        ],
        inMap: true,
      },
    ],
  },
  "Home Sweet Home": {
    title: "Home Sweet Home",
    file: "Home_Sweet_Home",
    polygons: [...pohPortals, yarlo],
  },
  Horizon: {
    title: "Horizon",
    file: "Horizon",
    polygons: [
      {
        coordinates: [
          [2880, 3392],
          [2880, 3456],
          [2944, 3456],
          [2944, 3392],
          [2880, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "The Houses of Kourend": {
    title: "The Houses of Kourend",
    file: "The_Houses_of_Kourend",
    polygons: [xericsLookoutBasement],
  },
  Hypnotised: {
    title: "Hypnotised",
    file: "Hypnotised",
    polygons: [icthlarinPyramid],
  },
  "Iban ": {
    title: "Iban ",
    file: "Iban_(music_track)",
    polygons: undergroundPass,
  },
  "Ice Melody": {
    title: "Ice Melody",
    file: "Ice_Melody",
    polygons: [
      {
        coordinates: [
          [2816, 3456],
          [2816, 3520],
          [2880, 3520],
          [2880, 3456],
          [2816, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Ice and Fire": {
    title: "Ice and Fire",
    file: "Ice_and_Fire",
    polygons: [
      {
        coordinates: [
          [1600, 3968],
          [1600, 4032],
          [1664, 4032],
          [1664, 3968],
          [1600, 3968],
        ],
        inMap: true,
      },
    ],
  },
  Illusive: {
    title: "Illusive",
    file: "Illusive",
    polygons: [dream],
  },
  Impetuous: {
    title: "Impetuous",
    file: "Impetuous",
    polygons: [zanaris],
  },
  "In Between": {
    title: "In Between",
    file: "In_Between",
    polygons: keldagrim,
  },
  "In the Brine": {
    title: "In the Brine",
    file: "In_the_Brine",
    polygons: [
      {
        coordinates: [
          [3648, 2944],
          [3648, 3072],
          [3712, 3072],
          [3712, 2944],
          [3648, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "In the Clink": {
    title: "In the Clink",
    file: "In_the_Clink",
    polygons: [],
  },
  "In the Manor": {
    title: "In the Manor",
    file: "In_the_Manor",
    polygons: [
      {
        coordinates: [
          [2560, 3008],
          [2560, 3072],
          [2624, 3072],
          [2624, 3008],
          [2560, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "In the Pits": {
    title: "In the Pits",
    file: "In_the_Pits",
    polygons: tzhaar,
  },
  Inadequacy: {
    title: "Inadequacy",
    file: "Inadequacy",
    polygons: [dream],
  },
  "Inferno ": {
    title: "Inferno ",
    file: "Inferno_(music_track)",
    polygons: tzhaar,
  },
  "Insect Queen": {
    title: "Insect Queen",
    file: "Insect_Queen",
    polygons: [kalphiteCave, kalphiteLair],
  },
  Inspiration: {
    title: "Inspiration",
    file: "Inspiration",
    polygons: [
      {
        coordinates: [
          [3008, 3544],
          [3008, 3584],
          [3072, 3584],
          [3072, 3520],
          [3041, 3520],
          [3029, 3532],
          [3029, 3537],
          [3022, 3544],
          [3008, 3544],
        ],
        inMap: true,
      },
    ],
  },
  "Into the Abyss": {
    title: "Into the Abyss",
    file: "Into_the_Abyss",
    polygons: [abyss],
  },
  "Into the Tombs ": {
    title: "Into the Tombs ",
    file: "Into_the_Tombs_(music_track)",
    polygons: [toa],
  },
  Intrepid: {
    title: "Intrepid",
    file: "Intrepid",
    polygons: [
      {
        coordinates: [
          [2304, 9792],
          [2304, 9920],
          [2368, 9920],
          [2368, 9792],
          [2304, 9792],
        ],
        inMap: false,
      },
    ],
  },
  Invader: {
    title: "Invader",
    file: "Invader",
    polygons: [
      {
        coordinates: [
          [2944, 4800],
          [2984, 4800],
          [2984, 4752],
          [2944, 4752],
          [2944, 4800],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2944, 4864],
          [2944, 4808],
          [2976, 4808],
          [2976, 4816],
          [3008, 4816],
          [3008, 4864],
          [2944, 4864],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3072, 4864],
          [3072, 4817],
          [3136, 4817],
          [3136, 4864],
          [3072, 4864],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3096, 4800],
          [3136, 4800],
          [3136, 4752],
          [3096, 4752],
          [3096, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Island Life": {
    title: "Island Life",
    file: "Island_Life",
    polygons: [
      {
        coordinates: [
          [2688, 2688],
          [2688, 2752],
          [2816, 2752],
          [2816, 2688],
          [2688, 2688],
        ],
        inMap: true,
      },
    ],
  },
  "Island of the Trolls": {
    title: "Island of the Trolls",
    file: "Island_of_the_Trolls",
    polygons: [
      {
        coordinates: [
          [2304, 3840],
          [2304, 3904],
          [2432, 3904],
          [2432, 3840],
          [2304, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "Isle of Everywhere": {
    title: "Isle of Everywhere",
    file: "Isle_of_Everywhere",
    polygons: [
      {
        coordinates: [
          [2112, 3840],
          [2112, 3968],
          [2176, 3968],
          [2176, 3840],
          [2112, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "It's not over 'til...": {
    title: "It's not over 'til...",
    file: "It%27s_not_over_%27til...",
    polygons: [
      {
        coordinates: [
          [3136, 4288],
          [3136, 4351],
          [3199, 4351],
          [3199, 4288],
          [3136, 4288],
        ],
        inMap: false,
      },
    ],
  },
  "Itsy Bitsy...": {
    title: "Itsy Bitsy...",
    file: "Itsy_Bitsy...",
    polygons: [
      {
        coordinates: [
          [3648, 9856],
          [3712, 9856],
          [3712, 9792],
          [3648, 9792],
          [3648, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "Jolly R": {
    title: "Jolly R",
    file: "Jolly_R",
    polygons: [
      {
        coordinates: [
          [2752, 3200],
          [2752, 3264],
          [2816, 3264],
          [2816, 3200],
          [2752, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Joy of the Hunt": {
    title: "Joy of the Hunt",
    file: "Joy_of_the_Hunt",
    polygons: [
      {
        coordinates: [
          [2240, 3520],
          [2240, 3648],
          [2368, 3648],
          [2368, 3520],
          [2240, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "Judgement of the Depths": {
    title: "Judgement of the Depths",
    file: "Judgement_of_the_Depths",
    polygons: [
      {
        coordinates: [
          [1600, 5952],
          [1728, 5952],
          [1728, 5888],
          [1600, 5888],
          [1600, 5952],
        ],
        inMap: false,
      },
    ],
  },
  "Jungle Hunt": {
    title: "Jungle Hunt",
    file: "Jungle_Hunt",
    polygons: [
      {
        coordinates: [
          [2473, 2816],
          [2473, 2862],
          [2452, 2862],
          [2452, 2880],
          [2432, 2880],
          [2432, 2944],
          [2624, 2944],
          [2624, 2880],
          [2496, 2880],
          [2496, 2816],
          [2473, 2816],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2496, 9280],
          [2496, 9344],
          [2560, 9344],
          [2560, 9280],
          [2496, 9280],
        ],
        inMap: false,
      },
    ],
  },
  "Jungle Island": {
    title: "Jungle Island",
    file: "Jungle_Island",
    polygons: [
      {
        coordinates: [
          [2816, 2880],
          [2816, 2944],
          [2880, 2944],
          [2880, 2880],
          [2816, 2880],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2816, 3136],
          [2816, 3216],
          [2880, 3216],
          [2880, 3136],
          [2816, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Jungle Troubles": {
    title: "Jungle Troubles",
    file: "Jungle_Troubles",
    polygons: [
      {
        coordinates: [
          [2880, 3072],
          [2880, 3136],
          [2944, 3136],
          [2944, 3072],
          [2880, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "Jungly 1": {
    title: "Jungly 1",
    file: "Jungly_1",
    polygons: [
      {
        coordinates: [
          [2752, 9344],
          [2752, 9408],
          [2816, 9408],
          [2816, 9344],
          [2752, 9344],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2752, 2944],
          [2752, 3008],
          [2816, 3008],
          [2816, 2944],
          [2752, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "Jungly 2": {
    title: "Jungly 2",
    file: "Jungly_2",
    polygons: [
      {
        coordinates: [
          [2688, 3200],
          [2688, 3264],
          [2752, 3264],
          [2752, 3200],
          [2688, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Jungly 3": {
    title: "Jungly 3",
    file: "Jungly_3",
    polygons: [
      {
        coordinates: [
          [2752, 3008],
          [2752, 3072],
          [2816, 3072],
          [2816, 3008],
          [2752, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "Kanon of Kahlith": {
    title: "Kanon of Kahlith",
    file: "Kanon_of_Kahlith",
    polygons: [
      {
        coordinates: [
          [1248, 10176],
          [1248, 10240],
          [1369, 10240],
          [1369, 10176],
          [1248, 10176],
        ],
        inMap: false,
      },
    ],
  },
  "Karamja Jam": {
    title: "Karamja Jam",
    file: "Karamja_Jam",
    polygons: [
      {
        coordinates: [
          [2688, 9408],
          [2688, 9536],
          [2752, 9536],
          [2752, 9408],
          [2688, 9408],
        ],
        inMap: false,
      },
    ],
  },
  "Kingdom ": {
    title: "Kingdom ",
    file: "Kingdom_(music_track)",
    polygons: [
      {
        coordinates: [
          [2832, 3556],
          [2832, 3545],
          [2816, 3545],
          [2816, 3584],
          [2880, 3584],
          [2880, 3520],
          [2816, 3520],
          [2816, 3529],
          [2825, 3538],
          [2838, 3538],
          [2838, 3537],
          [2839, 3537],
          [2840, 3536],
          [2841, 3536],
          [2842, 3537],
          [2845, 3537],
          [2846, 3536],
          [2847, 3536],
          [2848, 3537],
          [2849, 3537],
          [2849, 3534],
          [2860, 3534],
          [2860, 3537],
          [2865, 3537],
          [2866, 3536],
          [2867, 3536],
          [2868, 3537],
          [2871, 3537],
          [2872, 3536],
          [2873, 3536],
          [2874, 3537],
          [2876, 3537],
          [2876, 3539],
          [2877, 3540],
          [2877, 3541],
          [2876, 3542],
          [2876, 3544],
          [2877, 3545],
          [2877, 3548],
          [2876, 3549],
          [2876, 3551],
          [2877, 3552],
          [2877, 3553],
          [2876, 3554],
          [2876, 3556],
          [2874, 3556],
          [2873, 3557],
          [2872, 3557],
          [2871, 3556],
          [2868, 3556],
          [2867, 3557],
          [2866, 3557],
          [2865, 3556],
          [2832, 3556],
        ],
        inMap: true,
      },
    ],
  },
  Knightly: {
    title: "Knightly",
    file: "Knightly",
    polygons: [
      {
        coordinates: [
          [2558, 3264],
          [2558, 3328],
          [2624, 3328],
          [2624, 3264],
          [2558, 3264],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2560, 9694],
          [2560, 9728],
          [2584, 9728],
          [2584, 9694],
          [2560, 9694],
        ],
        inMap: false,
      },
    ],
  },
  Knightmare: {
    title: "Knightmare",
    file: "Knightmare",
    polygons: [
      {
        coordinates: [
          [1856, 4224],
          [1856, 4288],
          [1920, 4288],
          [1920, 4224],
          [1856, 4224],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3008, 3518],
          [3008, 3514],
          [3009, 3513],
          [3012, 3513],
          [3013, 3514],
          [3014, 3514],
          [3015, 3515],
          [3018, 3515],
          [3019, 3514],
          [3019, 3513],
          [3021, 3513],
          [3021, 3510],
          [3025, 3510],
          [3025, 3506],
          [3027, 3506],
          [3027, 3505],
          [3028, 3504],
          [3031, 3504],
          [3033, 3506],
          [3033, 3508],
          [3031, 3510],
          [3031, 3517],
          [3029, 3519],
          [3020, 3519],
          [3018, 3517],
          [3017, 3517],
          [3017, 3520],
          [3015, 3520],
          [3015, 3517],
          [3014, 3517],
          [3012, 3519],
          [3009, 3519],
          [3008, 3518],
        ],
        inMap: true,
      },
    ],
  },
  "Kourend the Magnificent": {
    title: "Kourend the Magnificent",
    file: "Kourend_the_Magnificent",
    polygons: [
      {
        coordinates: [
          [1597, 3654],
          [1597, 3653],
          [1598, 3653],
          [1598, 3652],
          [1599, 3652],
          [1599, 3651],
          [1602, 3651],
          [1607, 3646],
          [1690, 3646],
          [1691, 3647],
          [1695, 3647],
          [1695, 3646],
          [1696, 3646],
          [1696, 3645],
          [1697, 3645],
          [1697, 3644],
          [1698, 3644],
          [1698, 3643],
          [1699, 3643],
          [1699, 3642],
          [1700, 3642],
          [1700, 3641],
          [1707, 3641],
          [1707, 3640],
          [1708, 3640],
          [1708, 3639],
          [1709, 3639],
          [1709, 3636],
          [1742, 3643],
          [1742, 3659],
          [1756, 3659],
          [1756, 3660],
          [1757, 3661],
          [1760, 3661],
          [1761, 3660],
          [1767, 3660],
          [1768, 3659],
          [1768, 3658],
          [1779, 3658],
          [1781, 3656],
          [1782, 3656],
          [1783, 3655],
          [1783, 3654],
          [1806, 3654],
          [1806, 3670],
          [1792, 3684],
          [1792, 3688],
          [1788, 3688],
          [1788, 3692],
          [1790, 3692],
          [1790, 3699],
          [1789, 3699],
          [1789, 3700],
          [1788, 3700],
          [1788, 3701],
          [1787, 3701],
          [1787, 3702],
          [1786, 3702],
          [1786, 3703],
          [1775, 3703],
          [1775, 3704],
          [1769, 3704],
          [1769, 3703],
          [1742, 3703],
          [1742, 3724],
          [1735, 3724],
          [1735, 3709],
          [1734, 3708],
          [1716, 3708],
          [1715, 3709],
          [1715, 3711],
          [1705, 3711],
          [1702, 3708],
          [1691, 3708],
          [1690, 3707],
          [1680, 3707],
          [1677, 3710],
          [1658, 3710],
          [1657, 3711],
          [1642, 3711],
          [1636, 3717],
          [1636, 3718],
          [1625, 3718],
          [1625, 3717],
          [1624, 3717],
          [1624, 3716],
          [1621, 3716],
          [1621, 3715],
          [1619, 3715],
          [1619, 3714],
          [1617, 3714],
          [1617, 3713],
          [1616, 3713],
          [1616, 3712],
          [1615, 3712],
          [1615, 3711],
          [1614, 3711],
          [1614, 3710],
          [1613, 3710],
          [1613, 3709],
          [1612, 3709],
          [1612, 3708],
          [1611, 3708],
          [1611, 3707],
          [1610, 3707],
          [1610, 3706],
          [1609, 3706],
          [1609, 3705],
          [1608, 3705],
          [1608, 3704],
          [1607, 3704],
          [1607, 3703],
          [1606, 3703],
          [1606, 3702],
          [1605, 3702],
          [1600, 3697],
          [1590, 3697],
          [1585, 3692],
          [1585, 3687],
          [1587, 3685],
          [1587, 3658],
          [1597, 3654],
        ],
        inMap: true,
      },
    ],
  },
  "La Mort": {
    title: "La Mort",
    file: "La_Mort",
    polygons: [
      {
        coordinates: [
          [2176, 4800],
          [2176, 4864],
          [2240, 4864],
          [2240, 4800],
          [2176, 4800],
        ],
        inMap: false,
      },
    ],
  },
  Labyrinth: {
    title: "Labyrinth",
    file: "Labyrinth",
    polygons: [
      {
        coordinates: [
          [3264, 9216],
          [3264, 9280],
          [3328, 9280],
          [3328, 9216],
          [3264, 9216],
        ],
        inMap: false,
      },
    ],
  },
  Lagoon: {
    title: "Lagoon",
    file: "Lagoon",
    polygons: [
      {
        coordinates: [
          [3712, 10240],
          [3712, 10304],
          [3840, 10304],
          [3840, 10240],
          [3712, 10240],
        ],
        inMap: false,
      },
    ],
  },
  Lair: {
    title: "Lair",
    file: "Lair",
    polygons: [
      {
        coordinates: [
          [3456, 9664],
          [3456, 9728],
          [3520, 9728],
          [3520, 9664],
          [3456, 9664],
        ],
        inMap: false,
      },
    ],
  },
  "Lair of the Basilisk": {
    title: "Lair of the Basilisk",
    file: "Lair_of_the_Basilisk",
    polygons: [
      {
        coordinates: [
          [2368, 10368],
          [2368, 10496],
          [2496, 10496],
          [2496, 10368],
          [2368, 10368],
        ],
        inMap: false,
      },
    ],
  },
  Lament: {
    title: "Lament",
    file: "Lament",
    polygons: [
      {
        coordinates: [
          [3072, 9280],
          [3072, 9344],
          [3136, 9344],
          [3136, 9280],
          [3072, 9280],
        ],
        inMap: false,
      },
    ],
  },
  "Lament for the Hallowed": {
    title: "Lament for the Hallowed",
    file: "Lament_for_the_Hallowed",
    polygons: [
      {
        coordinates: [
          [3680, 3264],
          [3680, 3239],
          [3683, 3239],
          [3687, 3235],
          [3687, 3228],
          [3699, 3228],
          [3699, 3211],
          [3687, 3211],
          [3687, 3204],
          [3683, 3200],
          [3648, 3200],
          [3648, 3136],
          [3776, 3136],
          [3776, 3264],
          [3680, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Lament of Meiyerditch": {
    title: "Lament of Meiyerditch",
    file: "Lament_of_Meiyerditch",
    polygons: [
      {
        coordinates: [
          [3616, 9728],
          [3648, 9728],
          [3648, 9681],
          [3616, 9681],
          [3616, 9728],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2368, 4608],
          [2368, 4672],
          [2432, 4672],
          [2432, 4608],
          [2368, 4608],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3606, 3312],
          [3617, 3312],
          [3617, 3330],
          [3648, 3330],
          [3648, 3264],
          [3584, 3264],
          [3584, 3328],
          [3591, 3328],
          [3591, 3311],
          [3606, 3311],
          [3606, 3312],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3584, 9600],
          [3584, 9664],
          [3648, 9664],
          [3648, 9600],
          [3584, 9600],
        ],
        inMap: false,
      },
    ],
  },
  "Land Down Under": {
    title: "Land Down Under",
    file: "Land_Down_Under",
    polygons: [
      {
        coordinates: [
          [2496, 10240],
          [2496, 10304],
          [2560, 10304],
          [2560, 10240],
          [2496, 10240],
        ],
        inMap: false,
      },
    ],
  },
  "Land of the Dwarves": {
    title: "Land of the Dwarves",
    file: "Land_of_the_Dwarves",
    polygons: [
      {
        coordinates: [
          [2816, 10176],
          [2816, 10240],
          [2880, 10240],
          [2880, 10176],
          [2816, 10176],
        ],
        inMap: false,
      },
    ],
  },
  Landlubber: {
    title: "Landlubber",
    file: "Landlubber",
    polygons: [
      {
        coordinates: [
          [2688, 3136],
          [2688, 3200],
          [2752, 3200],
          [2752, 3136],
          [2688, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Last King of the Yarasa": {
    title: "Last King of the Yarasa",
    file: "Last_King_of_the_Yarasa",
    polygons: [
      {
        coordinates: [
          [3136, 4352],
          [3136, 4416],
          [3200, 4416],
          [3200, 4352],
          [3136, 4352],
        ],
        inMap: false,
      },
    ],
  },
  "Last Man Standing ": {
    title: "Last Man Standing ",
    file: "Last_Man_Standing_(music_track)",
    polygons: [
      {
        coordinates: [
          [3392, 5760],
          [3392, 5952],
          [3520, 5952],
          [3520, 5760],
          [3392, 5760],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3456, 6208],
          [3648, 6208],
          [3648, 6016],
          [3456, 6016],
          [3456, 6208],
        ],
        inMap: false,
      },
    ],
  },
  "The Last Shanty": {
    title: "The Last Shanty",
    file: "The_Last_Shanty",
    polygons: [
      {
        coordinates: [
          [3648, 3200],
          [3648, 3136],
          [3584, 3136],
          [3584, 3264],
          [3648, 3264],
          [3648, 3239],
          [3643, 3239],
          [3638, 3234],
          [3638, 3205],
          [3643, 3200],
          [3648, 3200],
        ],
        inMap: true,
      },
    ],
  },
  Lasting: {
    title: "Lasting",
    file: "Lasting",
    polygons: [
      {
        coordinates: [
          [2624, 3392],
          [2624, 3456],
          [2688, 3456],
          [2688, 3392],
          [2624, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Lava is Mine": {
    title: "Lava is Mine",
    file: "Lava_is_Mine",
    polygons: [
      {
        coordinates: [
          [3776, 10112],
          [3776, 10240],
          [3840, 10240],
          [3840, 10112],
          [3776, 10112],
        ],
        inMap: false,
      },
    ],
  },
  Legend: {
    title: "Legend",
    file: "Legend",
    polygons: [
      {
        coordinates: [
          [2688, 3584],
          [2688, 3648],
          [2816, 3648],
          [2816, 3584],
          [2688, 3584],
        ],
        inMap: true,
      },
    ],
  },
  Legion: {
    title: "Legion",
    file: "Legion",
    polygons: [
      {
        coordinates: [
          [2496, 9920],
          [2496, 9984],
          [2560, 9984],
          [2560, 9920],
          [2496, 9920],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2496, 3520],
          [2496, 3584],
          [2560, 3584],
          [2560, 3520],
          [2496, 3520],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2560, 5248],
          [2560, 5312],
          [2624, 5312],
          [2624, 5248],
          [2560, 5248],
        ],
        inMap: false,
      },
    ],
  },
  "Life's a Beach!": {
    title: "Life's a Beach!",
    file: "Life%27s_a_Beach!",
    polygons: [
      {
        coordinates: [
          [3712, 2944],
          [3712, 3072],
          [3776, 3072],
          [3776, 2944],
          [3712, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "Lighthouse ": {
    title: "Lighthouse ",
    file: "Lighthouse_(music_track)",
    polygons: [
      {
        coordinates: [
          [2496, 3584],
          [2496, 3648],
          [2560, 3648],
          [2560, 3584],
          [2496, 3584],
        ],
        inMap: true,
      },
    ],
  },
  Lightness: {
    title: "Lightness",
    file: "Lightness",
    polygons: [
      {
        coordinates: [
          [3008, 3456],
          [3008, 3462],
          [2994, 3462],
          [2990, 3458],
          [2988, 3458],
          [2988, 3457],
          [2985, 3457],
          [2979, 3463],
          [2979, 3475],
          [2990, 3486],
          [2990, 3510],
          [2994, 3514],
          [2994, 3520],
          [2944, 3520],
          [2944, 3512],
          [2949, 3517],
          [2966, 3517],
          [2969, 3514],
          [2969, 3503],
          [2961, 3495],
          [2961, 3487],
          [2959, 3485],
          [2959, 3479],
          [2949, 3479],
          [2949, 3495],
          [2944, 3500],
          [2944, 3456],
          [3008, 3456],
        ],
        inMap: true,
      },
    ],
  },
  Lightwalk: {
    title: "Lightwalk",
    file: "Lightwalk",
    polygons: [
      {
        coordinates: [
          [2752, 3392],
          [2752, 3456],
          [2816, 3456],
          [2816, 3392],
          [2752, 3392],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1664, 4224],
          [1664, 4288],
          [1728, 4288],
          [1728, 4224],
          [1664, 4224],
        ],
        inMap: false,
      },
    ],
  },
  "Little Cave of Horrors": {
    title: "Little Cave of Horrors",
    file: "Little_Cave_of_Horrors",
    polygons: [
      {
        coordinates: [
          [3712, 9472],
          [3712, 9344],
          [3776, 9344],
          [3776, 9408],
          [3840, 9408],
          [3840, 9472],
          [3712, 9472],
        ],
        inMap: false,
      },
    ],
  },
  Lonesome: {
    title: "Lonesome",
    file: "Lonesome",
    polygons: [
      {
        coordinates: [
          [3264, 9408],
          [3264, 9472],
          [3328, 9472],
          [3328, 9408],
          [3264, 9408],
        ],
        inMap: false,
      },
    ],
  },
  "Long Ago": {
    title: "Long Ago",
    file: "Long_Ago",
    polygons: [
      {
        coordinates: [
          [2624, 3072],
          [2624, 3136],
          [2688, 3136],
          [2688, 3072],
          [2624, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "Long Way Home": {
    title: "Long Way Home",
    file: "Long_Way_Home",
    polygons: [
      {
        coordinates: [
          [2944, 3200],
          [2944, 3264],
          [3008, 3264],
          [3008, 3200],
          [2944, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Looking Back": {
    title: "Looking Back",
    file: "Looking_Back",
    polygons: [
      {
        coordinates: [
          [1728, 4928],
          [1728, 4992],
          [1792, 4992],
          [1792, 4928],
          [1728, 4928],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3253, 3442],
          [3253, 3456],
          [3268, 3456],
          [3268, 3442],
          [3253, 3442],
        ],
        inMap: true,
      },
    ],
  },
  "Lore and Order": {
    title: "Lore and Order",
    file: "Lore_and_Order",
    polygons: [
      {
        coordinates: [
          [1792, 4224],
          [1792, 4288],
          [1856, 4288],
          [1856, 4224],
          [1792, 4224],
        ],
        inMap: false,
      },
    ],
  },
  "The Lost Melody": {
    title: "The Lost Melody",
    file: "The_Lost_Melody",
    polygons: [
      {
        coordinates: [
          [3264, 9600],
          [3264, 9664],
          [3328, 9664],
          [3328, 9600],
          [3264, 9600],
        ],
        inMap: false,
      },
    ],
  },
  "Lost Soul ": {
    title: "Lost Soul ",
    file: "Lost_Soul_(music_track)",
    polygons: [
      {
        coordinates: [
          [2240, 3072],
          [2240, 3136],
          [2368, 3136],
          [2368, 3072],
          [2280, 3072],
          [2280, 3080],
          [2256, 3080],
          [2256, 3072],
          [2240, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "The Lost Tribe ": {
    title: "The Lost Tribe ",
    file: "The_Lost_Tribe_(music_track)",
    polygons: [
      {
        coordinates: [
          [3220, 9600],
          [3220, 9664],
          [3264, 9664],
          [3264, 9600],
          [3220, 9600],
        ],
        inMap: false,
      },
    ],
  },
  "Lower Depths": {
    title: "Lower Depths",
    file: "Lower_Depths",
    polygons: [
      {
        coordinates: [
          [1152, 9920],
          [1152, 9984],
          [1216, 9984],
          [1216, 9920],
          [1152, 9920],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3264, 5760],
          [3360, 5760],
          [3360, 5696],
          [3264, 5696],
          [3264, 5760],
        ],
        inMap: false,
      },
    ],
  },
  "Lucid Dream": {
    title: "Lucid Dream",
    file: "Lucid_Dream",
    polygons: [
      {
        coordinates: [
          [1792, 5184],
          [1792, 5213],
          [1856, 5213],
          [1856, 5184],
          [1792, 5184],
        ],
        inMap: false,
      },
    ],
  },
  "Lucid Nightmare": {
    title: "Lucid Nightmare",
    file: "Lucid_Nightmare",
    polygons: [
      {
        coordinates: [
          [1792, 5213],
          [1792, 5248],
          [1856, 5248],
          [1856, 5213],
          [1792, 5213],
        ],
        inMap: false,
      },
    ],
  },
  Lullaby: {
    title: "Lullaby",
    file: "Lullaby",
    polygons: [
      {
        coordinates: [
          [3328, 3392],
          [3328, 3456],
          [3392, 3456],
          [3392, 3392],
          [3328, 3392],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2624, 3520],
          [2624, 3584],
          [2688, 3584],
          [2688, 3520],
          [2624, 3520],
        ],
        inMap: true,
      },
    ],
  },
  Lumbering: {
    title: "Lumbering",
    file: "Lumbering",
    polygons: [
      {
        coordinates: [
          [2816, 3904],
          [2816, 3952],
          [2847, 3952],
          [2847, 3961],
          [2880, 3961],
          [2880, 3968],
          [2943, 3968],
          [2943, 3904],
          [2816, 3904],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2816, 10304],
          [2816, 10368],
          [2880, 10368],
          [2880, 10304],
          [2816, 10304],
        ],
        inMap: false,
      },
    ],
  },
  "The Lunar Isle": {
    title: "The Lunar Isle",
    file: "The_Lunar_Isle",
    polygons: [
      {
        coordinates: [
          [2048, 3840],
          [2048, 3968],
          [2112, 3968],
          [2112, 3840],
          [2048, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "Mad Eadgar": {
    title: "Mad Eadgar",
    file: "Mad_Eadgar",
    polygons: [
      {
        coordinates: [
          [2880, 10048],
          [2880, 10112],
          [2944, 10112],
          [2944, 10048],
          [2880, 10048],
        ],
        inMap: false,
      },
    ],
  },
  "The Mad Mole": {
    title: "The Mad Mole",
    file: "The_Mad_Mole",
    polygons: [
      {
        coordinates: [
          [1728, 5120],
          [1728, 5248],
          [1792, 5248],
          [1792, 5120],
          [1728, 5120],
        ],
        inMap: false,
      },
    ],
  },
  "Mage Arena ": {
    title: "Mage Arena ",
    file: "Mage_Arena_(music_track)",
    polygons: [
      {
        coordinates: [
          [3072, 3904],
          [3072, 3968],
          [3136, 3968],
          [3136, 3904],
          [3072, 3904],
        ],
        inMap: true,
      },
    ],
  },
  "Magic Dance": {
    title: "Magic Dance",
    file: "Magic_Dance",
    polygons: [
      {
        coordinates: [
          [2560, 3072],
          [2560, 3136],
          [2624, 3136],
          [2624, 3072],
          [2560, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "Magic Magic Magic": {
    title: "Magic Magic Magic",
    file: "Magic_Magic_Magic",
    polygons: [
      {
        coordinates: [
          [2640, 3208],
          [2640, 3232],
          [2664, 3232],
          [2664, 3208],
          [2640, 3208],
        ],
        inMap: true,
      },
    ],
  },
  "Magical Journey": {
    title: "Magical Journey",
    file: "Magical_Journey",
    polygons: [
      {
        coordinates: [
          [2688, 3392],
          [2688, 3456],
          [2752, 3456],
          [2752, 3392],
          [2688, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "The Maiden's Anger": {
    title: "The Maiden's Anger",
    file: "The_Maiden%27s_Anger",
    polygons: [
      {
        coordinates: [
          [3136, 4416],
          [3136, 4480],
          [3264, 4480],
          [3264, 4416],
          [3136, 4416],
        ],
        inMap: false,
      },
    ],
  },
  "The Maiden's Sorrow": {
    title: "The Maiden's Sorrow",
    file: "The_Maiden%27s_Sorrow",
    polygons: [
      {
        coordinates: [
          [3136, 4416],
          [3136, 4480],
          [3264, 4480],
          [3264, 4416],
          [3136, 4416],
        ],
        inMap: false,
      },
    ],
  },
  "Major Miner": {
    title: "Major Miner",
    file: "Major_Miner",
    polygons: [
      {
        coordinates: [
          [2368, 10176],
          [2368, 10240],
          [2432, 10240],
          [2432, 10176],
          [2368, 10176],
        ],
        inMap: false,
      },
    ],
  },
  "Making Waves": {
    title: "Making Waves",
    file: "Making_Waves",
    polygons: [
      {
        coordinates: [
          [2304, 3648],
          [2304, 3712],
          [2368, 3712],
          [2368, 3648],
          [2304, 3648],
        ],
        inMap: true,
      },
    ],
  },
  Malady: {
    title: "Malady",
    file: "Malady",
    polygons: [
      {
        coordinates: [
          [2112, 5248],
          [2112, 5312],
          [2176, 5312],
          [2176, 5248],
          [2112, 5248],
        ],
        inMap: false,
      },
    ],
  },
  March: {
    title: "March",
    file: "March",
    polygons: [
      {
        coordinates: [
          [2496, 3336],
          [2496, 3392],
          [2560, 3392],
          [2560, 3336],
          [2496, 3336],
        ],
        inMap: true,
      },
    ],
  },
  "March of the Shayzien": {
    title: "March of the Shayzien",
    file: "March_of_the_Shayzien",
    polygons: [
      {
        coordinates: [
          [1540, 3712],
          [1534, 3712],
          [1524, 3722],
          [1499, 3733],
          [1490, 3733],
          [1486, 3731],
          [1476, 3731],
          [1471, 3736],
          [1468, 3736],
          [1468, 3732],
          [1469, 3732],
          [1471, 3730],
          [1471, 3725],
          [1469, 3723],
          [1468, 3723],
          [1468, 3715],
          [1469, 3714],
          [1469, 3710],
          [1468, 3709],
          [1468, 3701],
          [1469, 3701],
          [1471, 3699],
          [1471, 3694],
          [1469, 3692],
          [1468, 3692],
          [1468, 3688],
          [1472, 3688],
          [1472, 3686],
          [1475, 3686],
          [1476, 3687],
          [1478, 3687],
          [1478, 3688],
          [1479, 3689],
          [1480, 3690],
          [1483, 3690],
          [1484, 3689],
          [1496, 3689],
          [1502, 3683],
          [1502, 3681],
          [1530, 3681],
          [1537, 3674],
          [1537, 3677],
          [1539, 3679],
          [1537, 3681],
          [1537, 3683],
          [1539, 3685],
          [1539, 3688],
          [1542, 3691],
          [1542, 3698],
          [1539, 3701],
          [1539, 3704],
          [1537, 3706],
          [1537, 3708],
          [1539, 3710],
          [1539, 3711],
          [1540, 3712],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1462, 3736],
          [1458, 3732],
          [1434, 3732],
          [1430, 3728],
          [1415, 3728],
          [1415, 3688],
          [1457, 3688],
          [1457, 3699],
          [1461, 3703],
          [1461, 3724],
          [1462, 3725],
          [1462, 3730],
          [1464, 3732],
          [1465, 3732],
          [1465, 3736],
          [1462, 3736],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1390, 3482],
          [1415, 3507],
          [1415, 3523],
          [1412, 3526],
          [1412, 3544],
          [1415, 3547],
          [1415, 3558],
          [1371, 3602],
          [1340, 3602],
          [1331, 3593],
          [1315, 3593],
          [1290, 3568],
          [1290, 3516],
          [1365, 3516],
          [1365, 3499],
          [1382, 3482],
          [1390, 3482],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1280, 9920],
          [1280, 9984],
          [1344, 9984],
          [1344, 9920],
          [1280, 9920],
        ],
        inMap: false,
      },
    ],
  },
  Marooned: {
    title: "Marooned",
    file: "Marooned",
    polygons: [
      {
        coordinates: [
          [3008, 5440],
          [3008, 5504],
          [3072, 5504],
          [3072, 5440],
          [3008, 5440],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2880, 2688],
          [2880, 2752],
          [2944, 2752],
          [2944, 2688],
          [2880, 2688],
        ],
        inMap: true,
      },
    ],
  },
  Marzipan: {
    title: "Marzipan",
    file: "Marzipan",
    polygons: [
      {
        coordinates: [
          [2752, 10112],
          [2752, 10240],
          [2816, 10240],
          [2816, 10112],
          [2752, 10112],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2816, 10048],
          [2816, 10112],
          [2880, 10112],
          [2880, 10048],
          [2816, 10048],
        ],
        inMap: false,
      },
    ],
  },
  Masquerade: {
    title: "Masquerade",
    file: "Masquerade",
    polygons: [
      {
        coordinates: [
          [2688, 9920],
          [2688, 10048],
          [2752, 10048],
          [2752, 9920],
          [2688, 9920],
        ],
        inMap: false,
      },
    ],
  },
  "Mausoleum ": {
    title: "Mausoleum ",
    file: "Mausoleum_(music_track)",
    polygons: [
      {
        coordinates: [
          [3392, 9856],
          [3392, 9920],
          [3456, 9920],
          [3456, 9856],
          [3392, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "Maws Jaws &amp; Claws": {
    title: "Maws Jaws &amp; Claws",
    file: "Maws_Jaws_%26_Claws",
    polygons: [
      {
        coordinates: [
          [1280, 1280],
          [1280, 1344],
          [1344, 1344],
          [1344, 1280],
          [1280, 1280],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1216, 1216],
          [1216, 1280],
          [1280, 1280],
          [1280, 1216],
          [1216, 1216],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1344, 1216],
          [1344, 1280],
          [1408, 1280],
          [1408, 1216],
          [1344, 1216],
        ],
        inMap: false,
      },
    ],
  },
  "The Maze": {
    title: "The Maze",
    file: "The_Maze",
    polygons: [
      {
        coordinates: [
          [2923, 3240],
          [2927, 3240],
          [2927, 3239],
          [2928, 3238],
          [2930, 3238],
          [2932, 3240],
          [2937, 3240],
          [2937, 3238],
          [2938, 3237],
          [2940, 3237],
          [2941, 3238],
          [2941, 3258],
          [2923, 3258],
          [2923, 3257],
          [2921, 3255],
          [2921, 3253],
          [2923, 3251],
          [2923, 3240],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2816, 9216],
          [2816, 9344],
          [2880, 9344],
          [2880, 9216],
          [2816, 9216],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2880, 9600],
          [2880, 9664],
          [2944, 9664],
          [2944, 9600],
          [2880, 9600],
        ],
        inMap: false,
      },
    ],
  },
  Medieval: {
    title: "Medieval",
    file: "Medieval",
    polygons: [
      {
        coordinates: [
          [3264, 3392],
          [3264, 3442],
          [3268, 3442],
          [3268, 3456],
          [3328, 3456],
          [3328, 3392],
          [3264, 3392],
        ],
        inMap: true,
      },
    ],
  },
  Mellow: {
    title: "Mellow",
    file: "Mellow",
    polygons: [
      {
        coordinates: [
          [2560, 3392],
          [2560, 3456],
          [2624, 3456],
          [2624, 3392],
          [2560, 3392],
        ],
        inMap: true,
      },
    ],
  },
  Melodrama: {
    title: "Melodrama",
    file: "Melodrama",
    polygons: [
      {
        coordinates: [
          [2432, 3072],
          [2432, 3136],
          [2496, 3136],
          [2496, 3072],
          [2432, 3072],
        ],
        inMap: true,
      },
    ],
  },
  Meridian: {
    title: "Meridian",
    file: "Meridian",
    polygons: [
      {
        coordinates: [
          [2112, 3136],
          [2112, 3200],
          [2240, 3200],
          [2240, 3136],
          [2112, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Method of Madness": {
    title: "Method of Madness",
    file: "Method_of_Madness",
    polygons: [
      {
        coordinates: [
          [3040, 5184],
          [3040, 5216],
          [3072, 5216],
          [3072, 5184],
          [3040, 5184],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3296, 9792],
          [3296, 9824],
          [3328, 9824],
          [3328, 9792],
          [3296, 9792],
        ],
        inMap: false,
      },
    ],
  },
  "Miles Away": {
    title: "Miles Away",
    file: "Miles_Away",
    polygons: [
      {
        coordinates: [
          [2624, 4672],
          [2624, 4736],
          [2688, 4736],
          [2688, 4672],
          [2624, 4672],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2880, 3264],
          [2880, 3328],
          [2944, 3328],
          [2944, 3264],
          [2880, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Military Life": {
    title: "Military Life",
    file: "Military_Life",
    polygons: [
      {
        coordinates: [
          [1540, 3662],
          [1539, 3662],
          [1539, 3660],
          [1540, 3659],
          [1542, 3659],
          [1543, 3658],
          [1543, 3651],
          [1548, 3646],
          [1549, 3646],
          [1550, 3647],
          [1551, 3648],
          [1552, 3648],
          [1556, 3648],
          [1558, 3648],
          [1558, 3647],
          [1558, 3641],
          [1557, 3640],
          [1556, 3639],
          [1556, 3637],
          [1557, 3636],
          [1558, 3635],
          [1558, 3632],
          [1557, 3631],
          [1557, 3627],
          [1555, 3627],
          [1554, 3626],
          [1554, 3621],
          [1553, 3620],
          [1550, 3620],
          [1550, 3618],
          [1549, 3618],
          [1549, 3617],
          [1548, 3617],
          [1547, 3617],
          [1547, 3615],
          [1541, 3615],
          [1541, 3617],
          [1539, 3617],
          [1539, 3618],
          [1537, 3618],
          [1536, 3617],
          [1535, 3617],
          [1535, 3616],
          [1534, 3616],
          [1534, 3615],
          [1533, 3614],
          [1531, 3614],
          [1530, 3613],
          [1529, 3612],
          [1526, 3612],
          [1525, 3611],
          [1524, 3610],
          [1521, 3610],
          [1520, 3609],
          [1519, 3608],
          [1512, 3608],
          [1511, 3609],
          [1510, 3609],
          [1509, 3610],
          [1508, 3611],
          [1508, 3614],
          [1506, 3616],
          [1506, 3620],
          [1508, 3622],
          [1508, 3624],
          [1507, 3625],
          [1506, 3625],
          [1506, 3624],
          [1504, 3624],
          [1504, 3625],
          [1503, 3625],
          [1500, 3622],
          [1498, 3622],
          [1498, 3621],
          [1490, 3621],
          [1490, 3623],
          [1488, 3625],
          [1475, 3625],
          [1475, 3624],
          [1473, 3624],
          [1473, 3626],
          [1470, 3629],
          [1468, 3629],
          [1468, 3631],
          [1469, 3631],
          [1469, 3641],
          [1468, 3641],
          [1468, 3643],
          [1470, 3643],
          [1473, 3646],
          [1473, 3654],
          [1470, 3657],
          [1468, 3657],
          [1468, 3659],
          [1469, 3659],
          [1469, 3667],
          [1468, 3667],
          [1468, 3669],
          [1468, 3682],
          [1470, 3682],
          [1470, 3686],
          [1475, 3686],
          [1476, 3687],
          [1478, 3687],
          [1478, 3688],
          [1479, 3689],
          [1480, 3690],
          [1483, 3690],
          [1484, 3689],
          [1496, 3689],
          [1502, 3683],
          [1502, 3681],
          [1530, 3681],
          [1540, 3671],
          [1540, 3662],
        ],
        inMap: true,
      },
    ],
  },
  "The Militia": {
    title: "The Militia",
    file: "The_Militia",
    polygons: [
      {
        coordinates: [
          [1408, 9984],
          [1472, 9984],
          [1472, 9920],
          [1408, 9920],
          [1408, 9984],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1605, 3522],
          [1593, 3516],
          [1582, 3516],
          [1572, 3520],
          [1572, 3526],
          [1542, 3526],
          [1538, 3530],
          [1524, 3530],
          [1514, 3536],
          [1494, 3536],
          [1490, 3540],
          [1470, 3540],
          [1462, 3553],
          [1462, 3563],
          [1459, 3570],
          [1464, 3576],
          [1467, 3590],
          [1476, 3594],
          [1486, 3606],
          [1506, 3606],
          [1512, 3600],
          [1522, 3600],
          [1530, 3592],
          [1538, 3592],
          [1548, 3577],
          [1568, 3577],
          [1577, 3583],
          [1582, 3583],
          [1594, 3587],
          [1598, 3595],
          [1596, 3604],
          [1591, 3606],
          [1591, 3610],
          [1595, 3611],
          [1601, 3608],
          [1605, 3598],
          [1602, 3586],
          [1596, 3580],
          [1580, 3578],
          [1580, 3576],
          [1576, 3573],
          [1576, 3548],
          [1605, 3548],
          [1605, 3522],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1536, 9984],
          [1600, 9984],
          [1600, 9920],
          [1536, 9920],
          [1536, 9984],
        ],
        inMap: false,
      },
    ],
  },
  "Mind over Matter": {
    title: "Mind over Matter",
    file: "Mind_over_Matter",
    polygons: [
      {
        coordinates: [
          [3328, 9664],
          [3328, 9728],
          [3392, 9728],
          [3392, 9664],
          [3328, 9664],
        ],
        inMap: false,
      },
    ],
  },
  "Miracle Dance": {
    title: "Miracle Dance",
    file: "Miracle_Dance",
    polygons: [
      {
        coordinates: [
          [2752, 4800],
          [2752, 4864],
          [2816, 4864],
          [2816, 4800],
          [2752, 4800],
        ],
        inMap: false,
      },
    ],
  },
  Mirage: {
    title: "Mirage",
    file: "Mirage",
    polygons: [
      {
        coordinates: [
          [3264, 9152],
          [3264, 9216],
          [3328, 9216],
          [3328, 9152],
          [3264, 9152],
        ],
        inMap: false,
      },
    ],
  },
  "Miscellania ": {
    title: "Miscellania ",
    file: "Miscellania_(music_track)",
    polygons: [
      {
        coordinates: [
          [2496, 3840],
          [2496, 3904],
          [2560, 3904],
          [2560, 3840],
          [2496, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "The Mollusc Menace": {
    title: "The Mollusc Menace",
    file: "The_Mollusc_Menace",
    polygons: [
      {
        coordinates: [
          [2688, 3264],
          [2688, 3328],
          [2752, 3328],
          [2752, 3264],
          [2688, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Monarch Waltz": {
    title: "Monarch Waltz",
    file: "Monarch_Waltz",
    polygons: [
      {
        coordinates: [
          [2688, 3520],
          [2688, 3584],
          [2752, 3584],
          [2752, 3520],
          [2688, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "Monkey Business": {
    title: "Monkey Business",
    file: "Monkey_Business",
    polygons: [
      {
        coordinates: [
          [2048, 5632],
          [2048, 5696],
          [2176, 5696],
          [2176, 5632],
          [2048, 5632],
        ],
        inMap: false,
      },
    ],
  },
  "Monkey Madness ": {
    title: "Monkey Madness ",
    file: "Monkey_Madness_(music_track)",
    polygons: [
      {
        coordinates: [
          [2752, 2752],
          [2752, 2816],
          [2816, 2816],
          [2816, 2752],
          [2752, 2752],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2048, 5376],
          [2048, 5440],
          [2112, 5440],
          [2112, 5376],
          [2048, 5376],
        ],
        inMap: false,
      },
    ],
  },
  "Monkey Sadness": {
    title: "Monkey Sadness",
    file: "Monkey_Sadness",
    polygons: [
      {
        coordinates: [
          [2176, 5440],
          [2176, 5504],
          [2240, 5504],
          [2240, 5440],
          [2176, 5440],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2880, 9088],
          [2880, 9152],
          [2944, 9152],
          [2944, 9088],
          [2880, 9088],
        ],
        inMap: false,
      },
    ],
  },
  "Monkey Trouble": {
    title: "Monkey Trouble",
    file: "Monkey_Trouble",
    polygons: [
      {
        coordinates: [
          [2304, 9024],
          [2304, 9280],
          [2688, 9280],
          [2688, 9024],
          [2304, 9024],
        ],
        inMap: false,
      },
    ],
  },
  "Monster Melee": {
    title: "Monster Melee",
    file: "Monster_Melee",
    polygons: [
      {
        coordinates: [
          [3136, 9600],
          [3136, 9664],
          [3200, 9664],
          [3200, 9600],
          [3136, 9600],
        ],
        inMap: false,
      },
    ],
  },
  "The Monsters Below": {
    title: "The Monsters Below",
    file: "The_Monsters_Below",
    polygons: [
      {
        coordinates: [
          [2432, 10112],
          [2432, 10176],
          [2496, 10176],
          [2496, 10112],
          [2432, 10112],
        ],
        inMap: false,
      },
    ],
  },
  Moody: {
    title: "Moody",
    file: "Moody",
    polygons: [
      {
        coordinates: [
          [3136, 3904],
          [3136, 3968],
          [3200, 3968],
          [3200, 3904],
          [3136, 3904],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3138, 3640],
          [3138, 3645],
          [3139, 3646],
          [3145, 3646],
          [3146, 3645],
          [3148, 3645],
          [3148, 3647],
          [3156, 3647],
          [3156, 3641],
          [3158, 3641],
          [3158, 3636],
          [3155, 3636],
          [3155, 3634],
          [3158, 3634],
          [3158, 3628],
          [3154, 3628],
          [3153, 3627],
          [3153, 3626],
          [3152, 3625],
          [3152, 3624],
          [3151, 3623],
          [3151, 3620],
          [3144, 3620],
          [3144, 3618],
          [3140, 3618],
          [3139, 3617],
          [3136, 3617],
          [3136, 3584],
          [3200, 3584],
          [3200, 3648],
          [3136, 3648],
          [3136, 3640],
          [3138, 3640],
        ],
        inMap: true,
      },
    ],
  },
  "Mor Ul Rek ": {
    title: "Mor Ul Rek ",
    file: "Mor_Ul_Rek_(music_track)",
    polygons: [
      {
        coordinates: [
          [2560, 5184],
          [2560, 5056],
          [2432, 5056],
          [2432, 5123],
          [2434, 5123],
          [2436, 5121],
          [2437, 5121],
          [2439, 5123],
          [2447, 5123],
          [2448, 5122],
          [2449, 5122],
          [2450, 5121],
          [2452, 5121],
          [2453, 5122],
          [2455, 5122],
          [2457, 5120],
          [2458, 5120],
          [2459, 5121],
          [2460, 5121],
          [2461, 5122],
          [2465, 5122],
          [2465, 5132],
          [2472, 5139],
          [2473, 5139],
          [2474, 5138],
          [2475, 5138],
          [2476, 5139],
          [2478, 5139],
          [2487, 5148],
          [2489, 5148],
          [2493, 5152],
          [2494, 5153],
          [2494, 5156],
          [2495, 5157],
          [2495, 5158],
          [2494, 5159],
          [2494, 5162],
          [2492, 5164],
          [2492, 5171],
          [2493, 5172],
          [2493, 5173],
          [2494, 5174],
          [2494, 5175],
          [2493, 5176],
          [2493, 5179],
          [2492, 5180],
          [2492, 5184],
          [2560, 5184],
        ],
        inMap: false,
      },
    ],
  },
  "Morytania ": {
    title: "Morytania ",
    file: "Morytania_(music_track)",
    polygons: [
      {
        coordinates: [
          [3392, 3456],
          [3392, 3520],
          [3456, 3520],
          [3456, 3456],
          [3392, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Mouse Trap": {
    title: "Mouse Trap",
    file: "Mouse_Trap",
    polygons: [
      {
        coordinates: [
          [2240, 5504],
          [2240, 5568],
          [2304, 5568],
          [2304, 5504],
          [2240, 5504],
        ],
        inMap: false,
      },
    ],
  },
  "Mudskipper Melody": {
    title: "Mudskipper Melody",
    file: "Mudskipper_Melody",
    polygons: [
      {
        coordinates: [
          [2944, 3072],
          [2944, 3136],
          [3008, 3136],
          [3008, 3072],
          [2944, 3072],
        ],
        inMap: true,
      },
    ],
  },
  "Museum Medley": {
    title: "Museum Medley",
    file: "Museum_Medley",
    polygons: [
      {
        coordinates: [
          [3008, 9920],
          [3008, 9984],
          [3072, 9984],
          [3072, 9920],
          [3008, 9920],
        ],
        inMap: false,
      },
    ],
  },
  "Mutant Medley": {
    title: "Mutant Medley",
    file: "Mutant_Medley",
    polygons: [
      {
        coordinates: [
          [3008, 4352],
          [3008, 4416],
          [3072, 4416],
          [3072, 4352],
          [3008, 4352],
        ],
        inMap: false,
      },
    ],
  },
  "My Arm's Journey": {
    title: "My Arm's Journey",
    file: "My_Arm%27s_Journey",
    polygons: [
      {
        coordinates: [
          [1856, 4864],
          [1856, 4928],
          [1920, 4928],
          [1920, 4864],
          [1856, 4864],
        ],
        inMap: false,
      },
    ],
  },
  "Mystics of Nature": {
    title: "Mystics of Nature",
    file: "Mystics_of_Nature",
    polygons: [
      {
        coordinates: [
          [3008, 6080],
          [3008, 6144],
          [3072, 6144],
          [3072, 6080],
          [3008, 6080],
        ],
        inMap: false,
      },
    ],
  },
  Mythical: {
    title: "Mythical",
    file: "Mythical",
    polygons: [
      {
        coordinates: [
          [1901, 9005],
          [1901, 9007],
          [1902, 9007],
          [1902, 9005],
          [1901, 9005],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2452, 2862],
          [2452, 2880],
          [2432, 2880],
          [2432, 2816],
          [2473, 2816],
          [2473, 2862],
          [2452, 2862],
        ],
        inMap: true,
      },
    ],
  },
  "Narnode's Theme": {
    title: "Narnode's Theme",
    file: "Narnode%27s_Theme",
    polygons: [
      {
        coordinates: [
          [2432, 9856],
          [2432, 9920],
          [2496, 9920],
          [2496, 9856],
          [2432, 9856],
        ],
        inMap: false,
      },
    ],
  },
  Natural: {
    title: "Natural",
    file: "Natural",
    polygons: [
      {
        coordinates: [
          [3392, 3328],
          [3392, 3392],
          [3456, 3392],
          [3456, 3328],
          [3392, 3328],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2272, 5024],
          [2272, 5056],
          [2304, 5056],
          [2304, 5024],
          [2272, 5024],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2336, 5024],
          [2336, 5056],
          [2368, 5056],
          [2368, 5024],
          [2336, 5024],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2016, 5024],
          [2016, 5056],
          [2048, 5056],
          [2048, 5024],
          [2016, 5024],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2208, 5024],
          [2208, 5056],
          [2240, 5056],
          [2240, 5024],
          [2208, 5024],
        ],
        inMap: false,
      },
    ],
  },
  "The Navigator": {
    title: "The Navigator",
    file: "The_Navigator",
    polygons: [
      {
        coordinates: [
          [2624, 9984],
          [2624, 10048],
          [2688, 10048],
          [2688, 9984],
          [2624, 9984],
        ],
        inMap: false,
      },
    ],
  },
  "Nether Realm": {
    title: "Nether Realm",
    file: "Nether_Realm",
    polygons: [
      {
        coordinates: [
          [2624, 9408],
          [2624, 9472],
          [2688, 9472],
          [2688, 9408],
          [2624, 9408],
        ],
        inMap: false,
      },
    ],
  },
  Neverland: {
    title: "Neverland",
    file: "Neverland",
    polygons: [
      {
        coordinates: [
          [2432, 3328],
          [2432, 3392],
          [2496, 3392],
          [2496, 3336],
          [2463, 3336],
          [2463, 3328],
          [2432, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Newbie Farming": {
    title: "Newbie Farming",
    file: "Newbie_Farming",
    polygons: [
      {
        coordinates: [
          [1280, 3712],
          [1280, 3690],
          [1272, 3682],
          [1272, 3672],
          [1250, 3672],
          [1243, 3665],
          [1184, 3665],
          [1184, 3712],
          [1280, 3712],
        ],
        inMap: true,
      },
    ],
  },
  "Newbie Melody": {
    title: "Newbie Melody",
    file: "Newbie_Melody",
    polygons: [
      {
        coordinates: [
          [3008, 3136],
          [3200, 3136],
          [3200, 3072],
          [3136, 3072],
          [3136, 3008],
          [3008, 3008],
          [3008, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Night of the Vampyre": {
    title: "Night of the Vampyre",
    file: "Night_of_the_Vampyre",
    polygons: [
      {
        coordinates: [
          [3606, 3311],
          [3591, 3311],
          [3591, 3328],
          [3520, 3328],
          [3520, 3392],
          [3584, 3392],
          [3584, 3368],
          [3561, 3368],
          [3561, 3349],
          [3584, 3349],
          [3584, 3333],
          [3594, 3333],
          [3594, 3314],
          [3606, 3314],
          [3606, 3311],
        ],
        inMap: true,
      },
    ],
  },
  Nightfall: {
    title: "Nightfall",
    file: "Nightfall",
    polygons: [
      {
        coordinates: [
          [2944, 3264],
          [2944, 3328],
          [3008, 3328],
          [3008, 3264],
          [2944, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "The Nightmare Continues": {
    title: "The Nightmare Continues",
    file: "The_Nightmare_Continues",
    polygons: [
      {
        coordinates: [
          [3264, 4416],
          [3264, 4480],
          [3328, 4480],
          [3328, 4416],
          [3264, 4416],
        ],
        inMap: false,
      },
    ],
  },
  "No Pasaran": {
    title: "No Pasaran",
    file: "No_Pasaran",
    polygons: [
      {
        coordinates: [
          [2432, 6080],
          [2432, 6208],
          [2496, 6208],
          [2496, 6080],
          [2432, 6080],
        ],
        inMap: false,
      },
    ],
  },
  "No Way Out": {
    title: "No Way Out",
    file: "No_Way_Out",
    polygons: [
      {
        coordinates: [
          [3008, 5184],
          [3008, 5216],
          [3040, 5216],
          [3040, 5184],
          [3008, 5184],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3264, 9792],
          [3264, 9824],
          [3296, 9824],
          [3296, 9792],
          [3264, 9792],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3072, 5184],
          [3072, 5216],
          [3104, 5216],
          [3104, 5184],
          [3072, 5184],
        ],
        inMap: false,
      },
    ],
  },
  "Nomad ": {
    title: "Nomad ",
    file: "Nomad_(music_track)",
    polygons: [
      {
        coordinates: [
          [3126, 2828],
          [3136, 2818],
          [3149, 2818],
          [3151, 2812],
          [3158, 2812],
          [3160, 2817],
          [3161, 2817],
          [3162, 2816],
          [3164, 2816],
          [3165, 2817],
          [3173, 2817],
          [3175, 2819],
          [3176, 2819],
          [3176, 2820],
          [3177, 2821],
          [3179, 2821],
          [3180, 2822],
          [3180, 2822],
          [3182, 2822],
          [3184, 2824],
          [3184, 2826],
          [3186, 2826],
          [3188, 2828],
          [3188, 2831],
          [3189, 2832],
          [3189, 2835],
          [3190, 2835],
          [3190, 2837],
          [3193, 2837],
          [3193, 2839],
          [3195, 2841],
          [3195, 2845],
          [3193, 2847],
          [3193, 2851],
          [3190, 2851],
          [3190, 2852],
          [3189, 2853],
          [3188, 2853],
          [3186, 2855],
          [3186, 2857],
          [3185, 2858],
          [3183, 2858],
          [3181, 2860],
          [3180, 2860],
          [3179, 2861],
          [3177, 2861],
          [3176, 2862],
          [3194, 2871],
          [3194, 2875],
          [3158, 2875],
          [3149, 2868],
          [3149, 2864],
          [3126, 2864],
          [3126, 2828],
        ],
        inMap: true,
      },
    ],
  },
  "Norse Code": {
    title: "Norse Code",
    file: "Norse_Code",
    polygons: [
      {
        coordinates: [
          [2368, 3776],
          [2368, 3840],
          [2432, 3840],
          [2432, 3776],
          [2368, 3776],
        ],
        inMap: true,
      },
    ],
  },
  "Not a Moment of Relief": {
    title: "Not a Moment of Relief",
    file: "Not_a_Moment_of_Relief",
    polygons: [
      {
        coordinates: [
          [1603, 3876],
          [1600, 3876],
          [1600, 3891],
          [1620, 3891],
          [1633, 3904],
          [1728, 3904],
          [1728, 3908],
          [1773, 3908],
          [1773, 3887],
          [1792, 3868],
          [1792, 3802],
          [1740, 3802],
          [1728, 3814],
          [1701, 3824],
          [1701, 3844],
          [1700, 3843],
          [1699, 3843],
          [1698, 3842],
          [1690, 3842],
          [1681, 3851],
          [1680, 3851],
          [1678, 3853],
          [1670, 3853],
          [1667, 3856],
          [1624, 3856],
          [1617, 3849],
          [1614, 3852],
          [1606, 3852],
          [1603, 3855],
          [1603, 3876],
        ],
        inMap: true,
      },
    ],
  },
  "Null and Void": {
    title: "Null and Void",
    file: "Null_and_Void",
    polygons: [
      {
        coordinates: [
          [2624, 2624],
          [2624, 2688],
          [2688, 2688],
          [2688, 2624],
          [2624, 2624],
        ],
        inMap: true,
      },
    ],
  },
  "Ogre the Top": {
    title: "Ogre the Top",
    file: "Ogre_the_Top",
    polygons: [
      {
        coordinates: [
          [2368, 10240],
          [2368, 10304],
          [2432, 10304],
          [2432, 10240],
          [2368, 10240],
        ],
        inMap: false,
      },
    ],
  },
  "Oh Rats!": {
    title: "Oh Rats!",
    file: "Oh_Rats!",
    polygons: [
      {
        coordinates: [
          [3289, 9853],
          [3289, 9879],
          [3311, 9879],
          [3311, 9853],
          [3289, 9853],
        ],
        inMap: false,
      },
    ],
  },
  "On Thin Ice": {
    title: "On Thin Ice",
    file: "On_Thin_Ice",
    polygons: [
      {
        coordinates: [
          [2260, 4053],
          [2260, 4077],
          [2285, 4077],
          [2285, 4053],
          [2260, 4053],
        ],
        inMap: true,
      },
    ],
  },
  "On the Shore": {
    title: "On the Shore",
    file: "On_the_Shore",
    polygons: [
      {
        coordinates: [
          [2496, 2816],
          [2496, 2880],
          [2624, 2880],
          [2624, 2816],
          [2496, 2816],
        ],
        inMap: true,
      },
    ],
  },
  "On the Wing": {
    title: "On the Wing",
    file: "On_the_Wing",
    polygons: [
      {
        coordinates: [
          [2368, 3520],
          [2368, 3648],
          [2432, 3648],
          [2432, 3584],
          [2368, 3520],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3008, 4480],
          [3008, 4544],
          [3072, 4544],
          [3072, 4480],
          [3008, 4480],
        ],
        inMap: false,
      },
    ],
  },
  Oriental: {
    title: "Oriental",
    file: "Oriental",
    polygons: [
      {
        coordinates: [
          [2880, 9344],
          [2880, 9408],
          [2944, 9408],
          [2944, 9344],
          [2880, 9344],
        ],
        inMap: false,
      },
    ],
  },
  "The Other Side": {
    title: "The Other Side",
    file: "The_Other_Side",
    polygons: [
      {
        coordinates: [
          [3648, 3456],
          [3648, 3584],
          [3712, 3584],
          [3712, 3456],
          [3648, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Out at the Mines": {
    title: "Out at the Mines",
    file: "Out_at_the_Mines",
    polygons: [
      {
        coordinates: [
          [1420, 3804],
          [1420, 3904],
          [1528, 3904],
          [1528, 3840],
          [1470, 3840],
          [1470, 3845],
          [1456, 3845],
          [1456, 3836],
          [1453, 3836],
          [1453, 3831],
          [1448, 3831],
          [1448, 3826],
          [1446, 3826],
          [1446, 3823],
          [1445, 3823],
          [1445, 3818],
          [1443, 3818],
          [1443, 3812],
          [1440, 3812],
          [1440, 3807],
          [1431, 3807],
          [1431, 3804],
          [1420, 3804],
        ],
        inMap: true,
      },
    ],
  },
  "Out of the Deep": {
    title: "Out of the Deep",
    file: "Out_of_the_Deep",
    polygons: [
      {
        coordinates: [
          [2496, 4608],
          [2496, 4672],
          [2560, 4672],
          [2560, 4608],
          [2496, 4608],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2496, 9984],
          [2496, 10048],
          [2560, 10048],
          [2560, 9984],
          [2496, 9984],
        ],
        inMap: false,
      },
    ],
  },
  "Over to Nardah": {
    title: "Over to Nardah",
    file: "Over_to_Nardah",
    polygons: [
      {
        coordinates: [
          [3520, 2944],
          [3392, 2944],
          [3392, 2832],
          [3400, 2840],
          [3404, 2848],
          [3413, 2861],
          [3520, 2861],
          [3520, 2944],
        ],
        inMap: true,
      },
    ],
  },
  Overpass: {
    title: "Overpass",
    file: "Overpass",
    polygons: [
      {
        coordinates: [
          [2304, 3264],
          [2304, 3328],
          [2432, 3328],
          [2432, 3264],
          [2304, 3264],
        ],
        inMap: true,
      },
    ],
  },
  Overture: {
    title: "Overture",
    file: "Overture",
    polygons: [
      {
        coordinates: [
          [2688, 3456],
          [2688, 3520],
          [2752, 3520],
          [2752, 3456],
          [2688, 3456],
        ],
        inMap: true,
      },
    ],
  },
  Parade: {
    title: "Parade",
    file: "Parade",
    polygons: [
      {
        coordinates: [
          [3328, 3456],
          [3328, 3520],
          [3392, 3520],
          [3392, 3456],
          [3328, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "The Part Where You Die": {
    title: "The Part Where You Die",
    file: "The_Part_Where_You_Die",
    polygons: [
      {
        coordinates: [
          [3072, 5952],
          [3072, 5925],
          [3008, 5925],
          [3008, 5952],
          [3072, 5952],
        ],
        inMap: false,
      },
    ],
  },
  "Path of Peril": {
    title: "Path of Peril",
    file: "Path_of_Peril",
    polygons: [
      {
        coordinates: [
          [2624, 5056],
          [2624, 5120],
          [2752, 5120],
          [2752, 5056],
          [2624, 5056],
        ],
        inMap: false,
      },
    ],
  },
  Pathways: {
    title: "Pathways",
    file: "Pathways",
    polygons: [
      {
        coordinates: [
          [2688, 9536],
          [2688, 9600],
          [2752, 9600],
          [2752, 9536],
          [2688, 9536],
        ],
        inMap: false,
      },
    ],
  },
  "Pest Control ": {
    title: "Pest Control ",
    file: "Pest_Control_(music_track)",
    polygons: [
      {
        coordinates: [
          [1600, 5504],
          [1600, 5632],
          [1728, 5632],
          [1728, 5504],
          [1600, 5504],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2624, 2560],
          [2624, 2624],
          [2688, 2624],
          [2688, 2560],
          [2624, 2560],
        ],
        inMap: true,
      },
    ],
  },
  "Pharaoh's Tomb": {
    title: "Pharaoh's Tomb",
    file: "Pharaoh%27s_Tomb",
    polygons: [
      {
        coordinates: [
          [3328, 2816],
          [3328, 2880],
          [3392, 2880],
          [3392, 2816],
          [3328, 2816],
        ],
        inMap: true,
      },
    ],
  },
  Phasmatys: {
    title: "Phasmatys",
    file: "Phasmatys",
    polygons: [
      {
        coordinates: [
          [3648, 9856],
          [3648, 9920],
          [3712, 9920],
          [3712, 9856],
          [3648, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "Pheasant Peasant": {
    title: "Pheasant Peasant",
    file: "Pheasant_Peasant",
    polygons: [
      {
        coordinates: [
          [2560, 4736],
          [2560, 4800],
          [2624, 4800],
          [2624, 4736],
          [2560, 4736],
        ],
        inMap: false,
      },
    ],
  },
  "Pick &amp; Shovel": {
    title: "Pick &amp; Shovel",
    file: "Pick_%26_Shovel",
    polygons: [
      {
        coordinates: [
          [3712, 5632],
          [3712, 5696],
          [3776, 5696],
          [3776, 5632],
          [3712, 5632],
        ],
        inMap: false,
      },
    ],
  },
  "Pinball Wizard": {
    title: "Pinball Wizard",
    file: "Pinball_Wizard",
    polygons: [
      {
        coordinates: [
          [1952, 5024],
          [1952, 5056],
          [1984, 5056],
          [1984, 5024],
          [1952, 5024],
        ],
        inMap: false,
      },
    ],
  },
  "Pirates of Penance": {
    title: "Pirates of Penance",
    file: "Pirates_of_Penance",
    polygons: [
      {
        coordinates: [
          [1856, 5376],
          [1856, 5440],
          [1920, 5440],
          [1920, 5376],
          [1856, 5376],
        ],
        inMap: false,
      },
    ],
  },
  "Pirates of Peril": {
    title: "Pirates of Peril",
    file: "Pirates_of_Peril",
    polygons: [
      {
        coordinates: [
          [3008, 3904],
          [3008, 3968],
          [3072, 3968],
          [3072, 3904],
          [3008, 3904],
        ],
        inMap: true,
      },
    ],
  },
  "Poles Apart": {
    title: "Poles Apart",
    file: "Poles_Apart",
    polygons: [
      {
        coordinates: [
          [2688, 10176],
          [2688, 10240],
          [2752, 10240],
          [2752, 10176],
          [2688, 10176],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2688, 3776],
          [2688, 3840],
          [2752, 3840],
          [2752, 3776],
          [2688, 3776],
        ],
        inMap: true,
      },
    ],
  },
  "The Power of Tears": {
    title: "The Power of Tears",
    file: "The_Power_of_Tears",
    polygons: [
      {
        coordinates: [
          [3254, 9472],
          [3254, 9536],
          [3264, 9536],
          [3264, 9472],
          [3254, 9472],
        ],
        inMap: false,
      },
    ],
  },
  "Power of the Shadow Realm": {
    title: "Power of the Shadow Realm",
    file: "Power_of_the_Shadow_Realm",
    polygons: [
      {
        coordinates: [
          [3264, 4288],
          [3264, 4352],
          [3328, 4352],
          [3328, 4288],
          [3264, 4288],
        ],
        inMap: false,
      },
    ],
  },
  "Predator Xarpus": {
    title: "Predator Xarpus",
    file: "Predator_Xarpus",
    polygons: [
      {
        coordinates: [
          [3136, 4352],
          [3136, 4416],
          [3200, 4416],
          [3200, 4352],
          [3136, 4352],
        ],
        inMap: false,
      },
    ],
  },
  Preservation: {
    title: "Preservation",
    file: "Preservation",
    polygons: [
      {
        coordinates: [
          [3648, 3904],
          [3840, 3904],
          [3840, 3840],
          [3776, 3840],
          [3776, 3776],
          [3648, 3776],
          [3648, 3904],
        ],
        inMap: true,
      },
    ],
  },
  Preserved: {
    title: "Preserved",
    file: "Preserved",
    polygons: [
      {
        coordinates: [
          [3520, 3968],
          [3520, 4032],
          [3648, 4032],
          [3648, 3968],
          [3520, 3968],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3776, 3840],
          [3840, 3840],
          [3840, 3712],
          [3648, 3712],
          [3648, 3776],
          [3776, 3776],
          [3776, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "Prime Time": {
    title: "Prime Time",
    file: "Prime_Time",
    polygons: [
      {
        coordinates: [
          [1920, 5120],
          [1920, 5184],
          [1984, 5184],
          [1984, 5120],
          [1920, 5120],
        ],
        inMap: false,
      },
    ],
  },
  Principality: {
    title: "Principality",
    file: "Principality",
    polygons: [
      {
        coordinates: [
          [2880, 3520],
          [2880, 3584],
          [2944, 3584],
          [2944, 3520],
          [2880, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "Quest ": {
    title: "Quest ",
    file: "Quest_(music_track)",
    polygons: [
      {
        coordinates: [
          [2560, 4800],
          [2560, 4864],
          [2624, 4864],
          [2624, 4800],
          [2560, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "The Quizmaster": {
    title: "The Quizmaster",
    file: "The_Quizmaster",
    polygons: [
      {
        coordinates: [
          [1920, 4736],
          [1920, 4800],
          [1984, 4800],
          [1984, 4736],
          [1920, 4736],
        ],
        inMap: false,
      },
    ],
  },
  "Race Against the Clock": {
    title: "Race Against the Clock",
    file: "Race_Against_the_Clock",
    polygons: [
      {
        coordinates: [
          [2944, 5824],
          [2944, 5888],
          [3008, 5888],
          [3008, 5824],
          [2944, 5824],
        ],
        inMap: false,
      },
    ],
  },
  "Rat Hunt": {
    title: "Rat Hunt",
    file: "Rat_Hunt",
    polygons: [
      {
        coordinates: [
          [2816, 5056],
          [2816, 5120],
          [2880, 5120],
          [2880, 5056],
          [2816, 5056],
        ],
        inMap: false,
      },
    ],
  },
  "Rat a Tat Tat": {
    title: "Rat a Tat Tat",
    file: "Rat_a_Tat_Tat",
    polygons: [
      {
        coordinates: [
          [2880, 5056],
          [2880, 5120],
          [2944, 5120],
          [2944, 5056],
          [2880, 5056],
        ],
        inMap: false,
      },
    ],
  },
  "Ready for Battle": {
    title: "Ready for Battle",
    file: "Ready_for_Battle",
    polygons: [
      {
        coordinates: [
          [2368, 9472],
          [2368, 9536],
          [2432, 9536],
          [2432, 9472],
          [2368, 9472],
        ],
        inMap: false,
      },
    ],
  },
  Regal: {
    title: "Regal",
    file: "Regal",
    polygons: [
      {
        coordinates: [
          [3264, 3904],
          [3264, 3968],
          [3328, 3968],
          [3328, 3904],
          [3264, 3904],
        ],
        inMap: true,
      },
    ],
  },
  "Regal Pomp": {
    title: "Regal Pomp",
    file: "Regal_Pomp",
    polygons: [
      {
        coordinates: [
          [2048, 6208],
          [2112, 6208],
          [2112, 6144],
          [2048, 6144],
          [2048, 6208],
        ],
        inMap: false,
      },
    ],
  },
  Reggae: {
    title: "Reggae",
    file: "Reggae",
    polygons: [
      {
        coordinates: [
          [2880, 2880],
          [2880, 2944],
          [2944, 2944],
          [2944, 2880],
          [2880, 2880],
        ],
        inMap: true,
      },
    ],
  },
  "Reggae 2": {
    title: "Reggae 2",
    file: "Reggae_2",
    polygons: [
      {
        coordinates: [
          [2880, 3008],
          [2880, 3072],
          [2944, 3072],
          [2944, 3008],
          [2880, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "Relics ": {
    title: "Relics ",
    file: "Relics_(music_track)",
    polygons: [
      {
        coordinates: [
          [3520, 10368],
          [3520, 10496],
          [3584, 10496],
          [3584, 10368],
          [3520, 10368],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2816, 9664],
          [2816, 9728],
          [2880, 9728],
          [2880, 9664],
          [2816, 9664],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2240, 10432],
          [2240, 10496],
          [2304, 10496],
          [2304, 10432],
          [2240, 10432],
        ],
        inMap: false,
      },
    ],
  },
  "Rellekka ": {
    title: "Rellekka ",
    file: "Rellekka_(music_track)",
    polygons: [
      {
        coordinates: [
          [2560, 3712],
          [2624, 3712],
          [2624, 3776],
          [2688, 3776],
          [2688, 3648],
          [2560, 3648],
          [2560, 3712],
        ],
        inMap: true,
      },
    ],
  },
  "Rest in Peace": {
    title: "Rest in Peace",
    file: "Rest_in_Peace",
    polygons: [
      {
        coordinates: [
          [3136, 5696],
          [3136, 5760],
          [3200, 5760],
          [3200, 5696],
          [3136, 5696],
        ],
        inMap: false,
      },
    ],
  },
  "Revenants ": {
    title: "Revenants ",
    file: "Revenants_(music_track)",
    polygons: [
      {
        coordinates: [
          [3136, 10048],
          [3136, 10240],
          [3264, 10240],
          [3264, 10048],
          [3136, 10048],
        ],
        inMap: false,
      },
    ],
  },
  "Right on Track": {
    title: "Right on Track",
    file: "Right_on_Track",
    polygons: [
      {
        coordinates: [
          [1856, 4928],
          [1856, 4992],
          [1920, 4992],
          [1920, 4928],
          [1856, 4928],
        ],
        inMap: false,
      },
    ],
  },
  Righteousness: {
    title: "Righteousness",
    file: "Righteousness",
    polygons: [
      {
        coordinates: [
          [2432, 4800],
          [2432, 4864],
          [2496, 4864],
          [2496, 4800],
          [2432, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Rising Damp": {
    title: "Rising Damp",
    file: "Rising_Damp",
    polygons: [
      {
        coordinates: [
          [2688, 10112],
          [2688, 10176],
          [2752, 10176],
          [2752, 10112],
          [2688, 10112],
        ],
        inMap: false,
      },
    ],
  },
  Riverside: {
    title: "Riverside",
    file: "Riverside",
    polygons: [
      {
        coordinates: [
          [2112, 3008],
          [2112, 3136],
          [2176, 3136],
          [2176, 3008],
          [2112, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "The Rogues' Den": {
    title: "The Rogues' Den",
    file: "The_Rogues%27_Den",
    polygons: [
      {
        coordinates: [
          [2944, 5120],
          [3008, 5120],
          [3008, 5056],
          [3072, 5056],
          [3072, 4928],
          [3008, 4928],
          [3008, 4992],
          [2944, 4992],
          [2944, 5120],
        ],
        inMap: false,
      },
    ],
  },
  "Roll the Bones": {
    title: "Roll the Bones",
    file: "Roll_the_Bones",
    polygons: [
      {
        coordinates: [
          [3328, 9600],
          [3328, 9664],
          [3392, 9664],
          [3392, 9600],
          [3328, 9600],
        ],
        inMap: false,
      },
    ],
  },
  "Romancing the Crone": {
    title: "Romancing the Crone",
    file: "Romancing_the_Crone",
    polygons: [
      {
        coordinates: [
          [2752, 3840],
          [2752, 3904],
          [2816, 3904],
          [2816, 3840],
          [2752, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "Romper Chomper": {
    title: "Romper Chomper",
    file: "Romper_Chomper",
    polygons: [
      {
        coordinates: [
          [2304, 3008],
          [2304, 3072],
          [2432, 3072],
          [2432, 3008],
          [2304, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "Roots and Flutes": {
    title: "Roots and Flutes",
    file: "Roots_and_Flutes",
    polygons: [
      {
        coordinates: [
          [3200, 9920],
          [3200, 9984],
          [3264, 9984],
          [3264, 9920],
          [3200, 9920],
        ],
        inMap: false,
      },
    ],
  },
  "Rose ": {
    title: "Rose ",
    file: "Rose_(music_track)",
    polygons: [
      {
        coordinates: [
          [1152, 10304],
          [1216, 10304],
          [1216, 10240],
          [1152, 10240],
          [1152, 10304],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1266, 3772],
          [1266, 3762],
          [1267, 3762],
          [1267, 3761],
          [1268, 3761],
          [1268, 3760],
          [1269, 3760],
          [1269, 3759],
          [1270, 3759],
          [1270, 3758],
          [1271, 3758],
          [1271, 3757],
          [1272, 3757],
          [1272, 3756],
          [1273, 3756],
          [1273, 3755],
          [1289, 3755],
          [1289, 3756],
          [1290, 3756],
          [1290, 3757],
          [1291, 3757],
          [1291, 3758],
          [1292, 3758],
          [1292, 3772],
          [1266, 3772],
        ],
        inMap: true,
      },
    ],
  },
  Royale: {
    title: "Royale",
    file: "Royale",
    polygons: [
      {
        coordinates: [
          [2880, 9664],
          [2880, 9728],
          [2944, 9728],
          [2944, 9664],
          [2880, 9664],
        ],
        inMap: false,
      },
    ],
  },
  "Rugged Terrain": {
    title: "Rugged Terrain",
    file: "Rugged_Terrain",
    polygons: [
      {
        coordinates: [
          [1344, 3757],
          [1344, 3798],
          [1360, 3798],
          [1360, 3830],
          [1376, 3830],
          [1376, 3822],
          [1377, 3821],
          [1377, 3820],
          [1379, 3818],
          [1381, 3818],
          [1382, 3817],
          [1383, 3817],
          [1384, 3818],
          [1386, 3818],
          [1388, 3820],
          [1388, 3821],
          [1389, 3822],
          [1389, 3830],
          [1420, 3830],
          [1420, 3793],
          [1433, 3780],
          [1433, 3767],
          [1434, 3767],
          [1434, 3765],
          [1431, 3762],
          [1431, 3758],
          [1438, 3758],
          [1438, 3754],
          [1430, 3754],
          [1430, 3740],
          [1406, 3740],
          [1406, 3743],
          [1407, 3743],
          [1407, 3746],
          [1395, 3758],
          [1395, 3771],
          [1365, 3771],
          [1365, 3757],
          [1344, 3757],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1227, 3477],
          [1241, 3491],
          [1245, 3487],
          [1255, 3487],
          [1255, 3488],
          [1258, 3488],
          [1258, 3489],
          [1260, 3489],
          [1260, 3490],
          [1267, 3490],
          [1268, 3489],
          [1285, 3489],
          [1285, 3496],
          [1289, 3500],
          [1294, 3500],
          [1303, 3509],
          [1303, 3516],
          [1365, 3516],
          [1365, 3499],
          [1382, 3482],
          [1382, 3456],
          [1227, 3456],
          [1227, 3477],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1546, 3727],
          [1546, 3728],
          [1547, 3728],
          [1547, 3729],
          [1548, 3729],
          [1548, 3730],
          [1549, 3730],
          [1549, 3743],
          [1569, 3743],
          [1584, 3750],
          [1584, 3770],
          [1598, 3774],
          [1598, 3772],
          [1600, 3770],
          [1605, 3770],
          [1610, 3765],
          [1612, 3765],
          [1614, 3763],
          [1614, 3760],
          [1618, 3756],
          [1618, 3732],
          [1621, 3729],
          [1621, 3726],
          [1625, 3722],
          [1625, 3717],
          [1624, 3717],
          [1624, 3716],
          [1621, 3716],
          [1621, 3715],
          [1619, 3715],
          [1619, 3714],
          [1617, 3714],
          [1617, 3713],
          [1616, 3713],
          [1616, 3712],
          [1615, 3712],
          [1615, 3711],
          [1614, 3711],
          [1614, 3710],
          [1613, 3710],
          [1613, 3709],
          [1612, 3709],
          [1612, 3708],
          [1611, 3708],
          [1611, 3707],
          [1610, 3707],
          [1610, 3706],
          [1609, 3706],
          [1609, 3705],
          [1608, 3705],
          [1608, 3704],
          [1607, 3704],
          [1607, 3703],
          [1606, 3703],
          [1606, 3702],
          [1605, 3702],
          [1600, 3697],
          [1590, 3697],
          [1585, 3692],
          [1585, 3687],
          [1587, 3685],
          [1587, 3658],
          [1576, 3647],
          [1564, 3647],
          [1559, 3652],
          [1543, 3652],
          [1543, 3658],
          [1542, 3659],
          [1540, 3659],
          [1539, 3660],
          [1539, 3662],
          [1540, 3662],
          [1540, 3671],
          [1537, 3674],
          [1537, 3677],
          [1539, 3679],
          [1537, 3681],
          [1537, 3683],
          [1539, 3685],
          [1539, 3688],
          [1542, 3691],
          [1542, 3698],
          [1539, 3701],
          [1539, 3704],
          [1537, 3706],
          [1537, 3708],
          [1539, 3710],
          [1539, 3711],
          [1540, 3712],
          [1540, 3713],
          [1546, 3727],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1728, 10048],
          [1728, 10112],
          [1792, 10112],
          [1792, 10048],
          [1728, 10048],
        ],
        inMap: false,
      },
    ],
  },
  "The Ruins of Camdozaal": {
    title: "The Ruins of Camdozaal",
    file: "The_Ruins_of_Camdozaal",
    polygons: [
      {
        coordinates: [
          [2880, 5888],
          [2944, 5888],
          [2944, 5824],
          [3072, 5824],
          [3072, 5760],
          [2880, 5760],
          [2880, 5888],
        ],
        inMap: false,
      },
    ],
  },
  "Ruins of Isolation": {
    title: "Ruins of Isolation",
    file: "Ruins_of_Isolation",
    polygons: [
      {
        coordinates: [
          [3456, 2752],
          [3456, 2861],
          [3413, 2861],
          [3404, 2848],
          [3400, 2840],
          [3392, 2832],
          [3392, 2752],
          [3398, 2752],
          [3456, 2752],
        ],
        inMap: true,
      },
    ],
  },
  "Rune Essence ": {
    title: "Rune Essence ",
    file: "Rune_Essence_(music_track)",
    polygons: [
      {
        coordinates: [
          [2880, 4800],
          [2880, 4864],
          [2944, 4864],
          [2944, 4800],
          [2880, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Sad Meadow": {
    title: "Sad Meadow",
    file: "Sad_Meadow",
    polygons: [
      {
        coordinates: [
          [2528, 9728],
          [2528, 9760],
          [2560, 9760],
          [2560, 9728],
          [2528, 9728],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2432, 3324],
          [2463, 3324],
          [2463, 3336],
          [2558, 3336],
          [2558, 3264],
          [2510, 3264],
          [2510, 3280],
          [2460, 3280],
          [2460, 3306],
          [2432, 3306],
          [2432, 3324],
        ],
        inMap: true,
      },
    ],
  },
  "Safety in Numbers": {
    title: "Safety in Numbers",
    file: "Safety_in_Numbers",
    polygons: [
      {
        coordinates: [
          [3136, 9664],
          [3136, 9728],
          [3200, 9728],
          [3200, 9664],
          [3136, 9664],
        ],
        inMap: false,
      },
    ],
  },
  Saga: {
    title: "Saga",
    file: "Saga",
    polygons: [
      {
        coordinates: [
          [2560, 3584],
          [2560, 3648],
          [2688, 3648],
          [2688, 3584],
          [2560, 3584],
        ],
        inMap: true,
      },
    ],
  },
  "Sarachnis ": {
    title: "Sarachnis ",
    file: "Sarachnis_(music_track)",
    polygons: [
      {
        coordinates: [
          [1792, 9856],
          [1792, 9912],
          [1856, 9912],
          [1856, 9856],
          [1792, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "Sarcophagus ": {
    title: "Sarcophagus ",
    file: "Sarcophagus_(music_track)",
    polygons: [
      {
        coordinates: [
          [2752, 4928],
          [2752, 4992],
          [2944, 4992],
          [2944, 4928],
          [2752, 4928],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3200, 9280],
          [3200, 9344],
          [3264, 9344],
          [3264, 9280],
          [3200, 9280],
        ],
        inMap: false,
      },
    ],
  },
  "Sarim's Vermin": {
    title: "Sarim's Vermin",
    file: "Sarim%27s_Vermin",
    polygons: [
      {
        coordinates: [
          [2944, 9600],
          [2944, 9664],
          [3008, 9664],
          [3008, 9600],
          [2944, 9600],
        ],
        inMap: false,
      },
    ],
  },
  "Scape Cave": {
    title: "Scape Cave",
    file: "Scape_Cave",
    polygons: [
      {
        coordinates: [
          [3072, 9472],
          [3072, 9536],
          [3136, 9536],
          [3136, 9472],
          [3072, 9472],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1536, 9856],
          [1536, 9920],
          [1600, 9920],
          [1600, 9856],
          [1536, 9856],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3136, 9856],
          [3136, 9920],
          [3287, 9920],
          [3287, 9856],
          [3136, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "Scape Main": {
    title: "Scape Main",
    file: "Scape_Main",
    polygons: [
      {
        coordinates: [
          [1600, 5632],
          [1600, 5760],
          [1728, 5760],
          [1728, 5632],
          [1600, 5632],
        ],
        inMap: false,
      },
    ],
  },
  "Scape Sad": {
    title: "Scape Sad",
    file: "Scape_Sad",
    polygons: [
      {
        coordinates: [
          [3264, 3840],
          [3264, 3904],
          [3392, 3904],
          [3392, 3840],
          [3264, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "Scape Soft": {
    title: "Scape Soft",
    file: "Scape_Soft",
    polygons: [
      {
        coordinates: [
          [2944, 3392],
          [2944, 3456],
          [3008, 3456],
          [3008, 3392],
          [2944, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Scape Wild": {
    title: "Scape Wild",
    file: "Scape_Wild",
    polygons: [
      {
        coordinates: [
          [3200, 3648],
          [3200, 3712],
          [3264, 3712],
          [3264, 3648],
          [3200, 3648],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3136, 3840],
          [3136, 3904],
          [3264, 3904],
          [3264, 3840],
          [3136, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "Scar Tissue": {
    title: "Scar Tissue",
    file: "Scar_Tissue",
    polygons: [
      {
        coordinates: [
          [1728, 6464],
          [2240, 6464],
          [2240, 6400],
          [2112, 6400],
          [2112, 6336],
          [2048, 6336],
          [2048, 6400],
          [1728, 6400],
          [1728, 6464],
        ],
        inMap: false,
      },
    ],
  },
  Scarab: {
    title: "Scarab",
    file: "Scarab",
    polygons: [
      {
        coordinates: [
          [3136, 2880],
          [3136, 2944],
          [3328, 2944],
          [3328, 2880],
          [3200, 2880],
          [3200, 2752],
          [3136, 2752],
          [3136, 2818],
          [3149, 2818],
          [3151, 2812],
          [3158, 2812],
          [3160, 2817],
          [3161, 2817],
          [3162, 2816],
          [3164, 2816],
          [3165, 2817],
          [3173, 2817],
          [3175, 2819],
          [3176, 2819],
          [3176, 2820],
          [3177, 2821],
          [3179, 2821],
          [3180, 2822],
          [3180, 2822],
          [3182, 2822],
          [3184, 2824],
          [3184, 2826],
          [3186, 2826],
          [3188, 2828],
          [3188, 2831],
          [3189, 2832],
          [3189, 2835],
          [3190, 2835],
          [3190, 2837],
          [3193, 2837],
          [3193, 2839],
          [3195, 2841],
          [3195, 2845],
          [3193, 2847],
          [3193, 2851],
          [3190, 2851],
          [3190, 2852],
          [3189, 2853],
          [3188, 2853],
          [3186, 2855],
          [3186, 2857],
          [3185, 2858],
          [3183, 2858],
          [3181, 2860],
          [3180, 2860],
          [3179, 2861],
          [3177, 2861],
          [3176, 2862],
          [3194, 2871],
          [3194, 2875],
          [3158, 2875],
          [3149, 2868],
          [3149, 2864],
          [3126, 2864],
          [3126, 2880],
          [3136, 2880],
        ],
        inMap: true,
      },
    ],
  },
  "School's Out": {
    title: "School's Out",
    file: "School%27s_Out",
    polygons: [
      {
        coordinates: [
          [1856, 4992],
          [1856, 5056],
          [1920, 5056],
          [1920, 4992],
          [1856, 4992],
        ],
        inMap: false,
      },
    ],
  },
  "Scorpia Dances": {
    title: "Scorpia Dances",
    file: "Scorpia_Dances",
    polygons: [
      {
        coordinates: [
          [3200, 10304],
          [3200, 10368],
          [3264, 10368],
          [3264, 10304],
          [3200, 10304],
        ],
        inMap: false,
      },
    ],
  },
  "Sea Shanty": {
    title: "Sea Shanty",
    file: "Sea_Shanty",
    polygons: [
      {
        coordinates: [
          [2880, 3136],
          [2880, 3200],
          [2912, 3200],
          [2944, 3168],
          [2976, 3168],
          [2976, 3136],
          [2944, 3136],
          [2880, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Sea Shanty 2": {
    title: "Sea Shanty 2",
    file: "Sea_Shanty_2",
    polygons: [
      {
        coordinates: [
          [3065, 3250],
          [3065, 3254],
          [3068, 3257],
          [3068, 3264],
          [3008, 3264],
          [3008, 3200],
          [3030, 3200],
          [3030, 3187],
          [3072, 3187],
          [3072, 3200],
          [3065, 3200],
          [3065, 3250],
        ],
        inMap: true,
      },
    ],
  },
  "Secrets of the North ": {
    title: "Secrets of the North ",
    file: "Secrets_of_the_North_(music_track)",
    polygons: [
      {
        coordinates: [
          [2880, 10368],
          [2944, 10368],
          [2944, 10304],
          [2880, 10304],
          [2880, 10368],
        ],
        inMap: false,
      },
    ],
  },
  Serenade: {
    title: "Serenade",
    file: "Serenade",
    polygons: [
      {
        coordinates: [
          [2368, 3136],
          [2368, 3200],
          [2496, 3200],
          [2496, 3136],
          [2368, 3136],
        ],
        inMap: true,
      },
    ],
  },
  Serene: {
    title: "Serene",
    file: "Serene",
    polygons: [
      {
        coordinates: [
          [2816, 4800],
          [2816, 4864],
          [2880, 4864],
          [2880, 4800],
          [2816, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Servants of Strife": {
    title: "Servants of Strife",
    file: "Servants_of_Strife",
    polygons: [
      {
        coordinates: [
          [1280, 10048],
          [1280, 10112],
          [1344, 10112],
          [1344, 10048],
          [1280, 10048],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1280, 3690],
          [1272, 3682],
          [1272, 3651],
          [1300, 3651],
          [1304, 3655],
          [1314, 3655],
          [1316, 3653],
          [1344, 3653],
          [1344, 3671],
          [1332, 3683],
          [1332, 3684],
          [1331, 3684],
          [1331, 3685],
          [1330, 3685],
          [1330, 3686],
          [1329, 3686],
          [1329, 3687],
          [1328, 3687],
          [1320, 3695],
          [1306, 3695],
          [1301, 3690],
          [1280, 3690],
        ],
        inMap: true,
      },
    ],
  },
  Settlement: {
    title: "Settlement",
    file: "Settlement",
    polygons: [
      {
        coordinates: [
          [2752, 3648],
          [2752, 3712],
          [2816, 3712],
          [2816, 3648],
          [2752, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "The Shadow": {
    title: "The Shadow",
    file: "The_Shadow",
    polygons: [
      {
        coordinates: [
          [2816, 3216],
          [2816, 3264],
          [2808, 3264],
          [2808, 3328],
          [2880, 3328],
          [2880, 3216],
          [2816, 3216],
        ],
        inMap: true,
      },
    ],
  },
  Shadowland: {
    title: "Shadowland",
    file: "Shadowland",
    polygons: [
      {
        coordinates: [
          [3456, 3264],
          [3456, 3328],
          [3520, 3328],
          [3520, 3264],
          [3456, 3264],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3424, 3200],
          [3424, 3264],
          [3456, 3264],
          [3456, 3200],
          [3424, 3200],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2112, 4992],
          [2112, 5056],
          [2176, 5056],
          [2176, 4992],
          [2112, 4992],
        ],
        inMap: false,
      },
    ],
  },
  "Sharp End of the Crystal": {
    title: "Sharp End of the Crystal",
    file: "Sharp_End_of_the_Crystal",
    polygons: [
      {
        coordinates: [
          [3136, 12352],
          [3136, 12480],
          [3264, 12480],
          [3264, 12352],
          [3136, 12352],
        ],
        inMap: false,
      },
    ],
  },
  Shine: {
    title: "Shine",
    file: "Shine",
    polygons: [
      {
        coordinates: [
          [3328, 3264],
          [3328, 3328],
          [3392, 3328],
          [3392, 3264],
          [3328, 3264],
        ],
        inMap: true,
      },
    ],
  },
  Shining: {
    title: "Shining",
    file: "Shining",
    polygons: [
      {
        coordinates: [
          [2944, 10304],
          [2944, 10368],
          [3008, 10368],
          [3008, 10304],
          [2944, 10304],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3200, 3712],
          [3200, 3776],
          [3264, 3776],
          [3264, 3712],
          [3200, 3712],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2944, 3904],
          [2944, 3968],
          [3008, 3968],
          [3008, 3904],
          [2944, 3904],
        ],
        inMap: true,
      },
    ],
  },
  "Shining Spirit": {
    title: "Shining Spirit",
    file: "Shining_Spirit",
    polygons: [
      {
        coordinates: [
          [2944, 4352],
          [2944, 4416],
          [2972, 4416],
          [2972, 4352],
          [2944, 4352],
        ],
        inMap: false,
      },
    ],
  },
  Shipwrecked: {
    title: "Shipwrecked",
    file: "Shipwrecked",
    polygons: [
      {
        coordinates: [
          [3584, 3520],
          [3584, 3584],
          [3648, 3584],
          [3648, 3520],
          [3584, 3520],
        ],
        inMap: true,
      },
    ],
  },
  Showdown: {
    title: "Showdown",
    file: "Showdown",
    polygons: [
      {
        coordinates: [
          [2688, 9152],
          [2688, 9216],
          [2752, 9216],
          [2752, 9152],
          [2688, 9152],
        ],
        inMap: false,
      },
    ],
  },
  "Sigmund's Showdown": {
    title: "Sigmund's Showdown",
    file: "Sigmund%27s_Showdown",
    polygons: [
      {
        coordinates: [
          [1984, 5056],
          [1984, 5120],
          [2048, 5120],
          [2048, 5056],
          [1984, 5056],
        ],
        inMap: false,
      },
    ],
  },
  "The Slayer": {
    title: "The Slayer",
    file: "The_Slayer",
    polygons: [
      {
        coordinates: [
          [2752, 9984],
          [2752, 10048],
          [2816, 10048],
          [2816, 9984],
          [2752, 9984],
        ],
        inMap: false,
      },
    ],
  },
  "Slice of Silent Movie": {
    title: "Slice of Silent Movie",
    file: "Slice_of_Silent_Movie",
    polygons: [
      {
        coordinates: [
          [2528, 5504],
          [2528, 5568],
          [2560, 5568],
          [2560, 5504],
          [2528, 5504],
        ],
        inMap: false,
      },
    ],
  },
  "Slice of Station": {
    title: "Slice of Station",
    file: "Slice_of_Station",
    polygons: [
      {
        coordinates: [
          [2432, 5504],
          [2432, 5568],
          [2496, 5568],
          [2496, 5504],
          [2432, 5504],
        ],
        inMap: false,
      },
    ],
  },
  "Slither and Thither": {
    title: "Slither and Thither",
    file: "Slither_and_Thither",
    polygons: [
      {
        coordinates: [
          [2608, 10304],
          [2608, 10272],
          [2624, 10272],
          [2624, 10304],
          [2608, 10304],
        ],
        inMap: false,
      },
    ],
  },
  "Slug a Bug Ball": {
    title: "Slug a Bug Ball",
    file: "Slug_a_Bug_Ball",
    polygons: [
      {
        coordinates: [
          [2304, 5056],
          [2304, 5120],
          [2368, 5120],
          [2368, 5056],
          [2304, 5056],
        ],
        inMap: false,
      },
    ],
  },
  Sojourn: {
    title: "Sojourn",
    file: "Sojourn",
    polygons: [
      {
        coordinates: [
          [2816, 3648],
          [2816, 3712],
          [2944, 3712],
          [2944, 3648],
          [2816, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "Song of the Elves ": {
    title: "Song of the Elves ",
    file: "Song_of_the_Elves_(music_track)",
    polygons: [
      {
        coordinates: [
          [2560, 6080],
          [2560, 6208],
          [2688, 6208],
          [2688, 6080],
          [2560, 6080],
        ],
        inMap: false,
      },
    ],
  },
  "Soul Fall": {
    title: "Soul Fall",
    file: "Soul_Fall",
    polygons: [
      {
        coordinates: [
          [1792, 3840],
          [1856, 3840],
          [1856, 3904],
          [1796, 3904],
          [1792, 3908],
          [1773, 3908],
          [1773, 3887],
          [1792, 3868],
          [1792, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "Soul Wars ": {
    title: "Soul Wars ",
    file: "Soul_Wars_(music_track)",
    polygons: [
      {
        coordinates: [
          [2112, 2880],
          [2112, 2944],
          [2304, 2944],
          [2304, 2880],
          [2112, 2880],
        ],
        inMap: true,
      },
    ],
  },
  Soundscape: {
    title: "Soundscape",
    file: "Soundscape",
    polygons: [
      {
        coordinates: [
          [2432, 2944],
          [2432, 3008],
          [2560, 3008],
          [2560, 2944],
          [2432, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "Sphinx ": {
    title: "Sphinx ",
    file: "Sphinx_(music_track)",
    polygons: [
      {
        coordinates: [
          [3328, 2880],
          [3264, 2880],
          [3264, 2810],
          [3323, 2810],
          [3323, 2752],
          [3392, 2752],
          [3392, 2816],
          [3328, 2816],
          [3328, 2880],
        ],
        inMap: true,
      },
    ],
  },
  "Spirit ": {
    title: "Spirit ",
    file: "Spirit_(music_track)",
    polygons: [
      {
        coordinates: [
          [3136, 3392],
          [3136, 3456],
          [3200, 3456],
          [3200, 3392],
          [3136, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Spirits of the Elid ": {
    title: "Spirits of the Elid ",
    file: "Spirits_of_the_Elid_(music_track)",
    polygons: [
      {
        coordinates: [
          [3328, 9536],
          [3328, 9600],
          [3392, 9600],
          [3392, 9536],
          [3328, 9536],
        ],
        inMap: false,
      },
    ],
  },
  Splendour: {
    title: "Splendour",
    file: "Splendour",
    polygons: [
      {
        coordinates: [
          [2880, 3456],
          [2880, 3520],
          [2944, 3520],
          [2944, 3456],
          [2880, 3456],
        ],
        inMap: true,
      },
    ],
  },
  Spooky: {
    title: "Spooky",
    file: "Spooky",
    polygons: [
      {
        coordinates: [
          [3072, 3328],
          [3072, 3392],
          [3136, 3392],
          [3136, 3328],
          [3072, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Spooky 2": {
    title: "Spooky 2",
    file: "Spooky_2",
    polygons: [
      {
        coordinates: [
          [2112, 9280],
          [2112, 9344],
          [2176, 9344],
          [2176, 9280],
          [2112, 9280],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1920, 9408],
          [1920, 9472],
          [1984, 9472],
          [1984, 9408],
          [1920, 9408],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3392, 9600],
          [3392, 9664],
          [3520, 9664],
          [3520, 9600],
          [3392, 9600],
        ],
        inMap: false,
      },
    ],
  },
  "Spooky Jungle": {
    title: "Spooky Jungle",
    file: "Spooky_Jungle",
    polygons: [
      {
        coordinates: [
          [2880, 9472],
          [2880, 9536],
          [2944, 9536],
          [2944, 9472],
          [2880, 9472],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2752, 2880],
          [2752, 2944],
          [2816, 2944],
          [2816, 2880],
          [2752, 2880],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2496, 4544],
          [2496, 4608],
          [2560, 4608],
          [2560, 4544],
          [2496, 4544],
        ],
        inMap: false,
      },
    ],
  },
  "The Spurned Demon ": {
    title: "The Spurned Demon ",
    file: "The_Spurned_Demon_(music_track)",
    polygons: [
      {
        coordinates: [
          [3008, 6016],
          [3008, 6062],
          [3072, 6062],
          [3072, 6016],
          [3008, 6016],
        ],
        inMap: false,
      },
    ],
  },
  Stagnant: {
    title: "Stagnant",
    file: "Stagnant",
    polygons: [
      {
        coordinates: [
          [3456, 3328],
          [3456, 3392],
          [3520, 3392],
          [3520, 3328],
          [3456, 3328],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1984, 4992],
          [1984, 5024],
          [2048, 5024],
          [2048, 4992],
          [1984, 4992],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2080, 4992],
          [2080, 5024],
          [2112, 5024],
          [2112, 4992],
          [2080, 4992],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2176, 4992],
          [2176, 5024],
          [2368, 5024],
          [2368, 4992],
          [2176, 4992],
        ],
        inMap: false,
      },
    ],
  },
  "Starlight ": {
    title: "Starlight ",
    file: "Starlight_(music_track)",
    polygons: [
      {
        coordinates: [
          [3018, 9536],
          [3018, 9568],
          [3037, 9568],
          [3038, 9569],
          [3038, 9570],
          [3037, 9571],
          [3037, 9573],
          [3038, 9574],
          [3039, 9574],
          [3040, 9575],
          [3041, 9575],
          [3042, 9574],
          [3043, 9574],
          [3046, 9571],
          [3046, 9569],
          [3051, 9564],
          [3053, 9564],
          [3055, 9562],
          [3058, 9562],
          [3061, 9565],
          [3062, 9565],
          [3064, 9567],
          [3064, 9568],
          [3067, 9571],
          [3067, 9574],
          [3069, 9576],
          [3069, 9580],
          [3068, 9581],
          [3068, 9585],
          [3064, 9589],
          [3064, 9600],
          [2944, 9600],
          [2944, 9536],
          [3018, 9536],
        ],
        inMap: false,
      },
    ],
  },
  Start: {
    title: "Start",
    file: "Start",
    polygons: [
      {
        coordinates: [
          [3072, 3264],
          [3072, 3328],
          [3136, 3328],
          [3136, 3264],
          [3072, 3264],
        ],
        inMap: true,
      },
    ],
  },
  "Still Night": {
    title: "Still Night",
    file: "Still_Night",
    polygons: [
      {
        coordinates: [
          [3264, 3328],
          [3264, 3392],
          [3328, 3392],
          [3328, 3328],
          [3264, 3328],
        ],
        inMap: true,
      },
    ],
  },
  Stillness: {
    title: "Stillness",
    file: "Stillness",
    polygons: [
      {
        coordinates: [
          [3392, 9792],
          [3512, 9792],
          [3512, 9828],
          [3520, 9828],
          [3520, 9920],
          [3456, 9920],
          [3456, 9856],
          [3392, 9856],
          [3392, 9792],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3648, 9728],
          [3648, 9792],
          [3712, 9792],
          [3712, 9728],
          [3648, 9728],
        ],
        inMap: false,
      },
    ],
  },
  "Storm Brew": {
    title: "Storm Brew",
    file: "Storm_Brew",
    polygons: [
      {
        coordinates: [
          [2624, 5184],
          [2624, 5248],
          [2688, 5248],
          [2688, 5184],
          [2624, 5184],
        ],
        inMap: false,
      },
    ],
  },
  Stranded: {
    title: "Stranded",
    file: "Stranded",
    polygons: [
      {
        coordinates: [
          [2816, 3712],
          [2816, 3776],
          [2944, 3776],
          [2944, 3712],
          [2816, 3712],
        ],
        inMap: true,
      },
    ],
  },
  "Strange Place": {
    title: "Strange Place",
    file: "Strange_Place",
    polygons: [
      {
        coordinates: [
          [1856, 4480],
          [1856, 4544],
          [1920, 4544],
          [1920, 4480],
          [1856, 4480],
        ],
        inMap: false,
      },
    ],
  },
  "Strangled ": {
    title: "Strangled ",
    file: "Strangled_(music_track)",
    polygons: [
      {
        coordinates: [
          [1200, 3456],
          [1088, 3456],
          [1088, 3264],
          [1188, 3264],
          [1188, 3312],
          [1164, 3336],
          [1180, 3352],
          [1188, 3352],
          [1207, 3371],
          [1238, 3371],
          [1238, 3402],
          [1200, 3440],
          [1200, 3456],
        ],
        inMap: true,
      },
    ],
  },
  Stratosphere: {
    title: "Stratosphere",
    file: "Stratosphere",
    polygons: [
      {
        coordinates: [
          [2112, 4800],
          [2112, 4864],
          [2176, 4864],
          [2176, 4800],
          [2112, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Strength of Saradomin": {
    title: "Strength of Saradomin",
    file: "Strength_of_Saradomin",
    polygons: [
      {
        coordinates: [
          [2912, 5312],
          [2944, 5312],
          [2944, 5248],
          [2880, 5248],
          [2880, 5280],
          [2904, 5280],
          [2904, 5288],
          [2912, 5288],
          [2912, 5312],
        ],
        inMap: false,
      },
    ],
  },
  "Stuck in the Mire": {
    title: "Stuck in the Mire",
    file: "Stuck_in_the_Mire",
    polygons: [
      {
        coordinates: [
          [1279, 3593],
          [1272, 3600],
          [1200, 3600],
          [1200, 3568],
          [1194, 3568],
          [1182, 3580],
          [1152, 3580],
          [1152, 3665],
          [1243, 3665],
          [1250, 3672],
          [1272, 3672],
          [1272, 3651],
          [1300, 3651],
          [1304, 3655],
          [1314, 3655],
          [1316, 3653],
          [1344, 3653],
          [1344, 3602],
          [1340, 3602],
          [1331, 3593],
          [1315, 3593],
          [1279, 3593],
        ],
        inMap: true,
      },
    ],
  },
  Subterranea: {
    title: "Subterranea",
    file: "Subterranea",
    polygons: [
      {
        coordinates: [
          [1600, 9728],
          [1600, 9856],
          [1728, 9856],
          [1728, 9728],
          [1600, 9728],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2496, 10112],
          [2496, 10176],
          [2560, 10176],
          [2560, 10112],
          [2496, 10112],
        ],
        inMap: false,
      },
    ],
  },
  Sunburn: {
    title: "Sunburn",
    file: "Sunburn",
    polygons: [
      {
        coordinates: [
          [3328, 2880],
          [3328, 2944],
          [3392, 2944],
          [3392, 2880],
          [3328, 2880],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3200, 2944],
          [3200, 3008],
          [3264, 3008],
          [3264, 2944],
          [3200, 2944],
        ],
        inMap: true,
      },
    ],
  },
  Superstition: {
    title: "Superstition",
    file: "Superstition",
    polygons: [
      {
        coordinates: [
          [2752, 9280],
          [2752, 9344],
          [2816, 9344],
          [2816, 9280],
          [2752, 9280],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1568, 10240],
          [1600, 10240],
          [1600, 10176],
          [1536, 10176],
          [1536, 10208],
          [1568, 10208],
          [1568, 10240],
        ],
        inMap: false,
      },
    ],
  },
  Suspicious: {
    title: "Suspicious",
    file: "Suspicious",
    polygons: [
      {
        coordinates: [
          [2560, 4544],
          [2560, 4608],
          [2688, 4608],
          [2688, 4544],
          [2560, 4544],
        ],
        inMap: false,
      },
    ],
  },
  "Tale of Keldagrim": {
    title: "Tale of Keldagrim",
    file: "Tale_of_Keldagrim",
    polygons: [
      {
        coordinates: [
          [2880, 10112],
          [2880, 10240],
          [2944, 10240],
          [2944, 10112],
          [2880, 10112],
        ],
        inMap: false,
      },
    ],
  },
  "Talking Forest": {
    title: "Talking Forest",
    file: "Talking_Forest",
    polygons: [
      {
        coordinates: [
          [2624, 3456],
          [2624, 3520],
          [2688, 3520],
          [2688, 3456],
          [2624, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "A Taste of Hope ": {
    title: "A Taste of Hope ",
    file: "A_Taste_of_Hope_(music_track)",
    polygons: [
      {
        coordinates: [
          [2048, 4864],
          [2048, 4928],
          [2112, 4928],
          [2112, 4864],
          [2048, 4864],
        ],
        inMap: false,
      },
    ],
  },
  "Tears of Guthix ": {
    title: "Tears of Guthix ",
    file: "Tears_of_Guthix_(music_track)",
    polygons: [
      {
        coordinates: [
          [3200, 9472],
          [3200, 9536],
          [3254, 9536],
          [3254, 9472],
          [3200, 9472],
        ],
        inMap: false,
      },
    ],
  },
  Technology: {
    title: "Technology",
    file: "Technology",
    polygons: [
      {
        coordinates: [
          [2368, 9856],
          [2368, 9920],
          [2432, 9920],
          [2432, 9856],
          [2368, 9856],
        ],
        inMap: false,
      },
    ],
  },
  Tempest: {
    title: "Tempest",
    file: "Tempest",
    polygons: [
      {
        coordinates: [
          [1664, 4544],
          [1664, 4608],
          [1728, 4608],
          [1728, 4544],
          [1664, 4544],
        ],
        inMap: false,
      },
    ],
  },
  "Temple ": {
    title: "Temple ",
    file: "Temple_(music_track)",
    polygons: [
      {
        coordinates: [
          [2752, 9152],
          [2752, 9216],
          [2816, 9216],
          [2816, 9152],
          [2752, 9152],
        ],
        inMap: false,
      },
    ],
  },
  "Temple of Light ": {
    title: "Temple of Light ",
    file: "Temple_of_Light_(music_track)",
    polygons: [
      {
        coordinates: [
          [1856, 4608],
          [1856, 4672],
          [1920, 4672],
          [1920, 4608],
          [1856, 4608],
        ],
        inMap: false,
      },
    ],
  },
  "Temple of Tribes": {
    title: "Temple of Tribes",
    file: "Temple_of_Tribes",
    polygons: [
      {
        coordinates: [
          [3712, 4352],
          [3776, 4352],
          [3776, 4288],
          [3712, 4288],
          [3712, 4352],
        ],
        inMap: false,
      },
    ],
  },
  "Temple of the Eye ": {
    title: "Temple of the Eye ",
    file: "Temple_of_the_Eye_(music_track)",
    polygons: [
      {
        coordinates: [
          [3520, 9536],
          [3712, 9536],
          [3712, 9408],
          [3520, 9408],
          [3520, 9536],
        ],
        inMap: false,
      },
    ],
  },
  "Tempor of the Storm": {
    title: "Tempor of the Storm",
    file: "Tempor_of_the_Storm",
    polygons: [
      {
        coordinates: [
          [3008, 2944],
          [3008, 3008],
          [3072, 3008],
          [3072, 2944],
          [3008, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "The Terrible Tower": {
    title: "The Terrible Tower",
    file: "The_Terrible_Tower",
    polygons: [
      {
        coordinates: [
          [3392, 9920],
          [3392, 9984],
          [3456, 9984],
          [3456, 9920],
          [3392, 9920],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3392, 3520],
          [3392, 3584],
          [3456, 3584],
          [3456, 3520],
          [3392, 3520],
        ],
        inMap: true,
      },
    ],
  },
  "The Terrible Tunnels": {
    title: "The Terrible Tunnels",
    file: "The_Terrible_Tunnels",
    polygons: [
      {
        coordinates: [
          [3512, 9828],
          [3584, 9828],
          [3584, 9792],
          [3648, 9792],
          [3648, 9728],
          [3616, 9728],
          [3616, 9681],
          [3648, 9681],
          [3648, 9664],
          [3600, 9664],
          [3600, 9728],
          [3512, 9728],
          [3512, 9828],
        ],
        inMap: false,
      },
    ],
  },
  "That Sullen Hall": {
    title: "That Sullen Hall",
    file: "That_Sullen_Hall",
    polygons: [
      {
        coordinates: [
          [1280, 1216],
          [1344, 1216],
          [1344, 1280],
          [1280, 1280],
          [1280, 1216],
        ],
        inMap: false,
      },
    ],
  },
  Theme: {
    title: "Theme",
    file: "Theme",
    polygons: [
      {
        coordinates: [
          [2560, 3456],
          [2560, 3520],
          [2624, 3520],
          [2624, 3456],
          [2560, 3456],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2560, 9856],
          [2560, 9920],
          [2624, 9920],
          [2624, 9856],
          [2560, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "Thrall of the Serpent": {
    title: "Thrall of the Serpent",
    file: "Thrall_of_the_Serpent",
    polygons: [
      {
        coordinates: [
          [2176, 3008],
          [2176, 3072],
          [2240, 3072],
          [2240, 3008],
          [2176, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "Throne of the Demon": {
    title: "Throne of the Demon",
    file: "Throne_of_the_Demon",
    polygons: [
      {
        coordinates: [
          [2688, 4864],
          [2688, 4928],
          [2752, 4928],
          [2752, 4864],
          [2688, 4864],
        ],
        inMap: false,
      },
    ],
  },
  "Time Out": {
    title: "Time Out",
    file: "Time_Out",
    polygons: [
      {
        coordinates: [
          [2880, 4544],
          [2880, 4608],
          [2944, 4608],
          [2944, 4544],
          [2880, 4544],
        ],
        inMap: false,
      },
    ],
  },
  "Time to Mine": {
    title: "Time to Mine",
    file: "Time_to_Mine",
    polygons: [
      {
        coordinates: [
          [2816, 10112],
          [2816, 10176],
          [2880, 10176],
          [2880, 10112],
          [2816, 10112],
        ],
        inMap: false,
      },
    ],
  },
  Tiptoe: {
    title: "Tiptoe",
    file: "Tiptoe",
    polygons: [
      {
        coordinates: [
          [3072, 9728],
          [3072, 9792],
          [3136, 9792],
          [3136, 9728],
          [3072, 9728],
        ],
        inMap: false,
      },
    ],
  },
  "Tomb Raider ": {
    title: "Tomb Raider ",
    file: "Tomb_Raider_(music_track)",
    polygons: [
      {
        coordinates: [
          [1920, 4416],
          [1920, 4480],
          [1984, 4480],
          [1984, 4416],
          [1920, 4416],
        ],
        inMap: false,
      },
    ],
  },
  Tomorrow: {
    title: "Tomorrow",
    file: "Tomorrow",
    polygons: [
      {
        coordinates: [
          [3008, 3136],
          [3008, 3200],
          [3008, 3200],
          [3030, 3200],
          [3030, 3187],
          [3072, 3187],
          [3072, 3136],
          [3008, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Too Many Cooks...": {
    title: "Too Many Cooks...",
    file: "Too_Many_Cooks...",
    polygons: [
      {
        coordinates: [
          [2944, 9856],
          [2944, 9920],
          [3008, 9920],
          [3008, 9856],
          [2944, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "The Tower": {
    title: "The Tower",
    file: "The_Tower",
    polygons: [
      {
        coordinates: [
          [2560, 3392],
          [2624, 3392],
          [2624, 3328],
          [2558, 3328],
          [2558, 3336],
          [2560, 3336],
          [2560, 3392],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2496, 9728],
          [2528, 9728],
          [2528, 9760],
          [2560, 9760],
          [2560, 9728],
          [2624, 9728],
          [2624, 9792],
          [2496, 9792],
          [2496, 9728],
        ],
        inMap: false,
      },
    ],
  },
  "The Trade Parade": {
    title: "The Trade Parade",
    file: "The_Trade_Parade",
    polygons: [
      {
        coordinates: [
          [3136, 3456],
          [3136, 3520],
          [3200, 3520],
          [3200, 3456],
          [3136, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "Trahaearn Toil": {
    title: "Trahaearn Toil",
    file: "Trahaearn_Toil",
    polygons: [
      {
        coordinates: [
          [3008, 6062],
          [3008, 6080],
          [3072, 6080],
          [3072, 6062],
          [3008, 6062],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3200, 12480],
          [3200, 12544],
          [3264, 12544],
          [3264, 12480],
          [3200, 12480],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3264, 12416],
          [3264, 12480],
          [3328, 12480],
          [3328, 12416],
          [3264, 12416],
        ],
        inMap: false,
      },
    ],
  },
  "Trawler ": {
    title: "Trawler ",
    file: "Trawler_(music_track)",
    polygons: [
      {
        coordinates: [
          [1856, 4800],
          [1856, 4864],
          [1920, 4864],
          [1920, 4800],
          [1856, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Trawler Minor": {
    title: "Trawler Minor",
    file: "Trawler_Minor",
    polygons: [
      {
        coordinates: [
          [1920, 4800],
          [1920, 4864],
          [2048, 4864],
          [2048, 4800],
          [1920, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Tree Spirits": {
    title: "Tree Spirits",
    file: "Tree_Spirits",
    polygons: [
      {
        coordinates: [
          [2304, 3328],
          [2304, 3392],
          [2432, 3392],
          [2432, 3328],
          [2304, 3328],
        ],
        inMap: true,
      },
    ],
  },
  Tremble: {
    title: "Tremble",
    file: "Tremble",
    polygons: [
      {
        coordinates: [
          [2816, 3584],
          [2816, 3648],
          [2880, 3648],
          [2880, 3584],
          [2816, 3584],
        ],
        inMap: true,
      },
    ],
  },
  Tribal: {
    title: "Tribal",
    file: "Tribal",
    polygons: [
      {
        coordinates: [
          [2816, 3008],
          [2816, 3072],
          [2880, 3072],
          [2880, 3008],
          [2816, 3008],
        ],
        inMap: true,
      },
    ],
  },
  "Tribal 2": {
    title: "Tribal 2",
    file: "Tribal_2",
    polygons: [
      {
        coordinates: [
          [2880, 2944],
          [2880, 3008],
          [3008, 3008],
          [3008, 2944],
          [2880, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "Tribal Background": {
    title: "Tribal Background",
    file: "Tribal_Background",
    polygons: [
      {
        coordinates: [
          [2944, 2880],
          [2944, 2944],
          [3008, 2944],
          [3008, 2880],
          [2944, 2880],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2752, 3072],
          [2752, 3136],
          [2880, 3136],
          [2880, 3072],
          [2752, 3072],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2816, 9472],
          [2816, 9536],
          [2880, 9536],
          [2880, 9472],
          [2816, 9472],
        ],
        inMap: false,
      },
    ],
  },
  Trinity: {
    title: "Trinity",
    file: "Trinity",
    polygons: [
      {
        coordinates: [
          [2688, 3328],
          [2688, 3392],
          [2752, 3392],
          [2752, 3328],
          [2688, 3328],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2688, 9728],
          [2688, 9792],
          [2752, 9792],
          [2752, 9728],
          [2688, 9728],
        ],
        inMap: false,
      },
    ],
  },
  "Troll Shuffle": {
    title: "Troll Shuffle",
    file: "Troll_Shuffle",
    polygons: [
      {
        coordinates: [
          [2688, 5760],
          [2688, 5824],
          [2752, 5824],
          [2752, 5760],
          [2688, 5760],
        ],
        inMap: false,
      },
    ],
  },
  "Trouble Brewing ": {
    title: "Trouble Brewing ",
    file: "Trouble_Brewing_(music_track)",
    polygons: [
      {
        coordinates: [
          [3776, 2944],
          [3776, 3008],
          [3840, 3008],
          [3840, 2944],
          [3776, 2944],
        ],
        inMap: true,
      },
    ],
  },
  Troubled: {
    title: "Troubled",
    file: "Troubled",
    polygons: [
      {
        coordinates: [
          [2944, 3648],
          [2944, 3712],
          [3008, 3712],
          [3008, 3648],
          [2944, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "Troubled Waters": {
    title: "Troubled Waters",
    file: "Troubled_Waters",
    polygons: [
      {
        coordinates: [
          [2240, 9984],
          [2240, 10048],
          [2304, 10048],
          [2304, 9984],
          [2240, 9984],
        ],
        inMap: false,
      },
    ],
  },
  Twilight: {
    title: "Twilight",
    file: "Twilight",
    polygons: [
      {
        coordinates: [
          [2688, 9856],
          [2688, 9920],
          [2752, 9920],
          [2752, 9856],
          [2688, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "TzHaar!": {
    title: "TzHaar!",
    file: "TzHaar!",
    polygons: [
      {
        coordinates: [
          [2368, 5056],
          [2368, 5120],
          [2432, 5120],
          [2432, 5056],
          [2368, 5056],
        ],
        inMap: false,
      },
    ],
  },
  "Undead Dungeon": {
    title: "Undead Dungeon",
    file: "Undead_Dungeon",
    polygons: [
      {
        coordinates: [
          [3136, 4544],
          [3136, 4672],
          [3200, 4672],
          [3200, 4544],
          [3136, 4544],
        ],
        inMap: false,
      },
    ],
  },
  Undercurrent: {
    title: "Undercurrent",
    file: "Undercurrent",
    polygons: [
      {
        coordinates: [
          [3072, 3648],
          [3072, 3712],
          [3136, 3712],
          [3136, 3648],
          [3072, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "Underground ": {
    title: "Underground ",
    file: "Underground_(music_track)",
    polygons: [
      {
        coordinates: [
          [3328, 3584],
          [3328, 3648],
          [3392, 3648],
          [3392, 3584],
          [3328, 3584],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2816, 9728],
          [2816, 9792],
          [2880, 9792],
          [2880, 9728],
          [2816, 9728],
        ],
        inMap: false,
      },
    ],
  },
  "Underground Pass ": {
    title: "Underground Pass ",
    file: "Underground_Pass_(music_track)",
    polygons: [
      {
        coordinates: [
          [2368, 9536],
          [2368, 9664],
          [2432, 9664],
          [2432, 9536],
          [2368, 9536],
        ],
        inMap: false,
      },
    ],
  },
  Understanding: {
    title: "Understanding",
    file: "Understanding",
    polygons: [
      {
        coordinates: [
          [2368, 4800],
          [2368, 4864],
          [2432, 4864],
          [2432, 4800],
          [2368, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Unknown Land": {
    title: "Unknown Land",
    file: "Unknown_Land",
    polygons: [
      {
        coordinates: [
          [3065, 3250],
          [3065, 3254],
          [3068, 3257],
          [3068, 3264],
          [3136, 3264],
          [3136, 3200],
          [3065, 3200],
          [3065, 3250],
        ],
        inMap: true,
      },
    ],
  },
  Untouchable: {
    title: "Untouchable",
    file: "Untouchable",
    polygons: [
      {
        coordinates: [
          [1792, 5120],
          [1792, 5184],
          [1856, 5184],
          [1856, 5120],
          [1792, 5120],
        ],
        inMap: false,
      },
    ],
  },
  "Unturned Stones": {
    title: "Unturned Stones",
    file: "Unturned_Stones",
    polygons: [
      {
        coordinates: [
          [2752, 6464],
          [2816, 6464],
          [2816, 6400],
          [2752, 6400],
          [2752, 6464],
        ],
        inMap: false,
      },
    ],
  },
  Upcoming: {
    title: "Upcoming",
    file: "Upcoming",
    polygons: [
      {
        coordinates: [
          [2624, 3200],
          [2648, 3200],
          [2648, 3208],
          [2640, 3208],
          [2640, 3232],
          [2664, 3232],
          [2664, 3208],
          [2656, 3208],
          [2656, 3200],
          [2688, 3200],
          [2688, 3264],
          [2624, 3264],
          [2624, 3200],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1824, 4896],
          [1824, 4928],
          [1856, 4928],
          [1856, 4896],
          [1824, 4896],
        ],
        inMap: false,
      },
    ],
  },
  "Upir Likhyi": {
    title: "Upir Likhyi",
    file: "Upir_Likhyi",
    polygons: [
      {
        coordinates: [
          [3584, 3368],
          [3561, 3368],
          [3561, 3349],
          [3584, 3349],
          [3584, 3368],
        ],
        inMap: true,
      },
    ],
  },
  "Upper Depths": {
    title: "Upper Depths",
    file: "Upper_Depths",
    polygons: [
      {
        coordinates: [
          [3264, 5120],
          [3360, 5120],
          [3360, 5472],
          [3264, 5472],
          [3264, 5120],
        ],
        inMap: false,
      },
    ],
  },
  "The Vault": {
    title: "The Vault",
    file: "The_Vault",
    polygons: [
      {
        coordinates: [
          [3136, 6464],
          [3328, 6464],
          [3328, 6400],
          [3136, 6400],
          [3136, 6464],
        ],
        inMap: false,
      },
    ],
  },
  Venomous: {
    title: "Venomous",
    file: "Venomous",
    polygons: [
      {
        coordinates: [
          [3200, 3904],
          [3200, 3968],
          [3264, 3968],
          [3264, 3904],
          [3200, 3904],
        ],
        inMap: true,
      },
    ],
  },
  Venture: {
    title: "Venture",
    file: "Venture",
    polygons: [
      {
        coordinates: [
          [3328, 3328],
          [3328, 3392],
          [3392, 3392],
          [3392, 3328],
          [3328, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Venture 2": {
    title: "Venture 2",
    file: "Venture_2",
    polygons: [
      {
        coordinates: [
          [3328, 9728],
          [3328, 9856],
          [3392, 9856],
          [3392, 9728],
          [3328, 9728],
        ],
        inMap: false,
      },
    ],
  },
  "Victory is Mine": {
    title: "Victory is Mine",
    file: "Victory_is_Mine",
    polygons: [
      {
        coordinates: [
          [3182, 9758],
          [3182, 9759],
          [3181, 9760],
          [3181, 9763],
          [3180, 9764],
          [3178, 9764],
          [3178, 9763],
          [3177, 9762],
          [3176, 9762],
          [3174, 9764],
          [3172, 9764],
          [3171, 9765],
          [3167, 9765],
          [3166, 9764],
          [3163, 9764],
          [3161, 9762],
          [3160, 9762],
          [3158, 9760],
          [3158, 9757],
          [3160, 9755],
          [3161, 9755],
          [3163, 9753],
          [3166, 9753],
          [3167, 9752],
          [3171, 9752],
          [3172, 9753],
          [3174, 9753],
          [3176, 9755],
          [3177, 9755],
          [3178, 9754],
          [3178, 9753],
          [3180, 9753],
          [3181, 9754],
          [3181, 9757],
          [3182, 9758],
        ],
        inMap: false,
      },
    ],
  },
  Village: {
    title: "Village",
    file: "Village",
    polygons: [
      {
        coordinates: [
          [3456, 3456],
          [3456, 3520],
          [3520, 3520],
          [3520, 3456],
          [3456, 3456],
        ],
        inMap: true,
      },
    ],
  },
  Vision: {
    title: "Vision",
    file: "Vision",
    polygons: [
      {
        coordinates: [
          [3085, 9536],
          [3085, 9600],
          [3136, 9600],
          [3136, 9536],
          [3085, 9536],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3072, 3136],
          [3072, 3200],
          [3136, 3200],
          [3136, 3136],
          [3072, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Volcanic Vikings": {
    title: "Volcanic Vikings",
    file: "Volcanic_Vikings",
    polygons: [
      {
        coordinates: [
          [2304, 3776],
          [2304, 3840],
          [2368, 3840],
          [2368, 3776],
          [2304, 3776],
        ],
        inMap: true,
      },
    ],
  },
  "Voodoo Cult": {
    title: "Voodoo Cult",
    file: "Voodoo_Cult",
    polygons: [
      {
        coordinates: [
          [2880, 9280],
          [2880, 9344],
          [2944, 9344],
          [2944, 9280],
          [2880, 9280],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2368, 4672],
          [2368, 4736],
          [2432, 4736],
          [2432, 4672],
          [2368, 4672],
        ],
        inMap: false,
      },
    ],
  },
  Voyage: {
    title: "Voyage",
    file: "Voyage",
    polygons: [
      {
        coordinates: [
          [2496, 3456],
          [2496, 3520],
          [2560, 3520],
          [2560, 3456],
          [2496, 3456],
        ],
        inMap: true,
      },
    ],
  },
  "The Waiting Game": {
    title: "The Waiting Game",
    file: "The_Waiting_Game",
    polygons: [
      {
        coordinates: [
          [2176, 2816],
          [2176, 2880],
          [2240, 2880],
          [2240, 2816],
          [2176, 2816],
        ],
        inMap: true,
      },
    ],
  },
  "Waking Dream": {
    title: "Waking Dream",
    file: "Waking_Dream",
    polygons: [
      {
        coordinates: [
          [1792, 5056],
          [1792, 5120],
          [1856, 5120],
          [1856, 5056],
          [1792, 5056],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1744, 5072],
          [1744, 5104],
          [1776, 5104],
          [1776, 5072],
          [1744, 5072],
        ],
        inMap: false,
      },
    ],
  },
  "A Walk in the Woods": {
    title: "A Walk in the Woods",
    file: "A_Walk_in_the_Woods",
    polygons: [
      {
        coordinates: [
          [1472, 3392],
          [1472, 3478],
          [1476, 3478],
          [1476, 3483],
          [1482, 3486],
          [1482, 3495],
          [1475, 3500],
          [1475, 3511],
          [1481, 3517],
          [1485, 3517],
          [1491, 3514],
          [1498, 3514],
          [1504, 3520],
          [1504, 3523],
          [1505, 3523],
          [1505, 3525],
          [1506, 3525],
          [1506, 3527],
          [1507, 3527],
          [1507, 3536],
          [1514, 3536],
          [1524, 3530],
          [1538, 3530],
          [1542, 3526],
          [1572, 3526],
          [1572, 3520],
          [1582, 3516],
          [1593, 3516],
          [1601, 3520],
          [1601, 3511],
          [1607, 3511],
          [1607, 3513],
          [1608, 3514],
          [1610, 3514],
          [1612, 3516],
          [1621, 3516],
          [1624, 3519],
          [1631, 3519],
          [1633, 3517],
          [1654, 3517],
          [1655, 3516],
          [1655, 3510],
          [1658, 3507],
          [1658, 3503],
          [1657, 3502],
          [1656, 3502],
          [1656, 3497],
          [1650, 3491],
          [1664, 3491],
          [1664, 3490],
          [1664, 3392],
          [1472, 3392],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1536, 9856],
          [1536, 9792],
          [1600, 9792],
          [1600, 9856],
          [1536, 9856],
        ],
        inMap: false,
      },
    ],
  },
  "The Walking Dead": {
    title: "The Walking Dead",
    file: "The_Walking_Dead",
    polygons: [
      {
        coordinates: [
          [1472, 9920],
          [1472, 9984],
          [1536, 9984],
          [1536, 9920],
          [1472, 9920],
        ],
        inMap: false,
      },
    ],
  },
  Wander: {
    title: "Wander",
    file: "Wander",
    polygons: [
      {
        coordinates: [
          [3008, 3264],
          [3008, 3328],
          [3072, 3328],
          [3072, 3264],
          [3008, 3264],
        ],
        inMap: true,
      },
    ],
  },
  Warpath: {
    title: "Warpath",
    file: "Warpath",
    polygons: [
      {
        coordinates: [
          [3136, 5120],
          [3584, 5120],
          [3584, 4672],
          [3264, 4672],
          [3264, 4928],
          [3136, 4928],
          [3136, 5120],
        ],
        inMap: false,
      },
    ],
  },
  "Warrior ": {
    title: "Warrior ",
    file: "Warrior_(music_track)",
    polygons: [
      {
        coordinates: [
          [2624, 10048],
          [2624, 10112],
          [2688, 10112],
          [2688, 10048],
          [2624, 10048],
        ],
        inMap: false,
      },
    ],
  },
  "Warriors' Guild ": {
    title: "Warriors' Guild ",
    file: "Warriors%27_Guild_(music_track)",
    polygons: [
      {
        coordinates: [
          [2832, 3556],
          [2832, 3545],
          [2816, 3545],
          [2816, 3529],
          [2825, 3538],
          [2838, 3538],
          [2838, 3537],
          [2839, 3537],
          [2840, 3536],
          [2841, 3536],
          [2842, 3537],
          [2845, 3537],
          [2846, 3536],
          [2847, 3536],
          [2848, 3537],
          [2849, 3537],
          [2849, 3534],
          [2860, 3534],
          [2860, 3537],
          [2865, 3537],
          [2866, 3536],
          [2867, 3536],
          [2868, 3537],
          [2871, 3537],
          [2872, 3536],
          [2873, 3536],
          [2874, 3537],
          [2876, 3537],
          [2876, 3539],
          [2877, 3540],
          [2877, 3541],
          [2876, 3542],
          [2876, 3544],
          [2877, 3545],
          [2877, 3548],
          [2876, 3549],
          [2876, 3551],
          [2877, 3552],
          [2877, 3553],
          [2876, 3554],
          [2876, 3556],
          [2874, 3556],
          [2873, 3557],
          [2872, 3557],
          [2871, 3556],
          [2868, 3556],
          [2867, 3557],
          [2866, 3557],
          [2865, 3556],
          [2832, 3556],
        ],
        inMap: true,
      },
    ],
  },
  "Waste Defaced": {
    title: "Waste Defaced",
    file: "Waste_Defaced",
    polygons: [
      {
        coordinates: [
          [1472, 4224],
          [1472, 4352],
          [1536, 4352],
          [1536, 4224],
          [1472, 4224],
        ],
        inMap: false,
      },
    ],
  },
  "Watch Your Step": {
    title: "Watch Your Step",
    file: "Watch_Your_Step",
    polygons: [
      {
        coordinates: [
          [2176, 6080],
          [2368, 6080],
          [2368, 5952],
          [2432, 5952],
          [2432, 6080],
          [2624, 6080],
          [2624, 5760],
          [2176, 5760],
          [2176, 6080],
        ],
        inMap: false,
      },
    ],
  },
  "Waterfall ": {
    title: "Waterfall ",
    file: "Waterfall_(music_track)",
    polygons: [
      {
        coordinates: [
          [2496, 9792],
          [2496, 9856],
          [2560, 9856],
          [2560, 9792],
          [2496, 9792],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2496, 3392],
          [2496, 3456],
          [2560, 3456],
          [2560, 3392],
          [2496, 3392],
        ],
        inMap: true,
      },
    ],
  },
  Waterlogged: {
    title: "Waterlogged",
    file: "Waterlogged",
    polygons: [
      {
        coordinates: [
          [2056, 5024],
          [2056, 5056],
          [2112, 5056],
          [2112, 5024],
          [2056, 5024],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3456, 3392],
          [3456, 3456],
          [3584, 3456],
          [3584, 3392],
          [3456, 3392],
        ],
        inMap: true,
      },
    ],
  },
  "Way of the Enchanter": {
    title: "Way of the Enchanter",
    file: "Way_of_the_Enchanter",
    polygons: [
      {
        coordinates: [
          [2304, 10368],
          [2336, 10368],
          [2336, 10352],
          [2368, 10352],
          [2368, 10304],
          [2304, 10304],
          [2304, 10368],
        ],
        inMap: false,
      },
    ],
  },
  "Way of the Wyrm": {
    title: "Way of the Wyrm",
    file: "Way_of_the_Wyrm",
    polygons: [
      {
        coordinates: [
          [1216, 10112],
          [1216, 10304],
          [1356, 10304],
          [1356, 10255],
          [1369, 10255],
          [1369, 10112],
          [1216, 10112],
        ],
        inMap: false,
      },
    ],
  },
  Wayward: {
    title: "Wayward",
    file: "Wayward",
    polygons: [
      {
        coordinates: [
          [2432, 9344],
          [2432, 9472],
          [2496, 9472],
          [2496, 9344],
          [2432, 9344],
        ],
        inMap: false,
      },
    ],
  },
  "We are the Fairies": {
    title: "We are the Fairies",
    file: "We_are_the_Fairies",
    polygons: [
      {
        coordinates: [
          [2048, 4800],
          [2048, 4864],
          [2112, 4864],
          [2112, 4800],
          [2048, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Welcome to my Nightmare": {
    title: "Welcome to my Nightmare",
    file: "Welcome_to_my_Nightmare",
    polygons: [
      {
        coordinates: [
          [3264, 4416],
          [3264, 4480],
          [3328, 4480],
          [3328, 4416],
          [3264, 4416],
        ],
        inMap: false,
      },
    ],
  },
  "Welcome to the Theatre": {
    title: "Welcome to the Theatre",
    file: "Welcome_to_the_Theatre",
    polygons: [
      {
        coordinates: [
          [3683, 3239],
          [3643, 3239],
          [3638, 3234],
          [3638, 3205],
          [3643, 3200],
          [3683, 3200],
          [3687, 3204],
          [3687, 3211],
          [3699, 3211],
          [3699, 3228],
          [3687, 3228],
          [3687, 3235],
          [3683, 3239],
        ],
        inMap: true,
      },
    ],
  },
  "Well Hallowed Air": {
    title: "Well Hallowed Air",
    file: "Well_Hallowed_Air",
    polygons: [
      {
        coordinates: [
          [2368, 5952],
          [2368, 6016],
          [2432, 6016],
          [2432, 5952],
          [2368, 5952],
        ],
        inMap: false,
      },
    ],
  },
  "Well of Voyage ": {
    title: "Well of Voyage ",
    file: "Well_of_Voyage_(music_track)",
    polygons: [
      {
        coordinates: [
          [1984, 4672],
          [1984, 4736],
          [2048, 4736],
          [2048, 4672],
          [1984, 4672],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2304, 9536],
          [2304, 9664],
          [2368, 9664],
          [2368, 9536],
          [2304, 9536],
        ],
        inMap: false,
      },
    ],
  },
  "What Happens Below...": {
    title: "What Happens Below...",
    file: "What_Happens_Below...",
    polygons: [
      {
        coordinates: [
          [1728, 10112],
          [1728, 10176],
          [1856, 10176],
          [1856, 10112],
          [1728, 10112],
        ],
        inMap: false,
      },
    ],
  },
  "Where Eagles Lair": {
    title: "Where Eagles Lair",
    file: "Where_Eagles_Lair",
    polygons: [
      {
        coordinates: [
          [1920, 4864],
          [1920, 4928],
          [1984, 4928],
          [1984, 4864],
          [1920, 4864],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1984, 4928],
          [1984, 4992],
          [2048, 4992],
          [2048, 4928],
          [1984, 4928],
        ],
        inMap: false,
      },
    ],
  },
  "Wild Isle": {
    title: "Wild Isle",
    file: "Wild_Isle",
    polygons: [
      {
        coordinates: [
          [3136, 3776],
          [3136, 3840],
          [3264, 3840],
          [3264, 3776],
          [3136, 3776],
        ],
        inMap: true,
      },
    ],
  },
  "Wild Side": {
    title: "Wild Side",
    file: "Wild_Side",
    polygons: [
      {
        coordinates: [
          [3008, 3840],
          [3008, 3904],
          [3136, 3904],
          [3136, 3840],
          [3008, 3840],
        ],
        inMap: true,
      },
    ],
  },
  "Wilderness ": {
    title: "Wilderness ",
    file: "Wilderness_(music_track)",
    polygons: [
      {
        coordinates: [
          [3136, 3520],
          [3136, 3584],
          [3200, 3584],
          [3200, 3520],
          [3136, 3520],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3520, 3968],
          [3520, 4160],
          [3328, 4160],
          [3328, 3968],
          [3520, 3968],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3072, 3712],
          [3072, 3776],
          [3136, 3776],
          [3136, 3712],
          [3072, 3712],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2944, 3584],
          [2944, 3648],
          [3008, 3648],
          [3008, 3584],
          [2944, 3584],
        ],
        inMap: true,
      },
    ],
  },
  "Wilderness 2": {
    title: "Wilderness 2",
    file: "Wilderness_2",
    polygons: [
      {
        coordinates: [
          [3008, 3776],
          [3008, 3840],
          [3136, 3840],
          [3136, 3776],
          [3008, 3776],
        ],
        inMap: true,
      },
    ],
  },
  "Wilderness 3": {
    title: "Wilderness 3",
    file: "Wilderness_3",
    polygons: [
      {
        coordinates: [
          [2944, 3712],
          [2944, 3776],
          [3072, 3776],
          [3072, 3712],
          [2944, 3712],
        ],
        inMap: true,
      },
    ],
  },
  Wildwood: {
    title: "Wildwood",
    file: "Wildwood",
    polygons: [
      {
        coordinates: [
          [3131, 3617],
          [3130, 3618],
          [3126, 3618],
          [3126, 3622],
          [3124, 3622],
          [3123, 3623],
          [3123, 3632],
          [3124, 3633],
          [3125, 3633],
          [3125, 3640],
          [3136, 3640],
          [3136, 3648],
          [3072, 3648],
          [3072, 3584],
          [3136, 3584],
          [3136, 3617],
          [3131, 3617],
        ],
        inMap: true,
      },
    ],
  },
  Witching: {
    title: "Witching",
    file: "Witching",
    polygons: [
      {
        coordinates: [
          [3264, 3712],
          [3264, 3776],
          [3392, 3776],
          [3392, 3712],
          [3264, 3712],
        ],
        inMap: true,
      },
    ],
  },
  "Woe of the Wyvern": {
    title: "Woe of the Wyvern",
    file: "Woe_of_the_Wyvern",
    polygons: [
      {
        coordinates: [
          [3018, 9536],
          [3018, 9568],
          [3037, 9568],
          [3038, 9569],
          [3038, 9570],
          [3037, 9571],
          [3037, 9573],
          [3038, 9574],
          [3039, 9574],
          [3040, 9575],
          [3041, 9575],
          [3042, 9574],
          [3043, 9574],
          [3046, 9571],
          [3046, 9569],
          [3051, 9564],
          [3053, 9564],
          [3055, 9562],
          [3058, 9562],
          [3061, 9565],
          [3062, 9565],
          [3064, 9567],
          [3064, 9568],
          [3067, 9571],
          [3067, 9574],
          [3069, 9576],
          [3069, 9580],
          [3068, 9581],
          [3068, 9585],
          [3064, 9589],
          [3064, 9600],
          [3085, 9600],
          [3085, 9536],
          [3018, 9536],
        ],
        inMap: false,
      },
    ],
  },
  Wonder: {
    title: "Wonder",
    file: "Wonder",
    polygons: [
      {
        coordinates: [
          [2944, 3520],
          [2944, 3584],
          [3008, 3584],
          [3008, 3544],
          [2998, 3534],
          [2998, 3528],
          [2994, 3524],
          [2994, 3520],
          [2944, 3520],
        ],
        inMap: true,
      },
    ],
  },
  Wonderous: {
    title: "Wonderous",
    file: "Wonderous",
    polygons: [
      {
        coordinates: [
          [2624, 3328],
          [2624, 3392],
          [2688, 3392],
          [2688, 3328],
          [2624, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Woodland ": {
    title: "Woodland ",
    file: "Woodland_(music_track)",
    polygons: [
      {
        coordinates: [
          [2112, 3200],
          [2112, 3264],
          [2240, 3264],
          [2240, 3200],
          [2112, 3200],
        ],
        inMap: true,
      },
    ],
  },
  "Work Work Work": {
    title: "Work Work Work",
    file: "Work_Work_Work",
    polygons: [
      {
        coordinates: [
          [2640, 3208],
          [2640, 3232],
          [2664, 3232],
          [2664, 3208],
          [2640, 3208],
        ],
        inMap: true,
      },
    ],
  },
  "Workshop ": {
    title: "Workshop ",
    file: "Workshop_(music_track)",
    polygons: [
      {
        coordinates: [
          [3008, 3328],
          [3008, 3392],
          [3072, 3392],
          [3072, 3328],
          [3008, 3328],
        ],
        inMap: true,
      },
    ],
  },
  "Wrath and Ruin": {
    title: "Wrath and Ruin",
    file: "Wrath_and_Ruin",
    polygons: [
      {
        coordinates: [
          [3264, 9856],
          [3296, 9856],
          [3296, 9824],
          [3264, 9824],
          [3264, 9856],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [2944, 5184],
          [2944, 5248],
          [3040, 5248],
          [3040, 5216],
          [3008, 5216],
          [3008, 5184],
          [2944, 5184],
        ],
        inMap: false,
      },
    ],
  },
  Xenophobe: {
    title: "Xenophobe",
    file: "Xenophobe",
    polygons: [
      {
        coordinates: [
          [2880, 4352],
          [2880, 4480],
          [2944, 4480],
          [2944, 4352],
          [2880, 4352],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1856, 4352],
          [1856, 4416],
          [1920, 4416],
          [1920, 4352],
          [1856, 4352],
        ],
        inMap: false,
      },
    ],
  },
  Yesteryear: {
    title: "Yesteryear",
    file: "Yesteryear",
    polygons: [
      {
        coordinates: [
          [3200, 3136],
          [3200, 3200],
          [3264, 3200],
          [3264, 3136],
          [3200, 3136],
        ],
        inMap: true,
      },
    ],
  },
  "Zamorak Zoo": {
    title: "Zamorak Zoo",
    file: "Zamorak_Zoo",
    polygons: [
      {
        coordinates: [
          [2880, 5376],
          [2944, 5376],
          [2944, 5312],
          [2912, 5312],
          [2912, 5336],
          [2904, 5336],
          [2904, 5344],
          [2880, 5344],
          [2880, 5376],
        ],
        inMap: false,
      },
    ],
  },
  "Zanik's Theme": {
    title: "Zanik's Theme",
    file: "Zanik%27s_Theme",
    polygons: [
      {
        coordinates: [
          [3840, 4416],
          [3904, 4416],
          [3904, 4352],
          [3840, 4352],
          [3840, 4416],
        ],
        inMap: false,
      },
    ],
  },
  "Zaros Zeitgeist": {
    title: "Zaros Zeitgeist",
    file: "Zaros_Zeitgeist",
    polygons: [
      {
        coordinates: [
          [2909, 5248],
          [2944, 5248],
          [2944, 5184],
          [2909, 5184],
          [2909, 5248],
        ],
        inMap: false,
      },
    ],
  },
  "Zealot ": {
    title: "Zealot ",
    file: "Zealot_(music_track)",
    polygons: [
      {
        coordinates: [
          [2688, 4800],
          [2688, 4864],
          [2752, 4864],
          [2752, 4800],
          [2688, 4800],
        ],
        inMap: false,
      },
    ],
  },
  "Zogre Dance": {
    title: "Zogre Dance",
    file: "Zogre_Dance",
    polygons: [
      {
        coordinates: [
          [2432, 3008],
          [2432, 3072],
          [2496, 3072],
          [2496, 3008],
          [2432, 3008],
        ],
        inMap: true,
      },
    ],
  },
  Zombiism: {
    title: "Zombiism",
    file: "Zombiism",
    polygons: [
      {
        coordinates: [
          [3776, 2816],
          [3776, 2880],
          [3840, 2880],
          [3840, 2816],
          [3776, 2816],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3776, 9216],
          [3776, 9280],
          [3840, 9280],
          [3840, 9216],
          [3776, 9216],
        ],
        inMap: false,
      },
    ],
  },
  Ascent: {
    title: "Ascent",
    file: "Ascent",
    polygons: [
      {
        coordinates: [
          [1272, 3568],
          [1266, 3562],
          [1266, 3557],
          [1258, 3550],
          [1247, 3550],
          [1242, 3545],
          [1229, 3545],
          [1219, 3555],
          [1219, 3568],
          [1194, 3568],
          [1194, 3555],
          [1199, 3550],
          [1199, 3537],
          [1214, 3522],
          [1225, 3522],
          [1232, 3515],
          [1228, 3511],
          [1211, 3511],
          [1206, 3506],
          [1208, 3504],
          [1214, 3504],
          [1214, 3495],
          [1205, 3495],
          [1205, 3491],
          [1213, 3483],
          [1221, 3483],
          [1227, 3477],
          [1241, 3491],
          [1245, 3487],
          [1255, 3487],
          [1255, 3488],
          [1258, 3488],
          [1258, 3489],
          [1260, 3489],
          [1260, 3490],
          [1267, 3490],
          [1268, 3489],
          [1285, 3489],
          [1285, 3496],
          [1289, 3500],
          [1294, 3500],
          [1303, 3509],
          [1303, 3516],
          [1290, 3516],
          [1290, 3568],
        ],
        inMap: true,
      },
    ],
  },
  Darkmeyer: {
    title: "Darkmeyer",
    file: "Darkmeyer (music track)",
    polygons: [
      {
        coordinates: [
          [3606, 3312],
          [3617, 3312],
          [3617, 3330],
          [3663, 3330],
          [3663, 3334],
          [3668, 3334],
          [3668, 3349],
          [3671, 3349],
          [3671, 3385],
          [3663, 3385],
          [3663, 3392],
          [3636, 3392],
          [3636, 3399],
          [3592, 3399],
          [3592, 3392],
          [3584, 3392],
          [3584, 3333],
          [3594, 3333],
          [3594, 3314],
          [3606, 3314],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [3615, 3365],
          [3615, 3359],
          [3621, 3359],
          [3626, 3354],
          [3632, 3354],
          [3637, 3359],
          [3637, 3365],
          [3632, 3370],
          [3626, 3370],
          [3621, 3365],
        ],
        inMap: true,
      },
    ],
  },
  Dreamstate: {
    title: "Dreamstate",
    file: "Dreamstate",
    polygons: [
      {
        coordinates: [
          [1728, 5056],
          [1728, 5120],
          [1792, 5120],
          [1792, 5056],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [1744, 5072],
          [1744, 5104],
          [1776, 5104],
          [1776, 5072],
        ],
        inMap: false,
      },
    ],
  },
  "Dwarven Domain": {
    title: "Dwarven Domain",
    file: "Dwarven_Domain",
    polygons: [
      {
        coordinates: [
          [1555, 3860],
          [1555, 3835],
          [1556, 3835],
          [1556, 3834],
          [1557, 3834],
          [1557, 3833],
          [1558, 3833],
          [1558, 3832],
          [1559, 3832],
          [1559, 3831],
          [1560, 3831],
          [1560, 3830],
          [1561, 3830],
          [1561, 3829],
          [1562, 3829],
          [1562, 3812],
          [1575, 3799],
          [1584, 3799],
          [1586, 3797],
          [1586, 3785],
          [1587, 3785],
          [1587, 3784],
          [1588, 3784],
          [1588, 3783],
          [1590, 3783],
          [1590, 3782],
          [1592, 3782],
          [1592, 3781],
          [1594, 3781],
          [1594, 3780],
          [1595, 3780],
          [1596, 3779],
          [1598, 3779],
          [1598, 3776],
          [1597, 3775],
          [1598, 3774],
          [1584, 3770],
          [1584, 3750],
          [1569, 3743],
          [1549, 3743],
          [1549, 3730],
          [1548, 3730],
          [1548, 3729],
          [1547, 3729],
          [1547, 3728],
          [1546, 3728],
          [1546, 3727],
          [1540, 3713],
          [1540, 3712],
          [1534, 3712],
          [1524, 3722],
          [1499, 3733],
          [1490, 3733],
          [1486, 3731],
          [1476, 3731],
          [1471, 3736],
          [1462, 3736],
          [1458, 3732],
          [1434, 3732],
          [1430, 3728],
          [1406, 3728],
          [1406, 3740],
          [1430, 3740],
          [1430, 3754],
          [1438, 3754],
          [1438, 3758],
          [1431, 3758],
          [1431, 3762],
          [1434, 3765],
          [1434, 3767],
          [1433, 3767],
          [1433, 3780],
          [1420, 3793],
          [1420, 3804],
          [1431, 3804],
          [1431, 3807],
          [1440, 3807],
          [1440, 3812],
          [1443, 3812],
          [1443, 3818],
          [1445, 3818],
          [1445, 3823],
          [1446, 3823],
          [1446, 3826],
          [1448, 3826],
          [1448, 3831],
          [1453, 3831],
          [1453, 3836],
          [1456, 3836],
          [1456, 3845],
          [1470, 3845],
          [1470, 3840],
          [1528, 3840],
          [1528, 3860],
        ],
        inMap: true,
      },
    ],
  },
  Emperor: {
    title: "Emperor",
    file: "Emperor",
    polygons: [
      {
        coordinates: [
          [2880, 3264],
          [2944, 3264],
          [2944, 3195],
          [2939, 3195],
          [2934, 3200],
          [2880, 3200],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2923, 3240],
          [2927, 3240],
          [2927, 3239],
          [2928, 3238],
          [2930, 3238],
          [2932, 3240],
          [2937, 3240],
          [2937, 3238],
          [2938, 3237],
          [2940, 3237],
          [2941, 3238],
          [2941, 3258],
          [2923, 3258],
          [2923, 3257],
          [2921, 3255],
          [2921, 3253],
          [2923, 3251],
        ],
        inMap: true,
      },
    ],
  },
  "Getting Down to Business": {
    title: "Getting Down to Business",
    file: "Getting_Down_to_Business",
    polygons: [
      {
        coordinates: [
          [1356, 3757],
          [1339, 3757],
          [1324, 3772],
          [1318, 3772],
          [1314, 3768],
          [1304, 3768],
          [1300, 3772],
          [1264, 3772],
          [1240, 3796],
          [1184, 3796],
          [1184, 3712],
          [1280, 3712],
          [1280, 3690],
          [1301, 3690],
          [1306, 3695],
          [1320, 3695],
          [1323, 3698],
          [1325, 3698],
          [1328, 3701],
          [1328, 3702],
          [1330, 3702],
          [1330, 3705],
          [1336, 3705],
          [1336, 3706],
          [1337, 3706],
          [1337, 3707],
          [1339, 3707],
          [1339, 3709],
          [1340, 3709],
          [1340, 3710],
          [1341, 3710],
          [1341, 3713],
          [1344, 3716],
          [1346, 3716],
          [1346, 3718],
          [1349, 3718],
          [1349, 3724],
          [1354, 3724],
          [1354, 3725],
          [1358, 3725],
          [1358, 3727],
          [1359, 3727],
          [1359, 3730],
          [1360, 3730],
          [1360, 3733],
          [1362, 3735],
          [1362, 3739],
          [1361, 3740],
          [1361, 3742],
          [1360, 3742],
          [1360, 3745],
          [1357, 3745],
          [1357, 3749],
          [1356, 3749],
          [1356, 3750],
          [1355, 3750],
          [1355, 3752],
          [1356, 3752],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [1245, 3728],
          [1245, 3723],
          [1253, 3723],
          [1253, 3728],
          [1255, 3728],
          [1255, 3726],
          [1261, 3720],
          [1270, 3720],
          [1275, 3725],
          [1275, 3735],
          [1270, 3740],
          [1267, 3740],
          [1267, 3743],
          [1269, 3745],
          [1269, 3751],
          [1268, 3752],
          [1262, 3752],
          [1261, 3751],
          [1261, 3746],
          [1263, 3744],
          [1263, 3740],
          [1260, 3740],
          [1255, 3735],
          [1255, 3732],
          [1253, 3732],
          [1253, 3738],
          [1256, 3738],
          [1256, 3744],
          [1251, 3744],
          [1251, 3746],
          [1256, 3746],
          [1259, 3749],
          [1259, 3761],
          [1256, 3764],
          [1242, 3764],
          [1239, 3761],
          [1238, 3761],
          [1236, 3763],
          [1232, 3763],
          [1232, 3766],
          [1226, 3766],
          [1226, 3763],
          [1223, 3763],
          [1220, 3760],
          [1220, 3750],
          [1223, 3747],
          [1226, 3747],
          [1226, 3744],
          [1232, 3744],
          [1232, 3747],
          [1236, 3747],
          [1238, 3749],
          [1239, 3749],
          [1239, 3748],
          [1241, 3746],
          [1247, 3746],
          [1247, 3744],
          [1242, 3744],
          [1242, 3738],
          [1245, 3738],
          [1245, 3732],
          [1244, 3732],
          [1243, 3732],
          [1243, 3735],
          [1238, 3740],
          [1228, 3740],
          [1223, 3735],
          [1223, 3726],
          [1229, 3720],
          [1238, 3720],
          [1243, 3725],
          [1243, 3728],
        ],
        inMap: true,
      },
    ],
  },
  "On the Frontline": {
    title: "On the Frontline",
    file: "On_the_Frontline",
    polygons: [
      {
        coordinates: [
          [1356, 3757],
          [1365, 3757],
          [1365, 3771],
          [1395, 3771],
          [1395, 3758],
          [1407, 3746],
          [1407, 3743],
          [1406, 3743],
          [1406, 3740],
          [1406, 3728],
          [1415, 3728],
          [1415, 3688],
          [1411, 3688],
          [1402, 3679],
          [1402, 3678],
          [1401, 3678],
          [1401, 3677],
          [1400, 3677],
          [1400, 3676],
          [1399, 3676],
          [1399, 3675],
          [1398, 3675],
          [1398, 3674],
          [1397, 3674],
          [1397, 3673],
          [1396, 3673],
          [1396, 3672],
          [1395, 3672],
          [1387, 3664],
          [1344, 3664],
          [1344, 3671],
          [1332, 3683],
          [1332, 3684],
          [1331, 3684],
          [1331, 3685],
          [1330, 3685],
          [1330, 3686],
          [1329, 3686],
          [1329, 3687],
          [1328, 3687],
          [1320, 3695],
          [1323, 3698],
          [1325, 3698],
          [1328, 3701],
          [1328, 3702],
          [1330, 3702],
          [1330, 3705],
          [1336, 3705],
          [1336, 3706],
          [1337, 3706],
          [1337, 3707],
          [1339, 3707],
          [1339, 3709],
          [1340, 3709],
          [1340, 3710],
          [1341, 3710],
          [1341, 3713],
          [1344, 3716],
          [1346, 3716],
          [1346, 3718],
          [1349, 3718],
          [1349, 3724],
          [1354, 3724],
          [1354, 3725],
          [1358, 3725],
          [1358, 3727],
          [1359, 3727],
          [1359, 3730],
          [1360, 3730],
          [1360, 3733],
          [1362, 3735],
          [1362, 3739],
          [1361, 3740],
          [1361, 3742],
          [1360, 3742],
          [1360, 3745],
          [1357, 3745],
          [1357, 3749],
          [1356, 3749],
          [1356, 3750],
          [1355, 3750],
          [1355, 3752],
          [1356, 3752],
        ],
        inMap: true,
      },
    ],
  },
  Prifddinas: {
    title: "Prifddinas",
    file: "Prifddinas",
    polygons: [
      {
        coordinates: [
          [3200, 6016],
          [3200, 6144],
          [3328, 6144],
          [3328, 6016],
          [3200, 6016],
        ],
        inMap: false,
      },
    ],
  },
  "Title Fight": {
    title: "Title Fight",
    file: "Title_Fight",
    polygons: [
      {
        coordinates: [
          [3200, 9728],
          [3200, 9792],
          [3136, 9792],
          [3136, 9728],
        ],
        inMap: false,
      },
      {
        coordinates: [
          [3182, 9758],
          [3182, 9759],
          [3181, 9760],
          [3181, 9763],
          [3180, 9764],
          [3178, 9764],
          [3178, 9763],
          [3177, 9762],
          [3176, 9762],
          [3174, 9764],
          [3172, 9764],
          [3171, 9765],
          [3167, 9765],
          [3166, 9764],
          [3163, 9764],
          [3161, 9762],
          [3160, 9762],
          [3158, 9760],
          [3158, 9757],
          [3160, 9755],
          [3161, 9755],
          [3163, 9753],
          [3166, 9753],
          [3167, 9752],
          [3171, 9752],
          [3172, 9753],
          [3174, 9753],
          [3176, 9755],
          [3177, 9755],
          [3178, 9754],
          [3178, 9753],
          [3180, 9753],
          [3181, 9754],
          [3181, 9757],
        ],
        inMap: false,
      },
    ],
  },
};
