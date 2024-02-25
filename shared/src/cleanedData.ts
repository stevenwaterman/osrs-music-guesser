import type { Coordinate, Polygon } from "./coordinates.js";

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
  // meiyerditch
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
  // ice entrance
  rectangle(2794, 3720, 2798, 3716),
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
const swampCavesDorgeshKaanTears = [
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
  // mourner tunnel entrance
  rectangle(2541, 3326, 2544, 3323),
  // abyss
  abyss,
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
const glod = rectangle(2920, 3427, 2924, 3423);
const soulsBane = rectangle(3307, 3452, 3311, 3448);
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
const paterdomus = [
  // north
  rectangle(3403, 3508, 3407, 3504),
  // south
  rectangle(3420, 3486, 3424, 3482),
];
const xericsLookoutBasement = rectangle(1588, 3528, 1592, 3524);
const icthlarinPyramid = rectangle(3287, 2779, 3302, 2765);
const kalphiteLair = rectangle(3225, 3110, 3229, 3106);
const kalphiteCave = rectangle(3318, 3124, 3322, 3120);
const toa = rectangle(3356, 2713, 3360, 2709);
const morytaniaSpiderNest = rectangle(3655, 3411, 3659, 3407);
const yama = rectangle(1808, 3692, 1824, 3687);
const keepLeFaye = rectangle(2763, 3409, 2776, 3393);
const fossilIslandUnderwater = rectangle(3764, 3900, 3768, 3896);
const shades = rectangle(3483, 3323, 3487, 3319);
const jormungandPrison = rectangle(2463, 4014, 2467, 4010);
const enakhrasTemple = rectangle(3187, 2929, 3195, 2922);
const meiyerditchHideout = rectangle(3637, 3251, 3640, 3248);
const oldManRal = rectangle(3604, 3216, 3606, 3214);
const volcanicMine = rectangle(3814, 3810, 3818, 3806);
const mosLeHarmlessCave = rectangle(3746, 2975, 3750, 2971);
const desertMiningCamp = rectangle(3299, 3038, 3304, 3034);
const courthouse = rectangle(2736, 3471, 2739, 3468);
const quidamortemCave = rectangle(1212, 3561, 1216, 3557);
const eadgarsCave = rectangle(2886, 3681, 2896, 3673);
const giantMoleCave = rectangle(2984, 3389, 3015, 3370);
const jatizsoMine = rectangle(2395, 3814, 2399, 3810);
const fremennikSlayerCave = rectangle(2795, 3617, 2799, 3613);
const karamjanTemple = rectangle(2939, 2892, 2946, 2899);
const mindAltar = rectangle(2979, 3516, 2985, 3511);
const crashSiteCavern = rectangle(2431, 3518, 2472, 3547);
const krukDungeon = rectangle(2712, 2791, 2717, 2786);
const mouseHole = rectangle(2901, 3468, 2904, 3465);
const oldSchoolMuseum = [
  // west ladder
  rectangle(3036, 3385, 3039, 3382),
  // east ladder
  rectangle(3052, 3385, 3055, 3382),
];
const prif = rectangle(2181, 3386, 2297, 3269);
const grandTreeTunnels = rectangle(2461, 3498, 2465, 3494);
const swensenPuzzle = rectangle(2642, 3659, 2646, 3656);
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
const ahZaRhoon = rectangle(2917, 2996, 2925, 3004);
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
const elementalWorkshop = rectangle(2708, 3499, 2712, 3495);
const fireAltar = rectangle(3309, 3257, 3315, 3251);
const jimmyDazzler = rectangle(2560, 3320, 2564, 3317);
const varrockRatPits = rectangle(3265, 3402, 3269, 3398);
const castleWarsLobby = rectangle(2438, 3094, 2442, 3090);
const kourendCastleAKD = rectangle(1619, 3686, 1655, 3655);
const ungaelLab = rectangle(2241, 4094, 2250, 4086);
const death = [
  // lumbridge
  rectangle(3236, 3194, 3240, 3190),
  // falador
  rectangle(2963, 3333, 2967, 3329),
  // seers
  rectangle(2711, 3468, 2715, 3464),
  // edgeville
  rectangle(3095, 3479, 3099, 3475),
  // ferox
  rectangle(3124, 3634, 3128, 3630),
  // kourend
  rectangle(1617, 3664, 1621, 3660),
  // prif
  rectangle(2213, 3364, 2232, 3347),
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
  rectangle(3106, 3160, 3102, 3164),
  // distentor wizards guild
  rectangle(2583, 3094, 2597, 3081),
  // cromperty ardy
  rectangle(2680, 3326, 2684, 3322),
  // brimstail gnome
  rectangle(2401, 3421, 2405, 3417),
  // lunar isle mine
  rectangle(2140, 3946, 2144, 3942),
];
const sourhogCave = rectangle(3148, 3349, 3152, 3345);
const ancientsPyramid = rectangle(3222, 2908, 3243, 2887);
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
const verSinhaza = rectangle(3655, 3223, 3678, 3215);
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
const ancientVaultDT2 = rectangle(3499, 2978, 3519, 2964);
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
const eaglesTransport = [
  // eagles peak dungeon
  rectangle(2326, 3496, 2331, 3493),
  // polar eagle
  rectangle(2742, 3834, 2750, 3827),
  // jungle eagle
  rectangle(2508, 2932, 2515, 2925),
  // desert eagle
  rectangle(3402, 3160, 3406, 3156),
];
const waterAltar = rectangle(3181, 3167, 3186, 3161);
const miscPrinceBrand = rectangle(2497, 3855, 2509, 3845);
const rellekkaLongHall = rectangle(2654, 3686, 2663, 3664);
const vardorvis = rectangle(1120, 3427, 1138, 3409);

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
  "Al Kharid": {
    title: "Al Kharid",
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
  "All's Fairy in Love & War": {
    title: "All's Fairy in Love &; War",
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
  "Arachnids of Vampyrium": {
    title: "Arachnids of Vampyrium",
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
  Arcane: {
    title: "Arcane",
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
  "Bandit Camp": {
    title: "Bandit Camp",
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
  "Cabin Fever": {
    title: "Cabin Fever",
    file: "Cabin_Fever_(music_track)",
    polygons: [cabinFever],
  },
  Camelot: {
    title: "Camelot",
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
  "Castle Wars": {
    title: "Castle Wars",
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
    polygons: swampCavesDorgeshKaanTears,
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
  "Clan Wars": {
    title: "Clan Wars",
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
  "The Consortium": {
    title: "The Consortium",
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
  "Desert Heat": {
    title: "Desert Heat",
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
    polygons: swampCavesDorgeshKaanTears,
  },
  "Dorgeshuun Deep": {
    title: "Dorgeshuun Deep",
    file: "Dorgeshuun_Deep",
    polygons: swampCavesDorgeshKaanTears,
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
  "Dragontooth Island": {
    title: "Dragontooth Island",
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
  Dream: {
    title: "Dream",
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
  "Eagles' Peak": {
    title: "Eagles' Peak",
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
  Etceteria: {
    title: "Etceteria",
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
  "The Fallen Empire": {
    title: "The Fallen Empire",
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
    polygons: [...undergroundPass],
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
  Fishing: {
    title: "Fishing",
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
  Forest: {
    title: "Forest",
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
  "The Forsaken Tower": {
    title: "The Forsaken Tower",
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
  Garden: {
    title: "Garden",
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
  "The Gauntlet": {
    title: "The Gauntlet",
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
  Gnomeball: {
    title: "Gnomeball",
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
  "Goblin Village": {
    title: "Goblin Village",
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
  "The Golem": {
    title: "The Golem",
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
  Grotto: {
    title: "Grotto",
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
  "Guardians of the Rift": {
    title: "Guardians of the Rift",
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
  Harmony: {
    title: "Harmony",
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
    polygons: swampCavesDorgeshKaanTears,
  },
  "Haunted Mine": {
    title: "Haunted Mine",
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
  Iban: {
    title: "Iban",
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
  Inferno: {
    title: "Inferno",
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
  "Into the Tombs": {
    title: "Into the Tombs",
    file: "Into_the_Tombs_(music_track)",
    polygons: [toa],
  },
  Intrepid: {
    title: "Intrepid",
    file: "Intrepid",
    polygons: [...undergroundPass],
  },
  Invader: {
    title: "Invader",
    file: "Invader",
    polygons: [abyss],
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
    polygons: [tob],
  },
  "Itsy Bitsy...": {
    title: "Itsy Bitsy...",
    file: "Itsy_Bitsy...",
    polygons: [morytaniaSpiderNest],
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
    polygons: [yama],
  },
  "Jungle Hunt": {
    title: "Jungle Hunt",
    file: "Jungle_Hunt",
    polygons: [
      ...eaglesTransport,
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
    polygons: [karuulmSlayerDungeon],
  },
  "Karamja Jam": {
    title: "Karamja Jam",
    file: "Karamja_Jam",
    polygons: [...brimhavenDungeon],
  },
  Kingdom: {
    title: "Kingdom",
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
    ],
  },
  Knightmare: {
    title: "Knightmare",
    file: "Knightmare",
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
    polygons: [...undergroundPass],
  },
  Labyrinth: {
    title: "Labyrinth",
    file: "Labyrinth",
    polygons: [sophanemDungeon],
  },
  Lagoon: {
    title: "Lagoon",
    file: "Lagoon",
    polygons: [fossilIslandUnderwater],
  },
  Lair: {
    title: "Lair",
    file: "Lair",
    polygons: [shades],
  },
  "Lair of the Basilisk": {
    title: "Lair of the Basilisk",
    file: "Lair_of_the_Basilisk",
    polygons: [jormungandPrison],
  },
  Lament: {
    title: "Lament",
    file: "Lament",
    polygons: [enakhrasTemple],
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
      ...myrequeLaboratories,
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
    title: "Land Down Under",
    file: "Land_Down_Under",
    polygons: [...miscDungeon],
  },
  "Land of the Dwarves": {
    title: "Land of the Dwarves",
    file: "Land_of_the_Dwarves",
    polygons: [...keldagrim],
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
    polygons: [tob],
  },
  "Last Man Standing": {
    title: "Last Man Standing",
    file: "Last_Man_Standing_(music_track)",
    polygons: [lms],
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
    polygons: [volcanicMine],
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
  Lighthouse: {
    title: "Lighthouse",
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
    ],
  },
  "Little Cave of Horrors": {
    title: "Little Cave of Horrors",
    file: "Little_Cave_of_Horrors",
    polygons: [mosLeHarmlessCave],
  },
  Lonesome: {
    title: "Lonesome",
    file: "Lonesome",
    polygons: [desertMiningCamp],
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
    polygons: [courthouse],
  },
  "The Lost Melody": {
    title: "The Lost Melody",
    file: "The_Lost_Melody",
    polygons: swampCavesDorgeshKaanTears,
  },
  "Lost Soul": {
    title: "Lost Soul",
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
  "The Lost Tribe": {
    title: "The Lost Tribe",
    file: "The_Lost_Tribe_(music_track)",
    polygons: [...swampCavesDorgeshKaanTears],
  },
  "Lower Depths": {
    title: "Lower Depths",
    file: "Lower_Depths",
    polygons: [cox, quidamortemCave],
  },
  "Lucid Dream": {
    title: "Lucid Dream",
    file: "Lucid_Dream",
    polygons: [dream],
  },
  "Lucid Nightmare": {
    title: "Lucid Nightmare",
    file: "Lucid_Nightmare",
    polygons: [dream],
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
    polygons: [eadgarsCave],
  },
  "The Mad Mole": {
    title: "The Mad Mole",
    file: "The_Mad_Mole",
    polygons: [giantMoleCave],
  },
  "Mage Arena": {
    title: "Mage Arena",
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
    polygons: [tob],
  },
  "The Maiden's Sorrow": {
    title: "The Maiden's Sorrow",
    file: "The_Maiden%27s_Sorrow",
    polygons: [tob],
  },
  "Major Miner": {
    title: "Major Miner",
    file: "Major_Miner",
    polygons: [jatizsoMine],
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
    polygons: [strongholdOfSecurity],
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
    ],
  },
  Marooned: {
    title: "Marooned",
    file: "Marooned",
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
    title: "Marzipan",
    file: "Marzipan",
    polygons: [...keldagrim, ...trollIceTunnel, ...trollStronghold],
  },
  Masquerade: {
    title: "Masquerade",
    file: "Masquerade",
    polygons: [fremennikSlayerCave],
  },
  Mausoleum: {
    title: "Mausoleum",
    file: "Mausoleum_(music_track)",
    polygons: [...paterdomus],
  },
  "Maws Jaws & Claws": {
    title: "Maws Jaws & Claws",
    file: "Maws_Jaws_%26_Claws",
    polygons: [...taverleyDungeon],
  },
  "The Maze": {
    title: "The Maze",
    file: "The_Maze",
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
    polygons: [soulsBane],
  },
  "Miles Away": {
    title: "Miles Away",
    file: "Miles_Away",
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
    title: "Mind over Matter",
    file: "Mind_over_Matter",
    polygons: [mta],
  },
  "Miracle Dance": {
    title: "Miracle Dance",
    file: "Miracle_Dance",
    polygons: [abyss, mindAltar],
  },
  Mirage: {
    title: "Mirage",
    file: "Mirage",
    polygons: [icthlarinPyramid],
  },
  Miscellania: {
    title: "Miscellania",
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
    polygons: [crashSiteCavern, krukDungeon],
  },
  "Monkey Madness": {
    title: "Monkey Madness",
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
    ],
  },
  "Monkey Sadness": {
    title: "Monkey Sadness",
    file: "Monkey_Sadness",
    polygons: [krukDungeon],
  },
  "Monkey Trouble": {
    title: "Monkey Trouble",
    file: "Monkey_Trouble",
    polygons: [krukDungeon],
  },
  "Monster Melee": {
    title: "Monster Melee",
    file: "Monster_Melee",
    polygons: [hamHideout],
  },
  "The Monsters Below": {
    title: "The Monsters Below",
    file: "The_Monsters_Below",
    polygons: [...dks],
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
  "Mor Ul Rek": {
    title: "Mor Ul Rek",
    file: "Mor_Ul_Rek_(music_track)",
    polygons: [...tzhaar],
  },
  Morytania: {
    title: "Morytania",
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
    polygons: [mouseHole],
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
    polygons: [...oldSchoolMuseum],
  },
  "Mutant Medley": {
    title: "Mutant Medley",
    file: "Mutant_Medley",
    polygons: [towerOfLife],
  },
  "My Arm's Journey": {
    title: "My Arm's Journey",
    file: "My_Arm%27s_Journey",
    polygons: [],
  },
  "Mystics of Nature": {
    title: "Mystics of Nature",
    file: "Mystics_of_Nature",
    polygons: [prif],
  },
  Mythical: {
    title: "Mythical",
    file: "Mythical",
    polygons: [
      ...mythsDungeon,
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
    polygons: [grandTreeTunnels],
  },
  Natural: {
    title: "Natural",
    file: "Natural",
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
    title: "The Navigator",
    file: "The_Navigator",
    polygons: [swensenPuzzle],
  },
  "Nether Realm": {
    title: "Nether Realm",
    file: "Nether_Realm",
    polygons: [...brimhavenDungeon],
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
    polygons: [tob],
  },
  "No Pasaran": {
    title: "No Pasaran",
    file: "No_Pasaran",
    polygons: [...undergroundPass],
  },
  "No Way Out": {
    title: "No Way Out",
    file: "No_Way_Out",
    polygons: [soulsBane],
  },
  Nomad: {
    title: "Nomad",
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
    polygons: [...iceTrollCaves],
  },
  "Oh Rats!": {
    title: "Oh Rats!",
    file: "Oh_Rats!",
    polygons: [...varrockSewers],
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
    ],
  },
  Oriental: {
    title: "Oriental",
    file: "Oriental",
    polygons: [ahZaRhoon],
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
    polygons: [lighthouseBasement],
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
    polygons: [...lizardmenTemple],
  },
  "Path of Peril": {
    title: "Path of Peril",
    file: "Path_of_Peril",
    polygons: [shadowDungeon],
  },
  Pathways: {
    title: "Pathways",
    file: "Pathways",
    polygons: [...brimhavenDungeon],
  },
  "Pest Control": {
    title: "Pest Control",
    file: "Pest_Control_(music_track)",
    polygons: [
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
    polygons: [ectofunctus],
  },
  "Pick & Shovel": {
    title: "Pick & Shovel",
    file: "Pick_%26_Shovel",
    polygons: [...dwarvernMine],
  },
  "Pirates of Penance": {
    title: "Pirates of Penance",
    file: "Pirates_of_Penance",
    polygons: [barbAssault],
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
      ...eaglesTransport,
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
    polygons: [...swampCavesDorgeshKaanTears],
  },
  "Power of the Shadow Realm": {
    title: "Power of the Shadow Realm",
    file: "Power_of_the_Shadow_Realm",
    polygons: [tob],
  },
  "Predator Xarpus": {
    title: "Predator Xarpus",
    file: "Predator_Xarpus",
    polygons: [tob],
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
    polygons: [elementalWorkshop],
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
  Quest: {
    title: "Quest",
    file: "Quest_(music_track)",
    polygons: [abyss, fireAltar],
  },
  "Race Against the Clock": {
    title: "Race Against the Clock",
    file: "Race_Against_the_Clock",
    polygons: [camdozaal],
  },
  "Rat Hunt": {
    title: "Rat Hunt",
    file: "Rat_Hunt",
    polygons: [jimmyDazzler],
  },
  "Rat a Tat Tat": {
    title: "Rat a Tat Tat",
    file: "Rat_a_Tat_Tat",
    polygons: [varrockRatPits],
  },
  "Ready for Battle": {
    title: "Ready for Battle",
    file: "Ready_for_Battle",
    polygons: [castleWarsLobby],
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
    polygons: [kourendCastleAKD],
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
  Relics: {
    title: "Relics",
    file: "Relics_(music_track)",
    polygons: [lithkren, ...tzhaar, ungaelLab],
  },
  Rellekka: {
    title: "Rellekka",
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
    polygons: [...death],
  },
  Revenants: {
    title: "Revenants",
    file: "Revenants_(music_track)",
    polygons: [...revs],
  },
  "Right on Track": {
    title: "Right on Track",
    file: "Right_on_Track",
    polygons: [...keldagrim],
  },
  Righteousness: {
    title: "Righteousness",
    file: "Righteousness",
    polygons: [abyss, lawAltar],
  },
  "Rising Damp": {
    title: "Rising Damp",
    file: "Rising_Damp",
    polygons: [brineRatCavern],
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
    polygons: [roguesDen],
  },
  "Roll the Bones": {
    title: "Roll the Bones",
    file: "Roll_the_Bones",
    polygons: [mta],
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
    polygons: [...varrockSewers],
  },
  Rose: {
    title: "Rose",
    file: "Rose_(music_track)",
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
    title: "Royale",
    file: "Royale",
    polygons: [...taverleyDungeon],
  },
  "Rugged Terrain": {
    title: "Rugged Terrain",
    file: "Rugged_Terrain",
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
    title: "The Ruins of Camdozaal",
    file: "The_Ruins_of_Camdozaal",
    polygons: [camdozaal],
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
  "Rune Essence": {
    title: "Rune Essence",
    file: "Rune_Essence_(music_track)",
    polygons: [...runeEssenceMine],
  },
  "Sad Meadow": {
    title: "Sad Meadow",
    file: "Sad_Meadow",
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
    title: "Safety in Numbers",
    file: "Safety_in_Numbers",
    polygons: [sourhogCave],
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
  Sarachnis: {
    title: "Sarachnis",
    file: "Sarachnis_(music_track)",
    polygons: [...forthos],
  },
  Sarcophagus: {
    title: "Sarcophagus",
    file: "Sarcophagus_(music_track)",
    polygons: [ancientsPyramid],
  },
  "Scape Cave": {
    title: "Scape Cave",
    file: "Scape_Cave",
    polygons: [...varrockSewers, tutorialIslandCave, woodcuttingGuildCave],
  },
  "Scape Main": {
    title: "Scape Main",
    file: "Scape_Main",
    polygons: [boatPartDS2],
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
    polygons: [wizardTowerBasement],
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
  "Scorpia Dances": {
    title: "Scorpia Dances",
    file: "Scorpia_Dances",
    polygons: [...scorpia],
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
  "Secrets of the North": {
    title: "Secrets of the North",
    file: "Secrets_of_the_North_(music_track)",
    polygons: [ghorrockDungeon],
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
    polygons: [abyss, airAltar],
  },
  "Servants of Strife": {
    title: "Servants of Strife",
    file: "Servants_of_Strife",
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
    title: "Sharp End of the Crystal",
    file: "Sharp_End_of_the_Crystal",
    polygons: [iorwerthDungeon],
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
    polygons: [corp],
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
  "Sigmund's Showdown": {
    title: "Sigmund's Showdown",
    file: "Sigmund%27s_Showdown",
    polygons: [lumbridgeWaterMillSigmundFight],
  },
  "The Slayer": {
    title: "The Slayer",
    file: "The_Slayer",
    polygons: [fremennikSlayerCave],
  },
  "Slice of Silent Movie": {
    title: "Slice of Silent Movie",
    file: "Slice_of_Silent_Movie",
    polygons: [...swampCavesDorgeshKaanTears],
  },
  "Slice of Station": {
    title: "Slice of Station",
    file: "Slice_of_Station",
    polygons: [...swampCavesDorgeshKaanTears, ...keldagrim],
  },
  "Slither and Thither": {
    title: "Slither and Thither",
    file: "Slither_and_Thither",
    polygons: [...miscDungeon],
  },
  "Slug a Bug Ball": {
    title: "Slug a Bug Ball",
    file: "Slug_a_Bug_Ball",
    polygons: [witchaven],
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
  "Song of the Elves": {
    title: "Song of the Elves",
    file: "Song_of_the_Elves_(music_track)",
    polygons: [lletyaCouncilHutGrandLibrary],
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
  "Soul Wars": {
    title: "Soul Wars",
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
  Sphinx: {
    title: "Sphinx",
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
  Spirit: {
    title: "Spirit",
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
  "Spirits of the Elid": {
    title: "Spirits of the Elid",
    file: "Spirits_of_the_Elid_(music_track)",
    polygons: [riverElidWaterfall],
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
    polygons: [...hauntedMine, burghDeRottBasement, isleOfSoulsDungeon],
  },
  "Spooky Jungle": {
    title: "Spooky Jungle",
    file: "Spooky_Jungle",
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
    title: "The Spurned Demon",
    file: "The_Spurned_Demon_(music_track)",
    polygons: [zalcano],
  },
  Stagnant: {
    title: "Stagnant",
    file: "Stagnant",
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
    title: "Starlight",
    file: "Starlight_(music_track)",
    polygons: [asgarnianIceDungeon],
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
    polygons: [daeyaltEssenceMine, myrequeHideoutCanifis],
  },
  "Storm Brew": {
    title: "Storm Brew",
    file: "Storm_Brew",
    polygons: [draynorManorUpstairsKillerwatts],
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
  Strangled: {
    title: "Strangled",
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
    polygons: [zanaris, abyss],
  },
  "Strength of Saradomin": {
    title: "Strength of Saradomin",
    file: "Strength_of_Saradomin",
    polygons: [godWars],
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
    polygons: [...dks, crabclawCaves],
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
    polygons: [towerofMagic, viyeldiCaves],
  },
  Suspicious: {
    title: "Suspicious",
    file: "Suspicious",
    polygons: [karamjaShipYard],
  },
  "Tale of Keldagrim": {
    title: "Tale of Keldagrim",
    file: "Tale_of_Keldagrim",
    polygons: [...keldagrim],
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
  "A Taste of Hope": {
    title: "A Taste of Hope",
    file: "A_Taste_of_Hope_(music_track)",
    polygons: [verSinhaza],
  },
  "Tears of Guthix": {
    title: "Tears of Guthix",
    file: "Tears_of_Guthix_(music_track)",
    polygons: [...swampCavesDorgeshKaanTears],
  },
  Technology: {
    title: "Technology",
    file: "Technology",
    polygons: [grandTreeUpstairs],
  },
  Tempest: {
    title: "Tempest",
    file: "Tempest",
    polygons: [slayerTower],
  },
  Temple: {
    title: "Temple",
    file: "Temple_(music_track)",
    polygons: [marimboDungeon],
  },
  "Temple of Light": {
    title: "Temple of Light",
    file: "Temple_of_Light_(music_track)",
    polygons: [...undergroundPass],
  },
  "Temple of Tribes": {
    title: "Temple of Tribes",
    file: "Temple_of_Tribes",
    polygons: [goblinCave],
  },
  "Temple of the Eye": {
    title: "Temple of the Eye",
    file: "Temple_of_the_Eye_(music_track)",
    polygons: [wizardTowerBasement],
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
    polygons: [...myrequeLaboratories],
  },
  "That Sullen Hall": {
    title: "That Sullen Hall",
    file: "That_Sullen_Hall",
    polygons: [...taverleyDungeon],
  },
  Theme: {
    title: "Theme",
    file: "Theme",
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
    polygons: [uzer],
  },
  "Time to Mine": {
    title: "Time to Mine",
    file: "Time_to_Mine",
    polygons: [...keldagrim],
  },
  Tiptoe: {
    title: "Tiptoe",
    file: "Tiptoe",
    polygons: [draynorManorCellar],
  },
  "Tomb Raider": {
    title: "Tomb Raider",
    file: "Tomb_Raider_(music_track)",
    polygons: [pyramidPlunder],
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
    polygons: [goblinVillageKitchen],
  },
  "The Tower": {
    title: "The Tower",
    file: "The_Tower",
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
    polygons: [prif, lletyaCouncilHutGrandLibrary],
  },
  Trawler: {
    title: "Trawler",
    file: "Trawler_(music_track)",
    polygons: [fishingTrawler],
  },
  "Trawler Minor": {
    title: "Trawler Minor",
    file: "Trawler_Minor",
    polygons: [fishingTrawler],
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
    ],
  },
  "Troll Shuffle": {
    title: "Troll Shuffle",
    file: "Troll_Shuffle",
    polygons: [weissMakingFriendsSneakCave],
  },
  "Trouble Brewing": {
    title: "Trouble Brewing",
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
    polygons: [kraken],
  },
  Twilight: {
    title: "Twilight",
    file: "Twilight",
    polygons: [elementalWorkshop],
  },
  "TzHaar!": {
    title: "TzHaar!",
    file: "TzHaar!",
    polygons: [...tzhaar],
  },
  "Undead Dungeon": {
    title: "Undead Dungeon",
    file: "Undead_Dungeon",
    polygons: [...hauntedMine],
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
  Underground: {
    title: "Underground",
    file: "Underground_(music_track)",
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
    title: "Underground Pass",
    file: "Underground_Pass_(music_track)",
    polygons: [...undergroundPass],
  },
  Understanding: {
    title: "Understanding",
    file: "Understanding",
    polygons: [abyss, natureAltar],
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
    polygons: [dream],
  },
  "Unturned Stones": {
    title: "Unturned Stones",
    file: "Unturned_Stones",
    polygons: [digsiteDT2],
  },
  Upcoming: {
    title: "Upcoming",
    file: "Upcoming",
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
    polygons: [cox],
  },
  "The Vault": {
    title: "The Vault",
    file: "The_Vault",
    polygons: [ancientVaultDT2],
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
    polygons: [...digsiteDungeon],
  },
  "Victory is Mine": {
    title: "Victory is Mine",
    file: "Victory_is_Mine",
    polygons: [championsChallenge],
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
    polygons: [ahZaRhoon, viyeldiCaves],
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
    polygons: [dream],
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
    ],
  },
  "The Walking Dead": {
    title: "The Walking Dead",
    file: "The_Walking_Dead",
    polygons: [shayzienCrypt],
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
    polygons: [clanWars],
  },
  Warrior: {
    title: "Warrior",
    file: "Warrior_(music_track)",
    polygons: [koscheiFightFremTrials],
  },
  "Warriors' Guild": {
    title: "Warriors' Guild",
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
    polygons: [poisonWasteDungeon],
  },
  "Watch Your Step": {
    title: "Watch Your Step",
    file: "Watch_Your_Step",
    polygons: [hallowedSepulchre],
  },
  Waterfall: {
    title: "Waterfall",
    file: "Waterfall_(music_track)",
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
    title: "Waterlogged",
    file: "Waterlogged",
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
    title: "Way of the Enchanter",
    file: "Way_of_the_Enchanter",
    polygons: [lunarIsleMine],
  },
  "Way of the Wyrm": {
    title: "Way of the Wyrm",
    file: "Way_of_the_Wyrm",
    polygons: [karuulmSlayerDungeon],
  },
  Wayward: {
    title: "Wayward",
    file: "Wayward",
    polygons: [jiggigZogreDungeon],
  },
  "Welcome to my Nightmare": {
    title: "Welcome to my Nightmare",
    file: "Welcome_to_my_Nightmare",
    polygons: [tob],
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
    polygons: [hallowedSepulchre],
  },
  "Well of Voyage": {
    title: "Well of Voyage",
    file: "Well_of_Voyage_(music_track)",
    polygons: [...undergroundPass, ...leafTraps],
  },
  "What Happens Below...": {
    title: "What Happens Below...",
    file: "What_Happens_Below...",
    polygons: [warrensPortPiscarilius],
  },
  "Where Eagles Lair": {
    title: "Where Eagles Lair",
    file: "Where_Eagles_Lair",
    polygons: [...eaglesTransport],
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
  Wilderness: {
    title: "Wilderness",
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
    polygons: [asgarnianIceDungeon],
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
  Woodland: {
    title: "Woodland",
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
  Workshop: {
    title: "Workshop",
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
    polygons: [soulsBane],
  },
  Xenophobe: {
    title: "Xenophobe",
    file: "Xenophobe",
    polygons: [...dks],
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
    polygons: [godWars],
  },
  "Zanik's Theme": {
    title: "Zanik's Theme",
    file: "Zanik%27s_Theme",
    polygons: [...swampCavesDorgeshKaanTears],
  },
  "Zaros Zeitgeist": {
    title: "Zaros Zeitgeist",
    file: "Zaros_Zeitgeist",
    polygons: [godWars],
  },
  Zealot: {
    title: "Zealot",
    file: "Zealot_(music_track)",
    polygons: [abyss, waterAltar],
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
    file: "Darkmeyer",
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
    polygons: [dream],
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
  "Title Fight": {
    title: "Title Fight",
    file: "Title_Fight",
    polygons: [championsChallenge],
  },
  ...song("Amascut's Promise", toa),
  ...song("Ape-ex Predator", toa),
  ...song("Architects of Prifddinas", prif),
  ...song("Awful Anthem", miscPrinceBrand),
  ...song("Bait", nightmare, myrequeHideoutCanifis),
  ...song("Ballad of the Basilisk", rellekkaLongHall),
  ...song("Barbarian Workout", ...atlasCutscene),
  ...song("Beneath Cursed Sands", toa),
  ...song("Blood Rush", vardorvis),
  ...song("Bob's on Holiday", kbd),
  ...song("Bolrie's Diary"),
  ...song("Brain Battle"),
  ...song("Bunny's Sugar Rush"),
  ...song("The Burning Sun"),
  ...song("Cain's Tutorial"),
  ...song("Children of the Sun"),
  ...song("Confrontation"),
  ...song("Crest of a Wave"),
  ...song("Dance of the Meilyr"),
  ...song("Delrith"),
  ...song("Diango's Little Helpers"),
  ...song("Dies Irae"),
  ...song("Dogfight"),
  ...song("Domain of the Vampyres"),
  ...song("Don't Panic Zanik"),
  ...song("Dorgeshuun Treaty"),
  ...song("Dot's Yuletide"),
  ...song("The Dragon Slayer"),
  ...song("Easter Jig"),
  ...song("Elven Guardians"),
  ...song("Eve's Epinette"),
  ...song("Eye See You"),
  ...song("Eye of the Storm"),
  ...song("The Fairy Dragon"),
  ...song("Faith of the Hefin"),
  ...song("A Festive Party"),
  ...song("Fight of the Basilisk"),
  ...song("Floating Free"),
  ...song("The Fremennik Kings"),
  ...song("Funny Bunnies"),
  ...song("The Gates of Menaphos"),
  ...song("Gnome Village Party"),
  ...song("Grimly Fiendish"),
  ...song("Grip of the Talon"),
  ...song("Healin' Feelin'"),
  ...song("High Spirits"),
  ...song("His Faithful Servants"),
  ...song("Impulses"),
  ...song("In the Shadows"),
  ...song("Incantation"),
  ...song("Iorwerth's Lament"),
  ...song("Jaws of the Basilisk"),
  ...song("Jaws of Gluttony"),
  ...song("Jester Minute"),
  ...song("Jungle Bells"),
  ...song("Jungle Island Xmas"),
  ...song("King of the Trolls"),
  ...song("Laid to Rest"),
  ...song("Land of Snow"),
  ...song("Last Stand"),
  ...song("The Longramble Scramble"),
  ...song("Look to the Stars"),
  ...song("Master of Puppets"),
  ...song("Mastermindless"),
  ...song("Meddling Kids"),
  ...song("Monkey Badness"),
  ...song("More Than Meets the Eye"),
  ...song("Morytanian Mystery"),
  ...song("A Mother's Curse"),
  ...song("Mother Ruckus"),
  ...song("The Noble Rodent"),
  ...song("Nox Irae"),
  ...song("The Old Ones"),
  ...song("On the Up"),
  ...song("Oncoming Foe"),
  ...song("Organ Music 1"),
  ...song("Organ Music 2"),
  ...song("The Penguin Bards"),
  ...song("Penguin Plots"),
  ...song("The Pharaoh"),
  ...song("Pheasant Peasant"),
  ...song("Pinball Wizard"),
  ...song("Plots and Plans"),
  ...song("Prison Break"),
  ...song("The Quizmaster"),
  ...song("Reign of the Basilisk"),
  ...song("Rhapsody"),
  ...song("Roc and Roll"),
  ...song("Sands of Time"),
  ...song("Sarim's Vermin"),
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
  ...song("The Seed of Crwys"),
  ...song("Shattered Relics"),
  ...song("Showdown"),
  ...song("The Sinclairs"),
  ...song("Snowflake & My Arm"),
  ...song("Song of the Silent Choir"),
  ...song("Sorceress's Garden"),
  ...song("The Spymaster"),
  ...song("Stand Up and Be Counted"),
  ...song("Storeroom Shuffle"),
  ...song("Strange Place"),
  ...song("Surok's Theme"),
  ...song("Tarn Razorlor"),
  ...song("The Terrible Caverns"),
  ...song("Terrorbird Tussle"),
  ...song("Test of Companionship"),
  ...song("Test of Isolation"),
  ...song("Test of Resourcefulness"),
  ...song("Test of Strength"),
  ...song("A Thorn in My Side"),
  ...song("Thrall of the Devourer"),
  ...song("Tick Tock"),
  ...song("Time Out"),
  ...song("The Tower of Voices"),
  ...song("Vampyre Assault"),
  ...song("Vanescula"),
  ...song("Wally the Hero"),
  ...song("We are the Fairies"),
  ...song("Winter Funfair"),
  ...song("A Worthy Foe"),
  ...song("You Have My Attention"),
};

function song(
  name: string,
  ...polygons: Polygon[]
): Record<string, { title: string; file: string; polygons: Polygon[] }> {
  return {
    [name]: {
      title: name,
      file: name,
      polygons,
    },
  };
}

function polygon(coordinates: Array<Coordinate>): Polygon {
  return {
    coordinates,
    inMap: false,
  };
}
