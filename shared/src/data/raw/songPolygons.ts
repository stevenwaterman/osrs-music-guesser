import type { Coordinate, Polygon } from "../../coordinates.js";

type PolygonWithoutCenter = Omit<Polygon, "center">;
function rectangle(
  left: number,
  top: number,
  right: number,
  bottom: number
): PolygonWithoutCenter {
  const minX = Math.min(left, right);
  const maxX = Math.max(left, right);
  const minY = Math.min(top, bottom);
  const maxY = Math.max(top, bottom);
  const topLeft: Coordinate = [minX, maxY];
  const bottomLeft: Coordinate = [minX, minY];
  const bottomRight: Coordinate = [maxX, minY];
  const topRight: Coordinate = [maxX, maxY];
  return {
    coordinates: [topLeft, bottomLeft, bottomRight, topRight],
    inMap: false,
  };
}

// Banned transport:
// - keldagrim minecart to dwarvern mine
// - keldagrim minecart to white wolf mountain
// - keldagrim - dorgesh kaan train
// - passageway between catacombs and forthos
// - passageway between dorgesh kaan and kalphite lair
// - fairy rings
// - crop circles (puro puro is in the lumbridge swamp shed)
// - nightmare zone

const darknessAmbush = rectangle(3587, 3334, 3594, 3326);
const sotf = rectangle(3727, 3321, 3731, 3317);
const corsairCoveDungeon = [
  // corsair north
  rectangle(2481, 2893, 2485, 2889),
  // corsair south
  rectangle(2521, 2863, 2525, 2859),
];
const mythsDungeon = [
  // myths
  rectangle(2455, 2849, 2459, 2845),
  // wrath altar
  rectangle(2447, 2817, 2443, 2821),
  ...corsairCoveDungeon,
];
const brimhavenDungeon = [
  // north
  rectangle(2742, 3156, 2746, 3152),
  // south
  rectangle(2762, 3060, 2758, 3064),
];
const karuulmSlayerDungeon = rectangle(1314, 3804, 1308, 3810);
const zanaris = rectangle(3202, 3171, 3206, 3167);
const clockTower = rectangle(2567, 3227, 2571, 3231);
const ourania = rectangle(2450, 3229, 2454, 3233);
const varrockStatue = rectangle(3280, 3465, 3287, 3471);
const godWars = rectangle(2916, 3750, 2922, 3744);
const taverleyDungeon = [
  // main entrance
  rectangle(2886, 3395, 2882, 3399),
  // fire obelisk entrance
  rectangle(2840, 3426, 2844, 3422),
];
const tob = rectangle(3675, 3221, 3679, 3217);
const wildyGodWars = rectangle(3019, 3737, 3015, 3741);
const barbAssault = rectangle(2538, 3575, 2529, 3566);
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
const braindeath = rectangle(3676, 3540, 3683, 3533);
const brimhavenAgility = rectangle(2807, 3196, 2811, 3192);
const corp = rectangle(3201, 3683, 3205, 3679);
const unferth = rectangle(2916, 3559, 2920, 3555);
const nightmareSouth = rectangle(3726, 3302, 3730, 3298);
const nightmare = [
  // normal entrance
  nightmareSouth,
  // crombwich manor
  rectangle(3723, 3358, 3727, 3354),
];
const ancientCavern = rectangle(2510, 3510, 2514, 3506);
const werewolfAgility = rectangle(3541, 3463, 3545, 3459);
const sophanemDungeon = rectangle(3313, 2799, 3317, 2795);
const ds2 = rectangle(2455, 2870, 2459, 2866);
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
const experiments = [
  // graves
  rectangle(3574, 3528, 3578, 3524),
  // north - mausoleum
  rectangle(3502, 3572, 3507, 3569),
];
const pollnivneachSmokeDungeon = rectangle(3308, 2964, 3312, 2960);
const mimic = rectangle(1642, 3573, 1649, 3570);
const phasmatysBrewery = rectangle(3678, 3500, 3682, 3496);
const brimstail = rectangle(2401, 3421, 2405, 3417);
const keldagrim = [
  // main entrance
  rectangle(2729, 3715, 2733, 3711),
  // GE
  rectangle(3138, 3506, 3142, 3502),
  // ice entrance
  rectangle(2794, 3720, 2798, 3716),
];
const forthos = [
  // west
  rectangle(1668, 3569, 1672, 3565),
  // east
  rectangle(1700, 3576, 1704, 3572),
];
const cabinFever = rectangle(3673, 3498, 3677, 3494);
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
const swampCavesDorgeshKaanTears = [
  // Lumbridge castle basement
  rectangle(3207, 3220, 3211, 3216),
  // Lumbridge swamp
  rectangle(3167, 3174, 3171, 3170),
  // Watermill
  rectangle(3225, 3287, 3237, 3278),
];
const deepWildyDungeon = rectangle(3043, 3926, 3047, 3922);
const ardySewerWest = rectangle(2585, 3237, 2589, 3233);
const elenaPrisonPlagueCity = rectangle(2534, 3271, 2538, 3267);
const carnelianBasement = rectangle(2569, 3269, 2572, 3266);
const varrockWestBankVault = rectangle(3186, 3436, 3192, 3433);
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
const recruitmentDrive = rectangle(2961, 3340, 2965, 3336);
const clanWars = rectangle(3126, 3625, 3132, 3618);
const lms = rectangle(3138, 3646, 3146, 3632);
const clanHall = rectangle(3183, 3474, 3188, 3468);
const wizardTowerBasement = rectangle(3103, 3164, 3106, 3159);
const burthorpeGamesRoom = rectangle(2899, 3569, 2902, 3566);
const chaosAltar = rectangle(3053, 3597, 3068, 3584);
const tasteOfHopeSpying = rectangle(3653, 3239, 3659, 3234);
const serafinaBasement = rectangle(3592, 3275, 3595, 3272);
const sotfSpying = rectangle(3754, 3303, 3709, 3328);
const damienLeucurte = rectangle(3725, 3356, 3728, 3353);
const miscDungeon = [
  // misc
  rectangle(2507, 3848, 2511, 3844),
  // etc
  rectangle(2618, 3867, 2622, 3863),
];
const heroesGuild = rectangle(2890, 3509, 2894, 3505);
const witchsBasement = rectangle(2906, 3477, 2908, 3475);
const towerOfLife = rectangle(2648, 3215, 2652, 3211);
const towerOfLifeUpstairs = rectangle(2644, 3222, 2647, 3218);
const wrathAltar = rectangle(2443, 2827, 2449, 2823);
const rabbitCave = rectangle(2263, 3420, 2266, 3417);
const undergroundPass = [
  // west
  rectangle(2311, 3217, 2315, 3213),
  // east
  rectangle(2432, 3317, 2436, 3313),
  // mourner tunnel entrance
  rectangle(2542, 3327, 2545, 3324),
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
const barrowsCrypts = [
  // Dharrock
  rectangle(3555, 3300, 3559, 3295),
  // Verac
  rectangle(3572, 3300, 3577, 3295),
  // Ahrim
  rectangle(3562, 3292, 3567, 3286),
  // Torag
  rectangle(3552, 3284, 3556, 3281),
  // Karil
  rectangle(3563, 3279, 3569, 3273),
  // Guthan
  rectangle(3574, 3284, 3580, 3280),
];
const chasmOfFire = rectangle(1431, 3672, 1435, 3668);
const mogreCamp = rectangle(2666, 3165, 2671, 3161);
const templeTrekkingNorthOnly = rectangle(3431, 3491, 3440, 3484);
const templeTrekking = [
  // north
  templeTrekkingNorthOnly,
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
const mta = rectangle(3358, 3324, 3369, 3313); // TODO make one per room, with small squares
const witchaven = rectangle(2694, 3285, 2698, 3281);
const penguin = rectangle(2623, 4056, 2679, 3999);
const dream = rectangle(2071, 3914, 2075, 3910);
const trollArenaPassage = [
  // north
  rectangle(2905, 3656, 2910, 3651),
  // south
  rectangle(2901, 3646, 2907, 3641),
];
const trollIceTunnel = [
  // north
  rectangle(2769, 3871, 2784, 3862),
  // south
  rectangle(2817, 3746, 2828, 3737),
];
const trollStronghold = [
  // north
  rectangle(2837, 3692, 2841, 3688),
  // middle
  rectangle(2829, 3679, 2833, 3675),
  // south
  rectangle(2825, 3649, 2829, 3645),
];
const observatoryDungeon = [
  // south west
  rectangle(2435, 3165, 2439, 3161),
  // north east
  rectangle(2457, 3188, 2461, 3184),
];
const camdozaal = rectangle(2997, 3495, 3001, 3491);
const roguesDen = rectangle(2904, 3539, 2908, 3535);
const glod = rectangle(2921, 3427, 2924, 3424);
const soulsBane = rectangle(3307, 3452, 3311, 3448);
const apeAtollDungeonMM1 = rectangle(2761, 2705, 2765, 2701);
const cox = rectangle(1231, 3575, 1235, 3571);
const lletya = rectangle(2310, 3198, 2363, 3143);
const uzer = rectangle(3491, 3093, 3496, 3088);
const beneathCursedSands = rectangle(3406, 2850, 3410, 2846);
const fossilIslandWyverns = [
  // north
  rectangle(3676, 3856, 3680, 3852),
  // south
  rectangle(3744, 3781, 3748, 3777),
];
const giantsFoundry = rectangle(3359, 3152, 3363, 3148);
const sorceressGarden = rectangle(3319, 3143, 3323, 3139);
const gauntlet = rectangle(2202, 3366, 2206, 3362);
const genieCave = rectangle(3370, 2907, 3375, 2902);
const natureGrotto = rectangle(3438, 3339, 3442, 3335);
const goblinVillage = rectangle(2944, 3516, 2970, 3489);
const hamHideout = rectangle(3163, 3254, 3167, 3250);
const bodyAltar = rectangle(3049, 3447, 3056, 3440);
const saba = rectangle(2851, 3579, 2856, 3574);
const yarlo = rectangle(3237, 3399, 3243, 3392);
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
  rectangle(2542, 3100, 2546, 3095),
  // prifddinas
  rectangle(2213, 3327, 2217, 3323),
];
const paterdomus = [
  // north
  rectangle(3403, 3508, 3407, 3504),
  // south
  rectangle(3420, 3486, 3424, 3482),
];
const xericsLookoutBasement = rectangle(1588, 3528, 1592, 3524);
const icthlarinPyramid = rectangle(3288, 2780, 3302, 2766);
const kalphiteLair = rectangle(3225, 3110, 3229, 3106);
const kalphiteCave = rectangle(3318, 3124, 3322, 3120);
const toa = rectangle(3356, 2713, 3360, 2709);
const morytaniaSpiderNest = rectangle(3655, 3411, 3659, 3407);
const yama = rectangle(1808, 3692, 1824, 3688);
const keepLeFaye = rectangle(2763, 3409, 2776, 3393);
const fossilIslandUnderwater = rectangle(3764, 3900, 3768, 3896);
const shades = rectangle(3483, 3323, 3487, 3319);
const jormungandPrison = rectangle(2463, 4014, 2467, 4010);
const enakhrasTemple = rectangle(3187, 2929, 3195, 2922);
const meiyerditchHideout = rectangle(3637, 3252, 3641, 3248);
const oldManRal = rectangle(3604, 3217, 3607, 3214);
const volcanicMine = rectangle(3811, 3812, 3818, 3806);
const mosLeHarmlessCave = rectangle(3746, 2975, 3750, 2971);
const desertMiningCamp = rectangle(3299, 3038, 3304, 3034);
const courthouse = rectangle(2736, 3472, 2740, 3468);
const quidamortemCave = rectangle(1212, 3561, 1216, 3557);
const eadgarsCave = rectangle(2886, 3681, 2896, 3673);
const giantMoleCave = rectangle(2984, 3389, 3015, 3370);
const jatizsoMine = rectangle(2395, 3814, 2399, 3810);
const fremennikSlayerCave = rectangle(2795, 3617, 2799, 3613);
const karamjanTemple = rectangle(2939, 2892, 2946, 2899);
const mindAltar = rectangle(2979, 3516, 2985, 3511);
const crashSiteCavern = rectangle(2431, 3518, 2472, 3547);
const krukDungeon = rectangle(2712, 2791, 2717, 2786);
const mouseHole = rectangle(2901, 3468, 2904, 3466);
const oldSchoolMuseum = [
  // west ladder
  rectangle(3037, 3385, 3039, 3383),
  // east ladder
  rectangle(3053, 3385, 3055, 3383),
];
const prif = rectangle(2181, 3386, 2297, 3269);
const grandTreeTunnels = rectangle(2461, 3498, 2465, 3494);
const swensenPuzzle = rectangle(2643, 3659, 2646, 3657);
const iceTrollCaves = [
  // west
  rectangle(2314, 3896, 2318, 3892),
  // east
  rectangle(2399, 3891, 2403, 3887),
];
const varrockSewers = [
  // edgeville
  rectangle(3095, 3471, 3099, 3467),
  // shed
  rectangle(3114, 3454, 3118, 3450),
  // air obelisk
  rectangle(3086, 3573, 3090, 3569),
  // bear
  rectangle(3228, 3506, 3232, 3502),
  // entrance
  rectangle(3235, 3460, 3239, 3456),
];
const ahZaRhoon = rectangle(2918, 2996, 2926, 3004);
const lighthouseBasement = rectangle(2507, 3646, 2511, 3642);
const lizardmenTemple = [
  // north
  rectangle(1310, 3688, 1314, 3684),
  // west
  rectangle(1290, 3659, 1294, 3655),
  // south
  rectangle(1312, 3665, 1316, 3661),
  // east
  rectangle(1328, 3671, 1332, 3667),
];
const shadowDungeon = rectangle(2545, 3422, 2548, 3419);
const ectofunctus = rectangle(3650, 3521, 3654, 3517);
const elementalWorkshop = rectangle(2709, 3499, 2712, 3496);
const fireAltar = rectangle(3309, 3257, 3315, 3251);
const jimmyDazzler = rectangle(2560, 3320, 2564, 3317);
const varrockRatPits = rectangle(3265, 3402, 3269, 3398);
const castleWarsLobby = rectangle(2438, 3094, 2442, 3090);
const kourendCastleAKD = rectangle(1619, 3686, 1654, 3661);
const ungaelLab = rectangle(2241, 4094, 2250, 4086);
const death = [
  // lumbridge
  rectangle(3236, 3194, 3240, 3190),
  // falador
  whiteKnightsCrypt,
  // seers
  rectangle(2711, 3468, 2715, 3464),
  // edgeville
  rectangle(3095, 3479, 3099, 3475),
  // ferox
  rectangle(3124, 3634, 3128, 3630),
  // kourend
  rectangle(1617, 3664, 1621, 3660),
  // prif
  rectangle(2230, 3368, 2234, 3364),
];
const revs = [
  // north
  rectangle(3123, 3834, 3127, 3830),
  // middle
  rectangle(3066, 3743, 3070, 3739),
  // south
  rectangle(3073, 3657, 3077, 3653),
];
const lawAltar = rectangle(2854, 3382, 2860, 3376);
const brineRatCavern = rectangle(2747, 3736, 2750, 3731);
const runeEssenceMine = [
  // aubury varrock
  rectangle(3251, 3405, 3255, 3401),
  // sedridor wizards tower
  wizardTowerBasement,
  // distentor wizards guild
  rectangle(2583, 3094, 2597, 3081),
  // cromperty ardy
  rectangle(2680, 3326, 2684, 3322),
  // brimstail gnome
  brimstail
];
const sourhogCave = rectangle(3148, 3349, 3152, 3345);
const ancientsPyramid = [
  // top entrance
  rectangle(3232, 2899, 3235, 2896),
  // back entrance
  rectangle(3232, 2889, 3235, 2886)
];
const tutorialIslandCave = rectangle(3086, 3121, 3090, 3117);
const woodcuttingGuildCave = rectangle(1602, 3510, 1606, 3506);
const boatPartDS2 = rectangle(2637, 3700, 2644, 3694);
const scorpia = [
  // north
  rectangle(3229, 3954, 3233, 3950),
  // south
  rectangle(3230, 3938, 3234, 3934),
  // east
  rectangle(3242, 3951, 3246, 3947),
];
const ghorrockDungeon = rectangle(2865, 3943, 2869, 3939);
const airAltar = rectangle(2981, 3296, 2989, 3288);
const iorwerthDungeon = rectangle(2199, 3297, 2206, 3290);
const lumbridgeWaterMillSigmundFight = rectangle(3225, 3286, 3236, 327);
const lletyaCouncilHutGrandLibrary = rectangle(2349, 3175, 2357, 3168);
const riverElidWaterfall = rectangle(3369, 3134, 3373, 3130);
const burghDeRottBasement = rectangle(3487, 3233, 3491, 3229);
const isleOfSoulsDungeon = rectangle(2307, 2917, 2311, 2921);
const shaikahan = rectangle(2893, 3109, 2925, 3082);
const zalcano = rectangle(2253, 3311, 2263, 3301);
const asgarnianIceDungeon = rectangle(3005, 3152, 3009, 3148);
const daeyaltEssenceMine = rectangle(3630, 3342, 3634, 3338);
const myrequeHideoutCanifis = rectangle(3507, 3450, 3511, 3446);
const draynorManorUpstairsKillerwatts = rectangle(3107, 3365, 3110, 3362);
const crabclawCaves = rectangle(1642, 3451, 1646, 3447);
const towerofMagic = rectangle(1563, 3800, 1596, 3838);
const viyeldiCaves = rectangle(2778, 2938, 2784, 2933);
const karamjaShipYard = rectangle(2944, 3068, 3005, 3013);
const verSinhaza = rectangle(3655, 3224, 3678, 3215);
const grandTreeUpstairs = rectangle(2462, 3498, 2468, 3493);
const slayerTower = rectangle(3403, 3579, 3453, 3530);
const marimboDungeon = rectangle(2804, 2786, 2806, 2784);
const baxtorianWaterfallDungeon = rectangle(2509, 3467, 2513, 3461);
const draynorManorCellar = rectangle(3113, 3359, 3117, 3355);
const pyramidPlunder = rectangle(3282, 2801, 3294, 2785);
const goblinVillageKitchen = rectangle(2958, 3505, 2961, 3508);
const fishingTrawler = rectangle(2666, 3165, 2670, 3161);
const weissMakingFriendsSneakCave = rectangle(2852, 3946, 2856, 3942);
const kraken = rectangle(2276, 3613, 2280, 3609);
const entranaDungeon = rectangle(2818, 3376, 2822, 3372);
const wildyAgilityDungeon = rectangle(3003, 3965, 3007, 3961);
const natureAltar = rectangle(2860, 3028, 2876, 3012);
const digsiteDT2 = rectangle(3381, 3421, 3386, 3416);
const balloonTransport = [
  // entrana
  rectangle(2805, 3358, 2812, 3354),
  // taverley
  rectangle(2935, 3424, 2939, 3420),
  // crafting guild
  rectangle(2920, 3303, 2924, 3299),
  // varrock
  rectangle(3297, 3482, 3301, 3478),
  // castle wars
  rectangle(2457, 3110, 2461, 3106),
  // grand tree
  rectangle(2477, 3461, 2481, 3457),
];
const ancientVaultDT2 = rectangle(3500, 2978, 3519, 2965);
const digsiteDungeon = [
  // east
  rectangle(3366, 3431, 3373, 3422),
  // west
  rectangle(3349, 3419, 3356, 3414),
];
const championsChallenge = rectangle(3187, 3357, 3191, 3353);
const shayzienCrypt = rectangle(1481, 3551, 1485, 3547);
const koscheiFightFremTrials = rectangle(2661, 3696, 2669, 3689);
const poisonWasteDungeon = rectangle(2317, 3096, 2325, 3105);
const hallowedSepulchre = rectangle(3652, 3388, 3656, 3384);
const jiggigZogreDungeon = rectangle(2483, 3045, 2487, 3041);
const leafTraps = [
  // north
  rectangle(2275, 3263, 2277, 3261),
  // west
  rectangle(2207, 3204, 2209, 3202),
  // east
  rectangle(2265, 3204, 2267, 3202),
  // south
  rectangle(2272, 3175, 2274, 3173),
];
const warrensPortPiscarilius = rectangle(1811, 3747, 1815, 3743);
const jungleEagle = rectangle(2508, 2932, 2515, 2925);
const polarEagle = rectangle(2742, 3834, 2750, 3827);
const eaglesPeak = rectangle(2326, 3496, 2331, 3493);
const desertEagle = rectangle(3402, 3160, 3406, 3156);
const eaglesTransportWithoutJungle = [eaglesPeak, polarEagle, desertEagle];
const eaglesTransportWithoutPolar = [eaglesPeak, desertEagle, jungleEagle];
const eaglesTransport = [eaglesPeak, polarEagle, desertEagle, jungleEagle];
const waterAltar = rectangle(3181, 3167, 3186, 3161);
const miscPrinceBrand = rectangle(2497, 3855, 2509, 3845);
const rellekkaLongHall = rectangle(2655, 3686, 2663, 3665);
const vardorvis = rectangle(1120, 3427, 1138, 3409);
const sophanemBobAdventure = rectangle(3282, 2778, 3302, 2797);

const atlasCutscene = [
  // varrock east
  polygon([
    [3248, 3396],
    [3241, 3403],
    [3241, 3426],
    [3237, 3428],
    [3226, 3428],
    [3226, 3431],
    [3242, 3431],
    [3245, 3426],
    [3245, 3403],
    [3250, 3399],
    [3251, 3396],
  ]),
  // barb village west
  rectangle(3072, 3425, 3077, 3419),
  // barb village north
  rectangle(3074, 3435, 3082, 3431),
  // varrock center
  rectangle(3210, 3401, 3214, 3468),
  // west of barb village
  polygon([
    [3071, 3415],
    [3040, 3415],
    [3031, 3425],
    [3015, 3425],
    [3015, 3429],
    [3031, 3429],
    [3041, 3418],
    [3071, 3418],
  ]),
];
const pathOfGlouphrieCutscenes = [
  // tree village throne north ladder
  rectangle(2524, 3173, 2526, 3171),
  // south ladder
  rectangle(2524, 3163, 2526, 3161),
  // stronghold entrance
  rectangle(2460, 3385, 2466, 3379),
  // grand tree
  rectangle(2461, 3500, 2469, 3490),
];
const barrelchestFight = rectangle(3804, 2849, 3817, 2840);
const varrockPalaceUpstairs = [
  // west
  rectangle(3202, 3500, 3205, 3496),
  // east
  rectangle(3218, 3499, 3221, 3495),
  // south
  rectangle(3212, 3476, 3215, 3473),
];
const varrockSquare = rectangle(3205, 3438, 3225, 3421);
const dragonSlayerCrandorCrash = rectangle(2840, 3238, 2870, 3217);
const delrith = rectangle(3220, 3377, 3235, 3361);
const castleDrakanCourtyard = rectangle(3560, 3369, 3590, 3349);
const icyeneGraveyard = rectangle(3678, 3197, 3716, 3172);
const lumbridgeCastleDiningHall = rectangle(3205, 3227, 3213, 3218);
const mythsGuildGalvek = rectangle(2464, 2850, 2468, 2844);
const entranaBalloon = rectangle(2805, 3358, 2812, 3354);
const jatizsoThroneRoom = rectangle(2404, 3807, 2411, 3800);
const sophanemMenaphosGate = rectangle(3268, 2787, 3280, 2783);
const poisonWasteTree = rectangle(2335, 3109, 2341, 3116);
const cropCircles = [
  rectangle(2948, 3439, 2958, 3449),
  rectangle(2577, 3099, 2587, 3109),
  rectangle(3110, 3268, 3120, 3278),
  rectangle(2973, 3211, 2983, 3221),
  rectangle(3136, 3456, 3146, 3466),
  rectangle(1297, 3706, 1307, 3716),
  rectangle(1733, 3528, 1743, 3538),
  rectangle(3805, 2847, 3815, 2857),
  rectangle(2190, 3397, 2200, 3407),
  rectangle(2814, 3465, 2824, 3475),
  rectangle(2430, 3467, 2440, 3477),
  rectangle(2803, 3195, 2813, 3205),
  rectangle(3698, 2970, 3708, 2980),
  rectangle(2891, 3401, 2901, 3411),
  rectangle(3155, 3294, 3165, 3304),
  rectangle(2642, 3343, 2652, 3353),
  rectangle(3207, 3340, 3217, 3350),
  rectangle(2533, 3840, 2543, 3850),
];
const rellekkaSquare = rectangle(2627, 3683, 2653, 3667);
const jester = rectangle(2334, 3801, 2338, 3798);
const seaTrollQueen = rectangle(2337, 3708, 2352, 3692);
const poisonWaste = rectangle(2321, 3117, 2359, 3081);
const observatory = rectangle(2434, 3169, 2448, 3154);
const wizardTowerUpstairs = rectangle(3102, 3162, 3106, 3158);
const zooknocksHouseGloughRefight = rectangle(2383, 3508, 2386, 3505);
const paterdomusBushes = rectangle(3386, 3486, 3394, 3479);
const weissCentre = rectangle(2866, 3943, 2879, 3930);
const varrockWarehouseUpstairs = rectangle(3267, 3378, 3269, 3380);
const gardenOfDeath = [
  // start point
  rectangle(1303, 3480, 1323, 3464),
  // under molch
  rectangle(1361, 3639, 1367, 3632),
  // under xerics shrine
  rectangle(1310, 3619, 1316, 3613),
  // under ruins of morra
  rectangle(1446, 3514, 1452, 3508),
];
const organ = [
  // lumbridge
  rectangle(3240, 3208, 3248, 3204),
  // seers
  rectangle(2690, 3467, 2694, 3459),
  // entrana
  rectangle(2856, 3348, 2858, 3346),
  // paterdomus
  rectangle(3409, 3485, 3412, 3483),
  // tutorial island
  rectangle(3115, 3109, 3118, 3106),
];
const varrockEastGuardFollow = rectangle(3221, 3433, 3263, 3386);
const trollStrongholdRoof = rectangle(2821, 3701, 2834, 3689);
const morytaniaSwampCutscene = rectangle(3535, 3501, 3549, 3491);
const portSarimRatPits = rectangle(3014, 3234, 3020, 3230);
const camelotCastleEastStatue = rectangle(2779, 3509, 2786, 3502);
const sophanemOutsideAltar = rectangle(3302, 2806, 3310, 2799);
const maisasCampRuinsOfUllek = rectangle(3363, 2810, 3382, 2788);
const battleofWestArdougne = [
  // west ardy
  rectangle(2556, 3303, 2514, 3334),
  // ardy castle
  rectangle(2566, 3311, 2590, 3282),
];
const treeGnomeVillageDungeon = rectangle(2531, 3157, 2535, 3153);
const varrockLibrary = rectangle(3206, 3499, 3215, 3489);
const hespori = rectangle(1230, 3731, 1234, 3727);
const morytaniaHespori = rectangle(3500, 3365, 3514, 3349);
const aidOfMyrequeVanstromGadderanks = rectangle(3531, 3214, 3542, 3204);
const sotfVanescula = rectangle(3542, 3521, 3554, 3513);
const ratcatchers = rectangle(3148, 3413, 3152, 3409);
const myrequeLaboratories = [
  // canifis
  myrequeHideoutCanifis,
  // meiyerditch
  rectangle(3641, 3306, 3645, 3303),
];

export const songPolygons: Record<
  string,
  { polygons: PolygonWithoutCenter[] }
> = {
  "7th Realm": {
    polygons: [...mythsDungeon, ...brimhavenDungeon],
  },
  Adventure: {
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
  "Al Kharid": {
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
    polygons: [karuulmSlayerDungeon],
  },
  "All's Fairy in Love & War": {
    polygons: [],
  },
  Alone: {
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
        // TODO this is meant to be a cutout, it doesn't play at the black knight's fortress
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
    polygons: [ourania],
  },
  "Alternative Root": {
    polygons: [varrockStatue],
  },
  "Ambient Jungle": {
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
    polygons: [godWars],
  },
  "The Angel's Fury": {
    polygons: [godWars],
  },
  Anywhere: {
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
    polygons: taverleyDungeon,
  },
  "Arachnids of Vampyrium": {
    polygons: [tob],
  },
  Arboretum: {
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
  Arcane: {
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
    polygons: [godWars],
  },
  Armageddon: {
    polygons: [godWars, wildyGodWars],
  },
  "Army of Darkness": {
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
    polygons: [],
  },
  "Assault and Battery": {
    polygons: [barbAssault],
  },
  "Attack 1": {
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
    polygons: [...tzhaar, lithkren],
  },
  "Attack 3": {
    polygons: [lavaMaze],
  },
  "Attack 4": {
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
    polygons: [kbd, lithkren],
  },
  "Attack 6": {
    polygons: [ogreEnclave],
  },
  Attention: {
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
    polygons: [braindeath],
  },
  Aztec: {
    polygons: [brimhavenAgility],
  },
  "Back to Life": {
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
  "Bandit Camp": {
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
    polygons: [godWars],
  },
  Bane: {
    polygons: [corp],
  },
  "The Bane of Ashihama": {
    polygons: [...nightmare],
  },
  "Barb Wire": {
    polygons: [lithkren, ancientCavern],
  },
  Barbarianism: {
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
    polygons: [werewolfAgility],
  },
  Baroque: {
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
    polygons: [sophanemDungeon],
  },
  "Beneath the Kingdom": {
    polygons: catacombsGiantsDen,
  },
  "Beneath the Stronghold": {
    polygons: [strongholdSlayerCave],
  },
  Beyond: {
    polygons: [...whiteWolfTunnel, ...iceQueen, warriorsGuildBasement],
  },
  "Beyond the Meadow": {
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
    polygons: [braindeath],
  },
  Bloodbath: {
    polygons: [
      ...myrequeLaboratories,
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
    polygons: experiments,
  },
  "Bone Dance": {
    polygons: [
      sotf,
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
    polygons: [pollnivneachSmokeDungeon],
  },
  "Book of Spells": {
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
    polygons: [mimic],
  },
  Breeze: {
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
    polygons: [phasmatysBrewery],
  },
  "Brimstail's Scales": {
    polygons: [brimstail],
  },
  "Bubble and Squeak": {
    polygons: keldagrim,
  },
  "Burning Desire": {
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
  "Cabin Fever": {
    polygons: [cabinFever],
  },
  Camelot: {
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
  "Castle Wars": {
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
    polygons: [goblinCave],
  },
  "Catch Me If You Can": {
    polygons: ardySewerEast,
  },
  "Cave Background": {
    polygons: [...dwarvernMine, ...taverleyDungeon],
  },
  "Cave of Beasts": {
    polygons: [kendalCave],
  },
  "Cave of the Goblins": {
    polygons: swampCavesDorgeshKaanTears,
  },
  Cavern: {
    polygons: [...yanilleAgility, deepWildyDungeon],
  },
  "The Cellar Dwellers": {
    polygons: [ardySewerWest, elenaPrisonPlagueCity, carnelianBasement],
  },
  "Cellar Song": {
    polygons: [varrockWestBankVault],
  },
  "Chain of Command": {
    polygons: templeOfIkov,
  },
  Chamber: {
    polygons: hauntedMine,
  },
  "Chef Surprise": {
    polygons: [culinaromancer],
  },
  "Chickened Out": {
    polygons: [zanaris],
  },
  "Chompy Hunt": {
    polygons: [
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
    polygons: [recruitmentDrive],
  },
  "City of the Dead": {
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
  "Clan Wars": {
    polygons: [clanWars],
  },
  Clanliness: {
    polygons: [clanHall],
  },
  Claustrophobia: {
    polygons: keldagrim,
  },
  "Close Quarters": {
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
    polygons: [wizardTowerBasement],
  },
  Competition: {
    polygons: [burthorpeGamesRoom],
  },
  Complication: {
    polygons: [varrockStatue, chaosAltar],
  },
  "The Consortium": {
    polygons: keldagrim,
  },
  Conspiracy: {
    polygons: [tasteOfHopeSpying, serafinaBasement, sotfSpying, damienLeucurte],
  },
  Contest: {
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
    polygons: [],
  },
  "Corridors of Power": {
    polygons: miscDungeon,
  },
  "Country Jig": {
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
    polygons: [...taverleyDungeon, witchsBasement, heroesGuild],
  },
  "Creature Cruelty": {
    polygons: [towerOfLifeUpstairs],
  },
  "Creeping Vines": {
    polygons: [hespori],
  },
  "Crystal Castle": {
    // TODO this doesn't play in prif only around it
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
    polygons: [zanaris],
  },
  "Crystal Sword": {
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
    polygons: [wrathAltar, rabbitCave, ...undergroundPass],
  },
  "The Curtain Closes": {
    polygons: [tob],
  },
  "Dagannoth Dawn": {
    polygons: dks,
  },
  "Dance of Death": {
    polygons: [strongholdOfSecurity],
  },
  "Dance of the Nylocas": {
    polygons: [tob],
  },
  "Dance of the Undead": {
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
    polygons: wildySlayerCave,
  },
  "Dangerous Road": {
    polygons: tzhaar,
  },
  "Dangerous Way": {
    polygons: [...barrowsCrypts],
  },
  Dark: {
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
    polygons: [tob],
  },
  "Darkly Altared": {
    polygons: catacombsGiantsDen,
  },
  "Darkness in the Depths": {
    polygons: [chasmOfFire],
  },
  "Davy Jones' Locker": {
    polygons: [mogreCamp],
  },
  "Dead Can Dance": {
    polygons: [
      {
        coordinates: [
          [3136, 3648],
          [3136, 3712],
          [3200, 3712],
          [3200, 3648],
        ],
        inMap: true,
      },
    ],
  },
  "Dead Quiet": {
    polygons: [
      ...templeTrekking,
      {
        coordinates: [
          [3392, 3392],
          [3392, 3456],
          [3456, 3456],
          [3456, 3392],
        ],
        inMap: true,
      },
    ],
  },
  Deadlands: {
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
        ],
        inMap: true,
      },
    ],
  },
  "Deep Down": {
    polygons: hauntedMine,
  },
  "Deep Wildy": {
    polygons: [
      {
        coordinates: [
          [2944, 3776],
          [2944, 3904],
          [3008, 3904],
          [3008, 3776],
        ],
        inMap: true,
      },
    ],
  },
  "The Depths": {
    polygons: [sophanemDungeon],
  },
  "Desert Heat": {
    polygons: [
      {
        coordinates: [
          [3392, 2944],
          [3392, 3072],
          [3520, 3072],
          [3520, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "Desert Voyage": {
    polygons: [
      {
        coordinates: [
          [3264, 3072],
          [3392, 3072],
          [3392, 3008],
          [3328, 3008],
          [3328, 2944],
          [3264, 2944],
        ],
        inMap: true,
      },
    ],
  },
  "The Desert": {
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
    // todo one of these should be a cutout
    polygons: [
      {
        coordinates: [
          [2496, 3712],
          [2496, 3776],
          [2560, 3776],
          [2560, 3712],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2240, 4032],
          [2240, 4096],
          [2304, 4096],
          [2304, 4032],
        ],
        inMap: true,
      },
      {
        coordinates: [
          [2260, 4053],
          [2260, 4077],
          [2285, 4077],
          [2285, 4053],
        ],
        inMap: true,
      },
    ],
  },
  "The Desolate Mage": {
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
    polygons: [smokeDungeon],
  },
  "Dimension X": {
    polygons: [],
  },
  "Distant Land": {
    polygons: [
      templeTrekkingNorthOnly,
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
    polygons: [strongholdOfSecurity],
  },
  "The Doors of Dinh": {
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
    polygons: [
      {
        // The isle of souls should be a cutout
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
    polygons: swampCavesDorgeshKaanTears,
  },
  "Dorgeshuun Deep": {
    polygons: swampCavesDorgeshKaanTears,
  },
  "Down Below": {
    polygons: draynorSewers,
  },
  "Down and Out": {
    polygons: [lunarIsleMine],
  },
  "Down by the Docks": {
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
    polygons: [earthAltar],
  },
  "Dragontooth Island": {
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
  Dream: {
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
    polygons: [...taverleyDungeon, whiteKnightsCrypt],
  },
  "Dusk in Yu'biusk": {
    polygons: [],
  },
  "Dwarf Theme": {
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
  "Eagles' Peak": {
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
    polygons: [mta],
  },
  "The Enclave": {
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
    polygons: [witchaven],
  },
  Espionage: {
    polygons: [penguin],
  },
  Etceteria: {
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
    polygons: [dream],
  },
  "Everlasting Fire": {
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
    polygons: [...nightmare],
  },
  Everywhere: {
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
    polygons: [],
  },
  Expanse: {
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
    polygons: [...trollArenaPassage, ...observatoryDungeon],
  },
  Exposed: {
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
    polygons: [zanaris],
  },
  Faithless: {
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
  "The Fallen Empire": {
    polygons: [camdozaal],
  },
  Fanfare: {
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
    polygons: [myrequeHideoutCanifis, darknessAmbush, sotf],
  },
  "Far Away": {
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
    polygons: [roguesDen],
  },
  "A Farmer's Grind": {
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
    polygons: [tob],
  },
  "Fe Fi Fo Fum": {
    polygons: [glod],
  },
  "Fear and Loathing": {
    polygons: [soulsBane],
  },
  "Fenkenstrain's Refrain": {
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
    polygons: [...undergroundPass],
  },
  "Find My Way": {
    polygons: [apeAtollDungeonMM1],
  },
  "Fire and Brimstone": {
    polygons: tzhaar,
  },
  "Fire in the Deep": {
    polygons: [cox],
  },
  "The Fires of Lletya": {
    polygons: [lletya],
  },
  Fishing: {
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
    polygons: [strongholdOfSecurity],
  },
  Forbidden: {
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
  Forest: {
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
    polygons: keldagrim,
  },
  Forgotten: {
    polygons: [uzer],
  },
  "A Forgotten Religion": {
    polygons: forthos,
  },
  "The Forgotten Tomb": {
    polygons: [beneathCursedSands],
  },
  "The Forlorn Homestead": {
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
  "The Forsaken Tower": {
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
    polygons: [lithkren],
  },
  Fossilised: {
    polygons: fossilIslandWyverns,
  },
  "The Foundry": {
    polygons: [giantsFoundry],
  },
  "The Fragment": {
    polygons: undergroundPass,
  },
  Frogland: {
    polygons: [],
  },
  Frostbite: {
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
    polygons: [karuulmSlayerDungeon],
  },
  "The Galleon": {
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
    polygons: [
      rectangle(2560, 3027, 2564, 3023),
      rectangle(2573, 3030, 2577, 3026),
      rectangle(2499, 2993, 2503, 2989),
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
  Garden: {
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
    polygons: [sorceressGarden],
  },
  "Garden of Spring": {
    polygons: [sorceressGarden],
  },
  "Garden of Summer": {
    polygons: [sorceressGarden],
  },
  "Garden of Winter": {
    polygons: [sorceressGarden],
  },
  "The Gauntlet": {
    polygons: [gauntlet],
  },
  "The Genie": {
    polygons: [genieCave],
  },
  "Gill Bill": {
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
  Gnomeball: {
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
    polygons: [goblinCave],
  },
  "Goblin Village": {
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
    polygons: [mta],
  },
  "The Golem": {
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
  Grotto: {
    polygons: [natureGrotto],
  },
  "Grow Grow Grow": {
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
    polygons: [wizardTowerBasement],
  },
  "Guardians of the Rift": {
    polygons: [wizardTowerBasement],
  },
  "H.A.M. Attack": {
    polygons: [goblinVillage],
  },
  "H.A.M. Fisted": {
    polygons: [hamHideout],
  },
  "H.A.M. and Seek": {
    polygons: [hamHideout],
  },
  Harmony: {
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
    polygons: swampCavesDorgeshKaanTears,
  },
  "Haunted Mine": {
    polygons: hauntedMine,
  },
  "Have a Blast": {
    polygons: keldagrim,
  },
  "Have an Ice Day": {
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
    polygons: [],
  },
  "Heart and Mind": {
    polygons: [bodyAltar],
  },
  "Hells Bells": {
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
    polygons: [saba],
  },
  "High Seas": {
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
    polygons: [...pohPortals, yarlo],
  },
  Horizon: {
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
    polygons: [xericsLookoutBasement],
  },
  Hypnotised: {
    polygons: [icthlarinPyramid],
  },
  Iban: {
    polygons: undergroundPass,
  },
  "Ice Melody": {
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
    polygons: [dream],
  },
  Impetuous: {
    polygons: [zanaris, ...cropCircles],
  },
  "In Between": {
    polygons: keldagrim,
  },
  "In the Brine": {
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
    polygons: [],
  },
  "In the Manor": {
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
    polygons: tzhaar,
  },
  Inadequacy: {
    polygons: [dream],
  },
  Inferno: {
    polygons: tzhaar,
  },
  "Insect Queen": {
    polygons: [kalphiteCave, kalphiteLair],
  },
  Inspiration: {
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
    polygons: [abyss],
  },
  "Into the Tombs": {
    polygons: [toa],
  },
  Intrepid: {
    polygons: [...undergroundPass],
  },
  Invader: {
    polygons: [abyss],
  },
  "Island Life": {
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
    polygons: [tob],
  },
  "Itsy Bitsy...": {
    polygons: [morytaniaSpiderNest],
  },
  "Jolly R": {
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
    polygons: [yama],
  },
  "Jungle Hunt": {
    polygons: [
      ...eaglesTransportWithoutJungle,
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
    ],
  },
  "Jungle Island": {
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
    polygons: [
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
    polygons: [karuulmSlayerDungeon],
  },
  "Karamja Jam": {
    polygons: [...brimhavenDungeon],
  },
  Kingdom: {
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
    ],
  },
  Knightmare: {
    polygons: [
      keepLeFaye,
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
    polygons: [...undergroundPass],
  },
  Labyrinth: {
    polygons: [sophanemDungeon],
  },
  Lagoon: {
    polygons: [fossilIslandUnderwater],
  },
  Lair: {
    polygons: [shades],
  },
  "Lair of the Basilisk": {
    polygons: [jormungandPrison],
  },
  Lament: {
    polygons: [enakhrasTemple],
  },
  "Lament for the Hallowed": {
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
    polygons: [
      myrequeHideoutCanifis,
      meiyerditchHideout,
      oldManRal,
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
    ],
  },
  "Land Down Under": {
    polygons: [...miscDungeon],
  },
  "Land of the Dwarves": {
    polygons: [...keldagrim],
  },
  Landlubber: {
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
    polygons: [tob],
  },
  "Last Man Standing": {
    polygons: [lms],
  },
  "The Last Shanty": {
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
    polygons: [volcanicMine],
  },
  Legend: {
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
    polygons: [
      barbAssault,
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
    ],
  },
  "Life's a Beach!": {
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
  Lighthouse: {
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
    ],
  },
  "Little Cave of Horrors": {
    polygons: [mosLeHarmlessCave],
  },
  Lonesome: {
    polygons: [desertMiningCamp],
  },
  "Long Ago": {
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
    polygons: [
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
    polygons: [courthouse],
  },
  "The Lost Melody": {
    polygons: swampCavesDorgeshKaanTears,
  },
  "Lost Soul": {
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
  "The Lost Tribe": {
    polygons: [...swampCavesDorgeshKaanTears],
  },
  "Lower Depths": {
    polygons: [cox, quidamortemCave],
  },
  "Lucid Dream": {
    polygons: [dream],
  },
  "Lucid Nightmare": {
    polygons: [dream],
  },
  Lullaby: {
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
    ],
  },
  "The Lunar Isle": {
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
    polygons: [eadgarsCave],
  },
  "The Mad Mole": {
    polygons: [giantMoleCave],
  },
  "Mage Arena": {
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
    polygons: [tob],
  },
  "The Maiden's Sorrow": {
    polygons: [verSinhaza],
  },
  "Major Miner": {
    polygons: [jatizsoMine],
  },
  "Making Waves": {
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
    polygons: [strongholdOfSecurity],
  },
  March: {
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
    ],
  },
  Marooned: {
    polygons: [
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
    polygons: [...keldagrim, ...trollIceTunnel, ...trollStronghold],
  },
  Masquerade: {
    polygons: [fremennikSlayerCave],
  },
  Mausoleum: {
    polygons: [...paterdomus],
  },
  "Maws Jaws & Claws": {
    polygons: [...taverleyDungeon],
  },
  "The Maze": {
    polygons: [
      karamjanTemple,
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
    ],
  },
  Medieval: {
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
    polygons: [soulsBane],
  },
  "Miles Away": {
    polygons: [
      fisherRealm,
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
    polygons: [
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
    ],
  },
  "Mind over Matter": {
    polygons: [mta],
  },
  "Miracle Dance": {
    polygons: [mindAltar],
  },
  Mirage: {
    polygons: [icthlarinPyramid],
  },
  Miscellania: {
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
    polygons: [crashSiteCavern, krukDungeon],
  },
  "Monkey Madness": {
    polygons: [
      rectangle(2465, 3498, 2469, 3494),
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
    ],
  },
  "Monkey Sadness": {
    polygons: [krukDungeon],
  },
  "Monkey Trouble": {
    polygons: [krukDungeon],
  },
  "Monster Melee": {
    polygons: [hamHideout],
  },
  "The Monsters Below": {
    polygons: [...dks],
  },
  Moody: {
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
  "Mor Ul Rek": {
    polygons: [...tzhaar],
  },
  Morytania: {
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
    polygons: [mouseHole],
  },
  "Mudskipper Melody": {
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
    polygons: [...oldSchoolMuseum],
  },
  "Mutant Medley": {
    polygons: [towerOfLife],
  },
  "My Arm's Journey": {
    polygons: [...trollStronghold],
  },
  "Mystics of Nature": {
    polygons: [prif],
  },
  Mythical: {
    polygons: [
      ...corsairCoveDungeon,
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
    polygons: [grandTreeTunnels],
  },
  Natural: {
    polygons: [
      ...templeTrekking,
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
    ],
  },
  "The Navigator": {
    polygons: [swensenPuzzle],
  },
  "Nether Realm": {
    polygons: [...brimhavenDungeon],
  },
  Neverland: {
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
    polygons: [tob],
  },
  "No Pasaran": {
    polygons: [...undergroundPass],
  },
  "No Way Out": {
    polygons: [soulsBane],
  },
  Nomad: {
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
    polygons: [...iceTrollCaves],
  },
  "Oh Rats!": {
    polygons: [...varrockSewers],
  },
  "On Thin Ice": {
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
    ],
  },
  Oriental: {
    polygons: [ahZaRhoon],
  },
  "The Other Side": {
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
    polygons: [lighthouseBasement, ...dks],
  },
  "Over to Nardah": {
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
    polygons: [...lizardmenTemple],
  },
  "Path of Peril": {
    polygons: [shadowDungeon],
  },
  Pathways: {
    polygons: [...brimhavenDungeon],
  },
  "Pest Control": {
    polygons: [
      ds2,
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
    polygons: [ectofunctus],
  },
  "Pick & Shovel": {
    polygons: [...dwarvernMine],
  },
  "Pirates of Penance": {
    polygons: [barbAssault],
  },
  "Pirates of Peril": {
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
    polygons: [
      ...eaglesTransportWithoutPolar,
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
    polygons: [...swampCavesDorgeshKaanTears],
  },
  "Power of the Shadow Realm": {
    polygons: [tob],
  },
  "Predator Xarpus": {
    polygons: [tob],
  },
  Preservation: {
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
    polygons: [elementalWorkshop],
  },
  Principality: {
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
  Quest: {
    polygons: [fireAltar],
  },
  "Race Against the Clock": {
    polygons: [camdozaal],
  },
  "Rat Hunt": {
    polygons: [ratcatchers],
  },
  "Rat a Tat Tat": {
    polygons: [varrockRatPits],
  },
  "Ready for Battle": {
    polygons: [castleWarsLobby],
  },
  Regal: {
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
    polygons: [kourendCastleAKD],
  },
  Reggae: {
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
  Relics: {
    polygons: [lithkren, ...tzhaar, ungaelLab],
  },
  Rellekka: {
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
    polygons: [...death],
  },
  Revenants: {
    polygons: [...revs],
  },
  "Right on Track": {
    polygons: [...keldagrim],
  },
  Righteousness: {
    polygons: [lawAltar],
  },
  "Rising Damp": {
    polygons: [brineRatCavern],
  },
  Riverside: {
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
    polygons: [roguesDen],
  },
  "Roll the Bones": {
    polygons: [mta],
  },
  "Romancing the Crone": {
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
    polygons: [...varrockSewers],
  },
  Rose: {
    polygons: [
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
    polygons: [...taverleyDungeon],
  },
  "Rugged Terrain": {
    polygons: [
      ...catacombsGiantsDen,
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
    ],
  },
  "The Ruins of Camdozaal": {
    polygons: [camdozaal],
  },
  "Ruins of Isolation": {
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
  "Rune Essence": {
    polygons: [...runeEssenceMine],
  },
  "Sad Meadow": {
    polygons: [
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
    polygons: [sourhogCave],
  },
  Saga: {
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
  Sarachnis: {
    polygons: [...forthos],
  },
  Sarcophagus: {
    polygons: [...ancientsPyramid],
  },
  "Scape Cave": {
    polygons: [...varrockSewers, tutorialIslandCave, woodcuttingGuildCave],
  },
  "Scape Main": {
    polygons: [boatPartDS2],
  },
  "Scape Sad": {
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
    polygons: [wizardTowerBasement],
  },
  Scarab: {
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
  "Scorpia Dances": {
    polygons: [...scorpia],
  },
  "Sea Shanty": {
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
  "Secrets of the North": {
    polygons: [ghorrockDungeon],
  },
  Serenade: {
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
    polygons: [airAltar],
  },
  "Servants of Strife": {
    polygons: [
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
    polygons: [
      ...templeTrekking,
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
    ],
  },
  "Sharp End of the Crystal": {
    polygons: [iorwerthDungeon],
  },
  Shine: {
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
    polygons: [
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
    polygons: [corp],
  },
  Shipwrecked: {
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
  "Sigmund's Showdown": {
    polygons: [lumbridgeWaterMillSigmundFight],
  },
  "The Slayer": {
    polygons: [fremennikSlayerCave],
  },
  "Slice of Silent Movie": {
    polygons: [...swampCavesDorgeshKaanTears],
  },
  "Slice of Station": {
    polygons: [...swampCavesDorgeshKaanTears, ...keldagrim],
  },
  "Slither and Thither": {
    polygons: [...miscDungeon],
  },
  "Slug a Bug Ball": {
    polygons: [witchaven],
  },
  Sojourn: {
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
  "Song of the Elves": {
    polygons: [lletyaCouncilHutGrandLibrary],
  },
  "Soul Fall": {
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
  "Soul Wars": {
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
  Sphinx: {
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
  Spirit: {
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
  "Spirits of the Elid": {
    polygons: [riverElidWaterfall],
  },
  Splendour: {
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
    polygons: [...hauntedMine, burghDeRottBasement, isleOfSoulsDungeon],
  },
  "Spooky Jungle": {
    polygons: [
      shaikahan,
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
    ],
  },
  "The Spurned Demon": {
    polygons: [zalcano],
  },
  Stagnant: {
    polygons: [
      ...templeTrekking,
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
    ],
  },
  Starlight: {
    polygons: [asgarnianIceDungeon],
  },
  Start: {
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
    polygons: [daeyaltEssenceMine, myrequeHideoutCanifis],
  },
  "Storm Brew": {
    polygons: [draynorManorUpstairsKillerwatts],
  },
  Stranded: {
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
  Strangled: {
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
    polygons: [zanaris],
  },
  "Strength of Saradomin": {
    polygons: [godWars],
  },
  "Stuck in the Mire": {
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
    polygons: [...dks, crabclawCaves],
  },
  Sunburn: {
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
    polygons: [towerofMagic, viyeldiCaves],
  },
  Suspicious: {
    polygons: [karamjaShipYard],
  },
  "Tale of Keldagrim": {
    polygons: [...keldagrim],
  },
  "Talking Forest": {
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
  "A Taste of Hope": {
    polygons: [verSinhaza],
  },
  "Tears of Guthix": {
    polygons: [...swampCavesDorgeshKaanTears],
  },
  Technology: {
    polygons: [grandTreeUpstairs],
  },
  Tempest: {
    polygons: [slayerTower],
  },
  Temple: {
    polygons: [marimboDungeon],
  },
  "Temple of Light": {
    polygons: [...undergroundPass],
  },
  "Temple of Tribes": {
    polygons: [goblinCave],
  },
  "Temple of the Eye": {
    polygons: [wizardTowerBasement],
  },
  "Tempor of the Storm": {
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
    polygons: [
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
    polygons: [...myrequeLaboratories],
  },
  "That Sullen Hall": {
    polygons: [...taverleyDungeon],
  },
  Theme: {
    polygons: [
      baxtorianWaterfallDungeon,
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
    ],
  },
  "Thrall of the Serpent": {
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
    polygons: [uzer],
  },
  "Time to Mine": {
    polygons: [...keldagrim],
  },
  Tiptoe: {
    polygons: [draynorManorCellar],
  },
  "Tomb Raider": {
    polygons: [pyramidPlunder],
  },
  Tomorrow: {
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
    polygons: [goblinVillageKitchen],
  },
  "The Tower": {
    polygons: [
      ardySewerWest,
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
    ],
  },
  "The Trade Parade": {
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
    polygons: [prif, lletyaCouncilHutGrandLibrary],
  },
  Trawler: {
    polygons: [fishingTrawler],
  },
  "Trawler Minor": {
    polygons: [fishingTrawler],
  },
  "Tree Spirits": {
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
    ],
  },
  Trinity: {
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
    ],
  },
  "Troll Shuffle": {
    polygons: [weissMakingFriendsSneakCave],
  },
  "Trouble Brewing": {
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
    polygons: [kraken],
  },
  Twilight: {
    polygons: [elementalWorkshop],
  },
  "TzHaar!": {
    polygons: [...tzhaar],
  },
  "Undead Dungeon": {
    polygons: [...hauntedMine],
  },
  Undercurrent: {
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
  Underground: {
    polygons: [
      ...taverleyDungeon,
      entranaDungeon,
      wildyAgilityDungeon,
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
    ],
  },
  "Underground Pass": {
    polygons: [...undergroundPass],
  },
  Understanding: {
    polygons: [natureAltar],
  },
  "Unknown Land": {
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
    polygons: [dream],
  },
  "Unturned Stones": {
    polygons: [digsiteDT2],
  },
  Upcoming: {
    polygons: [
      ...balloonTransport,
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
    ],
  },
  "Upir Likhyi": {
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
    polygons: [cox],
  },
  "The Vault": {
    polygons: [ancientVaultDT2],
  },
  Venomous: {
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
    polygons: [...digsiteDungeon],
  },
  "Victory is Mine": {
    polygons: [championsChallenge],
  },
  Village: {
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
    polygons: [
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
    polygons: [ahZaRhoon, viyeldiCaves],
  },
  Voyage: {
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
    polygons: [dream],
  },
  "A Walk in the Woods": {
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
    ],
  },
  "The Walking Dead": {
    polygons: [shayzienCrypt],
  },
  Wander: {
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
    polygons: [clanWars],
  },
  Warrior: {
    polygons: [koscheiFightFremTrials],
  },
  "Warriors' Guild": {
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
    polygons: [poisonWasteDungeon],
  },
  "Watch Your Step": {
    polygons: [hallowedSepulchre],
  },
  Waterfall: {
    polygons: [
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
    polygons: [
      ...templeTrekking,
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
    polygons: [lunarIsleMine],
  },
  "Way of the Wyrm": {
    polygons: [karuulmSlayerDungeon],
  },
  Wayward: {
    polygons: [jiggigZogreDungeon],
  },
  "Welcome to my Nightmare": {
    polygons: [tob],
  },
  "Welcome to the Theatre": {
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
    polygons: [hallowedSepulchre],
  },
  "Well of Voyage": {
    polygons: [...undergroundPass, ...leafTraps],
  },
  "What Happens Below...": {
    polygons: [warrensPortPiscarilius],
  },
  "Where Eagles Lair": {
    polygons: [...eaglesTransport],
  },
  "Wild Isle": {
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
  Wilderness: {
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
    polygons: [asgarnianIceDungeon],
  },
  Wonder: {
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
  Woodland: {
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
  Workshop: {
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
    polygons: [soulsBane],
  },
  Xenophobe: {
    polygons: [...dks],
  },
  Yesteryear: {
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
    polygons: [godWars],
  },
  "Zanik's Theme": {
    polygons: [...swampCavesDorgeshKaanTears],
  },
  "Zaros Zeitgeist": {
    polygons: [godWars],
  },
  Zealot: {
    polygons: [waterAltar],
  },
  "Zogre Dance": {
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
    ],
  },
  Ascent: {
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
        // TODO this should be a cutout
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
    polygons: [dream],
  },
  "Dwarven Domain": {
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
    // needs cutout
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
    // todo cutout
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
  "Title Fight": {
    polygons: [championsChallenge],
  },
  ...song("Amascut's Promise", toa),
  ...song("Ape-ex Predator", toa),
  ...song("Architects of Prifddinas", prif),
  ...song("Awful Anthem", miscPrinceBrand),
  ...song("Bait", nightmareSouth, meiyerditchHideout),
  ...song("Ballad of the Basilisk", rellekkaLongHall),
  ...song("Barbarian Workout", ...atlasCutscene),
  ...song("Beneath Cursed Sands", toa),
  ...song("Blood Rush", vardorvis),
  ...song("Bob's on Holiday", kbd, sophanemBobAdventure, unferth),
  ...song("Bolrie's Diary", brimstail, ...pathOfGlouphrieCutscenes),
  ...song("Brain Battle", barrelchestFight),
  ...song("Bunny's Sugar Rush"),
  ...song("The Burning Sun", ...varrockPalaceUpstairs),
  ...song("Cain's Tutorial", barbAssault),
  ...song("Children of the Sun", varrockSquare),
  ...song("Confrontation", yama),
  ...song("Crest of a Wave", ...keldagrim, dragonSlayerCrandorCrash),
  ...song("Dance of the Meilyr", prif),
  ...song("Delrith", delrith),
  ...song("Diango's Little Helpers"),
  ...song("Dies Irae"),
  ...song("Dogfight", goblinCave),
  ...song(
    "Domain of the Vampyres",
    castleDrakanCourtyard,
    verSinhaza,
    icyeneGraveyard
  ),
  ...song("Don't Panic Zanik"),
  ...song("Dorgeshuun Treaty", lumbridgeCastleDiningHall),
  ...song("Dot's Yuletide"),
  ...song("The Dragon Slayer", mythsGuildGalvek, ds2),
  ...song("Easter Jig"),
  ...song("Elven Guardians", prif),
  ...song("Eve's Epinette"),
  ...song("Eye See You", ghorrockDungeon),
  ...song("Eye of the Storm", dragonSlayerCrandorCrash),
  ...song("The Fairy Dragon", lumbridgeCastleDiningHall),
  ...song("Faith of the Hefin", prif),
  ...song("A Festive Party"),
  ...song("Fight of the Basilisk", jormungandPrison),
  ...song("Floating Free", entranaBalloon),
  ...song("The Fremennik Kings", jatizsoThroneRoom),
  ...song("Funny Bunnies"),
  ...song("The Gates of Menaphos", sophanemMenaphosGate),
  ...song("Gnome Village Party"),
  ...song("Grimly Fiendish"),
  ...song("Grip of the Talon", uzer),
  ...song("Healin' Feelin'", poisonWasteTree),
  ...song("High Spirits"),
  ...song("His Faithful Servants", ancientVaultDT2),
  ...song("Impulses", ...cropCircles),
  ...song("In the Shadows", ghorrockDungeon),
  ...song("Incantation", uzer),
  ...song("Iorwerth's Lament", prif),
  ...song("Jaws of the Basilisk", rellekkaSquare),
  ...song("Jaws of Gluttony", toa),
  ...song("Jester Minute", jester),
  ...song("Jungle Bells"),
  ...song("Jungle Island Xmas"),
  ...song("King of the Trolls", ...iceTrollCaves),
  ...song("Laid to Rest", toa),
  ...song("Land of Snow"),
  ...song("Last Stand", seaTrollQueen),
  ...song("The Longramble Scramble", poisonWaste),
  ...song("Look to the Stars", observatory),
  ...song("Master of Puppets", ancientVaultDT2),
  ...song("Mastermindless", wizardTowerUpstairs),
  ...song("Meddling Kids", ...miscDungeon),
  ...song("Monkey Badness", crashSiteCavern, zooknocksHouseGloughRefight),
  ...song("More Than Meets the Eye", ghorrockDungeon),
  ...song("Morytanian Mystery", paterdomusBushes, morytaniaSwampCutscene),
  ...song("A Mother's Curse", toa),
  ...song("Mother Ruckus", weissCentre),
  ...song("The Noble Rodent", varrockWarehouseUpstairs),
  ...song("Nox Irae"),
  ...song("The Old Ones", ...gardenOfDeath),
  ...song("On the Up", lunarIsleMine),
  ...song("Oncoming Foe", ds2),
  ...song("Organ Music 1", ...organ),
  ...song("Organ Music 2", ...organ),
  ...song("The Penguin Bards", penguin),
  ...song("Penguin Plots", penguin),
  ...song("The Pharaoh", sophanemMenaphosGate),
  ...song("Pheasant Peasant"),
  ...song("Pinball Wizard"),
  ...song("Plots and Plans", varrockEastGuardFollow),
  ...song("Prison Break", ghorrockDungeon),
  ...song("The Quizmaster"),
  ...song("Reign of the Basilisk", jormungandPrison),
  ...song("Rhapsody", clanHall),
  ...song("Roc and Roll", trollStrongholdRoof),
  ...song("Sands of Time", toa),
  ...song("Sarim's Vermin", portSarimRatPits),
  ...song("Scape Ape"),
  ...song("Scape Crystal"),
  ...song("Scape Five"),
  ...song("Scape Ground"),
  ...song("Scape Home"),
  ...song("Scape Hunter"),
  ...song("Scape Original"),
  ...song("Scape Santa"),
  ...song("Scape Scared"),
  ...song("School's Out"),
  ...song("Scrubfoot's Descent"),
  ...song("Sea Minor Shanty"),
  ...song("Sea Shanty Xmas"),
  ...song("The Seed of Crwys", prif),
  ...song("Shattered Relics"),
  ...song("Showdown"),
  ...song("The Sinclairs", camelotCastleEastStatue),
  ...song("Snowflake & My Arm", weissCentre),
  ...song("Song of the Silent Choir", camdozaal),
  ...song("Sorceress's Garden", sorceressGarden),
  ...song("The Spymaster", sophanemOutsideAltar, maisasCampRuinsOfUllek),
  ...song("Stand Up and Be Counted", ...battleofWestArdougne),
  ...song("Storeroom Shuffle", treeGnomeVillageDungeon),
  ...song("Strange Place"),
  ...song("Surok's Theme", varrockLibrary),
  ...song("Tarn Razorlor", ...hauntedMine),
  ...song("The Terrible Caverns", ...myrequeLaboratories),
  ...song("Terrorbird Tussle", poisonWasteDungeon),
  ...song("Test of Companionship", toa),
  ...song("Test of Isolation", toa),
  ...song("Test of Resourcefulness", toa),
  ...song("Test of Strength", toa),
  ...song("A Thorn in My Side", hespori, morytaniaHespori),
  ...song("Thrall of the Devourer", maisasCampRuinsOfUllek, beneathCursedSands),
  ...song("Tick Tock", ancientVaultDT2),
  ...song("Time Out"),
  ...song("The Tower of Voices", prif),
  ...song("Vampyre Assault", damienLeucurte, aidOfMyrequeVanstromGadderanks),
  ...song("Vanescula", castleDrakanCourtyard, sotfVanescula),
  ...song("Wally the Hero", delrith),
  ...song("We are the Fairies"),
  ...song("Winter Funfair"),
  ...song("A Worthy Foe", ancientVaultDT2),
  ...song("You Have My Attention", castleDrakanCourtyard),
};

function song(
  name: string,
  ...polygons: PolygonWithoutCenter[]
): Record<string, { polygons: PolygonWithoutCenter[] }> {
  return {
    [name]: {
      polygons,
    },
  };
}

function polygon(coordinates: Array<Coordinate>): PolygonWithoutCenter {
  return {
    coordinates,
    inMap: false,
  };
}
