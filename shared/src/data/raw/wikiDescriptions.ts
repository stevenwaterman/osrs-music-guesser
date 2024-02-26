const mythsGuild =
  "The Myths' guild basement can also be accessed from the Wrath Altar island or via the Corsair Cove dungeon, crossing the bridge to the west.";
const taverleyDungeon =
  "Taverley Dungeon is also accessible through the ladder down to the Fire Obelisk, even though the only way to get there is by going through Taverley Dungeon first.";
const attack =
  "Had that naming convention continued, this game would have been a lot less interesting.";
const nightmare =
  "The Sisterhood Sanctuary is also accessible by climbing down a ladder inside Crombwick Manor, which takes you to Kroy's Laboratory. Since the doors to Crombwick Manor are locked, the only way to do this is to first go through Sisterhood Sanctuary.";
const swampCaves = [
  "The Lumbridge Swamp Caves and Dorgesh-Kaan are accessible through Lumbridge Castle basement, the ladder in Lumbridge swamp, and through the watermill dungeon.",
  "If all transport options were allowed, they would also be accessible from KQ, Keldagrim, Falador, White Wolf Mountain, Elvarg's Lair, and about a million other places.",
];
const zanaris =
  "As fairy rings are not an allowed method of transport, Zanaris is only accesible through the hut in Lumbridge swamp.";
const keldagrim = [
  "Keldagrim is accessible through its main entrance, the trapdoor in the Grand Exchange, and a back entrance at the bottom of Trollweiss mountain.",
  "If all methods of transport were allowed, it would also be accessible from Falador, the Lumbridge watermill, Elvarg's Lair, and Zanaris, among others.",
];
const crandor = // TODO make this a precise poly of the rocks
  "The marked section of ocean south of Crandor is where the Lady Lumbridge gets attacked by Elvarg. Unlike most ocean-based cutscenes, we know exactly where this cutscene happens because the cutscene starts with a map showing the location.";
const eastSewers =
  "The Sewers are accessible through the main entrance west of Ardougne market, or through the trapdoor in Jimmy Dazzler's house.";
const undergroundPass = [
  "The Underground Pass is accessible through its main entrances in West Ardougne and Isafdar Forest, as well as going the long way via the Mourner HQ basement.",
  "From the Mourner HQ, you must go down into the basement, through the Mourner tunnels, through the temple of light to the death altar, and then through a crack in the wall which takes you to the dwarven camp.",
  "This means the Underground Pass would also be accessible through the portal to the death altar in the Abyss.",
];
const mournerTunnels = [
  "The Mourner Tunnels are also accessible through the Underground Pass, by going through the crack in the wall of the Dwarvern Camp. This takes you to the death altar inside the Temple of Light.",
  "This means the Mourner Tunnels would also be accessible through the portal to the death altar in the Abyss.",
];
const templeOfLight = [
  "As well as the standard entrance via the Mourner Tunnels, the Temple of Light is accessible through the Underground Pass, by going through the crack in the wall of the Dwarvern Camp. This takes you to the death altar.",
  "This means the Mourner Tunnels would also be accessible through the portal to the death altar in the Abyss.",
];
const waterbirth =
  "Waterbirth Island Dungeon is accessible through the main entrance and the ladder on top of the hill, which requires first going through the other entrance.";
const catacombs =
  "This song is technically accessible from Forthos Dungeon via the Strange Passage, but we banned that as a transport method because there's already 5 entrances and it was just getting a bit silly.";
const forthos =
  "This song is technically accessible from the Catacombs of Kourend via the Strange Passage, but we banned that as a transport method because otherwise there'd be 7 entrances to Forthos Dungeon.";
const eaglesTransport =
  "In the Eagles' transport system, you are never shown as outside when travelling to the main Eagles' peak transport hub. When going the other way, there is a cutscene showing you being towed by an eagle, but you have no agency over your character so this is considered a valid method of transport. Therefore all 4 Eagle Transport System stations are connected.";

export const songDescriptions: Record<string, string[]> = {
  "7th Realm": [
    "Unlocked in the western part of Brimhaven Dungeon or in the basement of the Myths' Guild.",
    mythsGuild,
  ],
  Adventure: ["Unlocked in Varrock Palace."],
  "Al Kharid": ["Unlocked in Al Kharid and the west of the Giants' Plateau."],
  "Alchemical Attack!": [
    "Unlocked during the fight with the Alchemical Hydra, inside Mount Karuulm.",
  ],
  "All's Fairy in Love & War": [
    "Unlocked at the Fairy Resistance Hideout during the Fairytale II - Cure a Queen quest.",
    "Only accessible via fairy rings.",
  ],
  Alone: [
    "Unlocked in the Clock Tower Dungeon and a wide area around Ice Mountain, including Edgeville Monastery (but not the Black Knight's Fortress).",
    "Playing this song to Cecilia may be required for an Easy Clue step.",
  ],
  "Altar Ego": ["Unlocked in the Ourania Cave near the Observatory."],
  "Alternative Root": [
    "Unlocked in the Tunnel of Chaos, under the statue east of Varrock, during What Lies Below.",
  ],
  "Amascut's Promise": [
    "Unlocked during the fight with Tumeken's Warden and Elidinis' Warden in the Tombs of Amascut, inside the Necropolis.",
  ],
  "Ambient Jungle": [
    "Unlocked inside Shilo Village. It also plays in the underground area of the Shilo Village mine.",
  ],
  "The Ancient Prison": [
    "Unlocked in the Ancient Prison outside Nex, inside the God Wars Dungeon.",
    'The track was originally released on 3 December 2009, being played during the quest The Temple at Senntisten in RuneScape and later in the Ancient Prison. It was originally composed by Chris Jolley, and was titled "Zaros Stirs".',
  ],
  "The Angel's Fury": [
    "Unlocked at the beginning of the encounter with Nex, inside the God Wars Dungeon.",
    "The track begins playing when Nex enters her Blood phase after Umbra is killed.",
    "The track is based on the Angel of Death music track from The Angel of Death, Nex's hard mode encounter in RuneScape.",
  ],
  Anywhere: ["Unlocked north of Marim's main gate on Ape Atoll."],
  "Ape-ex Predator": [
    "Unlocked during the fight with Ba-Ba in the Tombs of Amascut, inside the Necropolis.",
  ],
  Arabian: [
    "Unlocked in Al Kharid, after passing through the toll gate. Also plays in Citharede Abbey and at the Uzer mine.",
  ],
  "Arabian 2": [
    "Unlocked in the Al Kharid mine and surrounding areas, including a cow pen and a potato field.",
  ],
  "Arabian 3": [
    "Unlocked in the north-western part of the Kharidian Desert, around the entrance to the Kalphite Lair.",
  ],
  Arabique: [
    "Unlocked near the Hellhounds in Taverley Dungeon.",
    taverleyDungeon,
  ],
  "Arachnids of Vampyrium": [
    "Unlocked during the fight in the Nylocas lair within the Theatre of Blood.",
  ],
  Arboretum: [
    "Unlocked inside the Arboretum (which contains the Blisterwood tree) in Darkmeyer.",
    "The track was originally released on 31 August 2011, being played during the quest Branches of Darkmeyer in RuneScape.",
  ],
  Arcane: [
    "Unlocked in Arceuus. It can also be heard in the Library Historical Archive.",
  ],
  "Architects of Prifddinas": [
    "Unlocked upon entering Prifddinas for the first time after completing the Song of the Elves quest. It is the theme of the Ithell Clan.",
  ],
  "Armadyl Alliance": [
    "Unlocked outside of Armadyl's Eyrie inside the God Wars Dungeon.",
  ],
  Armageddon: [
    "Unlocked in the main area of the God Wars Dungeon, and in the Wilderness God Wars Dungeon.",
    "This music track seems to contain elements of the other God Wars Dungeon tracks. If the player listens closely, parts of it sound very similar to Armadyl Alliance, Bandos Battalion, Strength of Saradomin, and Zamorak Zoo.",
    "According to data crowdsourced via RuneLite, approximately 71% of players unlock the track in the God Wars Dungeon, while 29% unlock it in the Wilderness God Wars Dungeon.",
  ],
  "Army of Darkness": [
    "Unlocked in the Dark Warriors' Fortress and the Wilderness Bandit Camp.",
  ],
  Arrival: ["Unlocked west of Falador at the West Falador mine."],
  Artistry: ["Unlocked during the Mime Random event."],
  Ascent: [
    "Unlocked south of Mount Quidamortem (Chambers of Xeric), west of Great Kourend.",
    "This music track contains elements of the Love Story soundtrack, which is a quest that Mod Ash has composed music for on RuneScape 2.",
  ],
  "Assault and Battery": ["Unlocked while playing Barbarian Assault."],
  "Attack 1": [
    "Unlocked on the Khazard Battlefield, and to the north-west where you fight the Khazard Warlord in the Tree Gnome Village quest. It also plays at a small area north of West Ardougne.",
    'It is the first of six variations known as the "Attack" series. ' + attack,
  ],
  "Attack 2": [
    "Unlocked in Elvarg's lair in the Crandor and Karamja Dungeon. It can later be heard in Dragon Slayer II, during the cutscene of the Dragonkin battle on Lithkren.",
    "After completing Dragon Slayer, Elvarg's lair can also be accessed from the Tzhaar Area under Karamja Volcano.",
    'It is the second in a set of six tracks known as the "Attack" series. ' +
      attack,
  ],
  "Attack 3": [
    "Unlocked in the Lava Maze Dungeon.",
    'It is the third track in the series of six "Attack" music tracks. ' +
      attack,
  ],
  "Attack 4": [
    "Unlocked at the Fight Arena. It can also be unlocked in the Iorwerth Camp cave during Song of the Elves, or in parts of the Yanille Agility Dungeon (which has two entrances).",
    'It is the fourth track in the series of six "Attack" music tracks. ' +
      attack,
  ],
  "Attack 5": [
    "Unlocked at the King Black Dragon's Lair, or in a cutscene at the Lithkren Vault during Dragon Slayer II.",
    'It is the fifth track in the series of six "Attack" music tracks. ' +
      attack,
  ],
  "Attack 6": [
    "Unlocked at the Gu'Tanoth Ogre Enclave lair.",
    'It is the sixth track in the series of six "Attack" music tracks. ' +
      attack,
  ],
  Attention: [
    "Unlocked at the coastline south of Rimmington and on the western side of Thurgo Peninsula.",
    "'Thurgo Peninsula' is a quote from the wiki page and I'm not changing it.",
  ],
  "Autumn Voyage": ["Unlocked in eastern Lumbridge, near the cow calves."],
  "Awful Anthem": [
    "Unlocked during Throne of Miscellania, played by Prince Brand.",
    "The song does cannonically have lyrics, but they make little difference to the overall experience.",
  ],
  "Aye Car Rum Ba": [
    "Unlocked on Braindeath Island during Rum Deal, accessible from the dock to the north-west of the Ectofuntus.",
  ],
  Aztec: ["Unlocked in the Brimhaven Agility Arena."],
  "Back to Life": [
    "Unlocked in Sophanem and Sophanem bank after the Contact! quest, replacing the City of the Dead music track.",
  ],
  Background: [
    "Unlocked on Entrana.",
    "Due to how the chunks line up, the song is also unlocked on a few tiles of land south of Keep Le Faye.",
    "According to the wiki, 1.7% of players unlock this song on that small patch of land.",
  ],
  Bait: [
    "Unlocked in the Myreque Hideout under Meiyerditch, when under attack by the Abomination during A Taste of Hope.",
    "Also plays during the battle with Kroy in the Laboratory under Crombwick Manor in Slepe, which is accessed via the Sisterhood Sanctuary",
  ],
  "Ballad of Enchantment": [
    "Unlocked at the Ardougne Monastery and the Clock Tower.",
  ],
  "Ballad of the Basilisk": [
    "Unlocked in the Rellekka Longhall when Olaf the Bard is on stage performing the ballad after you defeat the Jormungand.",
    "It is an instrumental version of RuneScape 3's song by the same name. In that version, the lyrics are sung, while in this version Olaf the Bard sings by typing.",
  ],
  "Bandit Camp": [
    "Unlocked when visiting the Bandit Camp in the Kharidian Desert.",
  ],
  "Bandos Battalion": [
    "Unlocked in Bandos' Stronghold inside the God Wars Dungeon.",
    "Throughout the track renditions of different tracks are featured, such as the theme music of the Goblin Village and of Dorgeshuun City.",
  ],
  Bane: [
    "Unlocked during the fight with the Corporeal Beast.",
    "'Bane' is a variation of the RuneScape track 'Bane of Summer' from the 29th of July, in 2008.",
  ],
  "The Bane of Ashihama": [
    "Unlocked during the fight with The Nightmare. It can be also be unlocked by spectating an ongoing fight.",
    nightmare,
  ],
  "Barb Wire": [
    "Unlocked inside the Ancient Cavern beneath Baxtorian Falls.",
    "Portions of Barbarianism can be heard in the track.",
    "To access the Ancient Cavern, the player needs to start the pyre ship section of Barbarian Training.",
  ],
  "Barbarian Workout": [
    "Unlocked while doing the Below Ice Mountain quest, during the training session with Atlas.",
    "The areas marked on the map are all the areas your character is shown in during the cutscene.",
  ],
  Barbarianism: [
    "Unlocked at Barbarian Village.",
    "This song is also notable for playing when you walk past the fishing spot in a free to play world and get scarred for life by public chat.",
  ],
  "Barking Mad": [
    "Unlocked in the Werewolf Agility Course and while playing Skullball.",
  ],
  Baroque: ["Unlocked in and around East Ardougne Market."],
  "Barren Land": ["Unlocked on the icy cliffs to the north of Weiss."],
  "Beetle Juice": [
    "Unlocked in the battle with the Giant Scarab under Sophanem during the Contact! quest. After the quest, The Depths will play in this area.",
  ],
  "Beneath Cursed Sands": [
    "Unlocked in the Tombs of Amascut, inside the Necropolis.",
    "It is a remix of Oncoming Foe, which playes during the final assault in Dragon Slayer 2",
  ],
  "Beneath the Kingdom": [
    "Unlocked upon entering the Catacombs of Kourend and Giants' Den.",
    "The music track was not released alongside the Catacombs of Kourend on 9th June 2016 - Arcane was played instead.",
    catacombs,
  ],
  "Beneath the Stronghold": [
    "Unlocked at the Stronghold Slayer Cave, inside the Gnome Stronghold.",
  ],
  Beyond: [
    "Unlocked in the White Wolf Tunnel, the Ice Queen's Lair under White Wolf Mountain, or the basement of the Warriors' Guild.",
    "This song is technically accessible from Keldagrim via minecart, but that transport method is banned.",
  ],
  "Beyond the Meadow": [
    "Unlocked in the western part of Hosidius, just south of the southern entrance to Kourend Castle. It can be heard around the Mess and Watson's house, and also around the Forthos Ruin and Saltpetre south of the river.",
  ],
  "Big Chords": [
    "Unlocked west of Yanille.",
    "This track has a rather slow and tranquil tune with strings, wind and piano. The melody is uplifting with high notes.",
  ],
  "Blistering Barnacles": [
    "Unlocked on Braindeath Island's mountain, during Rum Deal.",
  ],
  "Blood Rush": [
    "Unlocked when fighting Vardorvis during and after Desert Treasure II - The Fallen Empire.",
    "This song is the only song that shares a name with a sound effect, meaning originally the game had a bug where instead of playing the song, it would just play the sound effect on repeat.",
  ],
  Bloodbath: [
    "Unlocked at Slepe. It can also later be heard inside the True Blood Altar in the tunnels under Morytania.",
  ],
  "Bob's on Holiday": [
    "Unlocked during A Tail of Two Cats. It can be heard during the cutscene showing the various adventures of Bob and Neite.",
    "Valid answers include the Sophanem Pyramid, the King Black Dragon's Lair, and the Quest Icon in Burthorpe (for the scene parodying Titanic which has no specific location)",
  ],
  "Body Parts": [
    "Unlocked in the Experiment Cave under Fenkenstrain's Castle.",
    "Also accessible via the Mausoleum, which is only accessible from within the cave.",
  ],
  "Bolrie's Diary": [
    "Unlocked during the quest The Path of Glouphrie. It plays whilst viewing the cutscenes of King Bolrie's diary.",
    "The locations shown in the cutscene are the Gnome Stronghold, the ground floor of the Grand Tree, Brimstail's cave, and the Tree Gnome Village throne.",
  ],
  "Bone Dance": [
    "Unlocked on the western side of Mort'ton, or during Sins of the Father when fighting the Nail Beasts during the Temple Trek with Ivan Strom. It can also be heard on the island in the River Salve.",
    "It is possible, although difficult, to unlock the track during Sins of the Father. This would require the player to complete the Nature Spirit, In Search of the Myreque, In Aid of the Myreque, and A Taste of Hope quests without ever passing through the path left of Mort'ton, and by following an extremely specific route to the Nature Grotto. So far, no player is recorded as having accomplished this.",
  ],
  "Bone Dry": [
    "Unlocked in the Smoke Dungeon below Pollnivneach (not the Smoke Devil Dungeon).",
  ],
  "Book of Spells": ["Unlocked in the western part of Lumbridge Swamp."],
  Borderland: [
    "Unlocked east of Rellekka, outside the Keldagrim entrance, and in parts of the Polar Hunter area.",
  ],
  "Box of Delights": [
    "Unlocked during the fight with the Mimic, upstairs in Watson's house.",
    "This is often a player's last song to unlock in order to earn the Music Cape, as fighting the Mimic is only possible sporadically after compliting Elite and Master clue scrolls.",
  ],
  "Brain Battle": [
    "Unlocked during The Great Brain Robbery. It can be heard during the battle with Barrelchest.",
  ],
  Breeze: ["Unlocked at Isafdar near the Underground Pass."],
  "Brew Hoo Hoo!": ["Unlocked at the Port Phasmatys brewery basement."],
  "Brimstail's Scales": [
    "Unlocked in Brimstail's cave, in the south-west of the Gnome Stronghold.",
  ],
  "Bubble and Squeak": ["Unlocked at the Keldagrim Rat Pits.", ...keldagrim],
  "Bunny's Sugar Rush": [
    "Unlocked during the 2015 Easter event. It is unlocked by completing an Easter event.",
  ],
  "Burning Desire": [
    "Unlocked on Mount Karuulm.",
    "The music contains leitmotifs from TzHaar! and In the Pits. Mount Karuulm is inhabited by a trio of ancient Tzhaar that left the Karamja Volcano long ago.",
  ],
  "The Burning Sun": [
    "Unlocked during the Children of the Sun quest, when Prince Itzla Arkan personally interrogates the bandit planning to assasinate their delegation's priest.",
  ],
  "Cabin Fever": [
    "Unlocked during the Cabin Fever quest, and plays constantly during the naval battle.",
    "The exact location of the naval battle is unknown, as it takes place in an instanced bit of ocean.",
  ],
  "Cain's Tutorial": [
    "Unlocked during Barbarian Assault. It can be heard during the tutorial for the minigame presented by Captain Cain.",
    'If the player chose to skip the tutorial, the track can be obtained by selecting the "Getting Started" option from Cain\'s Tutorial menu.',
    "It is a remix of Barbarianism.",
  ],
  Camelot: [
    "Unlocked near Camelot Castle, or much more rarely in Tenzing's house. It can also be heard in the jail during King's Ransom after Merlin has been freed, and on Mac's island.",
    "Good luck unlocking it on Mac's island though.",
  ],
  "Castle Wars": [
    "Unlocked while playing Castle Wars.",
    'Prior to an update, the music track was named "Castlewars", and is still listed as such on the RuneScape: Original Soundtrack Classics album.',
  ],
  "Catacombs and Tombs": [
    "Unlocked during Land of the Goblins within the crypt in the Goblin Temple.",
  ],
  "Catch Me If You Can": [
    "Unlocked at the Ardougne Rat Pits. The Rat Pits are accessible through a trapdoor in Jimmy Dazzler's house, or though the main entrance to the western section fo the Ardougne Sewers.",
  ],
  "Cave Background": [
    "Unlocked throughout the Dwarven Mine. It can also be heard in the Magic axe room of Taverley Dungeon.",
    taverleyDungeon,
  ],
  "Cave of Beasts": [
    "Unlocked during Mountain Daughter, in the Kendal's cave north of the Mountain Camp.",
  ],
  "Cave of the Goblins": [
    "Unlocked in the Lumbridge Swamp Caves. It can also be heard during Another Slice of H.A.M., when visiting the Dorgesh-Kaan–Keldagrim train system from Dorgesh-Kaan while it is still under construction.",
    ...swampCaves,
  ],
  Cavern: [
    "Unlocked at the Yanille Agility Dungeon and the Deep Wilderness Dungeon.",
  ],
  "The Cellar Dwellers": [
    "Unlocked in the Ardougne west Sewers during Hazeel Cult, Elena's prison during Plague City, and the basement of the Carnillean Mansion.",
  ],
  "Cellar Song": ["Unlocked at the vault of the Varrock West Bank."],
  "Chain of Command": [
    "Unlocked in the Temple of Ikov. The entrance inside McGrubor's Wood requires a shiny key.",
  ],
  Chamber: [
    "Unlocked during the Haunted Mine quest, on Levels 4 and 5 of the Abandoned Mine.",
  ],
  "Chef Surprise": [
    "Unlocked during Recipe for Disaster upon following the Culinaromancer into the portal.",
    "Plucked strings are the accompaniment while a French horn has the melody. In the second phrase, the song changes key and a tenor sax takes the melody.",
  ],
  "Chickened Out": [
    "Unlocked during Recipe for Disaster: Freeing Sir Amik Varze. It is located in the Evil Chicken's Lair in Zanaris.",
    zanaris,
  ],
  "Children of the Sun": [
    "Unlocked during the Children of the Sun quest, when Prince Itzla Arkan's delegation from Varlamore arrives in the Varrock Square.",
  ],
  "Chompy Hunt": [
    "Unlocked at the chompy bird hunting location east of Feldip Hills. It can also be heard in Rantz's Cave.",
  ],
  "The Chosen": [
    "Unlocked during the Recruitment Drive quest, during the challenges. The location is in an instance not accessible outside of the quest, so the correct answer is the quest icon.",
  ],
  "City of the Dead": [
    "Unlocked north of Menaphos and in Sophanem before Contact! is completed, being replaced after the quest by Back to Life.",
  ],
  "Clan Wars": [
    "Unlocked in Clan Wars arenas. Upon entering any Clan Wars arena, either Warpath or this track is randomly chosen to start playing.",
  ],
  Clanliness: ["Unlocked upon entering a Clan Hall."],
  Claustrophobia: [
    "Unlocked during the Between a Rock... quest, within the Arzinian Mine inside Keldagrim.",
    ...keldagrim,
  ],
  "Close Quarters": [
    "Unlocked in the Eastern Ruins in level 26-29 Wilderness.",
    "The depressed percussion provides a backdrop for the bleak landscape.",
  ],
  Coil: [
    "Unlocked during the fight with Zulrah.",
    "Also unlocked when I'm on the bus to work.",
  ],
  "Colossus of the Deep": [
    "Unlocked when fighting the Leviathan during and after Desert Treasure II - The Fallen Empire.",
    "Accessible via the ladder in the Wizard's Tower.",
  ],
  Competition: [
    "Unlocked at the Burthorpe Games Room, under Burthorpe Castle.",
  ],
  Complication: [
    "Unlocked at the Chaos Altar.",
    "The Chaos Altar is accessible through its normal entrance in the Wilderness, or through the Tunnel of Chaos, under the statue east of Varrock, which is unlocked during What Lies Below.",
    "The Mage of Zamorak north of Edgeville would be a valid answer if accessing Runecraft altars through the Abyss was not a banned method of transport.",
  ],
  Confrontation: [
    "Unlocked during the quest A Kingdom Divided, when confronting Sophia Hughes during her attempt to escape to the mainland, before fighting the Judge of Yama.",
  ],
  "The Consortium": [
    "Unlocked during The Giant Dwarf. It can be heard during the final cutscene of the quest, when the Dwarven Consortium meets.",
    ...keldagrim,
  ],
  Conspiracy: [
    "Appears four separte times during the Vampire quest line. First while spying on Ranis Drakan and Vanstrom Klause on the walls of Ver Sinhaza during A Taste of Hope. Then in the basement of Serafina's house, in Meiyerditch.",
    "In Sins of the Father, it plays twice more. First when following Carl around Slepe, and again during the cutscene when Damien Leucurte is confronted upstairs in Crombwick Manor.",
  ],
  Contest: [
    "Unlocked at Dad's arena south of Trollheim and on the east edge of Death Plateau.",
  ],
  "Corporal Punishment": ["Unlocked during the Drill Demon random event."],
  "Corridors of Power": [
    "Unlocked in the eastern part of the Miscellania and Etceteria Dungeon.",
  ],
  "Country Jig": [
    "Unlocked south of Hosidius, at the Vinery, its basement and Tithe Farm.",
    "Previously, this song played north of Hosidius, around the flax fields. However, this meant that when walking south, you transitioned from a very somber song, to this very not somber song, and back to another very somber song. It was delightfully janky.",
  ],
  Courage: [
    "Unlocked at the entrance of Taverley Dungeon, in the basement of the Witch's House, and in the Heroes' Guild mine.",
    taverleyDungeon,
  ],
  "Creature Cruelty": [
    "Unlocked during the Tower of Life quest, on the upper floors of the Tower of Life after the Homunculus has been summoned. After the quest, Work Work Work will play here instead.",
  ],
  "Creeping Vines": [
    "Unlocked in the Hespori cave in the west wing of the Farming Guild. During the fight with the Hespori, A Thorn in My Side will play.",
  ],
  "Crest of a Wave": [
    "Unlocked during The Giant Dwarf and in Dragon Slayer, in both cases when taking a boat",
    "In The Giant Dwarf, it plays when you first sail to Keldagrim, before hitting the statue. In Dragon Slayer, it plays when sailing to Crandor before Elvarg attacks.",
    crandor,
    ...keldagrim,
  ],
  "Crystal Castle": [
    "Unlocked around Prifddinas but not inside the city walls.",
  ],
  "Crystal Cave": ["Unlocked on the east side of Zanaris.", zanaris],
  "Crystal Sword": [
    "Unlocked between Varrock and the Chaos Temple, after crossing the Wilderness ditch, as well as Ardougne's eastern sewers.",
    eastSewers,
  ],
  Cursed: [
    "Unlocked in the entrance of the Underground Pass dungeon, the Wrath Altar, and in the unmarked cave with the rabbit boss just north of the Gwenith Hunter area.",
    ...undergroundPass,
    "Amusingly, the wiki refuses to list where the rabbit boss actually is, because it's so secret. I had to go there in person to find out, and I was terrified.",
  ],
  "The Curtain Closes": [
    "Unlocked in Verzik Vitur's treasure vault after defeating her in the Theatre of Blood.",
    "The song begins with a wailing scream. This is a metaphor for when you do a wailing scream you produce after getting a 4th pair of Justiciar Legguards and nothing else.",
  ],
  "Dagannoth Dawn": [
    "Unlocked in the Waterbirth Island Dungeon. It plays in the deeper area in rooms 3-12, then again from room 15 to the end if the player goes past the entrance to the Dagannoth Kings.",
    waterbirth,
  ],
  "Dance of Death": [
    "Unlocked at the Sepulchre of Death in the Stronghold of Security, down the ladder in Barbarian Village.",
  ],
  "Dance of the Meilyr": [
    "Unlocked in Priffdinas. It is the theme of the Meilyr Clan.",
  ],
  "Dance of the Nylocas": [
    "Unlocked upon entering the Nylocas lair in the Theatre of Blood.",
  ],
  "Dance of the Undead": [
    "Unlocked above ground at Barrows and on the east edge of Mort'ton.",
  ],
  Dangerous: [
    "Unlocked in the Wilderness north of Edgeville, including the Mage of Zamorak and the air obelisk. It also plays deeper in the Wilderness, around Venenatis and the Escape Caves.",
  ],
  "A Dangerous Game": [
    "Unlocked in the Wilderness Slayer Cave. Prior to the release of this track, Revenants was played instead.",
  ],
  "Dangerous Road": ["Unlocked in Crandor and Karamja Dungeon."],
  "Dangerous Way": [
    "Unlocked in Barrows crypts and tunnels.",
    "The highlighted squares are the exact tiles that you can dig to end up in a crypt. I don't want to talk about it.",
  ],
  Dark: [
    "Unlocked north-east of the Wilderness Chaos Temple, including the black salamanders.",
    "The track is notable as it features four different short sections threaded together, with none of them repeated.",
  ],
  "The Dark Beast Sotetseg": [
    "Unlocked upon entering Sotetseg's room in the Theatre of Blood.",
  ],
  "Darkly Altared": [
    "Unlocked during the fight with Skotizo, beneath the Catacombs of Kourend.",
    catacombs,
  ],
  Darkmeyer: [
    "Do you really need my help with this one? Let's just skip to the trivia.",
    "Jagex got lazy and named the song after the city it's in. It plays everywhere in Darkmeyer except in the arboretum. In the arboretum, Aboretum plays. You can't make this stuff up.",
    "Also the song was ripped from the main game, it originally released in 2011, in the quest Branches of Darkmeyer. Release Reuse Recycle!",
  ],
  "Darkness in the Depths": [
    "Unlocked upon entering the Chasm of Fire, north-west of Shayzien.",
    "Four years after the release of this track, it would be remixed for Judgement of the Depths, which plays during the battle against the Judge of Yama.",
  ],
  "Davy Jones' Locker": [
    "Unlocked when diving off Port Khazard docks to the Mogre Camp. Initially unlocked during Pirate Pete's subquest of Recipe for Disaster.",
  ],
  "Dead Can Dance": [
    "Unlocked in and around the Graveyard of Shadows, which houses Calvar'ion just north of Ferox Enclave.",
  ],
  "Dead Quiet": [
    "Unlocked near the northern entrance of Mort Myre Swamp or at the shore east of the Digsite. It can also be unlocked while Temple Trekking, during the Bog puzzle, when battling the Swamp snakes, or during combat events with two escape routes.",
    "It is possible, but difficult, to unlock the track during Temple Trekking. The player must complete the Nature Spirit, In Search of the Myreque, and In Aid of the Myreque quests without ever passing through the north-western part of the Mort Myre Swamp.",
    "According to data crowdsourced via RuneLite, approximately 99.81% of players unlock the track in the swamp, 0.17% unlock it east of the Digsite, and 0.02% unlock it during Temple Trekking.",
  ],
  Deadlands: ["Unlocked in the Haunted Woods."],
  "Deep Down": [
    "Unlocked during the Haunted Mine quest, on Levels 2 and 3 of the Abandoned Mine. It can also be heard when attempting to enter Level 6 without a light source.",
  ],
  "Deep Wildy": [
    "Unlocked near the Chaos Temple or south of the Ice Plateau in the Wilderness.",
  ],
  Delrith: [
    "Unlocked during Demon Slayer in the cutscene where Delrith is summoned by the dark wizards, and during the subsequent battle.",
  ],
  "The Depths": [
    "Unlocked in the deeper levels of the Sophanem Dungeon. During the fight with the Giant Scarab, Beetle Juice will play here.",
  ],
  "Desert Heat": [
    "Unlocked in the Uzer Oasis, the Ancient Vault, and to the west of these areas.",
  ],
  "Desert Voyage": [
    "Unlocked around the Desert Mining Camp and the entrance to the Smoke Dungeon.",
  ],
  "The Desert": [
    "Unlocked in the Bedabin Camp and over to the east towards the Desert Mining Camp.",
  ],
  "The Desolate Isle": [
    "Unlocked on Waterbirth Island, or on Ungael.",
    "It is slow, but atmospheric, a metaphor for the feeling of procrastinating when farming Vorkath.",
  ],
  "The Desolate Mage": [
    "Unlocked at the summit of Mount Quidamortem, outside the entrance to the Chambers of Xeric.",
  ],
  "Devils May Care": [
    "Unlocked upon entering the Smoke Devil Dungeon, south of Castle Wars.",
    "This is one of many music tracks which Cecilia can ask you to play when completing a medium clue. A slayer task is not required to enter the cave, which is a good thing because otherwise that medium clue would have a 93 Slayer requirement.",
    "You can turn off the smoke by right clicking the cave entrance. That's not about the song, but I thought you'd want to know.",
  ],
  "Diango's Little Helpers": [
    "Unlocked at Diango's Workshop, which has so far been accessible during the 2013 Halloween event, the 2014 Christmas event, and the 2017 Christmas event.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Dies Irae": [
    "Unlocked in the Grim Reaper's house during the 2015 Halloween event.",
    'This is an arrangement based on "Dies Irae", which is a Gregorian chant song from around the 13th century.',
    'Dies Irae, translated from Latin, means "Day of Wrath".',
  ],
  "Dimension X": ["Unlocked in the Gorak Plane."],
  "Distant Land": [
    "Unlocked at Burgh de Rott and south of Barrows. The track is later heard at the start of Temple Trekking.",
    "It is very melancholic at times, using deep choir and strings to convey a sense of sadness. The song alternates between slower and faster parts.",
  ],
  "Distillery Hilarity": [
    "Unlocked at the Trouble Brewing lobby, and on the islands north of Mos Le'Harmless.",
  ],
  "Dogs of War": [
    "Unlocked on the first level of the Stronghold of Security, down the ladder in Barbarian Village.",
  ],
  Dogfight: [
    "Unlocked during The General's Shadow. It can be heard during the battle with the ghost of Bouncer inside the Goblin Cave.",
  ],
  "Domain of the Vampyres": [
    "Unlocked during the meeting between Vanstrom Klause, Ranis Drakan and Vanescula Drakan in the Darkness of Hallowvale.",
    "It later plays during the cutscene of the speech by Ranis Drakan during A Taste of Hope. The track also returns in Sins of the Father, when it plays during the cutscene with Vanescula Drakan at the Icyene Graveyard.",
    "It is based on Distant Land, which plays in Burgh de Rott.",
  ],
  "Don't Panic Zanik": [
    "Unlocked during Land of the Goblins, in the cutscene where Zanik disappears into the strange box.",
    "The track sounds like a softer, sadder version of Zanik's Theme.",
  ],
  "The Doors of Dinh": [
    "Unlocked at the Northern Tundras, at the Wintertodt Camp and area around the Settlement Ruins. It can also be heard at the Fishing Hamlet.",
  ],
  Doorways: [
    "Unlocked at the Jolly Boar Inn and the Varrock Lumberyard. It can also be unlocked on the Isle of Souls.",
  ],
  "Dorgeshuun City": ["Unlocked in Dorgesh-Kaan.", ...swampCaves],
  "Dorgeshuun Deep": ["Unlocked in Dorgesh-Kaan South Dungeon.", ...swampCaves],
  "Dorgeshuun Treaty": [
    "Unlocked during The Lost Tribe in the final cutscene when Duke Horacio and Ur-tag sign the peace treaty between Lumbridge and the Dorgeshuun, in the Lumbridge Castle dining room.",
  ],
  "Dot's Yuletide": ["Unlocked by completing future Christmas events.-->"],
  "Down and Out": [
    "Unlocked in the Lunar Isle mine, in a cave behind the crevice in the north wall, before helping Cyrisus get back up on his feet. After that point, On the Up will play in the same cave.",
  ],
  "Down Below": ["Unlocked in the Draynor Sewers."],
  "Down by the Docks": ["Unlocked in Port Piscarilius."],
  "Down to Earth": [
    "Unlocked at the Earth Altar.",
    "The backing strings of the track are notoriously (according to the wiki) remixed off of the closing section of Fruits de Mer, a more well-known piece of music from the game.",
  ],
  "The Dragon Slayer": [
    "Unlocked when fighting Galvek during Dragon Slayer II. The marked locations are the quest start point, representing the fight during the quest, and the Pool of Dreams, which lets you refight Galvek.",
  ],
  "Dragontooth Island": [
    "Unlocked by typing your password backwards in public chat. It just shows up as stars. See: ********",
  ],
  Dream: [
    "Unlocked on the path from Lumbridge to Draynor Village, past the H.A.M. hideout.",
  ],
  Dreamstate: ["Unlocked during the dream puzzles in Lunar Diplomacy."],
  "The Emir's Arena": [
    "Unlocked in the Emir's Arena. Formerly the Duel Arena. AKA the PVP arena. Wake me up when they stop calling it the PVP arena in-game. It's ruining my immersion!",
  ],
  "Dunes of Eternity": ["Unlocked at the Necropolis."],
  Dunjun: [
    "Unlocked in Taverley Dungeon after passing the Magic axe room or by entering the Crypt under the White Knights' Castle leading to Death's Office.",
    taverleyDungeon,
    "It probably wasn't meant to play in the crypt, but the two underground areas are right next to each other and there's some musical spillage from Taverley Dungeon.",
  ],
  "Dusk in Yu'biusk": [
    "Unlocked during Land of the Goblins, upon arriving in Yu'biusk.",
  ],
  "Dwarf Theme": [
    "Unlocked around the Dwarven Mine and on the path between Falador and the Barbarian Village.",
  ],
  "Dwarven Domain": ["Unlocked in Lovakengj."],
  Dynasty: ["Unlocked in Pollnivneach."],
  "Eagles' Peak": [
    "Unlocked around the Eagles' Peak mountain. Despite its hint stating that it is unlocked during the quest, players can unlock the track by being in the area without starting the Eagles' Peak quest.",
  ],
  "Easter Jig": [
    "Unlocked by completing future Easter events.",
    "It is a fast, whimsical banjo track. As the track progresses, more instruments and sounds begin to build up; the song becomes manic by the end before ending abruptly.",
  ],
  Egypt: [
    "Unlocked at the Shantay Pass and the areas surrounding the River Elid to the east.",
  ],
  "Elven Guardians": [
    "Unlocked in Prifddinas. It is the theme of the Cadarn Clan.",
  ],
  "Elven Mist": [
    "Unlocked at the Isafdar entrance to the Underground Pass. It can also be heard at the south of Arandar.",
  ],
  "Elven Seed": [
    "Unlocked in Gwenith. The track was originally released in RuneScape in 2009, playing during Within the Light.",
  ],
  Emotion: [
    "Unlocked at the Tree Gnome Village maze, and in the corrupted version of the Fisher Realm during the Holy Grail quest. It can also be heard in the Tree Gnome Village dungeon.",
  ],
  Emperor: [
    "Unlocked around (but not including) Melzar's Maze and to the south.",
  ],
  "The Enchanter": [
    "Unlocked in the Mage Training Arena's Enchanting Chamber.",
  ],
  "The Enclave": [
    "Unlocked in Ferox Enclave in the Wilderness. It can also be heard in the Ferox Enclave Dungeon.",
  ],
  Escape: ["Unlocked within the Witchaven Dungeon."],
  Espionage: [
    "Unlocked inside the Iceberg.",
    "I am deeply upset at the fact that I have no trivia for this song, because it's an absolute bop.",
  ],
  Etceteria: ["Unlocked in Etceteria and in the eastern parts of Miscellania."],
  "Eve's Epinette": [
    "Unlocked during the 2020 Halloween event, during Eve's arrival to Gielinor.",
  ],
  Everlasting: [
    "Unlocked during the fight with The Everlasting in the Dream Mentor quest.",
    "This track consists of slow chords while heartbeat-like percussion plays in the background.",
  ],
  "Everlasting Fire": [
    "Unlocked at the volcano in the north-east corner of the Wilderness.",
    "The song is structured around a series of short sequences of heavy drumbeats along to haunting background ambience. As the song progresses, instruments such as piano, brass and other drums build onto the song, creating a slow but steady rhythm of tense drums and scattered instruments that symbolise a volcano progressing through eruption.",
    "In modern music mode, this song plays all over the Wilderness, which is very sad given that it's a volcano song.",
  ],
  "The Everlasting Slumber": [
    "Unlocked in the Sisterhood Sanctuary.",
    nightmare,
  ],
  Everywhere: [
    "Unlocked north of Prifddinas, around the Gwenith Hunter area, and at Mynydd.",
    "This song used to be unlockable having only started Regicide, but it now requires full completion of Song of the Elves.",
  ],
  "Evil Bob's Island": ["Unlocked in Evil Bob's random event."],
  Expanse: [
    "Unlocked south of Varrock and in the Phoenix Gang Hideout.",
    "This track uses slow, legato violins and smoothly connected flute and brass melodies.",
  ],
  Expecting: [
    "Unlocked near the Ourania Altar or by falling through the swamp or from the rope swing in the Underground Pass.",
    ...undergroundPass,
  ],
  Expedition: [
    "Unlocked in the Observatory Dungeon and in the passage between the Troll arena and Trollheim.",
  ],
  Exposed: ["Unlocked south of Tyras Camp, and at the Island of Stone."],
  "Eye See You": [
    "Unlocked when fighting Duke Sucellus in the Ghorrock Dungeon under Weiss during and after Desert Treasure II - The Fallen Empire.",
  ],
  "Eye of the Storm": [
    "Unlocked during Dragon Slayer I. It can be heard during the cutscene when Elvarg attacks the Lady Lumbridge, while the player and Captain Ned are sailing to Crandor.",
    crandor,
  ],
  Faerie: [
    "Unlocked in western Zanaris and outside the Cosmic Altar.",
    zanaris,
  ],
  "The Fairy Dragon": [
    "Unlocked during Sir Amik Varze's subquest of Recipe for Disaster. It can be heard during the cutscene when meeting with K'klik, after rubbing the Dragon token.",
    "As this cutscene can be triggered by the player anywhere, and takes place on another plane, the quest start location is marked.",
  ],
  "Faith of the Hefin": [
    "Unlocked in Prifddinas. It is the theme of the Hefin Clan.",
  ],
  Faithless: [
    "Unlocked around the Chaos Temple and to the east in the Wilderness.",
  ],
  "The Fallen Empire": [
    "Unlocked during the quest Desert Treasure II. It plays inside the Lassar Undercity, accessible through the ruins of Camdozaal under Ice Mountain.",
  ],
  Fanfare: ["Unlocked in western Falador."],
  "Fanfare 2": [
    "Unlocked in the Karamja Ship Yard. The song has a cheerful sound, reminiscent of other Gnome-related music.",
  ],
  "Fanfare 3": ["Unlocked in Port Khazard."],
  "Fangs for the Memory": [
    "Unlocked during In Aid of the Myreque, when the player transports Ivan Strom through the Mort Myre swamp and fights the Vampyre Juvinates. The trapdoor to the Myreque hideout is marked, as this is how you get to the quest start point.",
    "It can later be heard during Darkness of Hallowvale, when Vanstrom Klause ambushes the player on Castle Drakan.",
    "It plays again during Sins of the Father, while fighting the Vampyre Juvinates when escorting Ivan back through the swamp. The quest start point in Slepe is marked.",
  ],
  "Far Away": ["Unlocked in Lletya."],
  "The Far Side": [
    "Unlocked at Rogues' Den. It is unlocked by traversing far enough through the maze minigame.",
  ],
  "A Farmer's Grind": ["Unlocked in the west wing of the Farming Guild."],
  "The Fat Lady Sings": [
    "Unlocked during the fight with Lady Verzik Vitur in the Theatre of Blood. The vocals for Lady Verzik were done by Kate Smith.",
    "This track and It's not over 'til... are a reference to the phrase \"It ain't over till the fat lady sings\".",
  ],
  "Fe Fi Fo Fum": [
    "Unlocked during the fight with Glod in the Grim Tales quest.",
    '"Fe Fi Fo Fum" refers to the historical couplet used in Jack and the Beanstalk.',
  ],
  "Fear and Loathing": [
    "Unlocked in the fear room inside Tolna's Rift, during and after A Soul's Bane.",
  ],
  "Fenkenstrain's Refrain": [
    "Unlocked in northern Morytania, including Fenkenstrain's Castle and the old crone's house, east of the Slayer Tower.",
  ],
  "A Festive Party": [
    "Unlocked by completing future Christmas events.",
    "In Classic mode, the track also played outside Falador walls, replacing Arrival, Fanfare, Miles Away, Nightfall, Scape Soft, Wander and Workshop in total.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Fight of the Basilisk": [
    "Unlocked when fighting Typhor on the Isle of Stone during The Fremennik Exiles.",
    "In the next stage of the fight, Reign of the Basilisk will play in this cave, and after completing the quest, Lair of the Basilisk will play in the entire cave.",
    'The track was originally released on 1 April 2009, being played during the quest Glorious Memories in RuneScape. It was originally composed by Chris Jolley and was titled "Frost Fight".',
  ],
  "Fight or Flight": [
    "Unlocked in Mourner Tunnels near the Temple of Light.",
    ...mournerTunnels,
  ],
  "Find My Way": [
    "Unlocked in the southern Ape Atoll Dungeon, which you run through in Monkey Madness.",
  ],
  "Fire and Brimstone": [
    "Unlocked outside of the entrance to the TzHaar Fight Pit minigame.",
  ],
  "Fire in the Deep": [
    "Unlocked upon entering the lowest floor of the Chambers of Xeric, before fighting the Great Olm.",
  ],
  "The Fires of Lletya": [
    "Unlocked during the attack on Lletya in the Song of the Elves quest.",
  ],
  Fishing: [
    "Unlocked in Catherby and on the northern tip of Entrana.",
    "It focuses on a slow and steady piano melody that continues throughout the song, and also uses a guitar, flutes and organ. A unique feature is the sound of washing waves that plays in the beginning of the song, which fittingly makes the song mimic the sound of a calm beachside.",
  ],
  "Floating Free": [
    "Unlocked on Entrana when using the Balloon Transport System for the first time.",
  ],
  "Flute Salad": [
    "Unlocked around the Lumbridge Windmill and Fred the Farmer's house.",
  ],
  "Food for Thought": [
    "Unlocked in the Catacomb of Famine of the Stronghold of Security, down the ladder in Barbarian Village.",
  ],
  Forbidden: ["Unlocked near the Wilderness ditch, north of the Lumber Yard."],
  Forest: [
    "Unlocked west of Lletya, north of the Poison Waste and Zulrah's Shrine.",
  ],
  "The Forests of Shayzien": [
    "Unlocked in the forest around Shayzien, outside the city and the Shayzien Encampment.",
  ],
  Forever: ["Unlocked in Edgeville and the Edgeville Dungeon."],
  "Forgettable Melody": [
    "Unlocked in the abandoned mines east of Keldagrim during the Forgettable Tale... quest.",
    ...keldagrim,
  ],
  Forgotten: [
    "Unlocked in the temple basement under the Ruins of Uzer. The track can be unlocked without starting any quests.",
  ],
  "A Forgotten Religion": [
    "Unlocked upon entering the Forthos Dungeon.",
    ...forthos,
  ],
  "The Forgotten Tomb": [
    "Unlocked during the Beneath Cursed Sands quest, in the tombs below Ruins of Ullek.",
  ],
  "The Forlorn Homestead": ["Unlocked in Hosidius."],
  "The Forsaken Tower": [
    "The Forsaken Tower plays in The Forsaken Tower during The Forsaken Tower. Hope that helps.",
  ],
  "The Forsaken": ["Unlocked in the Lithkren Vault during Dragon Slayer II."],
  Fossilised: [
    "Unlocked on Fossil Island, inside either Wyvern Cave.",
    "According to data crowdsourced via RuneLite, approximately 51% of players unlock the track in the northern task-only cave, while 49% unlock it in the southern cave.",
  ],
  "The Foundry": [
    "Unlocked inside the Giants' Foundry under Giant's Plateau, near Citharede Abbey.",
  ],
  "The Fragment": [
    "Unlocked during the final fight of the Song of the Elves quest against the Fragment of Seren, in the Temple of Light.",
    ...templeOfLight,
  ],
  "The Fremennik Kings": [
    "Unlocked during The Fremennik Isles. It can be heard when the player criticises King Gjuki Sorvott IV for his stubbornness and ignorance.",
    "It is a remix of Norse Code.",
  ],
  Frogland: [
    "Unlocked at any random event. Contrary to the unlock hint, it is not unlocked automatically.",
    "Unlocked during the Kiss the frog random event by ignoring the frogs that appear, or by talking to the frog princess or prince but refusing to kiss them.",
    "The track is a moderately fast paced song in the mode B♭ lydian. It has an overall bouncy feel that is contrasted by its chromatic chorus.",
    "The track begins with its bouncy bass line that persists throughout the first section of the song. A consistent beat is held by unpitched percussion. The melody is played on the clarinet.",
    "The chorus is much a juxtaposition to the verse; it features heavy use of the chromatic scale and switches from woodwind to string instruments as the feature. Plucked strings play a chromatic scale from D down to A♭ three times before going down the scale for the entire octave. This repeats, however, slightly more emphasised with a stronger dynamic.",
    "The original verse is repeated, this time with more musical embellishment. Blasts from a horn harmonise the melody, and scattered percussion may be heard. After this verse, a melody is played on the bassoon that mimics the original melody.",
  ],
  Frostbite: [
    "Unlocked at the Ice Path north of Trollheim.",
    "The main melody of this song starts on the harp; drums and slow strings make up the rhythm. Shortly into the song, bells take over for the melody temporarily before returning it to the harp; the bells continue playing as harmony. Near the middle of the piece, the mood temporarily changes from its original slow, soft feel to an eerie unresolved section.",
  ],
  "Fruits de Mer": ["Unlocked on the Fishing Platform."],
  "Ful to the Brim": [
    "Unlocked on the middle level of the Karuulm Slayer Dungeon, under Mount Karuulm.",
    'The "Ful" in the track\'s name is not a typo; rather, it refers to Ful, one of the Elder Gods from RuneScape.',
  ],
  "Funny Bunnies": ["Unlocked by completing future Easter events."],
  "The Galleon": [
    "Unlocked at the Pirates' Cove.",
    "This piece has an upbeat tempo and tune, prominently featuring a trading off melody between a brass choir and a flute solo. The Galleon also contains a snare drum heard throughout. This selection has a very different, adventurous tune in relation to the somber and mysterious tracks played in the rest of the Lunar Isle area.",
  ],
  Gaol: [
    "Unlocked either in Gu'Tanoth or in the Skavid caves. Prior to the track's removal from an area north of the Bandit Camp in the Wilderness in 2021, this track was accessible to free-to-play players.",
  ],
  Garden: [
    "Unlocked in the centre of Varrock and in the basement of the Blue Moon Inn.",
  ],
  "Garden of Autumn": [
    "Unlocked in the Autumn section of the Sorceress's Garden.",
  ],
  "Garden of Spring": [
    "Unlocked in the Spring section of the Sorceress's Garden.",
  ],
  "Garden of Summer": [
    "Unlocked in the Summer section of the Sorceress's Garden.",
  ],
  "Garden of Winter": [
    "Unlocked in the Winter section of the Sorceress's Garden.",
  ],
  "The Gates of Menaphos": [
    "Unlocked on the bridge between Menaphos os Sophanem, during the intro cutscene of Contact!, when the High Priest attempts to speak with the Menaphite guards. It is based upon Beetle Juice.",
  ],
  "The Gauntlet": ["Unlocked in the Gauntlet in Prifddinas."],
  "The Genie": ["Unlocked at the genie's cave west of Nardah."],
  "Getting Down to Business": [
    "Unlocked east of the Farming Guild, as well as around the small shack south of Mount Karuulm before partial completion of A Kingdom Divided, being replaced by Rose.",
  ],
  "Gill Bill": [
    "Unlocked on Molch Island.",
    "The track's name is a reference to the 2003 American film Kill Bill. However, the developer responsible for Aerial fishing was not called Bill.",
  ],
  "Gnome King": ["Unlocked in the Grand Tree."],
  "Gnome Village": [
    "Unlocked in and around the Gnome Stronghold Agility Course in the Tree Gnome Stronghold.",
  ],
  "Gnome Village 2": [
    "Unlocked in the south-west portion of the Tree Gnome Stronghold, and extends out to include the area south of Eagles' Peak.",
    "This track has a moderate tempo and plays between low and high notes. It uses a harp and flutes.",
  ],
  "Gnome Village Party": [
    "Unlocked during the 2013 Thanksgiving event. After the event ended, it now unlocks automatically.",
  ],
  Gnomeball: ["Unlocked in and around the Gnome Ball Field."],
  "Goblin Game": ["Unlocked in the Goblin Cave near the Fishing Guild."],
  "Goblin Village": [
    "Unlocked at the Goblin Village. It has a tribe-ish, simple tune to emphasise to primitiveness of the goblins. The track is quoted in several other music tracks, such as Bandos Battalion.",
  ],
  "Golden Touch": [
    "Unlocked at the Alchemist's Playground in the Mage Training Arena.",
  ],
  "The Golem": [
    "Unlocked at the Ruins of Uzer and the Orange salamander hunting site.",
  ],
  Greatness: ["Unlocked near the Champions' Guild."],
  "Grimly Fiendish": [
    "Unlocked by completing future Halloween events.",
    "The track was originally released on 22 October 2007, being played during the 2007 Halloween event in RuneScape.",
    'It may be a reference to English gothic punk band The Damned\'s 1985 song "Grimly Fiendish".',
  ],
  "Grip of the Talon": [
    "Unlocked during the fight with Agrith Naar during Shadow of the Storm. Outside of this battle, Throne of the Demon plays in this area.",
  ],
  Grotto: ["Unlocked at the Nature Spirit's grotto in Mort Myre Swamp."],
  "Grow Grow Grow": ["Unlocked in the north wing of the Farming Guild."],
  Grumpy: [
    "Unlocked in the Corsair Cove Dungeon west of Corsair Cove. It can also be unlocked near the swamp toad ponds in the Feldip Hills.",
    "Corsair Cove Dungeon is also accessible from the Myth's Guild basement, by crossing the bridge to the east.",
  ],
  "Guardians of the Rift": [
    "Unlocked during the main phase of Guardians of the Rift and in the Temple of the Eye quest.",
  ],
  "The Guardians Prepare": [
    "Unlocked during the initial prep phase of Guardians of the Rift, and in the Temple of the Eye quest.",
  ],
  "H.A.M. and Seek": [
    "Unlocked while sneaking past the guards in the H.A.M. hideout during the Another Slice of H.A.M. quest.",
    "It is a pun on the popular children's game, Hide-and-Seek.",
  ],
  "H.A.M. Attack": [
    "Unlocked during the Another Slice of H.A.M. quest during the assault on Goblin Village.",
  ],
  "H.A.M. Fisted": [
    "Unlocked in the H.A.M. Storerooms inside the H.A.M. hideout during the Death to the Dorgeshuun quest.",
    "This track is similar to Monster Melee except it has typical swing variation with characteristic blues tones and 6/8 tempo. It uses a pizziccato violin section, a drumset, percussion, a double bass, and a bassoon.",
  ],
  Harmony: [
    "Unlocked in the starting chunk, containing Lumbridge Castle, Lumbridge Church, and the Lumbridge goblins.",
  ],
  "Harmony 2": [
    "Unlocked in the cellar of Lumbridge Castle. It also plays in the Lumbridge watermill after Death to the Dorgeshuun.",
    "The Lumbridge castle cellar is also accessible through the Lumbridge Swamp Caves.",
  ],
  "Haunted Mine": [
    "Unlocked near Treus Dayth, on level 6 of the Abandoned Mine during the Haunted Mine quest.",
  ],
  "Have a Blast": ["Unlocked at Blast Furnace.", ...keldagrim],
  "Have an Ice Day": ["Unlocked at the Iceberg."],
  "Head to Head": ["Unlocked during the Evil twin random event."],
  "Healin' Feelin'": [
    "Unlocked during the quest The Path of Glouphrie. It plays whilst healing Incomitatus (the Spirit Tree).",
  ],
  "Heart and Mind": [
    "Unlocked inside the Body Altar, which is south of the Edgeville Monastery.",
  ],
  "Hells Bells": ["Unlocked while sledding down Trollweiss Mountain."],
  Hermit: ["Unlocked in Saba's cave during the Death Plateau quest."],
  "High Seas": ["Unlocked in Brimhaven."],
  "High Spirits": ["Unlocked by completing future Halloween events."],
  "His Faithful Servants": [
    "Unlocked during the final battle of Desert Treasure II - The Fallen Empire",
    "It is based on the unlisted music track in RuneScape 3 that plays when fighting the Barrows Brothers",
  ],
  "Hoe Down": ["Unlocked in the south-eastern portion of Farming Guild."],
  "Home Sweet Home": [
    "Unlocked in any Player-owned house. It can also be unlocked during Daddy's Home, in the cutscene which shows the basics of Construction.",
  ],
  Horizon: ["Unlocked in Taverley, or during the Bee keeper random event."],
  "The Houses of Kourend": [
    "Unlocked during the quest A Kingdom Divided, in which the five houses of Great Kourend are gathered to inform them about the revelations the player has discovered. However, the track plays in Xeric's Lookout basement only during both cutscenes occurring there, as The Militia plays there otherwise.",
  ],
  Hypnotised: [
    "Unlocked at Klenter's Pyramid only while hypnotised during Icthlarin's Little Helper. When the pyramid is revisited later, Mirage will play instead.",
  ],
  Iban: ["Unlocked in Iban's lair.", ...undergroundPass],
  "Ice and Fire": [
    "Unlocked during the battle against Wintertodt.",
    "The name of this song is a reference to the popular fantasy novel series A Song of Ice and Fire. This is one of the many references to the series that can be found in the Wintertodt area.",
  ],
  "Ice Melody": ["Unlocked in and around White Wolf Mountain."],
  Illusive: [
    "Unlocked during the fight with The Illusive in the Dream Mentor quest.",
    "The track was temporarily available to free-to-play players, as it was reused for the 2021 Halloween event.",
  ],
  Impetuous: [
    "Unlocked at Puro-Puro, which is accessible through Crop circles or Zanaris.",
    zanaris,
    "Another version of this track, Impulses, plays when the player is standing nearby a wheat field with a portal to Puro-Puro open.",
  ],
  Impulses: [
    "Unlocked during Impetuous Impulses. It can be heard when standing near an active Crop circle.",
    "It is a remix of Impetuous.",
  ],
  "In Between": [
    "Unlocked in the Arzinian Mine inside Keldagrim. The mine is visited during the Between a Rock... quest, however, it must be revisited after the quest to unlock this track.",
    ...keldagrim,
  ],
  "In the Brine": ["Unlocked on Mos Le'Harmless after the Cabin Fever quest."],
  "In the Clink": ["Unlocked during the Prison Pete random event."],
  "In the Manor": [
    "Unlocked south of Yanille.",
    "The song is very short, and has a lively and uplifting brass melody with a heavy marching drumbeat.",
  ],
  "In the Pits": [
    "Unlocked in the outer, freely-accessible area of Mor Ul Rek.",
  ],
  "In the Shadows": [
    "Unlocked during the quest Secrets of the North, upon fighting the assassin inside Ghorrock Dungeon under Weiss. It also plays in the quest Desert Treasure II - The Fallen Empire, during the Ghorrock Prison segment when fighting Jhallan.",
    "The track was originally released in the RuneScape quest Perils of Ice Mountain in 2008",
  ],
  Inadequacy: [
    "Unlocked during the fight with The Inadequacy in the Dream Mentor quest.",
  ],
  Incantation: [
    "Unlocked under Uzer during Shadow of the Storm in the cutscene showing the summoning of Agrith Naar. The track temporarily replaces The Golem, Forgotten, and Throne of the Demon when Agrith Naar is not yet slain.",
  ],
  Inferno: [
    "Unlocked inside the Inferno and inside TzHaar-Ket-Rak's Challenges (1-6 Jads).",
  ],
  "Insect Queen": [
    "Unlocked in the Kalphite lair and the task-only Kalphite cave.",
    "The Kalphite lair is technically accessible from many places without going above ground, as there is a crack in the wall which takes you to Dorgesh-Kaan South Dungeon.",
    "If all transport methods were allowed, Kalphite Queen would be accessible from Lumbridge Castle, Eastern Falador, every Fairy Ring, and Crandor, among other places.",
  ],
  Inspiration: [
    "Unlocked in north-east of the Black Knights' Fortress in the Wilderness.",
  ],
  "Into the Abyss": [
    "Unlocked in the Abyss and the Abyssal Nexus, accessible via the Mage of Zamorak in the Wilderness.",
  ],
  "Into the Tombs": [
    "Unlocked in the Tombs of Amascut inside the Necropolis.",
    "During the first weeks of its release, until 11 October 2022, the track could be heard in the Main Menu instead of Scape Main.",
  ],
  Intrepid: [
    "Unlocked in lower floor of Iban's lair inside the Underground Pass.",
    ...undergroundPass,
  ],
  Invader: [
    "Unlocked at the Abyssal Sire's chamber in the Abyssal Nexus, accessible via the Mage of Zamorak in the Wilderness.",
    "In this track, Mod Ash takes inspiration from the Space Invaders music motif, and has arranged it in an orchestral or classical way.",
  ],
  "Iorwerth's Lament": [
    "Unlocked in Prifddinas. It is the theme of the Iorwerth Clan.",
  ],
  "Island Life": [
    "Unlocked in the south of Ape Atoll.",
    "It has a steady tempo starting out with staccato quarter note 60s organs. It begins in the key of A and its melody starts off with a mix between a piano and a marimba. Shortly after, an Oboe joins in as a countermelody.",
  ],
  "Island of the Trolls": [
    "Unlocked north of Neitiznot and Jatizso, where the Ice Trolls are.",
  ],
  "Isle of Everywhere": ["Unlocked on the east coast of Lunar Isle."],
  "It's not over 'til...": [
    "Unlocked during upon entering Lady Verzik Vitur's room in the Theatre of Blood. The vocals for Lady Verzik were done by Kate Smith.",
    'This track and The Fat Lady Sings are a reference to the phrase "It ain\'t over till the fat lady sings".',
  ],
  "Itsy Bitsy...": [
    "Unlocked inside the Morytania Spider Nest, which is accessed during A Night at the Theatre.",
    "The track was originally released on 26 October 2009, as part of the 2009 Halloween event in RuneScape.",
  ],
  "Jaws of the Basilisk": [
    "Unlocked during the basilisk invasion in The Fremennik Exiles quest.",
    'The track was originally released on 15 December 2009, being played during the quest Blood Runs Deep in RuneScape. It was originally titled "Jaws of the Dagannoth", being renamed to fit the theme of the quest as both tracks are played during similar scenes.',
  ],
  "Jaws of Gluttony": [
    "Unlocked during the fight with Zebak in the Tombs of Amascut, in the Necropolis.",
  ],
  "Jester Minute": [
    "Unlocked during The Fremennik Isles when entertaining Mawnis Burowgar on Neitiznot.",
  ],
  "Jolly R": ["Unlocked on the north dock in Brimhaven."],
  "Joy of the Hunt": [
    "Unlocked at the Piscatoris Hunter area and around the Kraken Cove.",
  ],
  "Judgement of the Depths": [
    "Unlocked during the quest A Kingdom Divided in the battle with the Judge of Yama.",
    "The track is a faster, more intense version of Darkness in the Depths, which plays in the Chasm of Fire. The Chasm of Fire houses a variety of demons, and the Judge of Yama itself is a demon.",
  ],
  "Jungle Bells": [
    "Unlocked by completing future Christmas events.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
    'The song plays at a relatively moderate tempo, with a very low pitched beat resonating in the background. The bell sounds seem somewhat discordant, as to entail the general mis-happenings that tend to occur around Christmas events. It keeps in theme with RuneScape-styled jungle tunes. The melody is essentially "Jingle Bells" played in a minor key.',
  ],
  "Jungle Hunt": [
    "Unlocked at the Feldip Hunter area, or the Jungle eagle's cave.",
    eaglesTransport,
  ],
  "Jungle Island": [
    "Unlocked around the Karamja Volcano and in the middle of the Kharazi Jungle.",
  ],
  "Jungle Island Xmas": [
    "Unlocked by completing future Christmas events.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Jungle Troubles": [
    "Unlocked in the jungle north-east of Tai Bwo Wannai near the crashed gnome glider.",
  ],
  "Jungly 1": [
    "Unlocked at Cairn Isle or west of Shilo Village. It can also heard in the Tomb of Bervirius under Cairn Isle.",
    'It is the first track in the series of three "Jungly" music tracks.',
  ],
  "Jungly 2": [
    "Unlocked to the north-west of Brimhaven, at the entrance to the Fisher Realm.",
    'It is the second track in the series of three "Jungly" music tracks.',
    "This music track has the usual bongos playing in the background, and a rather unique keyboard melody played in the beginning. After the softer melody in the beginning, the music evolves into the music similar to the rest of the Karamjan music tracks.",
  ],
  "Jungly 3": [
    "Unlocked south of Tai Bwo Wannai.",
    'It is the third track in the series of three "Jungly" music tracks.',
  ],
  "Kanon of Kahlith": [
    "Unlocked on the upper level of the Karuulm Slayer Dungeon, under Mount Karuulm.",
  ],
  "Karamja Jam": [
    "Unlocked in Brimhaven Dungeon, in the areas with red dragons, black demons, or metal dragons.",
  ],
  "King of the Trolls": [
    "Unlocked during The Fremennik Isles. It can be heard during the battle that takes places in the Ice Troll Caves.",
  ],
  Kingdom: ["Unlocked around the Warriors' Guild."],
  Knightly: [
    "Unlocked in the centre of Ardougne. It can also be heard in the Ardougne city prison during Song of the Elves.",
    "The song has a steady march tempo, and an organ in the first phrase. A flute joins with a counter-melody in the second phrase. The song then fades out steadily with a French horn.",
  ],
  Knightmare: [
    "Unlocked at the Black Knights' Fortress. It is also played during the escape from Keep Le Faye during the King's Ransom quest.",
    'The name of the song is a pun on the word "nightmare".',
    "Along with Lore and Order, it was the last music track to be added to the game before the creation of the August 2007 Archive of RuneScape.",
  ],
  "Kourend the Magnificent": [
    "Unlocked upon arriving to Great Kourend. It mainly plays in The Legless Faun, Kingstown and Kourend Castle. The lyrics can be found by reading the inscription on the pillar in the centre of the courtyard.",
  ],
  "La Mort": ["Unlocked at the Death Altar.", ...templeOfLight],
  Labyrinth: ["Unlocked in the Sophanem Dungeon."],
  Lagoon: ["Unlocked on Fossil Island when diving underwater."],
  "Laid to Rest": [
    "Unlocked in Osmumten's burial chamber within the Tombs of Amascut in the Necropolis.",
  ],
  Lair: ["Unlocked at the Shade Catacombs beneath Mort'ton."],
  "Lair of the Basilisk": [
    "Unlocked upon entering the Jormungand's Prison during The Fremennik Exiles quest. It also plays in the prison after the quest. During different stages of the fights during the quest, this song will be replaced with both Fight of the Basilisk and Reign of the Basilisk.",
    'The track was originally released on 1 April 2009, being played during the quest Glorious Memories in RuneScape. It was originally composed by Chris Jolley and was titled "Lair of Kang Admi".',
  ],
  Lament: ["Unlocked in Enakhra's Temple during the Enakhra's Lament quest."],
  "Lament for the Hallowed": [
    "Unlocked during the quest Sins of the Father. It plays upon arriving at the Icyene Graveyard, and can later be heard during the ending cutscene.",
    "The track was originally released on 14 September 2015, being played during the quest The Lord of Vampyrium in RuneScape.",
  ],
  "Lament of Meiyerditch": [
    "Unlocked in the city of Meiyerditch in sectors one through four. It can also be heard in the Meiyerditch mine, laboratory, Myreque hideout, and the basement of Old Man Ral's house. During the fight with the abomination, this track is replaced with Bait.",
  ],
  "Land Down Under": [
    "Unlocked in the western part of the Miscellania and Etceteria Dungeon.",
  ],
  "Land of Snow": [
    "The Land of Snow is a plane of existence different than Gielinor. It was the setting of the 2017 Christmas event. Players could teleport to the event by speaking to the Wise Old Man or using the Wise old man's teleport tablet.",
    "It is the land in which Santa lives and is inhabited by Snow Sprites.",
  ],
  "Land of the Dwarves": [
    "Unlocked in west Keldagrim. It can also be unlocked without starting The Giant Dwarf quest, in a small house by the river at the Keldagrim mines.",
    ...keldagrim
  ],
  Landlubber: ["Unlocked west of Brimhaven."],
  "Last King of the Yarasa": [
    "Unlocked during the fight with the Xarpus in the Theatre of Blood.",
    'This track starts off with a sample from "Bach\'s Violin Concerto in A Minor" (A classical piece), then transitions to "Spider Attack" from the Rayman 2 game. For the section beginning approximately 2 minutes and 27 seconds in, a sample of "The Chase" from Rayman 2 is used. ',
  ],
  "Last Man Standing": ["Unlocked in the Last Man Standing minigame."],
  "The Last Shanty": [
    "Unlocked in southern Meiyerditch.",
    "The song is composed of 3 parts. First and third part have 2/4 beat and the second part has a 3/4 beat.",
  ],
  "Last Stand": [
    "Unlocked during the battle against the Sea Troll Queen. Outside of this fight, Making Waves plays in this area.",
  ],
  Lasting: ["Unlocked at Hemenster and the Ranging Guild."],
  "Lava is Mine": [
    "Unlocked on Fossil Island at the Volcanic Mine. Thus, unlocking this track requires 150 Kudos.",
  ],
  Legend: [
    "Unlocked in the south-east corner of Rellekka and outside the Fremennik Slayer Dungeon.",
  ],
  Legion: [
    "Unlocked at Barbarian Outpost. It can also be heard underneath the Barbarian Agility Course and the lobby of Barbarian Assault. Prior to tracks removal from Wilderness Bandit Camp in 2021, this track was accessible to free-to-play players.",
  ],
  "Life's a Beach!": ["Unlocked in central Mos Le'Harmless."],
  Lighthouse: ["Unlocked at the Lighthouse north of the Barbarian Outpost."],
  Lightness: [
    "Unlocked in the north-east of Asgarnia, around Ice Mountain or the Monastery or east of Falador. In this area, the music player will shuffle between playing this track and Scape Soft.",
    "In Classic mode, the track plays at an area around Goblin Village and in the south-west slope of Ice Mountain. Playing at the latter is presumably unintentional due to Alone playing there before 2021.",
    "Although it is presumably not supposed to do so, Lightness along with Scape Soft replaces Spooky within Draynor Manor fenced area after the track playing once in Modern mode.",
    "This song contains a pleasant piano solo and horn solo with snare rhythm. It begins with a lone acoustic guitar playing an arpeggiated chord progression, featuring mostly minor chords, which result in a dark, mysterious mood. This progression (beginning with E minor and ending with E major) forms the basis of the song, and after two bars more instruments are added: violin, the drum and high pitched synthesizer tones, and then a horn part. The song is at a medium to slow tempo with a serene melody.",
  ],
  Lightwalk: ["Unlocked at Keep Le Faye and western Catherby."],
  "Little Cave of Horrors": [
    "Unlocked in the Mos Le'Harmless Cave.",
    "Playing this song to Cecilia may be required for a Hard Clue step.",
  ],
  Lonesome: [
    "Unlocked in the Desert Mining Camp during The Tourist Trap quest.",
  ],
  "Long Ago": [
    "Unlocked on Hazelmere's island south-east of Yanille.",
    "The song is peaceful and relaxing, using ocean wave sounds and a lighthearted piano.",
  ],
  "Long Way Home": [
    "Unlocked outside Falador city walls, at the Falador Farm, Crafting Guild, and the Dark Wizards' Tower. In this area, the music player will also shuffle between playing Miles Away and Nightfall.",
    "In Classic mode, the track plays in Rimmington.",
  ],
  "The Longramble Scramble": [
    "Unlocked during the quest The Path of Glouphrie. It plays upon arriving at the Galarpos Mountains, where Longramble is.",
  ],
  "Look to the Stars": [
    "Unlocked during the Observatory Quest. It can be heard during the cutscene when the player and the Observatory professor first arrive at the Observatory.",
  ],
  "Looking Back": ["Unlocked at the Varrock Museum and its basement."],
  "Lore and Order": [
    "Unlocked at the Seers' Village Courthouse.",
    "It is a remix of the well-known track Knightly. There are only very few differences between the songs, with Lore and Order using most of Knightly's chords and sections.",
    "The title is a play on the phrase law and order.",
    "Along with Knightmare, it was the last music track to be added to the game before the creation of the August 2007 Archive of RuneScape.",
  ],
  "The Lost Melody": ["Unlocked at the Dorgesh-Kaan mine."],
  "Lost Soul": [
    "Unlocked near the Poison Waste in Tirannwn. It can be unlocked before the completion of Regicide in the forest south-west of Castle Wars.",
  ],
  "The Lost Tribe": [
    "Unlocked in the tunnels leading to the Dorgesh-Kaan mine.",
  ],
  "Lower Depths": [
    "Unlocked in the second level of the Chambers of Xeric or in the Quidamortem Cave during Tale of the Righteous.",
    "According to data crowdsourced via RuneLite, approximately 64% of players unlock the track in the Quidamortem Cave, while 36% unlock it in the Chambers of Xeric.",
  ],
  "Lucid Dream": [
    "Unlocked in the Dream World during Dragon Slayer II.",
    "The melody is a slower version of Lucid Nightmare.",
  ],
  "Lucid Nightmare": [
    "Unlocked when fighting Robert the Strong during Dragon Slayer II.",
    "The melody is a faster version of Lucid Dream.",
  ],
  Lullaby: [
    "Unlocked on the path to Rellekka and in the Digsite.",
    "The music track is slow, melodic, and sounds somewhat like a lullaby. This song also includes a flute, brass, percussion (such as a snare drum), and a grand piano as well as the choir that sings a repeated theme while each instrument group introduces their own unique sound as the song progresses.",
  ],
  Lumbering: [
    "Unlocked during Making Friends with My Arm. It plays in Weiss, as well as its prison.",
  ],
  "The Lunar Isle": ["Unlocked on the western half of the Lunar Isle."],
  "Mad Eadgar": ["Unlocked in Eadgar's cave on top of Trollheim."],
  "The Mad Mole": ["Unlocked in the Falador Mole Lair."],
  "Mage Arena": [
    "Unlocked at the Mage Arena and its bank.",
    "Unlocked in an area outside the Mage Arena.",
  ],
  "Magic Dance": [
    "Unlocked in east Yanille.",
    "It is a slow and peaceful track. This track has a very similar chord progression to Sea Shanty.",
  ],
  "Magic Magic Magic": [
    "Unlocked during the Tower of Life quest, on the upper floors of the Tower of Life. After the quest, Work Work Work will play here instead. This track has a sadder version, Creature Cruelty, which plays on the top floor of the tower when the Homunculus is locked up in the cage.",
  ],
  "Magical Journey": ["Unlocked at the Sorcerer's Tower."],
  "The Maiden's Anger": [
    "Unlocked during the fight with the The Maiden of Sugadinti in the Theatre of Blood.",
  ],
  "The Maiden's Sorrow": [
    "Unlocked upon entering The Maiden of Sugadinti's room in the Theatre of Blood.",
    "The track can also be heard during the ending cutscene of A Taste of Hope, however this does not actually unlock the track for the player.",
  ],
  "Major Miner": ["Unlocked in the Jatizso mine."],
  "Making Waves": [
    "Unlocked by simply approaching the Piscatoris Fishing Colony, regardless of whether you've started Swan Song or not. During the fight with the Sea Troll Queen, Last Stand plays in this area.",
  ],
  Malady: [
    "Unlocked in the Pit of Pestilence in the Stronghold of Security, down the ladder in Barbarian Village.",
  ],
  March: ["Unlocked at King Lathas's Combat Training Camp."],
  "March of the Shayzien": [
    "Unlocked at the Shayziens' Wall, Lizardman Settlement or Lizardman Canyon. It can also be heard in the Lizardman Caves.",
    "The hint has been changed from 'This track unlocks at the Shayziens' Wall.'See fact below to 'This track unlocks in the Lizardman Canyon.'.",
  ],
  Marooned: [
    "Unlocked on Crash Island. It can later be heard during the underground areas of King Awowogei's subquest in Recipe for Disaster.",
  ],
  Marzipan: [
    "Unlocked in the tunnel to Keldagrim, the Troll Stronghold, or more rarely in the ice cave that leads to Trollweiss Mountain.",
    "A variation of the track begins playing during the first cutscene of My Arm's Big Adventure. This version features more percussion than the regular track. It plays when Burntmeat the troll cook is preparing to cook a captured Adventurer, the Adventurer is interrogated because he is in possession of Goutweed, after Burntmeat discovers its origin he boils the Adventurer alive anyway. The music continues to play as Burntmeat explains that because he forgot to wash the Adventurers sweaty bare feet before cooking and eating him this led to Burntmeat getting a bad stomachache.",
  ],
  Masquerade: [
    "Unlocked in the Fremennik Slayer Dungeon in the Basilisk room.",
  ],
  "Master of Puppets": [
    "Unlocked during the Desert Treasure II - The Fallen Empire, in the cutscene where the player enters the lower level of the Ancient Vault, after the track Tick Tock.",
    "The track is based on music track The Price is Wight from RuneScape.",
  ],
  Mastermindless: [
    "Unlocked while freeing the Lumbridge Guide during Recipe for Disaster.",
  ],
  Mausoleum: ["Unlocked underneath Paterdomus."],
  "Maws Jaws & Claws": [
    "Unlocked at Cerberus' Lair.",
    "Players do not need 91 Slayer nor a hellhound Slayer task to unlock this track. ",
  ],
  "The Maze": ["Unlocked inside Melzar's Maze or in the Karamjan Temple."],
  "Meddling Kids": [
    "Unlocked during a cutscene in Royal Trouble, when the player finds the lost teenagers in the Miscellania and Etceteria Dungeon.",
  ],
  Medieval: [
    "Unlocked inside Varrock city walls, excluding the Grand Exchange. It also plays in the Phoenix Gang Hideout and in the basement of the Blue Moon Inn. In this area, the music player will also shuffle between playing Adventure, Garden, and Spirit.",
    'In Classic mode, this track plays east of Varrock and the hint referred to "near the Varrock East guarded area".',
    "This track uses a harpsichord playing waltz triplets in a slow, droning manner. The flute and oboe quickly come in and share a melodic part, and are then replaced briefly by a harp. It is somewhat of a slow, walking-tempo song. Also, the keyboard is slightly used in parts of the song as well as slight notions of guitar strums.",
  ],
  Mellow: ["Unlocked at the Fishing Guild."],
  Melodrama: [
    "Unlocked in the Castle Wars lobby.",
    "It begins with a simple strings tune that plays during the entire song. Synthesizers bring an additional background tune. Flutes, percussion and other instruments begin playing the similar soft melody while also giving energy to the track's overall theme.",
  ],
  Meridian: ["Unlocked near Tyras Camp."],
  "Method of Madness": [
    "Unlocked in the confusion room during A Soul's Bane. It can later be heard in Tolna's Rift.",
    "The track features irregular chord changes and odd sound effects. The track also contains a false ending, in which the track fades out slowly with a mysterious choir, only for the main riff to abruptly come back in again after a few seconds before it finishes for real.",
  ],
  "Miles Away": [
    "Unlocked outside Falador city walls, at the Falador Farm, Crafting Guild, and the Dark Wizards' Tower. In this area, the music player will also shuffle between playing Long Way Home and Nightfall. It can also be unlocked in the Fisher Realm after partial completion of Holy Grail quest.",
    "In Classic mode outside the Fisher Realm, the track plays at the Crafting Guild.",
  ],
  "Military Life": ["Unlocked in the Shayzien Encampment north of Shayzien."],
  "The Militia": [
    "Unlocked in Shayzien, and can also be heard in its prison as well as Xeric's Lookout basement outside cutscenes of A Kingdom Divided quest.",
    "Changed to only play in Shayzien city and its prison due to Shayzien Rework.",
    "Replaced with Dwarven Domain at a single square inside the south-westernmost house in Lovakengj: type=maplink.",
    "Added to play beneath Xeric's Lookout outside cutscenes of A Kingdom Divided quest.",
  ],
  "Mind over Matter": [
    "Unlocked at the Telekinetic Theatre in the Mage Training Arena.",
  ],
  "Miracle Dance": ["Unlocked at the Mind Altar."],
  Mirage: [
    "Unlocked in Klenter's Pyramid after you are free from the hypnosis of Amascut in Icthlarin's Little Helper.",
    'Unlike the soundtrack, Hypnotised, the song is more of a "good" feel that you are now working on the correct side. It goes at a medium tempo. The song changes focus from percussion to vocals to strings to winds, all very rapidly, before repeating.',
  ],
  Miscellania: [
    "Unlocked in Miscellania. It can also be unlocked on the penguin island by a fairy ring (code AJS) if The Fremennik Trials has not been completed.",
  ],
  "The Mollusc Menace": ["Unlocked in Witchaven."],
  "Monarch Waltz": [
    "Unlocked at Sinclair Mansion.",
    "This track is similar to Medieval.",
  ],
  "Monkey Badness": [
    "Unlocked during the final boss fight with Glough in Monkey Madness II.",
    "It is in the key of D#/Eb Minor, and has a varying tempo. It starts out with a tempo of 125, then goes to 130 for a short section with the Marimba instrument playing, then gets dramatic with powerful Brass Sections & String Ensembles playing, maintaining a tempo of 140 until the end of the song.",
  ],
  "Monkey Business": [
    "Unlocked during the fight with Kruk in Monkey Madness II. It can later be heard in the Crash Site Cavern after the quest.",
  ],
  "Monkey Madness": [
    "Unlocked in Marim. It can later be heard at the airship platform during Monkey Madness II.",
  ],
  "Monkey Sadness": [
    "Unlocked in Glough's laboratory during Monkey Madness II. It can later be heard there when hunting Maniacal monkeys.",
  ],
  "Monkey Trouble": ["Unlocked in Kruk's Dungeon during Monkey Madness II."],
  "Monster Melee": ["Unlocked in the H.A.M. cave."],
  "The Monsters Below": ["Unlocked on Waterbirth Island."],
  Moody: [
    "Unlocked in the Wilderness and also plays in the Wilderness Agility Course Dungeon.",
    "In Classic mode, it plays east of Ferox Enclave as well as at Deserted Keep in Deep Wilderness.",
  ],
  "Mor Ul Rek": [
    "Unlocked in the inner city of Mor Ul Rek.",
    "Unlocking this music track requires the player to show a fire cape to a TzHaar-Ket guarding the entrance to the inner city.",
  ],
  "More Than Meets the Eye": [
    "Unlocked during Secrets of the North when fighting the Strange Creature, and the Phantom Muspah after the completion of the quest.",
  ],
  Morytania: [
    "Unlocked when you get on the path to Paterdomus and the entrance to Morytania.",
    "The tone uses a creepy background theme using organs as the main instruments.",
  ],
  "Morytanian Mystery": [
    "Unlocked during the cutscene in which the player is knocked out by shadowy figures during the quest Darkness of Hallowvale. It can also be heard during Sins of the Father, in the cutscene showing the meeting between Damien Leucurte and the werewolves.",
    "It is based upon The Last Shanty.",
  ],
  "A Mother's Curse": [
    "Unlocked during the fight with Kephri in the Tombs of Amascut.",
  ],
  "Mother Ruckus": [
    "Unlocked during the fight with Mother in Making Friends with My Arm.",
  ],
  "Mouse Trap": [
    "Unlocked at the Mouse Hole during the Grim Tales quest.",
    "It seems to play the same tune as the gramophone in the house of Nora T. Hagg.",
    "Parts of the track are based on the nursery rhyme Three Blind Mice.",
  ],
  "Mudskipper Melody": [
    "Unlocked at Mudskipper Point.",
    "It has a simple drum beat undertone, with a low wind instrument and an airy flute playing the melody.",
  ],
  "Museum Medley": [
    "Unlocked in the Old School Museum found in the basement of the Falador Party Room. Alternatively, it may be unlocked by completing the 20th Anniversary event or 2021 Birthday event. At 11 minutes and 10 seconds, it is the longest music track in Old School RuneScape.",
    "It is a medley of various iconic music tracks, such as Newbie Melody, Autumn Voyage, Barbarianism, Harmony and Sea Shanty 2.",
  ],
  "Mutant Medley": ["Unlocked in the basement of the Tower of Life."],
  "My Arm's Journey": [
    "Unlocked on the boat during My Arm's Big Adventure. It is a remixed and prolonged version of the jingle that is heard when taking a boat.",
    "It can also be heard during Making Friends with My Arm when sailing to Weiss.",
  ],
  "Mystics of Nature": [
    "Unlocked upon entering Prifddinas for the first time after completing the Song of the Elves quest. It is also the default track that plays in the lobby of The Gauntlet. It is the theme of the Amlodd Clan.",
  ],
  Mythical: [
    "Unlocked in the Myths' Guild after completion of Dragon Slayer II. It can also be unlocked in the Myths' Guild basement.",
    "For some unknown reason, the track plays when standing on two specific tiles in the Myths' Guild basement. It would be possible to unlock the track here by completing Dragon Slayer II, then travelling through the Corsair Cove Dungeon.",
  ],
  "Narnode's Theme": ["Unlocked in the cave under the Grand Tree."],
  Natural: [
    "Unlocked outside the Nature Grotto in Mort Myre Swamp, or on the shore south-east of the Digsite. It can also be heard on the island in the River Salve, or during Temple Trekking in combat events with one escape route.",
  ],
  "The Navigator": [
    "Unlocked in Swensen the Navigator's puzzle during The Fremennik Trials.",
  ],
  "Nether Realm": [
    "Unlocked at the Brimhaven Dungeon, in the room west of the main metal dragon area. A metal dragon slayer task is not required to enter this part of the cave.",
  ],
  Neverland: ["Unlocked at the entrance to the Tree Gnome Stronghold."],
  "Newbie Farming": ["Unlocked south of the Farming Guild."],
  "Newbie Melody": [
    "Unlocked on Tutorial Island. This is the first track that all new players will hear.",
  ],
  "Night of the Vampyre": [
    "Unlocked at Castle Drakan during Darkness of Hallowvale. It can also be unlocked without having started the quest at a small area north-west of Barrows.",
  ],
  Nightfall: [
    "Unlocked outside Falador city walls, at the Falador Farm, Crafting Guild, and the Dark Wizards' Tower. In this area, the music player will also shuffle between playing Long Way Home and Miles Away.",
    "In Classic mode, the track plays north of Rimmington.",
  ],
  "The Nightmare Continues": [
    "Unlocked during the fight with the Pestilent Bloat in the Theatre of Blood.",
    "The Nightmare Continues is one of two music tracks that share name with a RuneScape music track, but being completely unrelated. The other being Sands of Time.",
  ],
  "No Pasaran": [
    "Unlocked during the defence of the dwarven camp in the Underground Pass during the Song of the Elves quest.",
    '"¡No pasarán!" translates to "they shall not pass" in Spanish. This phrase was used as a battle cry most famously by anti-Francoist forces during Spanish Civil War.',
  ],
  "No Way Out": [
    "Unlocked in the hopelessness room during A Soul's Bane. It can later be heard in Tolna's rift.",
  ],
  "The Noble Rodent": [
    "Unlocked during the fight between the player's cat and the King rat during the Ratcatchers quest.",
  ],
  Nomad: [
    "Nomad is a music track that used to play in northern Tai Bwo Wannai, but now plays in the Ruins of Unkah.",
  ],
  "Norse Code": [
    "Unlocked on Jatizso.",
    "The track's name hints that the song actually contains a secret Morse Code message. The high-pitched flute plays the word 'RuneScape' on repeat throughout the song.",
  ],
  "Not a Moment of Relief": [
    "Unlocked north of Arceuus, around the dense essence mine and the Blood Altar.",
  ],
  "Nox Irae": [
    "Unlocked by completing future Halloween events.",
    "Nox Irae means the night of wrath in Latin.",
    "The melody of Nox Irae is based on a Gregorian chant, Dies Irae.",
  ],
  "Null and Void": [
    "Unlocked at Pest Control, on the Void Knights' Outpost. This song makes heavy use of accordion.",
  ],
  "Ogre the Top": [
    "Unlocked in the Ice Troll Caves.",
    "This track is medium to fast paced, with the main instrument being a saxophone (as in most troll music), and a percussion playing in the softer parts, and a brass instrument playing in the faster parts.",
  ],
  "Oh Rats!": ["Unlocked while fighting the boss Scurrius."],
  "The Old Ones": [
    "Unlocked during The Garden of Death. It plays in various dungeons visited during the quest:",
    "Near the start point of the quest",
    "Beneath Molch Island",
    "Beneath Xeric's Shrine",
    "Beneath the Ruins of Morra",
    "Prior to 9 August 2023, this track also played within the Stranglewood. It has since been replaced by the track Strangled.",
  ],
  "On the Frontline": ["Unlocked at the Battlefront west of Great Kourend."],
  "On the Shore": [
    "Unlocked at Corsair Cove.",
    "Playing this song to Cecilia may be required for an Easy Clue step.",
  ],
  "On the Up": [
    "Unlocked during the Dream Mentor quest after helping Cyrisus get back up on his feet. Before that point, Down and Out will play in the same cave.",
  ],
  "On the Wing": [
    "Unlocked when visiting the Falconer at the Piscatoris Hunter Area, or the Enchanted Valley.",
    "It is a slow, calming piece of music which emphasises the feeling of (birds) flying on a warm, sunny day. It features woodwind, light percussion and scattered synthesizer, and ambient birdsong effects.",
  ],
  "On Thin Ice": [
    "Unlocked when fighting Vorkath both during and after Dragon Slayer II.",
  ],
  "Oncoming Foe": [
    "Unlocked during the fourth phase of the naval assault during Dragon Slayer II, when several metal dragons are fought.",
  ],
  "Organ Music 1": [
    "Unlocked automatically. It can be heard when playing a Church organ in Lumbridge, Seers' Village, Entrana, Tutorial Island, or Paterdomus.",
  ],
  "Organ Music 2": [
    "Unlocked automatically. It can be heard when playing a church organ in Lumbridge, Seers' Village, Entrana, Tutorial Island, or Paterdomus.",
  ],
  Oriental: [
    "Unlocked in the top floor of the temple of Ah Za Rhoon, east of Shilo Village.",
  ],
  "The Other Side": ["Unlocked at Port Phasmatys."],
  "Out at the Mines": [
    "Unlocked north-west of Lovakengj, inside the Blast Mine, the Lovakite mine, and the Sulphur mine.",
  ],
  "Out of the Deep": ["Unlocked at the dagannoth cave under the Lighthouse."],
  "Over to Nardah": ["Unlocked in Nardah."],
  Overpass: ["Unlocked at Arandar."],
  Overture: ["Unlocked in Seers' Village."],
  Parade: ["Unlocked at Silvarea."],
  "The Part Where You Die": [
    "Unlocked during the quest A Kingdom Divided in the boss fight against Xamphur.",
    "The name of this song may be a reference to Portal 2, which contains a chapter and song humourously titled The Part Where He Kills You.",
  ],
  "Path of Peril": ["Unlocked at the Shadow Dungeon."],
  "The Penguin Bards": [
    "Unlocked during Cold War. It can be heard during the musical performances of Ping and Pong.",
  ],
  "Penguin Plots": [
    "Unlocked during Cold War. It can be heard during the cutscenes when witnessing the Penguin handshake, and when Pescaling Pax describes the penguin plans for world domination.",
    "It is a remix of Espionage.",
  ],
  Pathways: ["Unlocked at the Brimhaven Dungeon entrance."],
  "Pest Control": [
    "Unlocked while playing the Pest Control minigame, or during the first part of the naval assault in Dragon Slayer II.",
  ],
  "Pharaoh's Tomb": ["Unlocked in the Agility Pyramid."],
  "The Pharaoh": ["error", "TypeError: afterInfoBox is undefined"],
  Phasmatys: ["Unlocked at the ectoplasm in the Ectofuntus."],
  "Pheasant Peasant": ["Unlocked in the Freaky Forester random event."],
  "Pick & Shovel": [
    "Unlocked at the Motherlode Mine. Entering the lower level of the Motherlode Mine requires at least 30 Mining.",
  ],
  "Pinball Wizard": [
    "Unlocked during the Pinball random event.",
    "The music starts with a slowly built dominant seventh chord. The excited mood of the track is seen in the composition with use of synthetic electric guitar.",
  ],
  "Pirates of Penance": [
    "Unlocked during the final wave of Barbarian Assault.",
  ],
  "Pirates of Peril": [
    "Unlocked at the Pirates' Hideout near the Deep Wilderness Dungeon.",
    "In Classic mode, the track plays in a much larger area around the Pirates' Hideout.",
  ],
  "Plots and Plans": [
    "Unlocked during the Children of the Sun quest, when following the mysterious Varrock guard and meeting with the bandits.",
  ],
  "Poles Apart": [
    "Unlocked in the Rellekka Hunter area, and in the Polar eagle's cave.",
  ],
  "The Power of Tears": ["Unlocked while collecting the Tears of Guthix."],
  "Power of the Shadow Realm": [
    "Unlocked during the fight with the Sotetseg in the Theatre of Blood.",
  ],
  "Predator Xarpus": [
    "Unlocked upon entering Xarpus's room in the Theatre of Blood.",
  ],
  Preservation: [
    "Unlocked upon arriving to Fossil Island, as the Bone Voyage quest is completed.",
  ],
  Preserved: [
    "Unlocked near the Fossil Island Volcano, in the southern half of the Tar Swamp, or on Lithkren.",
    "There is an unlisted song which combines both Preservation and Preserved, beginning with Preserved.",
    "According to data crowdsourced via RuneLite, approximately 71% of players unlock the track at the Volcano, 18% unlock it on Lithkren, and 11% unlock it in the Tar Swamp.",
  ],
  "Prime Time": [
    "Unlocked in the Elemental Workshop II and plays on the second floor of the Elemental Workshop and in the mind room.",
  ],
  Principality: [
    "Unlocked in Burthorpe. On Members servers, this track also plays in a single square north-west of the Asgarnia Chaos Temple, on the free-to-play side of the wall. However, this square has been made unwalkable in free-to-play servers, presumably to stop free-to-play players from unlocking this music track. This is similar to the westernmost tiles in Crandor being blocked due to Fruits de Mer playing there.",
  ],
  "Prison Break": [
    'Prison Break is a hard combat achievement which requires the player to "Kill the Grotesque Guardians without taking damage from Dusk\'s prison attack."',
  ],
  Quest: ["Unlocked at the Fire Altar."],
  "The Quizmaster": ["Unlocked at the Quiz Master random event."],
  "Race Against the Clock": [
    "Unlocked in the Camdozaal Vault.",
    "The music track takes exactly one minute to match the allotted time in the Camdozaal Vault, while the remaining 26 seconds are silent.",
  ],
  "Rat a Tat Tat": ["Unlocked by entering the Varrock Rat Pits."],
  "Rat Hunt": [
    "Unlocked at the Ratcatchers Mansion during the Ratcatchers quest.",
  ],
  "Ready for Battle": ["Unlocked in the Castle Wars waiting room."],
  Regal: [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, the track plays at the Rogues' Castle.",
  ],
  "Regal Pomp": [
    "Unlocked during the quest A Kingdom Divided. It is played during Kandur Hosidius's coronation ceremony cutscene.",
    "Playing this song to Cecilia may be required for a Hard Clue step.",
  ],
  Reggae: ["Unlocked in the south-east of the Kharazi Jungle."],
  "Reggae 2": ["Unlocked in the Karamjan Jungle west of the Ship Yard."],
  "Reign of the Basilisk": [
    "Unlocked when fighting The Jormungand during The Fremennik Exiles quest. In the previous stage of the fight, in the fight with Typhor, Fight of the Basilisk played in this cave, and after completing the quest, Lair of the Basilisk will play in the entire cave.",
    "This track is a rock remix of Ballad of the Basilisk, transposed down from G Minor to D Minor.",
  ],
  Relics: [
    "Unlocked in the laboratory in Elvarg's lair, and is later heard in the Lithkren Vault and the laboratory below Ungael.",
  ],
  Rellekka: ["Unlocked in Rellekka."],
  "Rest in Peace": [
    "Unlocked when visiting Death's Office, accessible near major respawn points.",
    "Rest in Peace starts off as a subdued funerary march, with a plucked bass playing a somber accompaniment in a simple duple meter. Soon the melody enters in the form of a nylon string guitar playing a set of variatons around a descending tetrachord in A minor – a musical form typical for a lament.",
    "The following section provides a moment of intense contrast as the string ensemble enters in an agitated tempo, which the melody answers with an anguished phrase. This overtly tormented expression briskly fades away, and the initial subdued melody returns.",
    "According to Bridges, the sorrowful mood of the music piece reflects the days he spent at his father's deathbed, who passed away some years prior to its composition.quote=The track 'Rest in Peace', played in Death's Office, mostly reflects the mostly placid but ultimately hopeless time I spent in the hospital during my Dad's final week.",
  ],
  Revenants: [
    "Unlocked in the Revenant Caves.",
    "The track also could be heard in the Wilderness Slayer Cave for the first two weeks of its release. This was replaced with A Dangerous Game on 5 November 2020.",
  ],
  Rhapsody: [
    "Unlocked within the Clan Hall by using the Background-music option on the piano.",
    "It is based on the RuneScape song Love Story, from the quest of the same name, both created by Rhapsody's composer, Mod Ash.",
  ],
  "Right on Track": [
    "Unlocked during the minecart puzzle in Forgettable Tale of a Drunken Dwarf.",
  ],
  Righteousness: ["Unlocked at the Law Altar."],
  "Rising Damp": ["Unlocked in the Brine Rat Cavern during Olaf's Quest."],
  Riverside: ["Unlocked to the west of Tyras Camp."],
  "Roc and Roll": [
    "Unlocked during My Arm's Big Adventure while fighting the giant roc. Outside this battle, Sojourn plays here instead.",
    "Playing this song to Cecilia may be required for a Hard Clue step.",
    "It starts with what sounds like a harpsichord, then later adds recorder to supplement.",
  ],
  "The Rogues' Den": ["Unlocked in the Rogues' Den."],
  "Roll the Bones": [
    "Unlocked in the Creature Graveyard in the Mage Training Arena.",
  ],
  "Romancing the Crone": [
    "Unlocked during the Troll Romance quest, at the top of Trollweiss Mountain.",
  ],
  "Romper Chomper": ["Unlocked at the ogre area just south of Castle Wars."],
  "Roots and Flutes": [
    "Unlocked during the fight with Bryophyta. In order to access her lair, players must obtain a mossy key dropped by moss giants.",
    "Unlocked during the quest Back to my Roots in RuneScape 2. The version used in Old School RuneScape is the unlisted version that plays when fighting the wild jade vine",
  ],
  Rose: [
    "Unlocked during the quest A Kingdom Divided, when the player discovers Rose in the basement of the shack at the base of Mount Karuulm, and is also played during her funeral and around the shack afterwards.",
  ],
  Royale: ["Unlocked in the Black Knights' base in the Taverley Dungeon."],
  "Rugged Terrain": [
    "Unlocked at several locations throughout Great Kourend, specifically:",
    "Between Kourend Castle and Shayzien/Lovakengj",
    "The path leading to The Forsaken Tower",
    "The path south of the Lizardman Settlement leading to Mount Quidamortem",
    "Next to the Jellies in the Catacombs of Kourend",
    "Playing this song to Cecilia may be required for an Easy Clue step.",
  ],
  "The Ruins of Camdozaal": [
    "Unlocked in the Ruins of Camdozaal, accessed after the completion of the Below Ice Mountain quest.",
    "The track was originally released on 29 September 2008, being played during the quest Defender of Varrock in RuneScape. It was originally composed by Adam Bond, but was recomposed by Julian Surma for Old School RuneScape.",
  ],
  "Ruins of Isolation": ["Unlocked in the Ruins of Ullek."],
  "Rune Essence": [
    "Unlocked at the Rune Essence mine.",
    "The high pitch of the song may be referred from the sparkling light at the top of each rune essence rock in the mine. It is driven by a prominent bass sound, and in the final chorus, a beautiful choir.",
  ],
  "Sad Meadow": [
    "Unlocked in West Ardougne during the Plague City quest. Prior to release of Song of the Elves, it could be unlocked without starting the quest.",
  ],
  "Safety in Numbers": [
    "Unlocked when entering the Sourhog Cave during the quest A Porcine of Interest.",
    "The track was originally released on 11 March 2008, being played in the Stronghold of Player Safety in RuneScape.",
  ],
  Saga: ["Unlocked south of Rellekka."],
  "Sands of Time": [
    "Unlocked during the fight with Akkha in the Tombs of Amascut.",
    "Sands of Time is one of two music tracks that share name with a RuneScape music track, but being completely unrelated. The other being The Nightmare Continues.",
    "The section at 3 minute 53 seconds bears a resemblance to the Al Kharid soundtrack.",
  ],
  Sarachnis: ["Unlocked during the fight with Sarachnis."],
  Sarcophagus: ["Unlocked within the Ancient Pyramid."],
  "Sarim's Vermin": [
    "Unlocked by speaking to Felkrash at the end of the Ratcatchers quest. It can later be heard at the Port Sarim rat pits.",
  ],
  "Scape Ape": [
    "Unlocked automatically.",
    "Originally it played upon logging into Old School RuneScape during the release of Monkey Madness II.",
  ],
  "Scape Cave": [
    "Unlocked on the cave on Tutorial Island, making it the second track heard by all new players. It can also be heard in Varrock Sewers and parts of Edgeville Dungeon, as well as the basement of the Woodcutting Guild.",
  ],
  "Scape Crystal": [
    "Unlocked automatically. It was used as the login screen music with the release of the Song of the Elves quest and Prifddinas.",
  ],
  "Scape Five": [
    "Unlocked automatically. It was composed as part of Old School RuneScape's fifth birthday.",
    "During the 2018 Birthday event, this track was played in the Main Menu instead of Scape Main.",
  ],
  "Scape Ground": [
    "Scape Ground is a music track that all new players automatically unlock. It was originally released along with the Farming skill and it was played on the log-in screen during the first week of the skill's release. It is one of five music tracks which was created to commemorate the release of certain skills.",
    "The song is an adaptation of what was, at the time, the RuneScape main theme, now known as Scape Original. As a result, it sounds similar not only to Scape Original, but a variety of other theme adaptations such as Scape Santa and Scape Main.",
  ],
  "Scape Home": [
    "Unlocked automatically.",
    'Musically, the track resembles a fusion of Scape Main, the main theme of RuneScape, and Home Sweet Home, the song played in player owned houses, hence the name "Scape Home".',
  ],
  "Scape Hunter": ["Unlocked automatically when Hunter was released."],
  "Scape Main": [
    "Unlocked automatically upon the first login. The track is also played during the naval assault in Dragon Slayer II.",
    'The track is a modification of Scape Original. The original theme was written at 135 BPM, in 12/8 time, and undergoes several modulations between the keys of G minor and C major, oftentimes implementing the C major chord briefly, sounding in the Dorian mode. The intro makes use of string and choir patches playing G in multiple octaves. Flute plays a sixteenth-note ostinato on D, F, and G. The first statement of the main theme is then played by the trombone. Harp enters, playing descending sixteenth-note runs, arpeggiating first inversion G minor, E minor, B minor, and A minor chords. A timpani roll transitions to the full midi orchestra featuring rhythmic low-brass accompaniment, string stabs, toms, timpani, cymbals, and a harp ostinato before the trumpet plays the main theme overtop. The theme repeats on the French horn, this time in C major. A secondary legato theme featuring tubular bells contrasts the primary theme, followed by a "bridge" consisting of minor triads descending by half-step. A third repetition of the main theme is followed by a harp solo outro arpeggiating a G minor chord.',
  ],
  "Scape Original": [
    "Unlocked automatically by all players upon their first login. It was also the track that played in the Realm of Memories during the 20th Anniversary event.",
    'This music track is considered to be the "theme song" of RuneScape. Many of RuneScape<nowiki/>\'s other songs make references to it, including Scape Main.',
  ],
  "Scape Sad": [
    "Unlocked in the Wilderness or during the ending cutscene of Dragon Slayer II. It also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, the track plays at the Fountain of Rune and at the Demonic Ruins in the Wilderness.",
  ],
  "Scape Santa": [
    "Unlocked automatically. The track is played on the login screen when Christmas events are out.",
  ],
  "Scape Scared": [
    "Scape Scared is a music track that played while logging in to RuneScape during a Halloween event.",
  ],
  "Scape Soft": [
    "Unlocked in the north-east of Asgarnia, around Ice Mountain or the Monastery or east of Falador. In this area, the music player will shuffle between playing this track and Lightness.",
    "In Classic mode, the track plays in a smaller area just north of Falador.",
    "Although it is presumably not supposed to do so, Scape Soft along with Lightness replaces Spooky within Draynor Manor fenced area after the track playing once in Modern mode.",
  ],
  "Scape Wild": [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, the track plays north of the Chaos Temple, and north of Lava Dragon Isle.",
  ],
  "Scar Tissue": [
    "Unlocked during Desert Treasure II - The Fallen Empire, upon entering the Scar.",
    "At the start of this track, the tubular bell melody quotes Into the Abyss.",
  ],
  Scarab: [
    "Unlocked in members part of Kharidian Desert, mostly at sands. In this area, the music player will also shuffle between playing this track, Arabian 3, Desert Heat, Desert Voyage, The Desert, Egypt, Sphinx and Sunburn.",
    "In Classic mode, this track plays around the Ancient Pyramid, Bandit Camp Quarry, or Ruins of Unkah (NOT inside the latter).",
  ],
  "School's Out": [
    "Unlocked during the Surprise Exam.",
    "This song is a reference to the song by Alice Cooper, however it does not bear any resemblance to it.",
  ],
  "Scorpia Dances": [
    "Unlocked in the cave beneath the Scorpion Pit.",
    "Playing this song to Cecilia may be required for a Hard Clue step.",
  ],
  "Scrubfoot's Descent": [
    "Unlocked during the 2020 Christmas event, in Scrubfoot's cave. After the 2020 Christmas event, it can only be unlocked as a reward from future Christmas events. The cave currently plays no music track, but keeps playing Goblin Village if it was playing before.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Sea Minor Shanty": [
    "Unlocked by completing future Halloween events.",
    "It is a remix of Sea Shanty 2 in C minor.",
    'Other "Sea Shanty" music tracks:',
    "* Sea Shanty",
    "* Sea Shanty 2",
    "* Sea Shanty Xmas",
  ],
  "Sea Shanty": [
    "Unlocked around Musa Point and Karamja Volcano. In this area, the music player will shuffle between playing this track and Jungle Island.",
    "In Classic mode, the track plays at Musa Point and its docks.",
  ],
  "Sea Shanty 2": [
    "Unlocked in Port Sarim. It can also be unlocked by going to the docks west of Prifddinas or on Tempoross Cove after defeating Tempoross.",
    "The track has become arguably one of the most iconic tracks in Old School RuneScape; Ian Taylor, the track's composer, would later comment on its fame in an interview in late 2018:",
  ],
  "Sea Shanty Xmas": [
    "Unlocked by completing future Christmas events.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Secrets of the North": [
    "Unlocked during the quest Secrets of the North, upon entering the Ghorrock Dungeon.",
    'The track was originally released on 21 April 2009, being played during the quest The Tale of the Muspah in RuneScape. It was originally titled "The Muspah\'s Tomb".',
  ],
  "The Seed of Crwys": [
    "Unlocked upon entering Prifddinas for the first time after completing the Song of the Elves quest. It is the theme of the Crwys Clan.",
  ],
  Serenade: ["Unlocked at the Observatory."],
  Serene: ["Unlocked at the Air Altar."],
  "Servants of Strife": [
    "Unlocked in Molch. It also plays in the Lizardman Temple.",
  ],
  Settlement: ["Unlocked around approaching the Mountain Camp."],
  "The Shadow": [
    "Unlocked on Crandor. Since 2021, it requires partial completion of Dragon Slayer I to unlock.",
    "The music track begins with slow strings and a choir to build tension before creating a crescendo featuring a harp and several brass instruments.",
  ],
  Shadowland: [
    "Unlocked in Mort'ton and the entrance of the Abandoned Mine. It can later be heard when visiting Mort'ton during Temple Trekking.",
  ],
  "Sharp End of the Crystal": [
    "Unlocked in the Iorwerth Dungeon in Prifddinas.",
  ],
  "Shattered Relics": ["error", "TypeError: afterInfoBox is undefined"],
  Shine: [
    "Unlocked north of the Emir's Arena facilities, around the Mage Training Arena. In Classic music mode, it plays in a wider area including Emir's Arena hospital, bank and western side of cliffs west from Mage Training Arena.",
    "The music track begins with a strong and short-noted beat that is repeated during most of the song. Strings and percussion are added while maintaining a high-pitched melody. A piano plays the song's main tune at a high-pitched note. The tempo remains at a medium-fast beat throughout the tune. Synthesizers are included before the beat is changed. The bridge includes one of the signature tunes played in many of the desert songs and a slower, but still up-beat tune with a synthesizer and other instruments, before again returning to the main tune of the track a final time. At the very end, a crowd and several dongs can be heard.",
  ],
  Shining: [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, the track plays in the Bone Yard north-east of the Graveyard of Shadows in the Wilderness, at the Wilderness Agility Course and its dungeon.",
  ],
  "Shining Spirit": [
    "Unlocked at the Corporeal Beast's lair.",
    "This track has an eerie yet magical appeal to it. One of the prominent features is its 'music box' like tune played through most of the song. The music grows louder and stronger towards the end of the track, before returning to its signature melody.",
  ],
  Shipwrecked: [
    "Unlocked at the shipwreck on the northern coast of Morytania.",
  ],
  Showdown: ["Unlocked in the boss fight at the end of Monkey Madness I."],
  "Sigmund's Showdown": [
    "Unlocked in the Lumbridge water mill, during the battle with Sigmund in Death to the Dorgeshuun.",
  ],
  "The Sinclairs": [
    "Unlocked during King's Ransom. It can be heard during the cutscene when the player spies on the Sinclairs, revealing that Anna and David have betrayed the player.",
  ],
  "The Slayer": [
    "Unlocked at the entrance cave to the Fremennik Slayer Dungeon.",
  ],
  "Slice of Silent Movie": [
    "Unlocked during the battle with Sigmund in Another Slice of H.A.M.",
    'The name comes from the cliché during old silent movies where a hero would have to defeat a villain while the female was tied to the train tracks to be run over. The female, in this case, is Zanik; and the villain, Sigmund. The "Slice of" is taken from the name of the quest: Another Slice of H.A.M..',
  ],
  "Slice of Station": [
    "Unlocked at the Dorgesh-Kaan–Keldagrim train system after the completion of Another Slice of H.A.M.",
    "The track mimics the sound of a moving train, with a horn and the train travelling over tracks.",
  ],
  "Slither and Thither": [
    "Unlocked in the Giant Sea Snake lair during Royal Trouble.",
  ],
  "Slug a Bug Ball": ["Unlocked in Mother Mallum's lair under Witchaven."],
  "Snowflake & My Arm": [
    "Unlocked during the ending cutscene of Making Friends with My Arm. At 1 minute and 17 seconds, it is the shortest listed music track in Old School RuneScape.",
  ],
  Sojourn: [
    "Unlocked without having completed any quests, on the eastern side of the Mountain Camp.",
    "During the fight with the Giant Roc, Roc and Roll plays on the plateau with My Arm instead.",
  ],
  "Song of the Elves": [
    "Unlocked during the Song of the Elves quest, in the Grand Library.",
  ],
  "Song of the Silent Choir": [
    "Unlocked when fighting The Whisperer during and after Desert Treasure II - The Fallen Empire.",
    "The track's title refers to the Silent Choir cult dedicated to worshipping a strange totem within the Lassar Undercity.",
    "Although it's quiet, this track uses Verzik Vitur's voice on MIDI channel 11.",
  ],
  "Sorceress's Garden": [""],
  "Soul Fall": [
    "Unlocked upon reaching the Soul Altar in the northern part of Arceuus.",
  ],
  "Soul Wars": [
    "Unlocked upon entering the Soul Wars lobby. For music unlock just enter Soul wars portal in Edgeville near Yew trees.",
    "This music track was accessible to free-to-play players during Prime Plays: Soul Wars (15 December 2020 – 5 January 2021). ",
  ],
  Soundscape: ["Unlocked at the Feldip Hills glider area."],
  Sphinx: [
    "Unlocked in members parts of the Kharidian Desert, mostly at sands. In this area, the music player will also shuffle between playing this track, Arabian 3, Desert Heat, Desert Voyage, The Desert, Egypt, Scarab and Sunburn.",
    "In Classic mode, the track plays north and east of Sophanem.",
  ],
  Spirit: [
    "Unlocked inside Varrock city walls, excluding the Grand Exchange. It also plays in the Phoenix Gang Hideout and in the basement of the Blue Moon Inn. In this area, the music player will also shuffle between playing Adventure, Garden, and Medieval.",
    "In Classic mode, this track plays in western Varrock.",
  ],
  "Spirits of the Elid": [
    "Unlocked during the Spirits of the Elid quest, inside the waterfall at the source of the River Elid.",
  ],
  Splendour: [
    "Unlocked at an area between Taverley and Burthorpe or at the Chaos Temple.",
    "The opening tune is played by harp and synthesizers are introduced. The harp's tune is slightly more upbeat than the synthesizers although most of the instruments stay at a high pitch. At a different part a piano will play a melody before returning to the harp and violins, slowly fading out and finishing.",
  ],
  Spooky: [
    "Unlocked at Draynor Manor or during the Gravedigger random event. It could also be unlocked during the 2021 Halloween event.",
    "Although it is presumably not supposed to do so, Spooky is replaced with Scape Soft and Lightness in Modern mode after playing once within Draynor Manor fenced area.",
  ],
  "Spooky 2": [
    "Unlocked in the Haunted Mine quest on the first level of the Abandoned Mine. It can also be unlocked in the bar basement in Burgh de Rott and in the Isle of Souls Dungeon.",
  ],
  "Spooky Jungle": [
    "Unlocked in the south-west of the Kharazi Jungle, in Rashiliyia's Tomb, and during cutscenes in Tai Bwo Wannai Trio when Tamayu fights The Shaikahan.",
  ],
  "The Spurned Demon": ["Unlocked while fighting Zalcano in Prifddinas."],
  "The Spymaster": [
    "Unlocked during the cutscene in Contact!, when Osman sneaks into Sophanem. It is based upon City of the Dead. It is also played when encountering Osman in Beneath Cursed Sands.",
    "The music track is now listed in the Music Player.",
    "The music track was extended in length from 1 minute and 3 seconds to 2 minutes and 33 seconds.",
  ],
  Stagnant: [
    "Unlocked in the south-east of Mort Myre Swamp or at The Hollows. ",
    "It can later be heard while Temple Trekking, during the River puzzle or in combat events with no escape routes. The track also plays during Sins of the Father, when escorting Ivan Strom past the River puzzle.",
  ],
  "Stand Up and Be Counted": [
    "Unlocked during the Battle of West Ardougne in the Song of the Elves quest.",
  ],
  Starlight: ["Unlocked in the Asgarnian Ice Dungeon."],
  Start: [
    "Unlocked around Draynor Village and Draynor Manor. In this area, the music player will also shuffle between playing Unknown Land and Wander.",
    "In Classic mode, the track plays in northern Draynor Village.",
  ],
  "Still Night": [
    "Unlocked at locations outside Varrock city walls, including the Cooks' Guild, Champions' Guild, and Jolly Boar Inn. In this area, the music player will also shuffle between playing Doorways, Expanse, and Greatness.",
    "In Classic mode, the track plays at the mining area to the south-east of Varrock.",
  ],
  Stillness: [
    "Unlocked in the Myreque Hideout south of Canifis. It also plays in Daeyalt essence mine.",
  ],
  "Storeroom Shuffle": [
    "Unlocked during the quest The Path of Glouphrie. It plays upon arriving in the storeroom within the Tree Gnome Village Dungeon.",
  ],
  "Storm Brew": ["Unlocked in the Killerwatt plane."],
  Stranded: [
    "Unlocked at the start of the Ice Path, or near the God Wars Dungeon. It can also be unlocked by looking into a mystical mirror during Desert Treasure I.",
  ],
  "Strange Place": [
    "Unlocked during A Tail of Two Cats in the cutscene showing the battle at the Dragonkin Castle.",
  ],
  Strangled: [
    "Unlocked during the quest Desert Treasure II - The Fallen Empire. It plays inside the Stranglewood.",
    "Unlocked this music track upon logging in after the track was released.",
  ],
  Stratosphere: [
    "Unlocked at the Cosmic Altar.",
    "The use of synthesized sounds, particularly the pad sounds and the sharp notes, resembles stars and the moving astronomical debris present inside the altar.",
  ],
  "Strength of Saradomin": [
    "Unlocked at Saradomin's Encampment.",
    "=Trivia=",
    "The track was originally released on 28 August 2007, as part of the original God Wars Dungeon update.",
  ],
  "Stuck in the Mire": ["Unlocked in the Kebos Swamp."],
  Subterranea: [
    "Unlocked in the Waterbirth Island Dungeon and Crabclaw Caves.",
    "Unlocked immediately after going through the door which can be passed using a Pet rock in the Waterbirth Island Dungeon.",
    "Playing this song to Cecilia may be required for a Medium Clue or Hard Clue step.",
  ],
  Sunburn: [
    "Unlocked in members part of Kharidian Desert, mostly at sands. In this area, the music player will also shuffle between playing this track, Arabian 3, Desert Heat, Desert Voyage, The Desert, Egypt, Scarab and Sphinx.",
    "In Classic mode, this track plays north of the Ancient Pyramid and west of Nardah.",
  ],
  Superstition: [
    "Unlocked inside the top floor of the Viyeldi Caves, or in the Tower of Magic prison.",
  ],
  "Surok's Theme": [
    "Unlocked during What Lies Below. It can be heard during the battle with King Roald.",
    'It can later be heard in the Nightmare Zone when fighting King Roald. Originally, the name "Surok\'s Revenge" would appear in the Music Player, but no longer does so after it became a listed track.',
  ],
  Suspicious: ["Unlocked during cutscenes in Monkey Madness I."],
  "Tale of Keldagrim": [
    "Unlocked in east Keldagrim.",
    "It is steady, happy jazz track that opens with a few soft drum noises and quickly segues into the theme. The track features many dwarven sound effects and intricate synthesizer. It features a powerful middle section, with fairly heavy brass and heavier drums, and this segues back into the main melody for a final verse and chorus before ending slowly with the soft drum effects similar to those in the opening.",
  ],
  "Talking Forest": ["Unlocked at McGrubor's Wood."],
  "Tarn Razorlor": ["error", "TypeError: afterInfoBox is undefined"],
  "A Taste of Hope": [
    "Unlocked during the final fight with Ranis Drakan during the quest A Taste of Hope.",
  ],
  "Tears of Guthix": ["Unlocked in the Chasm of Tears."],
  Technology: ["Unlocked in the gnome glider hangar in Tree Gnome Stronghold."],
  Tempest: [
    "Unlocked during the fight with the Grotesque Guardians who are found on the Slayer Tower's rooftop. In order to access the roof, players must obtain a brittle key from gargoyles while assigned them for a slayer task. A  gargoyles slayer task is required to unlock this track, as the track unlocks within the Grotesque Guardians fight instance.",
  ],
  Temple: [
    "Unlocked in Temple of Marimbo dungeon, and in the cavern containing the M'amulet mould.",
  ],
  "Temple of Light": ["Unlocked in the Temple of Light."],
  "Temple of the Eye": [
    "Unlocked during the Temple of the Eye quest. It plays inside the Guardians of the Rift lobby and before the minigame's preperation round start after the quest completion.",
  ],
  "Temple of Tribes": [
    "Unlocked during Land of the Goblins, within the Goblin Temple.",
    "It is a slower version of the track Goblin Village with added bass drums and other sound effects to give a creepy temple feeling.",
  ],
  "Tempor of the Storm": [
    "Unlocked while fighting Tempoross in Tempoross Cove.",
  ],
  "The Terrible Caverns": [
    "Unlocked during the quest Sins of the Father. It is unlocked during the fight with the Mutated Bloodveld in the Meiyerditch Laboratories with Safalaan. It is a more up-tempo version of The Terrible Tower, the song that plays in the Slayer Tower.",
    "The track was originally released on 22 April 2008, being played during the quest Legacy of Seergaze in RuneScape.",
  ],
  "The Terrible Tower": [
    "Unlocked in the Slayer Tower. It can also be heard in the Slayer Tower basement.",
  ],
  "The Terrible Tunnels": [
    "Unlocked during the quest Sins of the Father. It is unlocked when exploring the Meiyerditch Laboratories with Safalaan, and plays in the Laboratories after the quest.",
    "It is based on the track The Terrible Tower that plays in the Slayer Tower.",
    "The track was originally released on 22 April 2008, being played during the quest Legacy of Seergaze in RuneScape.",
  ],
  "Terrorbird Tussle": [
    "Unlocked during the quest The Path of Glouphrie. It plays upon fighting the Warped Terrorbirds in the Poison Waste Dungeon.",
  ],
  "Test of Companionship": [
    "Unlocked in the Path of Apmeken within the Tombs of Amascut.",
  ],
  "Test of Isolation": [
    "Unlocked in the Path of Scabaras within the Tombs of Amascut.",
  ],
  "Test of Resourcefulness": [
    "Unlocked in the Path of Crondis within the Tombs of Amascut.",
  ],
  "Test of Strength": [
    "Unlocked in the Path of Het within the Tombs of Amascut.",
  ],
  "That Sullen Hall": [
    "Unlocked at Cerberus's Lair.",
    "The title is a reference to the Wilfred Owen poem Strange Meeting.",
  ],
  Theme: [
    "Unlocked at the Coal Trucks, or in the Waterfall Dungeon.",
    "This track uses mostly strings, such as the violin and harp along side a choir and piano. It switches between solid melody lines, where violins or flutes play a harmonic melody with drums and another string instrument in the background along with complex sections with full countermelodies that include all of the instruments mentioned.",
  ],
  "A Thorn in My Side": [
    "Unlocked during the fight with the player-grown hespori at the Farming Guild and when fighting the wild hespori during A Night at the Theatre.",
    "When not fighting the Hespori, Creeping Vines plays in the Farming Guild cave and Stagnant on the Morytania island.",
  ],
  "Thrall of the Devourer": [
    "Unlocked during the Beneath Cursed Sands quest. It plays during the fight with the Champion of Scabaras and the Menaphite Akh.",
  ],
  "Thrall of the Serpent": [
    "Unlocked at Zul-Andra. It was the 500th music track added to Old School RuneScape.",
  ],
  "Throne of the Demon": [
    "Unlocked in Thammaron's Throne Room underneath Uzer. It will play here by default after The Golem and Shadow of the Storm have been completed. During the Shadow of the Storm quest's battle with Agrith Naar, Grip of the Talon will play here.",
  ],
  "Tick Tock": [
    "Unlocked during the Desert Treasure II - The Fallen Empire, in the cutscene where the player enters the lower level of the Ancient Vault, followed by the track Master of Puppets.",
  ],
  "Time Out": ["Unlocked at the Maze Random event."],
  "Time to Mine": ["Unlocked in the Keldagrim south-west mine."],
  Tiptoe: [
    "Unlocked in the Draynor Manor cellar during the quests Ernest the Chicken and Vampyre Slayer.",
    "Playing this song to Cecilia may be required for an Easy Clue step.",
  ],
  "Title Fight": [
    "Unlocked in the top floor of the Champions' Challenge arena, within the Champions' Guild under the trapdoor.",
  ],
  "Tomb Raider": ["Unlocked during Pyramid Plunder."],
  Tomorrow: ["Unlocked south of Port Sarim."],
  "Too Many Cooks...": [
    "Unlocked in the Goblin Cook's basement. This area is always accessible to anyone, and featured during the Goblin generals' subquest of Recipe for Disaster.",
  ],
  "The Tower of Voices": [
    "Unlocked upon entering Prifddinas for the first time after completing the Song of the Elves quest.",
  ],
  "The Tower": [
    "Unlocked north of Ardougne Castle in East Ardougne. It can also be heard in Ardougne's western sewers, and in the basement of the Chaos Druid Tower.",
  ],
  "The Trade Parade": [
    "Unlocked at the Grand Exchange in the city of Varrock.",
    "Prior to an update on 27 April 2022, the track also played outside Grand Exchange. However, it could still be heard there if using Classic music mode.",
  ],
  "Trahaearn Toil": [
    "Unlocked upon entering Prifddinas for the first time after completing the Song of the Elves quest. It is also the default track that plays in the Grand Library, the Trahaearn mine, and the entrance to the Zalcano lair. It is the theme of the Trahaearn Clan.",
  ],
  Trawler: [
    "Unlocked while playing Fishing Trawler. The track has a minor key variant.",
  ],
  "Trawler Minor": [
    "Unlocked while playing Fishing Trawler, upon the Trawler sinking. It can sometimes unlock when the boat is only partially flooded. It is the minor key variant of Trawler.",
  ],
  "Tree Spirits": [
    "Unlocked west of the entrance to the Tree Gnome Stronghold.",
  ],
  Tremble: ["Unlocked on the Death Plateau."],
  Tribal: [
    "Unlocked south-east of Tai Bwo Wannai Village, at the entrance to the Nature Altar.",
  ],
  "Tribal 2": [
    "Unlocked at the gnome glider on Karamja, and east of Shilo Village.",
  ],
  "Tribal Background": [
    "Unlocked north or north-east of Tai Bwo Wannai or in the south-eastern side of the Kharazi Jungle. It can also be heard in the Pothole Dungeon.",
  ],
  Trinity: [
    "Unlocked around the Legends' Guild. It can also be heard in the Legends' Guild dungeon.",
  ],
  "Troll Shuffle": [
    "Unlocked during Making Friends with My Arm. It first plays when attempting to sneak into Weiss, and later plays during the battle with Don't Know What.",
  ],
  "Trouble Brewing": [
    "Unlocked while playing the Trouble Brewing minigame in Mos Le'Harmless.",
    "For Ironman, using the trade option on Honest Jimmy will unlock this music track and Distillery Hilarity.",
  ],
  Troubled: [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, the track plays at the Western Ruins in the Wilderness.",
  ],
  "Troubled Waters": [
    "Unlocked in the Kraken Cove.",
    "Unlocked at the Stronghold Slayer Cave.",
  ],
  Twilight: [
    "Unlocked during Elemental Workshop I and plays on the first floor.",
  ],
  "TzHaar!": ["Unlocked in the TzHaar Fight Cave."],
  "Undead Dungeon": ["Unlocked in Tarn's Lair."],
  Undercurrent: [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, the track plays in the Wilderness between the Bandit Camp and the Graveyard of Shadows.",
  ],
  Underground: [
    "Unlocked in various locations around Gielinor:",
    "Wilderness.",
    "Wilderness Agility Course Dungeon.",
    "Entrana Dungeon.",
    "Area of Taverley Dungeon containing Black Demons.",
    "In Classic mode, the track plays at the same dungeon areas as well as coast east of the Chaos Temple, but not in other parts of the Wilderness.",
  ],
  "Underground Pass": [
    "Unlocked during the Underground Pass quest. It is unlocked in the second area of the Underground Pass, and in the pitfall trap underneath the grid in the first area.",
  ],
  Understanding: ["Unlocked at the Nature Altar."],
  "Unknown Land": [
    "Unlocked around Draynor Village. In this area, the music player will also shuffle between playing Start and Wander.",
    "In Classic mode, the track plays in southern Draynor Village.",
  ],
  Untouchable: [
    "Unlocked during the fight with The Untouchable during the Dream Mentor quest.",
  ],
  "Unturned Stones": [
    "Unlocked during Desert Treasure II. It plays in the dungeon where the golem encountered during the quest resides.",
    "It is based on the RuneScape unlisted music track Tomb Stones, which plays inside the Digsite Dungeon during the The Temple at Senntisten quest, which Desert Treasure II takes a number of elements from.",
  ],
  Upcoming: [
    "Unlocked at the Necromancer Tower, or when crashing the balloon transport system.",
  ],
  "Upir Likhyi": [
    "Unlocked during the quest Sins of the Father in the boss fight against Vanstrom Klause.",
    "The track was originally released on 31 August 2011, being played during the quest Branches of Darkmeyer in RuneScape. However, this version is notably more slower pace than the original.",
    'Upir\' Likhyj (Упирь Лихый, in Russian Упырь Лихой, Old Russian Оупирь Лихыи) was the name of an 11th century Old Russian scribe and a priest. Direct translation of his name from the Old Russian would be "Bloodsucker the Foul" or "Bloodsucker the Wicked". Upir\' could also be a Cyrillic version of the Swedish/Nordic Öpir or Öper, with Likhyj meaning "wicked/unworthy" in Old Russian, as in "Öpir the Unworthy".',
  ],
  "Upper Depths": ["Unlocked upon entering the Chambers of Xeric."],
  "Vampyre Assault": [
    "Unlocked during the meeting between Gadderanks and Vanstrom Klause during the quest In Aid of the Myreque. It also plays during Sins of the Father in the battle with Damien Leucurte.",
    "It is based upon Distant Land and Fangs for the Memory.",
  ],
  Vanescula: ["error", "TypeError: afterInfoBox is undefined"],
  "The Vault": [
    "Unlocked during Desert Treasure II - The Fallen Empire, upon entering the Ancient Vault.",
    "It is a variation of The Ancient Prison.",
  ],
  Venomous: [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, it plays at the Scorpion Pit in Deep Wilderness.",
    "This track was originally released with the removal of PvP in the Wilderness on 10 December, 2007, unlocking at the Scorpion Pit in Deep Wilderness.",
    "Before the track was re-released in 2022, Moody played at Scorpion Pit in Classic music mode.",
  ],
  Venture: ["Unlocked at the Dig Site."],
  "Venture 2": [
    "Unlocked in the Digsite Dungeon, and a small cave inhabited by Doug Deeping.",
  ],
  "Victory is Mine": [
    "Unlocked in a Champion's Challenge fight, on the bottom floor of the arena. A Champion's scroll is required to unlock this track, making it one of the most difficult to obtain.",
  ],
  Village: [
    "Unlocked in Canifis, or by looking into a mystical mirror during Desert Treasure I.",
  ],
  Vision: [
    "Unlocked at the Wizards' Tower. It can also be unlocked very rarely in the Wizards' Tower basement.",
    "Playing this song to Cecilia may be required for an Easy Clue step.",
  ],
  "Volcanic Vikings": ["Unlocked in Neitiznot."],
  "Voodoo Cult": [
    "Unlocked at the lower level of Ah Za Rhoon. It can later be heard during Legends' Quest on the bottom floor of the Viyeldi caves.",
  ],
  Voyage: ["Unlocked at the top of Baxtorian Falls."],
  "The Waiting Game": ["Unlocked upon entering the Soul Wars lobby."],
  "Waking Dream": [
    "Unlocked during Lunar Diplomacy, upon first entering the Dream World and during the fight with Me.",
  ],
  "Waste Defaced": [
    "Unlocked during the quest The Path of Glouphrie. It plays upon entering the Poison Waste Dungeon.",
  ],
  "A Walk in the Woods": [
    "Unlocked in the Kourend Woodland and also plays in Barbarian Camp basement.",
  ],
  "The Walking Dead": [
    "Unlocked in the Shayzien Crypts. It is based on The Militia.",
    "This track contains similar elements to that of music from The Branches of Darkmeyer from RuneScape. Specifically, where the vocals/choir have a crescendo effect, and how the church organ is also used as the lead.",
    "This track's name is a reference to the like-named series The Walking Dead.",
  ],
  "Wally the Hero": [
    "Unlocked during Demon Slayer. It can be heard during the cutscene where Aris describes how Wally first defeated Delrith.",
  ],
  Wander: [
    "Unlocked around Draynor Village. In this area, the music player will also shuffle between playing Start and Unknown Land.",
    "In Classic mode, the track plays at the Falador Farm.",
    "This track is light and airy with plucking beats throughout. A melody with different background sounds layered emerges.",
  ],
  Warpath: [
    "Unlocked at Clan Wars. Upon entering any Clan Wars area, either Warpath or the Clan Wars track is randomly selected to start playing.",
  ],
  Warrior: [
    "Unlocked when facing Koschei the Deathless during The Fremennik Trials quest.",
  ],
  "Warriors' Guild": ["Unlocked in the Warriors' Guild."],
  "Watch Your Step": [
    "Unlocked by entering the first level of the Hallowed Sepulchre, which can only be accessed after completing Sins of the Father.",
  ],
  Waterfall: [
    "Unlocked south of the Baxtorian Falls. It can also be heard in Glarial's Tomb.",
  ],
  Waterlogged: [
    "Unlocked south of Canifis. It also plays at the Morytania Graveyard.",
    "It can later be heard while Temple Trekking, during the Bridge puzzle and the battle with the creature on the boat trip. The track also plays during Sins of the Father, when escorting Ivan Strom past the Bridge puzzle.",
  ],
  "Way of the Enchanter": [
    "Unlocked in the Lunar Isle mine.",
    "This piece is very percussion oriented, featuring a wide array of such instruments throughout the song. It features a synth-string melody. A piano is present at a few points in the song for a short solo.",
  ],
  "Way of the Wyrm": [
    "Unlocked in the Karuulm Slayer Dungeon. Inside the dungeon, the music player will also shuffle between playing Ful to the Brim and Kanon of Kahlith.",
    "Before an unknown update in 2021, the track only played in the lower level of the Karuulm Slayer Dungeon. However, it can still be heard there in Classic mode.",
  ],
  Wayward: ["Unlocked in the Zogre dungeon."],
  "We are the Fairies": ["Unlocked at the Cosmic Plane."],
  "Welcome to my Nightmare": [
    "Unlocked upon entering the Pestilent Bloat's room in the Theatre of Blood.",
    "The title of this track could be a reference to the album of the same name by Alice Cooper",
  ],
  "Welcome to the Theatre": ["Unlocked upon entering Ver Sinhaza."],
  "Well Hallowed Air": [
    "Unlocked by entering the lobby of the Hallowed Sepulchre, which can only be accessed after completing Sins of the Father.",
    'When spoken aloud, the name of the track sounds similar to the greeting "Unlocked).',
  ],
  "Well of Voyage": [
    "Unlocked at the Well of Voyage. It can also be heard after falling down a Leaf Trap in Tirannwn, and in Lady Trahaearn's cave during Song of the Elves.",
  ],
  "What Happens Below...": [
    "Unlocked in The Warrens.",
    "Before the track was released, The Cellar Dwellers played in this location.",
  ],
  "Where Eagles Lair": [
    "Unlocked in the Eagles' Peak Dungeon during the Eagles' Peak quest.",
  ],
  "Wild Isle": [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "Unlocked south of Lava Dragon Isle in the Wilderness. However, it can still be heard there if using Classic music mode.",
    "This is a disturbing, tension-building piece of music that is mostly quiet and features the sound of a raging storm with scattered, soft piano fading in and out randomly, the sound of growling, and a few eerie sound effects here and there.",
    'Removed reference "to the south of Lava Dragon Isle" from the hint.',
  ],
  "Wild Side": [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    'Prior to an update on 28 April 2021, the track could be unlocked in the Lava Maze and north of it and the hint referred "to the north of the Lava Maze in the Wilderness". However, it can still be heard there if using Classic music mode.',
  ],
  Wilderness: [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "If using Classic mode, it plays at the Hobgoblin mine, west of Dark Warriors' Fortress, north of Grand Exchange, as well as in Daimon's Crater.",
  ],
  "Wilderness 2": [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    'Prior to an update on 28 April 2021, the track could be unlocked south of the Lava Maze and the hint referred "to the south of the Lava Maze in the Wilderness". However, it can still be heard there if using Classic music mode.',
  ],
  "Wilderness 3": [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, it plays at and east of Forgotten Cemetery in the Wilderness.",
  ],
  Wildwood: [
    "Unlocked in the Wilderness and also plays in the Wilderness Agility Course Dungeon.",
    "Unlocked between Ferox Enclave and the Dark Warriors' Fortress and the hint referred to \"east of the Dark Warriors' Fortress in the Wilderness\". However, it can still be heard there if using Classic music mode.",
  ],
  "Winter Funfair": [
    "Unlocked by completing future Christmas events.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
    'The track was originally released on 16 December 2008, being played during the quest Myths of the White Lands in RuneScape. It was originally titled "Winter Funfare".',
  ],
  Witching: [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    'Prior to an update on 28 April 2021, the track could be unlocked on the eastern edge of level 24-32 Wilderness and the hint referred "on the east side of Wilderness". However, it can still be heard there if using Classic music mode.',
  ],
  "Woe of the Wyvern": [
    "Unlocked in the Asgarnian Ice Dungeon, at the skeletal wyverns.",
  ],
  Wonder: [
    "Unlocked in the Wilderness and also plays in Wilderness Agility Course Dungeon.",
    "In Classic mode, the track plays north of Goblin Village in the Wilderness.",
  ],
  Wonderous: [
    "Unlocked near the north of East Ardougne.",
    "This is a slowly rising synthesiser and fast-paced and light piano tune. More synthesisers are added before changing the depth of the pitch. The main nature is powerful long, stretched notes, then later, a more steady and short melody with strings, drums and wind.",
  ],
  Woodland: ["Unlocked at the Iorwerth Camp."],
  "Work Work Work": [
    "Unlocked outside of the Tower of Life. On the upper floors of the tower, during the Tower of Life quest, Magic Magic Magic will play, but after the quest is completed this track will play on the upper floors as well.",
  ],
  Workshop: [
    "Unlocked inside Falador city walls. In this area, the music player will also shuffle between playing Arrival and Fanfare.",
    "In Classic mode, the track plays in eastern Falador.",
  ],
  "A Worthy Foe": [
    "Unlocked during Desert Treasure II - The Fallen Empire, being played during encounters with the Mysterious Figure.",
  ],
  "Wrath and Ruin": [
    "Unlocked in the anger room during A Soul's Bane, and during the battle with Tolna. It can later be heard in Tolna's Rift.",
  ],
  Xenophobe: [
    "Unlocked at the Waterbirth Island Dungeon. It plays in the deeper area from rooms 12-15, and in the lairs of the Dagannoth Kings.",
  ],
  Yesteryear: [
    "Unlocked when the player first arrives in Lumbridge. It can also be heard around the Lumbridge Swamp and farmlands. In this area, the music player will also shuffle between playing Autumn Voyage, Book of Spells, Dream, Flute Salad, and Harmony.",
    "In Classic mode, the track plays in the eastern part of Lumbridge swamp.",
  ],
  "You Have My Attention": [
    "Unlocked during the quest Sins of the Father. It plays during the cutscene where Lowerniel Drakan confronts the player.",
    "The track is split into two distinctive parts, the last part bears resemblance to A Forgotten Religion.",
    'The cache id number of the track is 666, which is a reference to the "Number of the Beast", as well as the combat level of Lowerniel Drakan in RuneScape; fittingly the track is played at Lowerniel Drakan\'s first appearance in the game.',
  ],
  "Zamorak Zoo": ["Unlocked at Zamorak's Fortress of the God Wars Dungeon."],
  "Zanik's Theme": [
    "Unlocked during the cutscene of Grubfoot's dream of Yu'biusk during the Land of the Goblins quest.",
    "Unlocked until the fourth quest in the Dorgeshuun quest series, it is played in three cutscenes from the second quest in that series, Death to the Dorgeshuun, and in the Yu'biusk cutscene in Land of the Goblins.",
    "=Trivia=",
    "The track was originally released on 12 November 2007, as part of the original Land of the Goblins quest.",
  ],
  "Zaros Zeitgeist": [
    "Unlocked in the encounter with Nex, which requires completion of the miniquest The Frozen Door to unlock.",
    "The track was originally released alongside Nex on 10 January 2011, being played during the boss fight.",
  ],
  Zealot: ["Unlocked at the Water Altar."],

  "Zogre Dance": ["Unlocked at Jiggig."],
  Zombiism: [
    "Unlocked on Harmony Island and the caves underneath. To get access to the island normally, The Great Brain Robbery must have been started. The track can also be unlocked by speaking to the Wandering impling while the Harmony Island crop circle is active.",
  ],
};
