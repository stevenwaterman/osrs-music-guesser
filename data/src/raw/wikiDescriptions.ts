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
  "This song is technically accessible from the Catacombs of Kourend via the Strange Passage, but we banned that as a transport method because otherwise there'd be 7 entrances to Forthos Dungeon spread all across Kourend.";
const eaglesTransport =
  "In the Eagles' transport system, you are never shown as outside when travelling to the main Eagles' peak transport hub. When going the other way, there is a cutscene showing you being towed by an eagle, but you have no agency over your character so this is considered a valid method of transport. Therefore all 4 Eagle Transport System stations are connected.";
const varrockSewers = [
  "Varrock Sewers are directly accessible through the main entrance east of Varrock Palace, and by going down the ladder inside the cage containing a bear to the north-east of Varrock Palace.",
  "They are also accessible through the pipe shortcut from Edgeville dungeon, meaning the three entrances to Edgeville Dungeon are also valid answers.",
];

export const songDescriptions: Record<string, string[]> = {
  "7th Realm": [
    "Plays in the western part of Brimhaven Dungeon or in the basement of the Myths' Guild.",
    mythsGuild,
  ],
  Adventure: ["Plays in Varrock Palace."],
  "Al Kharid": ["Plays in Al Kharid and the west of the Giants' Plateau."],
  "Alchemical Attack!": [
    "Plays during the fight with the Alchemical Hydra, inside Mount Karuulm.",
  ],
  "All's Fairy in Love & War": [
    "Plays at the Fairy Resistance Hideout during the Fairytale II - Cure a Queen quest.",
    "Only accessible via fairy rings.",
  ],
  Alone: [
    "Plays in the Clock Tower Dungeon and a wide area around Ice Mountain, including Edgeville Monastery (but not the Black Knight's Fortress).",
    "Playing this song to Cecilia may be required for an Easy Clue step.",
  ],
  "Altar Ego": ["Plays in the Ourania Cave near the Observatory."],
  "Alternative Root": [
    "Plays in the Tunnel of Chaos, under the statue east of Varrock, during What Lies Below.",
  ],
  "Amascut's Promise": [
    "Plays during the fight with Tumeken's Warden and Elidinis' Warden in the Tombs of Amascut, inside the Necropolis.",
  ],
  "Ambient Jungle": [
    "Plays inside Shilo Village. It also plays in the underground area of the Shilo Village mine.",
  ],
  "The Ancient Prison": [
    "Plays in the Ancient Prison outside Nex, inside the God Wars Dungeon.",
    'The track was originally released on 3 December 2009, being played during the quest The Temple at Senntisten in RuneScape and later in the Ancient Prison. It was originally composed by Chris Jolley, and was titled "Zaros Stirs".',
  ],
  "The Angel's Fury": [
    "Plays at the beginning of the encounter with Nex, inside the God Wars Dungeon.",
    "The track begins playing when Nex enters her Blood phase after Umbra is killed.",
    "The track is based on the Angel of Death music track from The Angel of Death, Nex's hard mode encounter in RuneScape.",
  ],
  Anywhere: ["Plays north of Marim's main gate on Ape Atoll."],
  "Ape-ex Predator": [
    "Plays during the fight with Ba-Ba in the Tombs of Amascut, inside the Necropolis.",
  ],
  Arabian: [
    "Plays in Al Kharid, after passing through the toll gate. Also plays in Citharede Abbey and at the Uzer mine.",
  ],
  "Arabian 2": [
    "Plays in the Al Kharid mine and surrounding areas, including a cow pen and a potato field.",
  ],
  "Arabian 3": [
    "Plays in the north-western part of the Kharidian Desert, around the entrance to the Kalphite Lair.",
  ],
  Arabique: ["Plays near the Hellhounds in Taverley Dungeon.", taverleyDungeon],
  "Arachnids of Vampyrium": [
    "Plays during the fight in the Nylocas lair within the Theatre of Blood.",
  ],
  Arboretum: [
    "Plays inside the Arboretum (which contains the Blisterwood tree) in Darkmeyer.",
    "The track was originally released on 31 August 2011, being played during the quest Branches of Darkmeyer in RuneScape.",
  ],
  Arcane: [
    "Plays in Arceuus. It can also be heard in the Library Historical Archive.",
  ],
  "Architects of Prifddinas": [
    "Plays upon entering Prifddinas for the first time after completing the Song of the Elves quest. It is the theme of the Ithell Clan.",
  ],
  "Armadyl Alliance": [
    "Plays outside of Armadyl's Eyrie inside the God Wars Dungeon.",
  ],
  Armageddon: [
    "Plays in the main area of the God Wars Dungeon, and in the Wilderness God Wars Dungeon.",
    "This music track seems to contain elements of the other God Wars Dungeon tracks. If the player listens closely, parts of it sound very similar to Armadyl Alliance, Bandos Battalion, Strength of Saradomin, and Zamorak Zoo.",
    "According to data crowdsourced via RuneLite, approximately 71% of players unlock the track in the God Wars Dungeon, while 29% unlock it in the Wilderness God Wars Dungeon.",
  ],
  "Army of Darkness": [
    "Plays in the Dark Warriors' Fortress and the Wilderness Bandit Camp.",
  ],
  Arrival: ["Plays west of Falador at the West Falador mine."],
  Artistry: ["Plays during the Mime Random event."],
  Ascent: [
    "Plays south of Mount Quidamortem (Chambers of Xeric), west of Great Kourend.",
    "This music track contains elements of the Love Story soundtrack, which is a quest that Mod Ash has composed music for on RuneScape 2.",
  ],
  "Assault and Battery": ["Plays while playing Barbarian Assault."],
  "Attack 1": [
    "Plays on the Khazard Battlefield, and to the north-west where you fight the Khazard Warlord in the Tree Gnome Village quest. It also plays at a small area north of West Ardougne.",
    'It is the first of six variations known as the "Attack" series. ' + attack,
  ],
  "Attack 2": [
    "Plays in Elvarg's lair in the Crandor and Karamja Dungeon. It can later be heard in Dragon Slayer II, during the cutscene of the Dragonkin battle on Lithkren.",
    "After completing Dragon Slayer, Elvarg's lair can also be accessed from the Tzhaar Area under Karamja Volcano.",
    'It is the second in a set of six tracks known as the "Attack" series. ' +
      attack,
  ],
  "Attack 3": [
    "Plays in the Lava Maze Dungeon.",
    'It is the third track in the series of six "Attack" music tracks. ' +
      attack,
  ],
  "Attack 4": [
    "Plays at the Fight Arena. It also plays in the Iorwerth Camp cave during Song of the Elves, or in parts of the Yanille Agility Dungeon (which has two entrances).",
    'It is the fourth track in the series of six "Attack" music tracks. ' +
      attack,
  ],
  "Attack 5": [
    "Plays at the King Black Dragon's Lair, or in a cutscene at the Lithkren Vault during Dragon Slayer II.",
    'It is the fifth track in the series of six "Attack" music tracks. ' +
      attack,
  ],
  "Attack 6": [
    "Plays at the Gu'Tanoth Ogre Enclave lair.",
    'It is the sixth track in the series of six "Attack" music tracks. ' +
      attack,
  ],
  Attention: [
    "Plays at the coastline south of Rimmington and on the western side of Thurgo Peninsula.",
    "'Thurgo Peninsula' is a quote from the wiki page and I'm not changing it.",
  ],
  "Autumn Voyage": ["Plays in eastern Lumbridge, near the cow calves."],
  "Awful Anthem": [
    "Plays during Throne of Miscellania, played by Prince Brand.",
    "The song does cannonically have lyrics, but they make little difference to the overall experience.",
  ],
  "Aye Car Rum Ba": [
    "Plays on Braindeath Island during Rum Deal, accessible from the dock to the north-west of the Ectofuntus.",
  ],
  Aztec: ["Plays in the Brimhaven Agility Arena."],
  "Back to Life": [
    "Plays in Sophanem and Sophanem bank after the Contact! quest, replacing the City of the Dead music track.",
  ],
  Background: [
    "Plays on Entrana.",
    "Due to how the chunks line up, the song also plays on a few tiles of land south of Keep Le Faye.",
    "According to the wiki, 1.7% of players unlock this song on that small patch of land.",
  ],
  Bait: [
    "Plays in the Myreque Hideout under Meiyerditch, when under attack by the Abomination during A Taste of Hope.",
    "Also plays during the battle with Kroy in the Laboratory under Crombwick Manor in Slepe, which is accessed via the Sisterhood Sanctuary",
  ],
  "Ballad of Enchantment": [
    "Plays at the Ardougne Monastery and the Clock Tower.",
  ],
  "Ballad of the Basilisk": [
    "Plays in the Rellekka Longhall when Olaf the Bard is on stage performing the ballad after you defeat the Jormungand.",
    "It is an instrumental version of RuneScape 3's song by the same name. In that version, the lyrics are sung, while in this version Olaf the Bard sings by typing.",
  ],
  "Bandit Camp": [
    "Plays when visiting the Bandit Camp in the Kharidian Desert.",
  ],
  "Bandos Battalion": [
    "Plays in Bandos' Stronghold inside the God Wars Dungeon.",
    "Throughout the track renditions of different tracks are featured, such as the theme music of the Goblin Village and of Dorgeshuun City.",
  ],
  Bane: [
    "Plays during the fight with the Corporeal Beast.",
    "'Bane' is a variation of the RuneScape track 'Bane of Summer' from the 29th of July, in 2008.",
  ],
  "The Bane of Ashihama": [
    "Plays during the fight with The Nightmare. It also plays when spectating an ongoing fight.",
    nightmare,
  ],
  "Barb Wire": [
    "Plays inside the Ancient Cavern beneath Baxtorian Falls.",
    "Portions of Barbarianism can be heard in the track.",
    "To access the Ancient Cavern, the player needs to start the pyre ship section of Barbarian Training.",
  ],
  "Barbarian Workout": [
    "Plays while doing the Below Ice Mountain quest, during the training session with Atlas.",
    "The areas marked on the map are all the areas your character is shown in during the cutscene.",
  ],
  Barbarianism: [
    "Plays at Barbarian Village.",
    "This song is also notable for playing when you walk past the fishing spot in a free to play world and get scarred for life by public chat.",
  ],
  "Barking Mad": [
    "Plays in the Werewolf Agility Course and while playing Skullball.",
  ],
  Baroque: ["Plays in and around East Ardougne Market."],
  "Barren Land": ["Plays on the icy cliffs to the north of Weiss."],
  "Beetle Juice": [
    "Plays in the battle with the Giant Scarab under Sophanem during the Contact! quest. After the quest, The Depths will play in this area.",
  ],
  "Beneath Cursed Sands": [
    "Plays in the Tombs of Amascut, inside the Necropolis.",
    "It is a remix of Oncoming Foe, which playes during the final assault in Dragon Slayer 2",
  ],
  "Beneath the Kingdom": [
    "Plays upon entering the Catacombs of Kourend and Giants' Den.",
    "The music track was not released alongside the Catacombs of Kourend on 9th June 2016 - Arcane was played instead.",
    catacombs,
  ],
  "Beneath the Stronghold": [
    "Plays at the Stronghold Slayer Cave, inside the Gnome Stronghold.",
  ],
  Beyond: [
    "Plays in the White Wolf Tunnel, the Ice Queen's Lair under White Wolf Mountain, or the basement of the Warriors' Guild.",
    "This song is technically accessible from Keldagrim via minecart, but that transport method is banned.",
  ],
  "Beyond the Meadow": [
    "Plays in the western part of Hosidius, just south of the southern entrance to Kourend Castle. It can be heard around the Mess and Watson's house, and also around the Forthos Ruin and Saltpetre south of the river.",
  ],
  "Big Chords": [
    "Plays west of Yanille.",
    "This track has a rather slow and tranquil tune with strings, wind and piano. The melody is uplifting with high notes.",
  ],
  "Blistering Barnacles": [
    "Plays on Braindeath Island's mountain, during Rum Deal.",
  ],
  "Blood Rush": [
    "Plays when fighting Vardorvis during and after Desert Treasure II - The Fallen Empire.",
    "This song is the only song that shares a name with a sound effect, meaning originally the game had a bug where instead of playing the song, it would just play the sound effect on repeat.",
  ],
  Bloodbath: [
    "Plays at Slepe. It can also later be heard inside the True Blood Altar in the tunnels under Morytania.",
  ],
  "Bob's on Holiday": [
    "Plays during A Tail of Two Cats. It can be heard during the cutscene showing the various adventures of Bob and Neite.",
    "Valid answers include the Sophanem Pyramid, the King Black Dragon's Lair, and the Quest Icon in Burthorpe (for the scene parodying Titanic which has no specific location)",
  ],
  "Body Parts": [
    "Plays in the Experiment Cave under Fenkenstrain's Castle.",
    "Also accessible via the Mausoleum, which is only accessible from within the cave.",
  ],
  "Bolrie's Diary": [
    "Plays during the quest The Path of Glouphrie. It plays whilst viewing the cutscenes of King Bolrie's diary.",
    "The locations shown in the cutscene are the Gnome Stronghold, the ground floor of the Grand Tree, Brimstail's cave, and the Tree Gnome Village throne.",
  ],
  "Bone Dance": [
    "Plays on the western side of Mort'ton, or during Sins of the Father when fighting the Nail Beasts during the Temple Trek with Ivan Strom. It can also be heard on the island in the River Salve.",
    "It is possible, although difficult, to unlock the track during Sins of the Father. This would require the player to complete the Nature Spirit, In Search of the Myreque, In Aid of the Myreque, and A Taste of Hope quests without ever passing through the path left of Mort'ton, and by following an extremely specific route to the Nature Grotto. So far, no player is recorded as having accomplished this.",
  ],
  "Bone Dry": [
    "Plays in the Smoke Dungeon below Pollnivneach (not the Smoke Devil Dungeon).",
  ],
  "Book of Spells": ["Plays in the western part of Lumbridge Swamp."],
  Borderland: [
    "Plays east of Rellekka, outside the Keldagrim entrance, and in parts of the Polar Hunter area.",
  ],
  "Box of Delights": [
    "Plays during the fight with the Mimic, upstairs in Watson's house.",
    "This is often a player's last song to unlock in order to earn the Music Cape, as fighting the Mimic is only possible sporadically after compliting Elite and Master clue scrolls.",
  ],
  "Brain Battle": [
    "Plays during The Great Brain Robbery. It can be heard during the battle with Barrelchest.",
  ],
  Breeze: ["Plays at Isafdar near the Underground Pass."],
  "Brew Hoo Hoo!": ["Plays at the Port Phasmatys brewery basement."],
  "Brimstail's Scales": [
    "Plays in Brimstail's cave, in the south-west of the Gnome Stronghold.",
  ],
  "Bubble and Squeak": ["Plays at the Keldagrim Rat Pits.", ...keldagrim],
  "Bunny's Sugar Rush": [
    "Plays during the 2015 Easter event. It is unlocked by completing an Easter event.",
  ],
  "Burning Desire": [
    "Plays on Mount Karuulm.",
    "The music contains leitmotifs from TzHaar! and In the Pits. Mount Karuulm is inhabited by a trio of ancient Tzhaar that left the Karamja Volcano long ago.",
  ],
  "The Burning Sun": [
    "Plays during the Children of the Sun quest, when Prince Itzla Arkan personally interrogates the bandit planning to assasinate their delegation's priest.",
  ],
  "Cabin Fever": [
    "Plays during the Cabin Fever quest, and plays constantly during the naval battle.",
    "The exact location of the naval battle is unknown, as it takes place in an instanced bit of ocean.",
  ],
  "Cain's Tutorial": [
    "Plays during Barbarian Assault. It can be heard during the tutorial for the minigame presented by Captain Cain.",
    'If the player chose to skip the tutorial, the track can be obtained by selecting the "Getting Started" option from Cain\'s Tutorial menu.',
    "It is a remix of Barbarianism.",
  ],
  Camelot: [
    "Plays near Camelot Castle, or much more rarely in Tenzing's house. It can also be heard in the jail during King's Ransom after Merlin has been freed, and on Mac's island.",
    "Good luck unlocking it on Mac's island though.",
  ],
  "Castle Wars": [
    "Plays while playing Castle Wars.",
    'Prior to an update, the music track was named "Castlewars", and is still listed as such on the RuneScape: Original Soundtrack Classics album.',
  ],
  "Catacombs and Tombs": [
    "Plays during Land of the Goblins within the crypt in the Goblin Temple.",
  ],
  "Catch Me If You Can": [
    "Plays at the Ardougne Rat Pits. The Rat Pits are accessible through a trapdoor in Jimmy Dazzler's house, or though the main entrance to the western section fo the Ardougne Sewers.",
  ],
  "Cave Background": [
    "Plays throughout the Dwarven Mine. It can also be heard in the Magic axe room of Taverley Dungeon.",
    taverleyDungeon,
  ],
  "Cave of Beasts": [
    "Plays during Mountain Daughter, in the Kendal's cave north of the Mountain Camp.",
  ],
  "Cave of the Goblins": [
    "Plays in the Lumbridge Swamp Caves. It can also be heard during Another Slice of H.A.M., when visiting the Dorgesh-Kaan–Keldagrim train system from Dorgesh-Kaan while it is still under construction.",
    ...swampCaves,
  ],
  Cavern: [
    "Plays at the Yanille Agility Dungeon and the Deep Wilderness Dungeon.",
  ],
  "The Cellar Dwellers": [
    "Plays in the Ardougne west Sewers during Hazeel Cult, Elena's prison during Plague City, and the basement of the Carnillean Mansion.",
  ],
  "Cellar Song": ["Plays at the vault of the Varrock West Bank."],
  "Chain of Command": [
    "Plays in the Temple of Ikov. The entrance inside McGrubor's Wood requires a shiny key.",
  ],
  Chamber: [
    "Plays during the Haunted Mine quest, on Levels 4 and 5 of the Abandoned Mine.",
  ],
  "Chef Surprise": [
    "Plays during Recipe for Disaster upon following the Culinaromancer into the portal.",
    "Plucked strings are the accompaniment while a French horn has the melody. In the second phrase, the song changes key and a tenor sax takes the melody.",
  ],
  "Chickened Out": [
    "Plays during Recipe for Disaster: Freeing Sir Amik Varze. It is located in the Evil Chicken's Lair in Zanaris.",
    zanaris,
  ],
  "Children of the Sun": [
    "Plays during the Children of the Sun quest, when Prince Itzla Arkan's delegation from Varlamore arrives in the Varrock Square.",
  ],
  "Chompy Hunt": [
    "Plays at the chompy bird hunting location east of Feldip Hills. It can also be heard in Rantz's Cave.",
  ],
  "The Chosen": [
    "Plays during the Recruitment Drive quest, during the challenges. The location is in an instance not accessible outside of the quest, so the correct answer is the quest icon.",
  ],
  "City of the Dead": [
    "Plays north of Menaphos and in Sophanem before Contact! is completed, being replaced after the quest by Back to Life.",
  ],
  "Clan Wars": [
    "Plays in Clan Wars arenas. Upon entering any Clan Wars arena, either Warpath or this track is randomly chosen to start playing.",
  ],
  Clanliness: ["Plays upon entering a Clan Hall."],
  Claustrophobia: [
    "Plays during the Between a Rock... quest, within the Arzinian Mine inside Keldagrim.",
    ...keldagrim,
  ],
  "Close Quarters": [
    "Plays in the Eastern Ruins in level 26-29 Wilderness.",
    "The depressed percussion provides a backdrop for the bleak landscape.",
  ],
  Coil: [
    "Plays during the fight with Zulrah.",
    "Also plays when I'm on the bus to work.",
  ],
  "Colossus of the Deep": [
    "Plays when fighting the Leviathan during and after Desert Treasure II - The Fallen Empire.",
    "Accessible via the ladder in the Wizard's Tower.",
  ],
  Competition: ["Plays at the Burthorpe Games Room, under Burthorpe Castle."],
  Complication: [
    "Plays at the Chaos Altar.",
    "The Chaos Altar is accessible through its normal entrance in the Wilderness, or through the Tunnel of Chaos, under the statue east of Varrock, which is unlocked during What Lies Below.",
    "The Mage of Zamorak north of Edgeville would be a valid answer if accessing Runecraft altars through the Abyss was not a banned method of transport.",
  ],
  Confrontation: [
    "Plays during the quest A Kingdom Divided, when confronting Sophia Hughes during her attempt to escape to the mainland, before fighting the Judge of Yama.",
  ],
  "The Consortium": [
    "Plays during The Giant Dwarf. It can be heard during the final cutscene of the quest, when the Dwarven Consortium meets.",
    ...keldagrim,
  ],
  Conspiracy: [
    "Appears four separte times during the Vampire quest line. First while spying on Ranis Drakan and Vanstrom Klause on the walls of Ver Sinhaza during A Taste of Hope. Then in the basement of Serafina's house, in Meiyerditch.",
    "In Sins of the Father, it plays twice more. First when following Carl around Slepe, and again during the cutscene when Damien Leucurte is confronted upstairs in Crombwick Manor.",
  ],
  Contest: [
    "Plays at Dad's arena south of Trollheim and on the east edge of Death Plateau.",
  ],
  "Corporal Punishment": ["Plays during the Drill Demon random event."],
  "Corridors of Power": [
    "Plays in the eastern part of the Miscellania and Etceteria Dungeon.",
  ],
  "Country Jig": [
    "Plays south of Hosidius, at the Vinery, its basement and Tithe Farm.",
    "Previously, this song played north of Hosidius, around the flax fields. However, this meant that when walking south, you transitioned from a very somber song, to this very not somber song, and back to another very somber song. It was delightfully janky.",
  ],
  Courage: [
    "Plays at the entrance of Taverley Dungeon, in the basement of the Witch's House, and in the Heroes' Guild mine.",
    taverleyDungeon,
  ],
  "Creature Cruelty": [
    "Plays during the Tower of Life quest, on the upper floors of the Tower of Life after the Homunculus has been summoned. After the quest, Work Work Work will play here instead.",
  ],
  "Creeping Vines": [
    "Plays in the Hespori cave in the west wing of the Farming Guild. During the fight with the Hespori, A Thorn in My Side will play.",
  ],
  "Crest of a Wave": [
    "Plays during The Giant Dwarf and in Dragon Slayer, in both cases when taking a boat",
    "In The Giant Dwarf, it plays when you first sail to Keldagrim, before hitting the statue. In Dragon Slayer, it plays when sailing to Crandor before Elvarg attacks.",
    crandor,
    ...keldagrim,
  ],
  "Crystal Castle": ["Plays around Prifddinas but not inside the city walls."],
  "Crystal Cave": ["Plays on the east side of Zanaris.", zanaris],
  "Crystal Sword": [
    "Plays between Varrock and the Chaos Temple, after crossing the Wilderness ditch, as well as Ardougne's eastern sewers.",
    eastSewers,
  ],
  Cursed: [
    "Plays in the entrance of the Underground Pass dungeon, the Wrath Altar, and in the unmarked cave with the rabbit boss just north of the Gwenith Hunter area.",
    ...undergroundPass,
    "Amusingly, the wiki refuses to list where the rabbit boss actually is, because it's so secret. I had to go there in person to find out, and I was terrified.",
  ],
  "The Curtain Closes": [
    "Plays in Verzik Vitur's treasure vault after defeating her in the Theatre of Blood.",
    "The song begins with a wailing scream. This is a metaphor for when you do a wailing scream you produce after getting a 4th pair of Justiciar Legguards and nothing else.",
  ],
  "Dagannoth Dawn": [
    "Plays in the Waterbirth Island Dungeon. It plays in the deeper area in rooms 3-12, then again from room 15 to the end if the player goes past the entrance to the Dagannoth Kings.",
    waterbirth,
  ],
  "Dance of Death": [
    "Plays at the Sepulchre of Death in the Stronghold of Security, down the ladder in Barbarian Village.",
  ],
  "Dance of the Meilyr": [
    "Plays in Priffdinas. It is the theme of the Meilyr Clan.",
  ],
  "Dance of the Nylocas": [
    "Plays upon entering the Nylocas lair in the Theatre of Blood.",
  ],
  "Dance of the Undead": [
    "Plays above ground at Barrows and on the east edge of Mort'ton.",
  ],
  Dangerous: [
    "Plays in the Wilderness north of Edgeville, including the Mage of Zamorak and the air obelisk. It also plays deeper in the Wilderness, around Venenatis and the Escape Caves.",
  ],
  "A Dangerous Game": [
    "Plays in the Wilderness Slayer Cave. Prior to the release of this track, Revenants was played instead.",
  ],
  "Dangerous Road": ["Plays in Crandor and Karamja Dungeon."],
  "Dangerous Way": [
    "Plays in Barrows crypts and tunnels.",
    "The highlighted squares are the exact tiles that you can dig to end up in a crypt. I don't want to talk about it.",
  ],
  Dark: [
    "Plays north-east of the Wilderness Chaos Temple, including the black salamanders.",
    "The track is notable as it features four different short sections threaded together, with none of them repeated.",
  ],
  "The Dark Beast Sotetseg": [
    "Plays upon entering Sotetseg's room in the Theatre of Blood.",
  ],
  "Darkly Altared": [
    "Plays during the fight with Skotizo, beneath the Catacombs of Kourend.",
    catacombs,
  ],
  Darkmeyer: [
    "Do you really need my help with this one? Let's just skip to the trivia.",
    "Jagex got lazy and named the song after the city it's in. It plays everywhere in Darkmeyer except in the arboretum. In the arboretum, Aboretum plays. You can't make this stuff up.",
    "Also the song was ripped from the main game, it originally released in 2011, in the quest Branches of Darkmeyer. Release Reuse Recycle!",
  ],
  "Darkness in the Depths": [
    "Plays upon entering the Chasm of Fire, north-west of Shayzien.",
    "Four years after the release of this track, it would be remixed for Judgement of the Depths, which plays during the battle against the Judge of Yama.",
  ],
  "Davy Jones' Locker": [
    "Plays when diving off Port Khazard docks to the Mogre Camp. Initially unlocked during Pirate Pete's subquest of Recipe for Disaster.",
  ],
  "Dead Can Dance": [
    "Plays in and around the Graveyard of Shadows, which houses Calvar'ion just north of Ferox Enclave.",
  ],
  "Dead Quiet": [
    "Plays near the northern entrance of Mort Myre Swamp or at the shore east of the Digsite. It also plays while Temple Trekking, during the Bog puzzle, when battling the Swamp snakes, or during combat events with two escape routes.",
    "It is possible, but difficult, to unlock the track during Temple Trekking. The player must complete the Nature Spirit, In Search of the Myreque, and In Aid of the Myreque quests without ever passing through the north-western part of the Mort Myre Swamp.",
    "According to data crowdsourced via RuneLite, approximately 99.81% of players unlock the track in the swamp, 0.17% unlock it east of the Digsite, and 0.02% unlock it during Temple Trekking.",
  ],
  Deadlands: ["Plays in the Haunted Woods."],
  "Deep Down": [
    "Plays during the Haunted Mine quest, on Levels 2 and 3 of the Abandoned Mine. It can also be heard when attempting to enter Level 6 without a light source.",
  ],
  "Deep Wildy": [
    "Plays near the Chaos Temple or south of the Ice Plateau in the Wilderness.",
  ],
  Delrith: [
    "Plays during Demon Slayer in the cutscene where Delrith is summoned by the dark wizards, and during the subsequent battle.",
  ],
  "The Depths": [
    "Plays in the deeper levels of the Sophanem Dungeon. During the fight with the Giant Scarab, Beetle Juice will play here.",
  ],
  "Desert Heat": [
    "Plays in the Uzer Oasis, the Ancient Vault, and to the west of these areas.",
  ],
  "Desert Voyage": [
    "Plays around the Desert Mining Camp and the entrance to the Smoke Dungeon.",
  ],
  "The Desert": [
    "Plays in the Bedabin Camp and over to the east towards the Desert Mining Camp.",
  ],
  "The Desolate Isle": [
    "Plays on Waterbirth Island, or on Ungael.",
    "It is slow, but atmospheric, a metaphor for the feeling of procrastinating when farming Vorkath.",
  ],
  "The Desolate Mage": [
    "Plays at the summit of Mount Quidamortem, outside the entrance to the Chambers of Xeric.",
  ],
  "Devils May Care": [
    "Plays upon entering the Smoke Devil Dungeon, south of Castle Wars.",
    "This is one of many music tracks which Cecilia can ask you to play when completing a medium clue. A slayer task is not required to enter the cave, which is a good thing because otherwise that medium clue would have a 93 Slayer requirement.",
    "You can turn off the smoke by right clicking the cave entrance. That's not about the song, but I thought you'd want to know.",
  ],
  "Diango's Little Helpers": [
    "Plays at Diango's Workshop, which has so far been accessible during the 2013 Halloween event, the 2014 Christmas event, and the 2017 Christmas event.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Dies Irae": [
    "Plays in the Grim Reaper's house during the 2015 Halloween event.",
    'This is an arrangement based on "Dies Irae", which is a Gregorian chant song from around the 13th century.',
    'Dies Irae, translated from Latin, means "Day of Wrath".',
  ],
  "Dimension X": ["Plays in the Gorak Plane."],
  "Distant Land": [
    "Plays at Burgh de Rott and south of Barrows. The track is later heard at the start of Temple Trekking.",
    "It is very melancholic at times, using deep choir and strings to convey a sense of sadness. The song alternates between slower and faster parts.",
  ],
  "Distillery Hilarity": [
    "Plays at the Trouble Brewing lobby, and on the islands north of Mos Le'Harmless.",
  ],
  "Dogs of War": [
    "Plays on the first level of the Stronghold of Security, down the ladder in Barbarian Village.",
  ],
  Dogfight: [
    "Plays during The General's Shadow. It can be heard during the battle with the ghost of Bouncer inside the Goblin Cave.",
  ],
  "Domain of the Vampyres": [
    "Plays during the meeting between Vanstrom Klause, Ranis Drakan and Vanescula Drakan in the Darkness of Hallowvale.",
    "It later plays during the cutscene of the speech by Ranis Drakan during A Taste of Hope. The track also returns in Sins of the Father, when it plays during the cutscene with Vanescula Drakan at the Icyene Graveyard.",
    "It is based on Distant Land, which plays in Burgh de Rott.",
  ],
  "Don't Panic Zanik": [
    "Plays during Land of the Goblins, in the cutscene where Zanik disappears into the strange box.",
    "The track sounds like a softer, sadder version of Zanik's Theme.",
  ],
  "The Doors of Dinh": [
    "Plays at the Northern Tundras, at the Wintertodt Camp and area around the Settlement Ruins. It can also be heard at the Fishing Hamlet.",
  ],
  Doorways: [
    "Plays at the Jolly Boar Inn and the Varrock Lumberyard. It also plays on the Isle of Souls.",
  ],
  "Dorgeshuun City": ["Plays in Dorgesh-Kaan.", ...swampCaves],
  "Dorgeshuun Deep": ["Plays in Dorgesh-Kaan South Dungeon.", ...swampCaves],
  "Dorgeshuun Treaty": [
    "Plays during The Lost Tribe in the final cutscene when Duke Horacio and Ur-tag sign the peace treaty between Lumbridge and the Dorgeshuun, in the Lumbridge Castle dining room.",
  ],
  "Dot's Yuletide": ["Plays by completing future Christmas events.-->"],
  "Down and Out": [
    "Plays in the Lunar Isle mine, in a cave behind the crevice in the north wall, before helping Cyrisus get back up on his feet. After that point, On the Up will play in the same cave.",
  ],
  "Down Below": ["Plays in the Draynor Sewers."],
  "Down by the Docks": ["Plays in Port Piscarilius."],
  "Down to Earth": [
    "Plays at the Earth Altar.",
    "The backing strings of the track are notoriously (according to the wiki) remixed off of the closing section of Fruits de Mer, a more well-known piece of music from the game.",
  ],
  "The Dragon Slayer": [
    "Plays when fighting Galvek during Dragon Slayer II. The marked locations are the quest start point, representing the fight during the quest, and the Pool of Dreams, which lets you refight Galvek.",
  ],
  "Dragontooth Island": [
    "Plays by typing your password backwards in public chat. It just shows up as stars. See: ********",
  ],
  Dream: [
    "Plays on the path from Lumbridge to Draynor Village, past the H.A.M. hideout.",
  ],
  Dreamstate: ["Plays during the dream puzzles in Lunar Diplomacy."],
  "The Emir's Arena": [
    "Plays in the Emir's Arena. Formerly the Duel Arena. AKA the PVP arena. Wake me up when they stop calling it the PVP arena in-game. It's ruining my immersion!",
  ],
  "Dunes of Eternity": ["Plays at the Necropolis."],
  Dunjun: [
    "Plays in Taverley Dungeon after passing the Magic axe room or by entering the Crypt under the White Knights' Castle leading to Death's Office.",
    taverleyDungeon,
    "It probably wasn't meant to play in the crypt, but the two underground areas are right next to each other and there's some musical spillage from Taverley Dungeon.",
  ],
  "Dusk in Yu'biusk": [
    "Plays during Land of the Goblins, upon arriving in Yu'biusk.",
  ],
  "Dwarf Theme": [
    "Plays around the Dwarven Mine and on the path between Falador and the Barbarian Village.",
  ],
  "Dwarven Domain": ["Plays in Lovakengj."],
  Dynasty: ["Plays in Pollnivneach."],
  "Eagles' Peak": [
    "Plays around the Eagles' Peak mountain. Despite its hint stating that it is unlocked during the quest, players can unlock the track by being in the area without starting the Eagles' Peak quest.",
  ],
  "Easter Jig": [
    "Plays by completing future Easter events.",
    "It is a fast, whimsical banjo track. As the track progresses, more instruments and sounds begin to build up; the song becomes manic by the end before ending abruptly.",
  ],
  Egypt: [
    "Plays at the Shantay Pass and the areas surrounding the River Elid to the east.",
  ],
  "Elven Guardians": [
    "Plays in Prifddinas. It is the theme of the Cadarn Clan.",
  ],
  "Elven Mist": [
    "Plays at the Isafdar entrance to the Underground Pass. It can also be heard at the south of Arandar.",
  ],
  "Elven Seed": [
    "Plays in Gwenith. The track was originally released in RuneScape in 2009, playing during Within the Light.",
  ],
  Emotion: [
    "Plays at the Tree Gnome Village maze, and in the corrupted version of the Fisher Realm during the Holy Grail quest. It can also be heard in the Tree Gnome Village dungeon.",
  ],
  Emperor: ["Plays around (but not including) Melzar's Maze and to the south."],
  "The Enchanter": ["Plays in the Mage Training Arena's Enchanting Chamber."],
  "The Enclave": [
    "Plays in Ferox Enclave in the Wilderness. It can also be heard in the Ferox Enclave Dungeon.",
  ],
  Escape: ["Plays within the Witchaven Dungeon."],
  Espionage: [
    "Plays inside the Iceberg.",
    "I am deeply upset at the fact that I have no trivia for this song, because it's an absolute bop.",
  ],
  Etceteria: ["Plays in Etceteria and in the eastern parts of Miscellania."],
  "Eve's Epinette": [
    "Plays during the 2020 Halloween event, during Eve's arrival to Gielinor.",
  ],
  Everlasting: [
    "Plays during the fight with The Everlasting in the Dream Mentor quest.",
    "This track consists of slow chords while heartbeat-like percussion plays in the background.",
  ],
  "Everlasting Fire": [
    "Plays at the volcano in the north-east corner of the Wilderness.",
    "The song is structured around a series of short sequences of heavy drumbeats along to haunting background ambience. As the song progresses, instruments such as piano, brass and other drums build onto the song, creating a slow but steady rhythm of tense drums and scattered instruments that symbolise a volcano progressing through eruption.",
    "In modern music mode, this song plays all over the Wilderness, which is very sad given that it's a volcano song.",
  ],
  "The Everlasting Slumber": ["Plays in the Sisterhood Sanctuary.", nightmare],
  Everywhere: [
    "Plays north of Prifddinas, around the Gwenith Hunter area, and at Mynydd.",
    "This song used to be unlockable having only started Regicide, but it now requires full completion of Song of the Elves.",
  ],
  "Evil Bob's Island": ["Plays in Evil Bob's random event."],
  Expanse: [
    "Plays south of Varrock and in the Phoenix Gang Hideout.",
    "This track uses slow, legato violins and smoothly connected flute and brass melodies.",
  ],
  Expecting: [
    "Plays near the Ourania Altar or by falling through the swamp or from the rope swing in the Underground Pass.",
    ...undergroundPass,
  ],
  Expedition: [
    "Plays in the Observatory Dungeon and in the passage between the Troll arena and Trollheim.",
  ],
  Exposed: ["Plays south of Tyras Camp, and at the Island of Stone."],
  "Eye See You": [
    "Plays when fighting Duke Sucellus in the Ghorrock Dungeon under Weiss during and after Desert Treasure II - The Fallen Empire.",
  ],
  "Eye of the Storm": [
    "Plays during Dragon Slayer I. It can be heard during the cutscene when Elvarg attacks the Lady Lumbridge, while the player and Captain Ned are sailing to Crandor.",
    crandor,
  ],
  Faerie: ["Plays in western Zanaris and outside the Cosmic Altar.", zanaris],
  "The Fairy Dragon": [
    "Plays during Sir Amik Varze's subquest of Recipe for Disaster. It can be heard during the cutscene when meeting with K'klik, after rubbing the Dragon token.",
    "As this cutscene can be triggered by the player anywhere, and takes place on another plane, the quest start location is marked.",
  ],
  "Faith of the Hefin": [
    "Plays in Prifddinas. It is the theme of the Hefin Clan.",
  ],
  Faithless: [
    "Plays around the Chaos Temple and to the east in the Wilderness.",
  ],
  "The Fallen Empire": [
    "Plays during the quest Desert Treasure II. It plays inside the Lassar Undercity, accessible through the ruins of Camdozaal under Ice Mountain.",
  ],
  Fanfare: ["Plays in western Falador."],
  "Fanfare 2": [
    "Plays in the Karamja Ship Yard. The song has a cheerful sound, reminiscent of other Gnome-related music.",
  ],
  "Fanfare 3": ["Plays in Port Khazard."],
  "Fangs for the Memory": [
    "Plays during In Aid of the Myreque, when the player transports Ivan Strom through the Mort Myre swamp and fights the Vampyre Juvinates. The trapdoor to the Myreque hideout is marked, as this is how you get to the quest start point.",
    "It can later be heard during Darkness of Hallowvale, when Vanstrom Klause ambushes the player on Castle Drakan.",
    "It plays again during Sins of the Father, while fighting the Vampyre Juvinates when escorting Ivan back through the swamp. The quest start point in Slepe is marked.",
  ],
  "Far Away": ["Plays in Lletya."],
  "The Far Side": ["Plays in Rogues' Den, during the maze minigame."],
  "A Farmer's Grind": ["Plays in the west wing of the Farming Guild."],
  "The Fat Lady Sings": [
    "Plays during the fight with Lady Verzik Vitur in the Theatre of Blood. The vocals for Lady Verzik were done by Kate Smith.",
    "This track and It's not over 'til... are a reference to the phrase \"It ain't over till the fat lady sings\".",
  ],
  "Fe Fi Fo Fum": [
    "Plays during the fight with Glod in the Grim Tales quest.",
    '"Fe Fi Fo Fum" refers to the historical couplet used in Jack and the Beanstalk.',
  ],
  "Fear and Loathing": [
    "Plays in the fear room inside Tolna's Rift, during and after A Soul's Bane.",
  ],
  "Fenkenstrain's Refrain": [
    "Plays in northern Morytania, including Fenkenstrain's Castle and the old crone's house, east of the Slayer Tower.",
  ],
  "A Festive Party": [
    "Plays by completing future Christmas events.",
    "In Classic mode, the track also played outside Falador walls, replacing Arrival, Fanfare, Miles Away, Nightfall, Scape Soft, Wander and Workshop in total.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Fight of the Basilisk": [
    "Plays when fighting Typhor on the Isle of Stone during The Fremennik Exiles.",
    "In the next stage of the fight, Reign of the Basilisk will play in this cave, and after completing the quest, Lair of the Basilisk will play in the entire cave.",
    'The track was originally released on 1 April 2009, being played during the quest Glorious Memories in RuneScape. It was originally composed by Chris Jolley and was titled "Frost Fight".',
  ],
  "Fight or Flight": [
    "Plays in Mourner Tunnels near the Temple of Light.",
    ...mournerTunnels,
  ],
  "Find My Way": [
    "Plays in the southern Ape Atoll Dungeon, which you run through in Monkey Madness.",
  ],
  "Fire and Brimstone": [
    "Plays outside of the entrance to the TzHaar Fight Pit minigame.",
  ],
  "Fire in the Deep": [
    "Plays upon entering the lowest floor of the Chambers of Xeric, before fighting the Great Olm.",
  ],
  "The Fires of Lletya": [
    "Plays during the attack on Lletya in the Song of the Elves quest.",
  ],
  Fishing: [
    "Plays in Catherby and on the northern tip of Entrana.",
    "It focuses on a slow and steady piano melody that continues throughout the song, and also uses a guitar, flutes and organ. A unique feature is the sound of washing waves that plays in the beginning of the song, which fittingly makes the song mimic the sound of a calm beachside.",
  ],
  "Floating Free": [
    "Plays on Entrana when using the Balloon Transport System for the first time.",
  ],
  "Flute Salad": [
    "Plays around the Lumbridge Windmill and Fred the Farmer's house.",
  ],
  "Food for Thought": [
    "Plays in the Catacomb of Famine of the Stronghold of Security, down the ladder in Barbarian Village.",
  ],
  Forbidden: ["Plays near the Wilderness ditch, north of the Lumber Yard."],
  Forest: [
    "Plays west of Lletya, north of the Poison Waste and Zulrah's Shrine.",
  ],
  "The Forests of Shayzien": [
    "Plays in the forest around Shayzien, outside the city and the Shayzien Encampment.",
  ],
  Forever: ["Plays in Edgeville and the Edgeville Dungeon."],
  "Forgettable Melody": [
    "Plays in the abandoned mines east of Keldagrim during the Forgettable Tale... quest.",
    ...keldagrim,
  ],
  Forgotten: ["Plays in the temple basement under the Ruins of Uzer."],
  "A Forgotten Religion": [
    "Plays upon entering the Forthos Dungeon.",
    ...forthos,
  ],
  "The Forgotten Tomb": [
    "Plays during the Beneath Cursed Sands quest, in the tombs below Ruins of Ullek.",
  ],
  "The Forlorn Homestead": ["Plays in Hosidius."],
  "The Forsaken Tower": [
    "The Forsaken Tower plays in The Forsaken Tower during The Forsaken Tower. Hope that helps.",
  ],
  "The Forsaken": ["Plays in the Lithkren Vault during Dragon Slayer II."],
  Fossilised: [
    "Plays on Fossil Island, inside either Wyvern Cave.",
    "According to data crowdsourced via RuneLite, approximately 51% of players unlock the track in the northern task-only cave, while 49% unlock it in the southern cave.",
  ],
  "The Foundry": [
    "Plays inside the Giants' Foundry under Giant's Plateau, near Citharede Abbey.",
  ],
  "The Fragment": [
    "Plays during the final fight of the Song of the Elves quest against the Fragment of Seren, in the Temple of Light.",
    ...templeOfLight,
  ],
  "The Fremennik Kings": [
    "Plays during The Fremennik Isles. It can be heard when the player criticises King Gjuki Sorvott IV for his stubbornness and ignorance.",
    "It is a remix of Norse Code.",
  ],
  Frogland: [
    "Plays at any random event. Contrary to the unlock hint, it is not unlocked automatically.",
    "Plays during the Kiss the frog random event by ignoring the frogs that appear, or by talking to the frog princess or prince but refusing to kiss them.",
    "The track is a moderately fast paced song in the mode B♭ lydian. It has an overall bouncy feel that is contrasted by its chromatic chorus.",
    "The track begins with its bouncy bass line that persists throughout the first section of the song. A consistent beat is held by unpitched percussion. The melody is played on the clarinet.",
    "The chorus is much a juxtaposition to the verse; it features heavy use of the chromatic scale and switches from woodwind to string instruments as the feature. Plucked strings play a chromatic scale from D down to A♭ three times before going down the scale for the entire octave. This repeats, however, slightly more emphasised with a stronger dynamic.",
    "The original verse is repeated, this time with more musical embellishment. Blasts from a horn harmonise the melody, and scattered percussion may be heard. After this verse, a melody is played on the bassoon that mimics the original melody.",
  ],
  Frostbite: [
    "Plays at the Ice Path north of Trollheim.",
    "The main melody of this song starts on the harp; drums and slow strings make up the rhythm. Shortly into the song, bells take over for the melody temporarily before returning it to the harp; the bells continue playing as harmony. Near the middle of the piece, the mood temporarily changes from its original slow, soft feel to an eerie unresolved section.",
  ],
  "Fruits de Mer": ["Plays on the Fishing Platform."],
  "Ful to the Brim": [
    "Plays on the middle level of the Karuulm Slayer Dungeon, under Mount Karuulm.",
    'The "Ful" in the track\'s name is not a typo; rather, it refers to Ful, one of the Elder Gods from RuneScape.',
  ],
  "Funny Bunnies": ["Plays by completing future Easter events."],
  "The Galleon": [
    "Plays at the Pirates' Cove.",
    "This piece has an upbeat tempo and tune, prominently featuring a trading off melody between a brass choir and a flute solo. The Galleon also contains a snare drum heard throughout. This selection has a very different, adventurous tune in relation to the somber and mysterious tracks played in the rest of the Lunar Isle area.",
  ],
  Gaol: [
    "Plays either in Gu'Tanoth or in the Skavid caves. Prior to the track's removal from an area north of the Bandit Camp in the Wilderness in 2021, this track was accessible to free-to-play players.",
  ],
  Garden: [
    "Plays in the centre of Varrock and in the basement of the Blue Moon Inn.",
  ],
  "Garden of Autumn": [
    "Plays in the Autumn section of the Sorceress's Garden.",
  ],
  "Garden of Spring": [
    "Plays in the Spring section of the Sorceress's Garden.",
  ],
  "Garden of Summer": [
    "Plays in the Summer section of the Sorceress's Garden.",
  ],
  "Garden of Winter": [
    "Plays in the Winter section of the Sorceress's Garden.",
  ],
  "The Gates of Menaphos": [
    "Plays on the bridge between Menaphos os Sophanem, during the intro cutscene of Contact!, when the High Priest attempts to speak with the Menaphite guards. It is based upon Beetle Juice.",
  ],
  "The Gauntlet": ["Plays in the Gauntlet in Prifddinas."],
  "The Genie": ["Plays at the genie's cave west of Nardah."],
  "Getting Down to Business": [
    "Plays east of the Farming Guild, as well as around the small shack south of Mount Karuulm before partial completion of A Kingdom Divided, being replaced by Rose.",
  ],
  "Gill Bill": [
    "Plays on Molch Island.",
    "The track's name is a reference to the 2003 American film Kill Bill. However, the developer responsible for Aerial fishing was not called Bill.",
  ],
  "Gnome King": ["Plays in the Grand Tree."],
  "Gnome Village": [
    "Plays in and around the Gnome Stronghold Agility Course in the Tree Gnome Stronghold.",
  ],
  "Gnome Village 2": [
    "Plays in the south-west portion of the Tree Gnome Stronghold, and extends out to include the area south of Eagles' Peak.",
    "This track has a moderate tempo and plays between low and high notes. It uses a harp and flutes.",
  ],
  "Gnome Village Party": [
    "Plays during the 2013 Thanksgiving event. After the event ended, it now unlocks automatically.",
  ],
  Gnomeball: ["Plays in and around the Gnome Ball Field."],
  "Goblin Game": ["Plays in the Goblin Cave near the Fishing Guild."],
  "Goblin Village": [
    "Plays at the Goblin Village. It has a tribe-ish, simple tune to emphasise to primitiveness of the goblins. The track is quoted in several other music tracks, such as Bandos Battalion.",
  ],
  "Golden Touch": [
    "Plays at the Alchemist's Playground in the Mage Training Arena.",
  ],
  "The Golem": [
    "Plays at the Ruins of Uzer and the Orange salamander hunting site.",
  ],
  Greatness: ["Plays near the Champions' Guild."],
  "Grimly Fiendish": [
    "Plays by completing future Halloween events.",
    "The track was originally released on 22 October 2007, being played during the 2007 Halloween event in RuneScape.",
    'It may be a reference to English gothic punk band The Damned\'s 1985 song "Grimly Fiendish".',
  ],
  "Grip of the Talon": [
    "Plays during the fight with Agrith Naar during Shadow of the Storm. Outside of this battle, Throne of the Demon plays in this area.",
  ],
  Grotto: ["Plays at the Nature Spirit's grotto in Mort Myre Swamp."],
  "Grow Grow Grow": ["Plays in the north wing of the Farming Guild."],
  Grumpy: [
    "Plays in the Corsair Cove Dungeon west of Corsair Cove. It also plays near the swamp toad ponds in the Feldip Hills.",
    "Corsair Cove Dungeon is also accessible from the Myth's Guild basement, by crossing the bridge to the east.",
  ],
  "Guardians of the Rift": [
    "Plays during the main phase of Guardians of the Rift and in the Temple of the Eye quest.",
  ],
  "The Guardians Prepare": [
    "Plays during the initial prep phase of Guardians of the Rift, and in the Temple of the Eye quest.",
  ],
  "H.A.M. and Seek": [
    "Plays while sneaking past the guards in the H.A.M. hideout during the Another Slice of H.A.M. quest.",
    "It is a pun on the popular children's game, Hide-and-Seek.",
  ],
  "H.A.M. Attack": [
    "Plays during the Another Slice of H.A.M. quest during the assault on Goblin Village.",
  ],
  "H.A.M. Fisted": [
    "Plays in the H.A.M. Storerooms inside the H.A.M. hideout during the Death to the Dorgeshuun quest.",
    "This track is similar to Monster Melee except it has typical swing variation with characteristic blues tones and 6/8 tempo. It uses a pizziccato violin section, a drumset, percussion, a double bass, and a bassoon.",
  ],
  Harmony: [
    "Plays in the starting chunk, containing Lumbridge Castle, Lumbridge Church, and the Lumbridge goblins.",
  ],
  "Harmony 2": [
    "Plays in the cellar of Lumbridge Castle. It also plays in the Lumbridge watermill after Death to the Dorgeshuun.",
    "The Lumbridge castle cellar is also accessible through the Lumbridge Swamp Caves.",
  ],
  "Haunted Mine": [
    "Plays near Treus Dayth, on level 6 of the Abandoned Mine during the Haunted Mine quest.",
  ],
  "Have a Blast": ["Plays at Blast Furnace.", ...keldagrim],
  "Have an Ice Day": ["Plays at the Iceberg."],
  "Head to Head": ["Plays during the Evil twin random event."],
  "Healin' Feelin'": [
    "Plays during the quest The Path of Glouphrie. It plays whilst healing Incomitatus (the Spirit Tree).",
  ],
  "Heart and Mind": [
    "Plays inside the Body Altar, which is south of the Edgeville Monastery.",
  ],
  "Hells Bells": ["Plays while sledding down Trollweiss Mountain."],
  Hermit: ["Plays in Saba's cave during the Death Plateau quest."],
  "High Seas": ["Plays in Brimhaven."],
  "High Spirits": ["Plays by completing future Halloween events."],
  "His Faithful Servants": [
    "Plays during the final battle of Desert Treasure II - The Fallen Empire",
    "It is based on the unlisted music track in RuneScape 3 that plays when fighting the Barrows Brothers",
  ],
  "Hoe Down": ["Plays in the south-eastern portion of Farming Guild."],
  "Home Sweet Home": [
    "Plays in any Player-owned house. It also plays during Daddy's Home, in the cutscene which shows the basics of Construction.",
  ],
  Horizon: ["Plays in Taverley, or during the Bee keeper random event."],
  "The Houses of Kourend": [
    "Plays during the quest A Kingdom Divided, in which the five houses of Great Kourend are gathered to inform them about the revelations the player has discovered. However, the track plays in Xeric's Lookout basement only during both cutscenes occurring there, as The Militia plays there otherwise.",
  ],
  Hypnotised: [
    "Plays at Klenter's Pyramid only while hypnotised during Icthlarin's Little Helper. When the pyramid is revisited later, Mirage will play instead.",
  ],
  Iban: ["Plays in Iban's lair.", ...undergroundPass],
  "Ice and Fire": [
    "Plays during the battle against Wintertodt.",
    "The name of this song is a reference to the popular fantasy novel series A Song of Ice and Fire. This is one of the many references to the series that can be found in the Wintertodt area.",
  ],
  "Ice Melody": ["Plays in and around White Wolf Mountain."],
  Illusive: [
    "Plays during the fight with The Illusive in the Dream Mentor quest.",
    "The track was temporarily available to free-to-play players, as it was reused for the 2021 Halloween event.",
  ],
  Impetuous: [
    "Plays at Puro-Puro, which is accessible Zanaris.",
    zanaris,
    "Another version of this track, Impulses, plays when the player is standing nearby a wheat field with a portal to Puro-Puro open.",
  ],
  Impulses: [
    "Plays during Impetuous Impulses. It can be heard when standing near an active Crop circle.",
    "It is a remix of Impetuous.",
  ],
  "In Between": [
    "Plays in the Arzinian Mine inside Keldagrim. The mine is visited during the Between a Rock... quest, however, it must be revisited after the quest to unlock this track.",
    ...keldagrim,
  ],
  "In the Brine": ["Plays on Mos Le'Harmless after the Cabin Fever quest."],
  "In the Clink": ["Plays during the Prison Pete random event."],
  "In the Manor": [
    "Plays south of Yanille.",
    "The song is very short, and has a lively and uplifting brass melody with a heavy marching drumbeat.",
  ],
  "In the Pits": ["Plays in the outer, freely-accessible area of Mor Ul Rek."],
  "In the Shadows": [
    "Plays during the quest Secrets of the North, upon fighting the assassin inside Ghorrock Dungeon under Weiss. It also plays in the quest Desert Treasure II - The Fallen Empire, during the Ghorrock Prison segment when fighting Jhallan.",
    "The track was originally released in the RuneScape quest Perils of Ice Mountain in 2008",
  ],
  Inadequacy: [
    "Plays during the fight with The Inadequacy in the Dream Mentor quest.",
  ],
  Incantation: [
    "Plays under Uzer during Shadow of the Storm in the cutscene showing the summoning of Agrith Naar. The track temporarily replaces The Golem, Forgotten, and Throne of the Demon when Agrith Naar is not yet slain.",
  ],
  Inferno: [
    "Plays inside the Inferno and inside TzHaar-Ket-Rak's Challenges (1-6 Jads).",
  ],
  "Insect Queen": [
    "Plays in the Kalphite lair and the task-only Kalphite cave.",
    "The Kalphite lair is technically accessible from many places without going above ground, as there is a crack in the wall which takes you to Dorgesh-Kaan South Dungeon.",
    "If all transport methods were allowed, Kalphite Queen would be accessible from Lumbridge Castle, Eastern Falador, every Fairy Ring, and Crandor, among other places.",
  ],
  Inspiration: [
    "Plays in north-east of the Black Knights' Fortress in the Wilderness.",
  ],
  "Into the Abyss": [
    "Plays in the Abyss and the Abyssal Nexus, accessible via the Mage of Zamorak in the Wilderness.",
  ],
  "Into the Tombs": [
    "Plays in the Tombs of Amascut inside the Necropolis.",
    "During the first weeks of its release, until 11 October 2022, the track could be heard in the Main Menu instead of Scape Main.",
  ],
  Intrepid: [
    "Plays in lower floor of Iban's lair inside the Underground Pass.",
    ...undergroundPass,
  ],
  Invader: [
    "Plays at the Abyssal Sire's chamber in the Abyssal Nexus, accessible via the Mage of Zamorak in the Wilderness.",
    "In this track, Mod Ash takes inspiration from the Space Invaders music motif, and has arranged it in an orchestral or classical way.",
  ],
  "Iorwerth's Lament": [
    "Plays in Prifddinas. It is the theme of the Iorwerth Clan.",
  ],
  "Island Life": [
    "Plays in the south of Ape Atoll.",
    "It has a steady tempo starting out with staccato quarter note 60s organs. It begins in the key of A and its melody starts off with a mix between a piano and a marimba. Shortly after, an Oboe joins in as a countermelody.",
  ],
  "Island of the Trolls": [
    "Plays north of Neitiznot and Jatizso, where the Ice Trolls are.",
  ],
  "Isle of Everywhere": ["Plays on the east coast of Lunar Isle."],
  "It's not over 'til...": [
    "Plays during upon entering Lady Verzik Vitur's room in the Theatre of Blood. The vocals for Lady Verzik were done by Kate Smith.",
    'This track and The Fat Lady Sings are a reference to the phrase "It ain\'t over till the fat lady sings".',
  ],
  "Itsy Bitsy...": [
    "Plays inside the Morytania Spider Nest, which is accessed during A Night at the Theatre.",
    "The track was originally released on 26 October 2009, as part of the 2009 Halloween event in RuneScape.",
  ],
  "Jaws of the Basilisk": [
    "Plays during the basilisk invasion in The Fremennik Exiles quest.",
    'The track was originally released on 15 December 2009, being played during the quest Blood Runs Deep in RuneScape. It was originally titled "Jaws of the Dagannoth", being renamed to fit the theme of the quest as both tracks are played during similar scenes.',
  ],
  "Jaws of Gluttony": [
    "Plays during the fight with Zebak in the Tombs of Amascut, in the Necropolis.",
  ],
  "Jester Minute": [
    "Plays during The Fremennik Isles when entertaining Mawnis Burowgar on Neitiznot.",
  ],
  "Jolly R": ["Plays on the north dock in Brimhaven."],
  "Joy of the Hunt": [
    "Plays at the Piscatoris Hunter area and around the Kraken Cove.",
  ],
  "Judgement of the Depths": [
    "Plays during the quest A Kingdom Divided in the battle with the Judge of Yama.",
    "The track is a faster, more intense version of Darkness in the Depths, which plays in the Chasm of Fire. The Chasm of Fire houses a variety of demons, and the Judge of Yama itself is a demon.",
  ],
  "Jungle Bells": [
    "Plays by completing future Christmas events.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
    'The song plays at a relatively moderate tempo, with a very low pitched beat resonating in the background. The bell sounds seem somewhat discordant, as to entail the general mis-happenings that tend to occur around Christmas events. It keeps in theme with RuneScape-styled jungle tunes. The melody is essentially "Jingle Bells" played in a minor key.',
  ],
  "Jungle Hunt": [
    "Plays at the Feldip Hunter area, or the Jungle eagle's cave.",
    eaglesTransport,
  ],
  "Jungle Island": [
    "Plays around the Karamja Volcano and in the middle of the Kharazi Jungle.",
  ],
  "Jungle Island Xmas": [
    "Plays by completing future Christmas events.",
    "It also played during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Jungle Troubles": [
    "Plays in the jungle north-east of Tai Bwo Wannai near the crashed gnome glider.",
  ],
  "Jungly 1": [
    "Plays at Cairn Isle or west of Shilo Village. It can also heard in the Tomb of Bervirius under Cairn Isle.",
    'It is the first track in the series of three "Jungly" music tracks.',
  ],
  "Jungly 2": [
    "Plays to the north-west of Brimhaven, at the entrance to the Fisher Realm.",
    'It is the second track in the series of three "Jungly" music tracks.',
    "This music track has the usual bongos playing in the background, and a rather unique keyboard melody played in the beginning. After the softer melody in the beginning, the music evolves into the music similar to the rest of the Karamjan music tracks.",
  ],
  "Jungly 3": [
    "Plays south of Tai Bwo Wannai.",
    'It is the third track in the series of three "Jungly" music tracks.',
  ],
  "Kanon of Kahlith": [
    "Plays on the upper level of the Karuulm Slayer Dungeon, under Mount Karuulm.",
  ],
  "Karamja Jam": [
    "Plays in Brimhaven Dungeon, in the areas with red dragons, black demons, or metal dragons.",
  ],
  "King of the Trolls": [
    "Plays during The Fremennik Isles. It can be heard during the battle that takes places in the Ice Troll Caves.",
  ],
  Kingdom: ["Plays around the Warriors' Guild."],
  Knightly: [
    "Plays in the centre of Ardougne. It can also be heard in the Ardougne city prison during Song of the Elves.",
    "The song has a steady march tempo, and an organ in the first phrase. A flute joins with a counter-melody in the second phrase. The song then fades out steadily with a French horn.",
  ],
  Knightmare: [
    "Plays at the Black Knights' Fortress. It is also played during the escape from Keep Le Faye during the King's Ransom quest.",
    'The name of the song is a pun on the word "nightmare".',
    "Along with Lore and Order, it was the last music track to be added to the game before the creation of the August 2007 Archive of RuneScape.",
  ],
  "Kourend the Magnificent": [
    "Plays upon arriving to Great Kourend. It mainly plays in The Legless Faun, Kingstown and Kourend Castle. The lyrics can be found by reading the inscription on the pillar in the centre of the courtyard.",
  ],
  "La Mort": ["Plays at the Death Altar.", ...templeOfLight],
  Labyrinth: ["Plays in the Sophanem Dungeon."],
  Lagoon: ["Plays on Fossil Island when diving underwater."],
  "Laid to Rest": [
    "Plays in Osmumten's burial chamber within the Tombs of Amascut in the Necropolis.",
  ],
  Lair: ["Plays at the Shade Catacombs beneath Mort'ton."],
  "Lair of the Basilisk": [
    "Plays upon entering the Jormungand's Prison during The Fremennik Exiles quest. It also plays in the prison after the quest. During different stages of the fights during the quest, this song will be replaced with both Fight of the Basilisk and Reign of the Basilisk.",
    'The track was originally released on 1 April 2009, being played during the quest Glorious Memories in RuneScape. It was originally composed by Chris Jolley and was titled "Lair of Kang Admi".',
  ],
  Lament: ["Plays in Enakhra's Temple during the Enakhra's Lament quest."],
  "Lament for the Hallowed": [
    "Plays during the quest Sins of the Father. It plays upon arriving at the Icyene Graveyard, and can later be heard during the ending cutscene.",
    "The track was originally released on 14 September 2015, being played during the quest The Lord of Vampyrium in RuneScape.",
  ],
  "Lament of Meiyerditch": [
    "Plays in the city of Meiyerditch in sectors one through four. It can also be heard in the Meiyerditch mine, laboratory, Myreque hideout, and the basement of Old Man Ral's house. During the fight with the abomination, this track is replaced with Bait.",
  ],
  "Land Down Under": [
    "Plays in the western part of the Miscellania and Etceteria Dungeon.",
  ],
  "Land of Snow": [
    "The Land of Snow is a plane of existence different than Gielinor. It was the setting of the 2017 Christmas event. Players could teleport to the event by speaking to the Wise Old Man or using the Wise old man's teleport tablet.",
    "It is the land in which Santa lives and is inhabited by Snow Sprites.",
  ],
  "Land of the Dwarves": [
    "Plays in west Keldagrim. It also plays in a small house by the river at the Keldagrim mines.",
    ...keldagrim,
  ],
  Landlubber: ["Plays west of Brimhaven."],
  "Last King of the Yarasa": [
    "Plays during the fight with the Xarpus in the Theatre of Blood.",
    'This track starts off with a sample from "Bach\'s Violin Concerto in A Minor" (A classical piece), then transitions to "Spider Attack" from the Rayman 2 game. For the section beginning approximately 2 minutes and 27 seconds in, a sample of "The Chase" from Rayman 2 is used. ',
  ],
  "Last Man Standing": ["Plays in the Last Man Standing minigame."],
  "The Last Shanty": ["Plays in southern Meiyerditch."],
  "Last Stand": [
    "Plays during the battle against the Sea Troll Queen during Swan Song. Outside of this fight, Making Waves plays in this area.",
  ],
  Lasting: ["Plays at Hemenster and the Ranging Guild."],
  "Lava is Mine": ["Plays on Fossil Island at the Volcanic Mine."],
  Legend: [
    "Plays in the south-east corner of Rellekka and outside the Fremennik Slayer Dungeon.",
  ],
  Legion: [
    "Plays at Barbarian Outpost. It can also be heard underneath the Barbarian Agility Course and the lobby of Barbarian Assault.",
  ],
  "Life's a Beach!": ["Plays in central Mos Le'Harmless."],
  Lighthouse: ["Plays at the Lighthouse north of the Barbarian Outpost."],
  Lightness: [
    "Plays around Goblin Village and on the south-west slope of Ice Mountain.",
  ],
  Lightwalk: ["Plays at Keep Le Faye and western Catherby."],
  "Little Cave of Horrors": ["Plays in the Mos Le'Harmless Cave."],
  Lonesome: [
    "Plays in the mines under the Desert Mining Camp during The Tourist Trap quest.",
  ],
  "Long Ago": [
    "Plays on Hazelmere's island south-east of Yanille.",
    "The song is peaceful and relaxing, using ocean wave sounds and a lighthearted piano.",
  ],
  "Long Way Home": ["Plays in Rimmington."],
  "The Longramble Scramble": [
    "Plays during the quest The Path of Glouphrie. It plays upon arriving at the Galarpos Mountains, where Longramble is.",
  ],
  "Look to the Stars": [
    "Plays during the Observatory Quest. It can be heard during the cutscene when the player and the Observatory professor first arrive at the Observatory.",
  ],
  "Looking Back": ["Plays at the Varrock Museum and its basement."],
  "Lore and Order": [
    "Plays in the Seers' Village Courthouse.",
    "It is a remix of the well-known track Knightly. There are only very few differences between the songs, with Lore and Order using most of Knightly's chords and sections.",
    "The title is a play on the phrase law and order.",
    "Along with Knightmare, it was the last music track to be added to the game before the creation of the August 2007 Archive of RuneScape.",
  ],
  "The Lost Melody": ["Plays at the Dorgesh-Kaan mine.", ...swampCaves],
  "Lost Soul": ["Plays near the Poison Waste in Tirannwn."],
  "The Lost Tribe": [
    "Plays in the tunnels leading to the Dorgesh-Kaan mine.",
    ...swampCaves,
  ],
  "Lower Depths": [
    "Plays in the second level of the Chambers of Xeric or in the Quidamortem Cave during Tale of the Righteous.",
    "According to data crowdsourced via RuneLite, approximately 64% of players unlock the track in the Quidamortem Cave, while 36% unlock it in the Chambers of Xeric.",
  ],
  "Lucid Dream": [
    "Plays in the Dream World during Dragon Slayer II.",
    "The melody is a slower version of Lucid Nightmare, wihch plays when fighting Robert the Strong.",
  ],
  "Lucid Nightmare": [
    "Plays when fighting Robert the Strong during Dragon Slayer II.",
    "The melody is a faster version of Lucid Dream.",
  ],
  Lullaby: [
    "Plays on the path to Rellekka and in the Digsite.",
    "The music track is slow, melodic, and sounds somewhat like a lullaby. This song also includes a flute, brass, percussion (such as a snare drum), and a grand piano as well as the choir that sings a repeated theme while each instrument group introduces their own unique sound as the song progresses.",
  ],
  Lumbering: ["Plays in Weiss, as well as its prison."],
  "The Lunar Isle": ["Plays on the western half of the Lunar Isle."],
  "Mad Eadgar": ["Plays in Eadgar's cave on top of Trollheim."],
  "The Mad Mole": ["Plays in the Giant Mole's lair under Falador Park."],
  "Mage Arena": ["Plays around the Mage Arena and in its bank."],
  "Magic Dance": [
    "Plays in east Yanille.",
    "It is a slow and peaceful track. This track has a very similar chord progression to Sea Shanty.",
  ],
  "Magic Magic Magic": [
    "Plays during the Tower of Life quest, on the upper floors of the Tower of Life. After the quest, Work Work Work will play here instead. This track has a sadder version, Creature Cruelty, which plays on the top floor of the tower when the Homunculus is locked up in the cage.",
  ],
  "Magical Journey": [
    "Plays at the Sorcerer's Tower and in the area to the north-east which contains the Seers' Village flax fields and Sherlock.",
  ],
  "The Maiden's Anger": [
    "Plays during the fight with the The Maiden of Sugadinti in the Theatre of Blood.",
  ],
  "The Maiden's Sorrow": [
    "Plays upon entering The Maiden of Sugadinti's room in the Theatre of Blood.",
    "The track can also be heard during the ending cutscene of A Taste of Hope in Ver Sinhaza.",
  ],
  "Major Miner": ["Plays in the Jatizso mine."],
  "Making Waves": [
    "Plays in the Piscatoris Fishing Colony and in the area to the south. During the fight with the Sea Troll Queen, Last Stand plays instead.",
  ],
  Malady: [
    "Plays in the Pit of Pestilence in the Stronghold of Security, down the ladder in Barbarian Village.",
  ],
  March: ["Plays at King Lathas's Combat Training Camp."],
  "March of the Shayzien": [
    "Plays at the Shayziens' Wall, Lizardman Settlement, or Lizardman Canyon. It can also be heard in the Lizardman Caves.",
  ],
  Marooned: [
    "Plays on Crash Island. It can later be heard during the underground area of Crash Island during King Awowogei's subquest in Recipe for Disaster.",
  ],
  Marzipan: [
    "Plays in the tunnel to Keldagrim, in the Troll Stronghold, and in the ice cave that leads to Trollweiss Mountain.",
    "A variation of the track featuring more percussion plays at the start of My Arm's Big Adventure.",
    ...keldagrim,
  ],
  Masquerade: ["Plays in the Fremennik Slayer Dungeon in the Basilisk room."],
  "Master of Puppets": [
    "Plays during the Desert Treasure II - The Fallen Empire, in the cutscene where the player enters the lower level of the Ancient Vault, after the track Tick Tock.",
    "The track is based on music track The Price is Wight from RuneScape.",
  ],
  Mastermindless: [
    "Plays upstairs in the Wizard's Tower while freeing the Lumbridge Guide during Recipe for Disaster.",
  ],
  Mausoleum: ["Plays underneath Paterdomus."],
  "Maws Jaws & Claws": ["Plays at Cerberus' Lair.", taverleyDungeon],
  "The Maze": [
    "Plays inside Melzar's Maze during Dragon Slayer and in the Karamjan Temple during Dragon Slayer II.",
  ],
  "Meddling Kids": [
    "Plays during a cutscene in Royal Trouble, when the player finds the lost teenagers in the Miscellania and Etceteria Dungeon.",
  ],
  Medieval: [
    "Plays east of Varrock",
    "This track uses a harpsichord playing waltz triplets in a slow, droning manner. The flute and oboe quickly come in and share a melodic part, and are then replaced briefly by a harp. It is somewhat of a slow, walking-tempo song. Also, the keyboard is slightly used in parts of the song as well as slight notions of guitar strums.",
  ],
  Mellow: ["Plays at the Fishing Guild."],
  Melodrama: [
    "Plays in the Castle Wars lobby.",
    "It begins with a simple strings tune that plays during the entire song. Synthesizers bring an additional background tune. Flutes, percussion and other instruments begin playing the similar soft melody while also giving energy to the track's overall theme.",
  ],
  Meridian: ["Plays near Tyras Camp."],
  "Method of Madness": [
    "Plays in the confusion room in Tolna's Rift during A Soul's Bane.",
    "The track features irregular chord changes and odd sound effects. The track also contains a false ending, in which the track fades out slowly with a mysterious choir, only for the main riff to abruptly come back in again after a few seconds before it finishes for real.",
  ],
  "Miles Away": [
    "Plays at the Crafting Guild and in the Fisher Realm after partial completion of Holy Grail quest.",
  ],
  "Military Life": ["Plays in the Shayzien Encampment north of Shayzien."],
  "The Militia": ["Plays in Shayzien"],
  "Mind over Matter": [
    "Plays at the Telekinetic Theatre in the Mage Training Arena.",
  ],
  "Miracle Dance": ["Plays at the Mind Altar."],
  Mirage: [
    "Plays in Klenter's Pyramid after you are free from the hypnosis of Amascut in Icthlarin's Little Helper.",
  ],
  Miscellania: ["Plays in Miscellania and on the Penguin Island."],
  "The Mollusc Menace": ["Plays in Witchaven."],
  "Monarch Waltz": ["Plays at Sinclair Mansion."],
  "Monkey Badness": [
    "Plays during the final boss fight with Glough in Monkey Madness II.",
    "The marked areas indicate the Crash Site, where Glough is originally fought, and the Burning Brazier, which lets you refight Glough after the quest.",
  ],
  "Monkey Business": [
    "Plays during the fight with Kruk in Monkey Madness II.",
    "It can later be heard in the Crash Site Cavern after the quest.",
  ],
  "Monkey Madness": [
    "Plays in Marim.",
    "It can later be heard at the airship platform during Monkey Madness II, which has no known location, meaning that the quest icon inside the Grand Tree is also marked as a correct answer.",
  ],
  "Monkey Sadness": [
    "Plays in Glough's laboratory during Monkey Madness II. It can later be heard there when hunting Maniacal monkeys.",
  ],
  "Monkey Trouble": ["Plays in Kruk's Dungeon during Monkey Madness II."],
  "Monster Melee": ["Plays in the H.A.M. hideout."],
  "The Monsters Below": ["Plays under Waterbirth Island.", waterbirth],
  Moody: [
    "Plays east of Ferox Enclave and at the Deserted Keep in Deep Wilderness.",
  ],
  "Mor Ul Rek": [
    "Plays in the inner city of Mor Ul Rek.",
    "Unlocking this music track requires the player to show a fire cape to a TzHaar-Ket guarding the entrance to the inner city.",
    "Alternatively, completing the Elite tier of the Combat Achievements will allow the player to teleport directly to Mor Ul Rek with Ghommal's Hilt. This does not require completing the Fight Caves.",
  ],
  "More Than Meets the Eye": [
    "Plays during the fight with Phantom Muspah inside Ghorrock Dungeon under Weiss. Also plays during Secrets of the North when fighting the Strange Creature.",
  ],
  Morytania: [
    "Plays when you get on the path to Paterdomus and the entrance to Morytania.",
  ],
  "Morytanian Mystery": [
    "Plays during the cutscene in which the player is knocked out by shadowy figures during the quest Darkness of Hallowvale. It can also be heard during Sins of the Father, in the cutscene showing the meeting between Damien Leucurte and the werewolves.",
    "It is based upon The Last Shanty.",
  ],
  "A Mother's Curse": [
    "Plays during the fight with Kephri in the Tombs of Amascut in the Necropolis.",
  ],
  "Mother Ruckus": [
    "Plays during the fight with Mother in Weiss during Making Friends with My Arm.",
  ],
  "Mouse Trap": [
    "Plays in the Mouse Hole during Grim Tales.",
    "Parts of the track are based on the nursery rhyme Three Blind Mice.",
  ],
  "Mudskipper Melody": [
    "Plays at Mudskipper Point.",
    "It has a simple drum beat undertone, with a low wind instrument and an airy flute playing the melody.",
  ],
  "Museum Medley": [
    "Plays in the Old School Museum found in the basement of the Falador Party Room.",
    "At 11 minutes and 10 seconds, it is the longest music track in Old School RuneScape.",
    "It is a medley of various iconic music tracks, such as Newbie Melody, Autumn Voyage, Barbarianism, Harmony and Sea Shanty 2.",
  ],
  "Mutant Medley": [
    "Plays in Creature Creation, in the basement of the Tower of Life.",
  ],
  "My Arm's Journey": [
    "Plays on the boat during My Arm's Big Adventure. It is a remixed and prolonged version of the jingle that is heard when taking a boat.",
    "It can also be heard during Making Friends with My Arm when sailing to Weiss.",
    "In both cases, there is no way to know where the boat is when the cutscenes are happening. Therefore the 3 entrances to the Troll Stronghold are highlighted instead, as both quests start inside.",
  ],
  "Mystics of Nature": [
    "Plays in Prifddinas and in the lobby of The Gauntlet. It is the theme of the Amlodd Clan.",
  ],
  Mythical: [
    "Plays in the Myths' Guild after completion of Dragon Slayer II. It also plays in the Myths' Guild basement.",
    "For some unknown reason, the track plays when standing on two specific tiles in the Myths' Guild basement. It would be possible to unlock the track here by completing Dragon Slayer II, then travelling through the Corsair Cove Dungeon.",
  ],
  "Narnode's Theme": ["Plays in the cave under the Grand Tree."],
  Natural: [
    "Plays in the south-west corner of Mort Myre Swamp, including the Nature Grotto. It can also be heard on the island in the River Salve, or during Temple Trekking in combat events with one escape route.",
  ],
  "The Navigator": [
    "Plays in Swensen the Navigator's puzzle under his house during The Fremennik Trials.",
  ],
  "Nether Realm": [
    "Plays at the Brimhaven Dungeon, in the room west of the main metal dragon area.",
  ],
  Neverland: [
    "Plays at the entrance to the Tree Gnome Stronghold, and at the Outpost.",
  ],
  "Newbie Farming": ["Plays south of the Farming Guild."],
  "Newbie Melody": [
    "Plays on Tutorial Island. This is the first track that all new players will hear.",
  ],
  "Night of the Vampyre": [
    "Plays at Castle Drakan.",
    "It also plays in a small area north-west of Barrows.",
  ],
  Nightfall: [
    "Plays outside Falador city walls, at the Falador Farm, Crafting Guild, and the Dark Wizards' Tower. In this area, the music player will also shuffle between playing Long Way Home and Miles Away.",
    "In Classic mode, the track plays north of Rimmington.",
  ],
  "The Nightmare Continues": [
    "Plays during the fight with the Pestilent Bloat in the Theatre of Blood.",
    "The Nightmare Continues is one of two music tracks that share name with a RuneScape music track, but being completely unrelated. The other being Sands of Time.",
  ],
  "No Pasaran": [
    "Plays during the defence of the dwarven camp in the Underground Pass during the Song of the Elves quest.",
    '"¡No pasarán!" translates to "they shall not pass" in Spanish. This phrase was used as a battle cry most famously by anti-Francoist forces during Spanish Civil War.',
    ...undergroundPass,
  ],
  "No Way Out": [
    "Plays in the hopelessness room in Tolna's Rift during A Soul's Bane.",
  ],
  "The Noble Rodent": [
    "Plays during the fight between the player's cat and the King rat during the Ratcatchers quest.",
    "Of the two Rat Kings in Varrock, this one would probably lose in a 1v1.",
  ],
  Nomad: [
    "Nomad is a music track that plays in the Ruins of Unkah.",
    "It previously played in Tai Bwo Wannai village",
  ],
  "Norse Code": [
    "Plays on Jatizso.",
    "The track's name hints that the song actually contains a secret Morse Code message. The high-pitched flute plays the word 'RuneScape' on repeat throughout the song.",
  ],
  "Not a Moment of Relief": [
    "Plays north of Arceuus, around the dense essence mine and the Blood Altar.",
  ],
  "Nox Irae": [
    "Plays by completing future Halloween events.",
    "Nox Irae means the night of wrath in Latin.",
    "The melody of Nox Irae is based on a Gregorian chant, Dies Irae.",
  ],
  "Null and Void": ["Plays at Pest Control, on the Void Knights' Outpost."],
  "Ogre the Top": ["Plays in the Ice Troll Caves."],
  "Oh Rats!": [
    "Plays while fighting the boss Scurrius in Varrock Sewers.",
    ...varrockSewers,
  ],
  "The Old Ones": [
    "Plays during The Garden of Death. It plays in various dungeons visited during the quest: Near the start point of the quest, Beneath Molch Island, Beneath Xeric's Shrine, and Beneath the Ruins of Morra.",
  ],
  "On the Frontline": [
    "Plays at the Battlefront west of Great Kourend.",
    "This song is notorious (to me) for being way too loud all of a sudden while you walk around Zeah.",
  ],
  "On the Shore": ["Plays at Corsair Cove."],
  "On the Up": [
    "Plays during the Dream Mentor quest in the Lunar Isle mine after helping Cyrisus get back up on his feet. Before that point, Down and Out will play in the same cave.",
  ],
  "On the Wing": [
    "Plays when visiting the Falconer at the Piscatoris Hunter Area, or the Enchanted Valley.",
  ],
  "On Thin Ice": [
    "Plays when fighting Vorkath during and after Dragon Slayer II.",
  ],
  "Oncoming Foe": [
    "Plays during the fourth phase of the naval assault during Dragon Slayer II, when several metal dragons are fought.",
    "As the exact location of the cutscene is not known, the quest start icon is marked instead.",
  ],
  "Organ Music 1": [
    "Plays automatically. It can be heard when playing a Church organ in Lumbridge, Seers' Village, Entrana, Tutorial Island, or Paterdomus.",
  ],
  "Organ Music 2": [
    "Plays automatically. It can be heard when playing a church organ in Lumbridge, Seers' Village, Entrana, Tutorial Island, or Paterdomus.",
  ],
  Oriental: [
    "Plays in the top floor of the temple of Ah Za Rhoon under Karamja, which is visited during the Shilo Village quest.",
  ],
  "The Other Side": ["Plays at Port Phasmatys and around the Ectofuntus."],
  "Out at the Mines": [
    "Plays north-west of Lovakengj, inside the Blast Mine, the Lovakite mine, and the Sulphur mine.",
  ],
  "Out of the Deep": [
    "Plays at the dagannoth cave under the Lighthouse.",
    "The cave is also accessible from Waterbirth Island, by running all the way through Waterbirth Island Dungeon and out the other side.",
  ],
  "Over to Nardah": ["Plays in Nardah."],
  Overpass: ["Plays on the Arandar pass."],
  Overture: ["Plays in Seers' Village."],
  Parade: [
    "Plays at Silvarea, on the road from Varrock to Paterdomus temple and Morytania.",
  ],
  "The Part Where You Die": [
    "Plays during the quest A Kingdom Divided in the boss fight against Xamphur, under Molch.",
    "The name of this song may be a reference to Portal 2, which contains a chapter and song humourously titled The Part Where He Kills You.",
  ],
  "Path of Peril": [
    "Plays at the Shadow Dungeon, down the ladder west of the Fishing Guild.",
  ],
  "The Penguin Bards": [
    "Plays during Cold War. It can be heard during the musical performances of Ping and Pong in the Iceberg.",
  ],
  "Penguin Plots": [
    "Plays during Cold War. It can be heard during the cutscenes when witnessing the Penguin handshake, and when Pescaling Pax describes the penguin plans for world domination.",
    "It is a remix of Espionage.",
    "Jagex if you're reading this, please continue the Penguin quest line. It's amazing.",
    "In hindsight, this was not a good place to submit my request.",
  ],
  Pathways: ["Plays just inside the northern entrance to Brimhaven Dungeon."],
  "Pest Control": [
    "Plays while playing the Pest Control minigame, or during the first part of the naval assault in Dragon Slayer II.",
    "As it's impossible to pinpoint the exact location of the naval assault, the Dragon Slayer II quest icon is a valid answer.",
  ],
  "Pharaoh's Tomb": ["Plays in the Agility Pyramid."],
  "The Pharaoh": [
    "Plays during the ending cutscene of Beneath Cursed Sands, when Pharaoh Kemesis makes an appearance",
  ],
  Phasmatys: ["Plays at the ectoplasm under the Ectofuntus."],
  "Pheasant Peasant": ["Plays in the Freaky Forester random event."],
  "Pick & Shovel": ["Plays at the Motherlode Mine."],
  "Pinball Wizard": [
    "Plays during the Pinball random event.",
    "The music starts with a slowly built dominant seventh chord. The excited mood of the track is seen in the composition with use of synthetic electric guitar.",
  ],
  "Pirates of Penance": ["Plays during the final wave of Barbarian Assault."],
  "Pirates of Peril": ["Plays in the area around the Pirates' Hideout."],
  "Plots and Plans": [
    "Plays during the Children of the Sun quest, when following the mysterious Varrock guard and meeting with the bandits.",
    "A large area is marked as the song technically plays in the whole area, but in practice if you stray too far from the path then you will fail and have to restart.",
  ],
  "Poles Apart": [
    "Plays in the Rellekka Hunter area, and in the Polar eagle's cave.",
    eaglesTransport,
  ],
  "The Power of Tears": [
    "Plays while collecting the Tears of Guthix in the Lumbridge Swamp Caves.",
    ...swampCaves,
  ],
  "Power of the Shadow Realm": [
    "Plays during the fight with the Sotetseg in the Theatre of Blood.",
  ],
  "Predator Xarpus": [
    "Plays upon entering Xarpus's room in the Theatre of Blood.",
  ],
  Preservation: ["Plays in the north-western parts of Fossil Island."],
  Preserved: [
    "Plays near the Fossil Island Volcano, in the southern half of the Tar Swamp, and on Lithkren.",
    "According to data crowdsourced via RuneLite, approximately 71% of players unlock the track at the Volcano, 18% unlock it on Lithkren, and 11% unlock it in the Tar Swamp.",
    "The 18% who unlock it on Lithkren should be shamed for not doing their Birdhouse runs.",
  ],
  "Prime Time": [
    "Plays in the Elemental Workshop II and plays on the second floor of the Elemental Workshop and in the mind room.",
  ],
  Principality: [
    "Plays in Burthorpe.",
    "On Members servers, this track also plays in a single square north-west of the Asgarnia Chaos Temple, on the free-to-play side of the wall. However, this square has been made unwalkable in free-to-play servers, presumably to stop free-to-play players from unlocking this music track. This is similar to the westernmost tiles in Crandor being blocked due to Fruits de Mer playing there.",
  ],
  "Prison Break": [
    "Plays in Ghorrock Prison during and after Desert Treasure II.",
    "The track appears to be based on RuneScape 3's Dungeoneering music, specifically the tracks for the frozen floors.",
  ],
  Quest: [
    "Plays in the Fire Altar.",
    "I have no idea why it's called Quest. They really used that song name early in the world possible place.",
  ],
  "The Quizmaster": ["Plays at the Quiz Master random event."],
  "Race Against the Clock": [
    "Plays in the Camdozaal Vault under Ice Mountain.",
    "The music track takes exactly one minute to match the allotted time in the Camdozaal Vault, while the remaining 26 seconds are silent.",
    "If you just listened to 26 seconds of Silence thinking that the game was bugged, I hope you remember next time.",
  ],
  "Rat a Tat Tat": ["Plays by entering the Varrock Rat Pits."],
  "Rat Hunt": [
    "Plays at the Ratcatchers Mansion during the Ratcatchers quest.",
    "Since the Mansion does not exist anywhere on the map, the quest icon in Gertrude's house is marked instead.",
  ],
  "Ready for Battle": ["Plays in the Castle Wars waiting room."],
  Regal: ["Plays at the Rogues' Castle."],
  "Regal Pomp": [
    "Plays during Kandur Hosidius's coronation ceremony cutscene in A Kingdom Divided.",
  ],
  Reggae: ["Plays in the south-east of the Kharazi Jungle."],
  "Reggae 2": ["Plays in the Karamjan Jungle west of the Ship Yard."],
  "Reign of the Basilisk": [
    "Plays when fighting The Jormungand during The Fremennik Exiles quest. In the previous stage of the fight, in the fight with Typhor, Fight of the Basilisk played in this cave, and after completing the quest, Lair of the Basilisk will play in the entire cave.",
    "This track is a rock remix of Ballad of the Basilisk, transposed down from G Minor to D Minor.",
  ],
  Relics: [
    "Plays in the laboratory in Elvarg's lair, and is later heard in the Lithkren Vault and the laboratory below Ungael.",
  ],
  Rellekka: ["Plays in Rellekka..."],
  "Rest in Peace": [
    "Plays when visiting Death's Office, accessible near major respawn points.",
    "Rest in Peace starts off as a subdued funerary march, with a plucked bass playing a somber accompaniment in a simple duple meter. Soon the melody enters in the form of a nylon string guitar playing a set of variatons around a descending tetrachord in A minor – a musical form typical for a lament.",
    "The following section provides a moment of intense contrast as the string ensemble enters in an agitated tempo, which the melody answers with an anguished phrase. This overtly tormented expression briskly fades away, and the initial subdued melody returns.",
    "According to Bridges, the sorrowful mood of the music piece reflects the days he spent at his father's deathbed, who passed away some years prior to its composition:",
    `"The track 'Rest in Peace', played in Death's Office, mostly reflects the mostly placid but ultimately hopeless time I spent in the hospital during my Dad's final week."`,
  ],
  Revenants: [
    "Plays in the Revenant Caves.",
    "The track also could be heard in the Wilderness Slayer Cave for the first two weeks of its release. This was replaced with A Dangerous Game on 5 November 2020.",
  ],
  Rhapsody: [
    "Plays within the Clan Hall by using the Background-music option on the piano.",
    "It is based on the RuneScape song Love Story, from the quest of the same name, both created by Rhapsody's composer, Mod Ash.",
  ],
  "Right on Track": [
    "Plays during the minecart puzzle in Forgettable Tale of a Drunken Dwarf.",
    ...keldagrim,
  ],
  Righteousness: ["Plays inside the Law Altar on Entrana."],
  "Rising Damp": ["Plays in the Brine Rat Cavern during Olaf's Quest."],
  Riverside: ["Plays to the west of Tyras Camp."],
  "Roc and Roll": [
    "Plays during My Arm's Big Adventure while fighting the giant roc. Outside this battle, Sojourn plays here instead.",
  ],
  "The Rogues' Den": ["Plays in the Rogues' Den."],
  "Roll the Bones": [
    "Plays in the Creature Graveyard in the Mage Training Arena.",
  ],
  "Romancing the Crone": ["Plays at the top of Trollweiss Mountain."],
  "Romper Chomper": ["Plays at the ogre area just south of Castle Wars."],
  "Roots and Flutes": [
    "Plays during the fight with Bryophyta in Varrock Sewers.",
    ...varrockSewers,
  ],
  Rose: [
    "Plays during the quest A Kingdom Divided, when the player discovers Rose in the basement of the shack at the base of Mount Karuulm, and is also played during her funeral and around the shack afterwards.",
  ],
  Royale: [
    "Plays in the Black Knights' base in the Taverley Dungeon.",
    taverleyDungeon,
  ],
  "Rugged Terrain": [
    "Plays at several locations throughout Great Kourend, specifically: between Kourend Castle and Shayzien/Lovakengj, the path leading to The Forsaken Tower, the path south of the Lizardman Settlement leading to Mount Quidamortem, and next to the Jellies in the Catacombs of Kourend.",
  ],
  "The Ruins of Camdozaal": [
    "Plays in the Ruins of Camdozaal, after the completion of Below Ice Mountain.",
    "The track was originally released on 29 September 2008, being played during the quest Defender of Varrock in RuneScape. It was originally composed by Adam Bond, but was recomposed by Julian Surma for Old School RuneScape.",
  ],
  "Ruins of Isolation": ["Plays at the Ruins of Ullek."],
  "Rune Essence": [
    "Plays at the Rune Essence mine.",
    "The NPCs that can teleport you to the rune essence mine are highlighted.",
  ],
  "Sad Meadow": ["Plays in West Ardougne during the Plague City quest."],
  "Safety in Numbers": [
    "Plays in the Sourhog Cave east of Draynor Manor.",
    "The track was originally released on 11 March 2008, being played in the Stronghold of Player Safety in RuneScape.",
  ],
  Saga: ["Plays south of Rellekka."],
  "Sands of Time": [
    "Plays during the fight with Akkha in the Tombs of Amascut in the Necropolis.",
    "Sands of Time is one of two music tracks that share name with a RuneScape music track, but being completely unrelated. The other being The Nightmare Continues.",
  ],
  Sarachnis: [
    "Plays during the fight with Sarachnis in Forthos Dungeon.",
    forthos,
  ],
  Sarcophagus: ["Plays inside the Ancient Pyramid."],
  "Sarim's Vermin": [
    "Plays when speaking to Felkrash at the end of the Ratcatchers quest. It can later be heard at the Port Sarim rat pits.",
  ],
  "Scape Ape": [
    "Played upon logging into Old School RuneScape during the release of Monkey Madness II.",
  ],
  "Scape Cave": [
    "Plays on the cave on Tutorial Island, making it the second track heard by all new players. It can also be heard in Varrock Sewers and parts of Edgeville Dungeon, as well as the basement of the Woodcutting Guild.",
  ],
  "Scape Crystal": [
    "Played on the login screen with the release of the Song of the Elves quest and Prifddinas.",
  ],
  "Scape Five": [
    "Played during the 2018 Birthday event in the Main Menu instead of Scape Main.",
  ],
  "Scape Ground": [
    "Played on the login screen with the release of the Farming skill.",
  ],
  "Scape Home": [
    "Unlocked automatically.",
    'Musically, the track resembles a fusion of Scape Main, the main theme of RuneScape, and Home Sweet Home, the song played in player owned houses, hence the name "Scape Home".',
  ],
  "Scape Hunter": ["Unlocked automatically when Hunter was released."],
  "Scape Main": [
    "Plays during the naval assault in Dragon Slayer II. Is also the main theme of the game, but the only place it autoplays is in Dragon Slayer II.",
    "The exact location of the naval battle is unknown, as it takes place in an instanced bit of ocean.",
  ],
  "Scape Original": [
    "Unlocked automatically by all players upon their first login. It was also the track that played in the Realm of Memories during the 20th Anniversary event.",
  ],
  "Scape Sad": [
    "Plays at the Fountain of Rune and at the Demonic Ruins in the Wilderness, or during the ending cutscene of Dragon Slayer II in Burthorpe.",
    "😭",
  ],
  "Scape Santa": ["Plays on the login screen when Christmas events are out."],
  "Scape Scared": [
    "Plays while logging in to RuneScape during a Halloween event.",
  ],
  "Scape Soft": ["Plays just north of Falador."],
  "Scape Wild": [
    "Plays north of the Chaos Temple in the Wilderness, and north of Lava Dragon Isle.",
  ],
  "Scar Tissue": [
    "Plays inside the Scar during and after Desert Treasure II, accessed through the portal to the Temple of the Eye under the Wizard's Tower.",
    "At the start of this track, the tubular bell melody quotes Into the Abyss.",
  ],
  Scarab: [
    "Plays around the Ancient Pyramid, Bandit Camp Quarry, and around the Ruins of Unkah but not inside.",
  ],
  "School's Out": [
    "Plays during the Surprise Exam.",
    "This song's name is a reference to the song by Alice Cooper, however the actual music does not bear any resemblance to it.",
  ],
  "Scorpia Dances": [
    "Plays in Scorpia's cave beneath the Scorpion Pit in the Wilderness.",
  ],
  "Scrubfoot's Descent": [
    "Played during the 2020 Christmas event, in Scrubfoot's cave, and during the 2022 Christmas event in The Nutcracker pub grounds.",
  ],
  "Sea Minor Shanty": ["Unlocked by completing future Halloween events."],
  "Sea Shanty": ["Plays around Musa Point and its docks."],
  "Sea Shanty 2": [
    "Plays in Port Sarim, the docks west of Prifddinas, and on Tempoross Cove after defeating Tempoross.",
    "The track has become arguably one of the most iconic tracks in Old School RuneScape.",
  ],
  "Sea Shanty Xmas": ["Unlocked by completing future Christmas events."],
  "Secrets of the North": [
    "Plays in Ghorrock Dungeon under Weiss.",
    'The track was originally released on 21 April 2009, being played during the quest The Tale of the Muspah in RuneScape. It was originally titled "The Muspah\'s Tomb".',
  ],
  "The Seed of Crwys": [
    "Plays in Prifddinas. It is the theme of the Crwys Clan.",
  ],
  Serenade: ["Plays at the Observatory."],
  Serene: ["Plays in the Air Altar."],
  "Servants of Strife": [
    "Plays in Molch and in the Lizardman Temple under Molch.",
  ],
  Settlement: ["Plays around the Mountain Camp."],
  "The Shadow": [
    "Plays on Crandor. Since 2021, it requires partial completion of Dragon Slayer I to unlock.",
    "The music track begins with slow strings and a choir to build tension before creating a crescendo featuring a harp and several brass instruments.",
  ],
  Shadowland: [
    "Plays in Mort'ton and the entrance of the Abandoned Mine. It can later be heard when visiting Mort'ton during Temple Trekking.",
  ],
  "Sharp End of the Crystal": [
    "Plays in the Iorwerth Dungeon under Prifddinas.",
  ],
  "Shattered Relics": [
    "Played during the opening cinematic of Shattered Relics League.",
  ],
  Shine: [
    "Plays north of the Emir's Arena, in and around the Mage Training Arena.",
  ],
  Shining: [
    "Plays in the Bone Yard north-east of the Graveyard of Shadows in the Wilderness, at the Wilderness Agility Course, and in its dungeon.",
  ],
  "Shining Spirit": [
    "Plays at the Corporeal Beast's lair.",
    "This track has an eerie yet magical appeal to it. One of the prominent features is its 'music box' like tune played through most of the song. The music grows louder and stronger towards the end of the track, before returning to its signature melody.",
  ],
  Shipwrecked: ["Plays at the shipwreck on the northern coast of Morytania."],
  Showdown: [
    "Plays in the boss fight at the end of Monkey Madness I.",
    "This boss fight has no specific location on the map, as the player can teleport to it from anywhere. Therefore the quest icon is marked instead.",
  ],
  "Sigmund's Showdown": [
    "Plays in the Lumbridge water mill, during the battle with Sigmund in Death to the Dorgeshuun.",
    "The Lumbridge water mill basement is accessible from the swamp caves after the quest, but not during the quest.",
  ],
  "The Sinclairs": [
    "Plays during King's Ransom. It can be heard during the cutscene when the player spies on the Sinclairs, revealing that Anna and David have betrayed the player.",
  ],
  "The Slayer": ["Plays at the entrance cave to the Fremennik Slayer Dungeon."],
  "Slice of Silent Movie": [
    "Plays during the battle with Sigmund in Another Slice of H.A.M.",
    ...swampCaves,
    'The name comes from the cliché during old silent movies where a hero would have to defeat a villain while the female was tied to the train tracks to be run over. The female, in this case, is Zanik; and the villain, Sigmund. The "Slice of" is taken from the name of the quest: Another Slice of H.A.M..',
  ],
  "Slice of Station": [
    "Plays at the Dorgesh-Kaan Keldagrim train system after the completion of Another Slice of H.A.M.",
    "The track mimics the sound of a moving train, with a horn and the train travelling over tracks.",
    keldagrim[0],
    swampCaves[0],
  ],
  "Slither and Thither": [
    "Plays in the Giant Sea Snake lair during Royal Trouble, in the Miscellania and Etceteria Dungeon.",
  ],
  "Slug a Bug Ball": ["Plays in Mother Mallum's lair under Witchaven."],
  "Snowflake & My Arm": [
    "Plays during the ending cutscene of Making Friends with My Arm. At 1 minute and 17 seconds, it is the shortest listed music track in Old School RuneScape.",
  ],
  Sojourn: [
    "Plays without having completed any quests, on the eastern side of the Mountain Camp.",
    "During the fight with the Giant Roc, Roc and Roll plays on the plateau with My Arm instead.",
  ],
  "Song of the Elves": [
    "Plays during the Song of the Elves quest, in the Grand Library.",
    "The Grand Library has no location on the world map, so the quest icon is marked instead.",
  ],
  "Song of the Silent Choir": [
    "Plays when fighting The Whisperer during and after Desert Treasure II - The Fallen Empire, under Ice Mountain.",
    "The track's title refers to the Silent Choir cult dedicated to worshipping a strange totem within the Lassar Undercity.",
    "Although it's quiet, this track uses Verzik Vitur's voice on MIDI channel 11.",
  ],
  "Sorceress's Garden": [
    "Plays at the Sorceress's Garden. It can be heard in the centre of the garden near the fountain.",
  ],
  "Soul Fall": [
    "Plays upon reaching the Soul Altar in the northern part of Arceuus.",
  ],
  "Soul Wars": ["Plays during a game of Soul Wars."],
  Soundscape: ["Plays at the Feldip Hills glider area and south of Gu'Tanoth."],
  Sphinx: ["Plays north and east of Sophanem."],
  Spirit: ["Plays in western Varrock."],
  "Spirits of the Elid": [
    "Plays during the Spirits of the Elid quest, inside the waterfall at the source of the River Elid.",
  ],
  Splendour: [
    "Plays between Taverley and Burthorpe, and at the Chaos Temple.",
    "The opening tune is played by harp and synthesizers are introduced. The harp's tune is slightly more upbeat than the synthesizers although most of the instruments stay at a high pitch. At a different part a piano will play a melody before returning to the harp and violins, slowly fading out and finishing.",
  ],
  Spooky: ["Plays at Draynor Manor or during the Gravedigger random event."],
  "Spooky 2": [
    "Plays in the Haunted Mine quest on the first level of the Abandoned Mine. It also plays in the bar basement in Burgh de Rott and in the Isle of Souls Dungeon.",
  ],
  "Spooky Jungle": [
    "Plays in the south-west of the Kharazi Jungle, in Rashiliyia's Tomb, and during cutscenes in Tai Bwo Wannai Trio when Tamayu fights The Shaikahan.",
  ],
  "The Spurned Demon": ["Plays while fighting Zalcano in Prifddinas."],
  "The Spymaster": [
    "Plays during the cutscene in Contact!, when Osman sneaks into Sophanem. It is based upon City of the Dead. It is also played when encountering Osman in Beneath Cursed Sands.",
    "The music track was extended in length from 1 minute and 3 seconds to 2 minutes and 33 seconds.",
  ],
  Stagnant: [
    "Plays in the south-east of Mort Myre Swamp or at The Hollows. ",
    "It can also be heard while Temple Trekking, during the River puzzle or in combat events with no escape routes. The track also plays during Sins of the Father, when escorting Ivan Strom past the River puzzle.",
  ],
  "Stand Up and Be Counted": [
    "Plays during the Battle of West Ardougne in the Song of the Elves quest.",
  ],
  Starlight: ["Plays in the Asgarnian Ice Dungeon."],
  Start: ["Plays in northern Draynor Village."],
  "Still Night": ["Plays around the mining area to the south-east of Varrock."],
  Stillness: [
    "Plays in the Myreque Hideout south of Canifis. It also plays in Daeyalt essence mine under Darkmeyer.",
  ],
  "Storeroom Shuffle": [
    "Plays during the quest The Path of Glouphrie. It plays upon arriving in the storeroom within the Tree Gnome Village Dungeon.",
  ],
  "Storm Brew": ["Plays in the Killerwatt plane."],
  Stranded: [
    "Plays at the start of the Ice Path, or near the God Wars Dungeon. It also plays when looking into a mystical mirror during Desert Treasure I.",
  ],
  "Strange Place": [
    "Plays during A Tail of Two Cats in the cutscene showing the battle at the Dragonkin Castle.",
    "As the Dragonkin Castle has no known location on the map, the quest icon is marked instead.",
  ],
  Strangled: [
    "Plays inside the Stranglewood during and after Desert Treasure II.",
  ],
  Stratosphere: [
    "Plays at the Cosmic Altar in Zanaris.",
    zanaris,
    "The use of synthesized sounds, particularly the pad sounds and the sharp notes, resembles stars and the moving astronomical debris present inside the altar.",
  ],
  "Strength of Saradomin": [
    "Plays at Saradomin's Encampment inside the God Wars Dungeon.",
  ],
  "Stuck in the Mire": ["Plays in the Kebos Swamp."],
  Subterranea: ["Plays in the Waterbirth Island Dungeon and Crabclaw Caves."],
  Sunburn: ["Plays north of the Ancient Pyramid and west of Nardah."],
  Superstition: [
    "Plays inside the top floor of the Viyeldi Caves under the Kharazi Jungle, or in the Tower of Magic prison during Tale of the Righteous.",
    "As the player is teleported to the prison, the quest icon is marked instead.",
  ],
  "Surok's Theme": [
    "Plays during What Lies Below. It can be heard during the battle with King Roald.",
  ],
  Suspicious: [
    "Plays during cutscenes in Monkey Madness I.",
    "One cutscene takes place at the Karamja Shipyard, while the other happens at an unknown location under Ape Atoll, meaning the quest icon is also marked.",
  ],
  "Tale of Keldagrim": ["Plays in east Keldagrim.", ...keldagrim],
  "Talking Forest": ["Plays at McGrubor's Wood."],
  "Tarn Razorlor": [
    "Plays during the Lair of Tarn Razorlor in the final battle with mutant Tarn, inside the Abandoned Mine.",
  ],
  "A Taste of Hope": [
    "Plays during the final fight with Ranis Drakan during the quest A Taste of Hope.",
  ],
  "Tears of Guthix": [
    "Plays in the Chasm of Tears, accessible from the Lumbridge Swamp Caves.",
    ...swampCaves,
  ],
  Technology: [
    "Plays in the gnome glider hangar in Tree Gnome Stronghold, accessed by talking to Daero upstairs in the Grand Tree.",
  ],
  Tempest: [
    "Plays during the fight with the Grotesque Guardians who are found on the Slayer Tower's rooftop.",
  ],
  Temple: [
    "Plays in Temple of Marimbo dungeon, and in the cavern containing the M'amulet mould.",
  ],
  "Temple of Light": ["Plays in the Temple of Light.", ...templeOfLight],
  "Temple of the Eye": [
    "Plays inside the Guardians of the Rift lobby and before the prep phase of the minigame.",
  ],
  "Temple of Tribes": [
    "Plays during Land of the Goblins, within the Goblin Temple.",
    "It is a slower version of the track Goblin Village with added bass drums and other sound effects to give a creepy temple feeling.",
  ],
  "Tempor of the Storm": ["Plays while fighting Tempoross in Tempoross Cove."],
  "The Terrible Caverns": [
    "Plays during Sins of the Father in the fight with the Mutated Bloodveld in the Meiyerditch Laboratories with Safalaan. It is a more up-tempo version of The Terrible Tower, the song that plays in the Slayer Tower.",
  ],
  "The Terrible Tower": [
    "Plays in the Slayer Tower. It can also be heard in the Slayer Tower basement.",
  ],
  "The Terrible Tunnels": [
    "Plays when exploring the Meiyerditch Laboratories with Safalaan during Sins of the Father, and in the Laboratories after the quest.",
  ],
  "Terrorbird Tussle": [
    "Plays during the quest The Path of Glouphrie. It plays upon fighting the Warped Terrorbirds in the Poison Waste Dungeon.",
  ],
  "Test of Companionship": [
    "Plays in the Path of Apmeken within the Tombs of Amascut in the Necropolis.",
  ],
  "Test of Isolation": [
    "Plays in the Path of Scabaras within the Tombs of Amascut in the Necropolis.",
  ],
  "Test of Resourcefulness": [
    "Plays in the Path of Crondis within the Tombs of Amascut in the Necropolis.",
  ],
  "Test of Strength": [
    "Plays in the Path of Het within the Tombs of Amascut in the Necropolis.",
  ],
  "That Sullen Hall": [
    "Plays at Cerberus's Lair in Taverley Dungeon.",
    taverleyDungeon,
    "The title is a reference to the Wilfred Owen poem Strange Meeting.",
  ],
  Theme: [
    "Plays at the Seers' Village Coal Trucks, or in the Waterfall Dungeon.",
  ],
  "A Thorn in My Side": [
    "Plays during the fight with the player-grown hespori at the Farming Guild and when fighting the wild hespori during A Night at the Theatre.",
    "When not fighting the Hespori, Creeping Vines plays in the Farming Guild cave and Stagnant on the Morytania island.",
  ],
  "Thrall of the Devourer": [
    "Plays during the Beneath Cursed Sands quest. It plays during the fight with the Champion of Scabaras and the Menaphite Akh.",
  ],
  "Thrall of the Serpent": [
    "Plays at Zul-Andra. It was the 500th music track added to Old School RuneScape.",
  ],
  "Throne of the Demon": [
    "Plays in Thammaron's Throne Room underneath Uzer. It will play here by default after The Golem and Shadow of the Storm have been completed. During the Shadow of the Storm quest's battle with Agrith Naar, Grip of the Talon will play here.",
  ],
  "Tick Tock": [
    "Plays during the Desert Treasure II - The Fallen Empire, in the cutscene where the player enters the lower level of the Ancient Vault, followed by the track Master of Puppets.",
  ],
  "Time Out": ["Plays at the Maze Random event."],
  "Time to Mine": ["Plays in the Keldagrim south-west mine.", ...keldagrim],
  Tiptoe: ["Plays in the Draynor Manor cellar."],
  "Title Fight": [
    "Plays in the top floor of the Champions' Challenge arena, within the Champions' Guild under the trapdoor.",
  ],
  "Tomb Raider": ["Plays during Pyramid Plunder."],
  Tomorrow: ["Plays south of Port Sarim."],
  "Too Many Cooks...": [
    "Plays in the Goblin Cook's basement under Goblin Village.",
  ],
  "The Tower of Voices": ["Plays in Prifddinas."],
  "The Tower": [
    "Plays north of Ardougne Castle in East Ardougne. It can also be heard in Ardougne's western sewers, and in the basement of the Chaos Druid Tower.",
  ],
  "The Trade Parade": ["Plays at the Grand Exchange in city of Varrock."],
  "Trahaearn Toil": [
    "Plays in Prifddinas. It is also the default track that plays in the Grand Library, the Trahaearn mine, and the entrance to the Zalcano lair. It is the theme of the Trahaearn Clan.",
  ],
  Trawler: [
    "Plays while playing Fishing Trawler. The track has a minor key variant.",
  ],
  "Trawler Minor": [
    "Plays while playing Fishing Trawler, upon the Trawler sinking. It can sometimes unlock when the boat is only partially flooded. It is the minor key variant of Trawler.",
  ],
  "Tree Spirits": ["Plays west of the entrance to the Tree Gnome Stronghold."],
  Tremble: ["Plays on the Death Plateau."],
  Tribal: [
    "Plays south-east of Tai Bwo Wannai Village, at the entrance to the Nature Altar.",
  ],
  "Tribal 2": [
    "Plays at the gnome glider on Karamja, and east of Shilo Village.",
  ],
  "Tribal Background": [
    "Plays north or north-east of Tai Bwo Wannai or in the south-eastern side of the Kharazi Jungle. It can also be heard in the Pothole Dungeon.",
  ],
  Trinity: [
    "Plays around the Legends' Guild. It can also be heard in the Legends' Guild dungeon.",
  ],
  "Troll Shuffle": [
    "Plays during Making Friends with My Arm. It first plays when attempting to sneak into Weiss, and later plays during the battle with Don't Know What.",
  ],
  "Trouble Brewing": [
    "Plays while playing the Trouble Brewing minigame in Mos Le'Harmless.",
  ],
  Troubled: ["Plays in the Western Ruins in the Wilderness."],
  "Troubled Waters": ["Plays in the Kraken Cove."],
  Twilight: ["Plays on the first floor of the Elemental Workshop."],
  "TzHaar!": ["Plays in the TzHaar Fight Cave."],
  "Undead Dungeon": ["Plays in Tarn's Lair, inside the Abandoned Mine."],
  Undercurrent: [
    "Plays between the Bandit Camp and the Graveyard of Shadows in the Wilderness.",
  ],
  Underground: [
    "Plays in east Wilderness, the Wilderness Agility Course Dungeon, Taverley Dungeon, and Entrana Dungeon.",
    taverleyDungeon,
  ],
  "Underground Pass": ["Plays in the Underground Pass.", ...undergroundPass],
  Understanding: ["Plays at the Nature Altar."],
  "Unknown Land": ["Plays in southern Draynor Village."],
  Untouchable: [
    "Plays during the fight with The Untouchable during the Dream Mentor quest.",
  ],
  "Unturned Stones": [
    "Plays during Desert Treasure II, in the dungeon under the Digsite where the golem encountered during the quest resides.",
    "It is based on the RuneScape unlisted music track Tomb Stones, which plays inside the Digsite Dungeon during the The Temple at Senntisten quest, which Desert Treasure II takes a number of elements from.",
  ],
  Upcoming: [
    "Plays at the Necromancer Tower, or when crashing the balloon transport system.",
    "Crashing the Baloon Transport System is only possible when first unlocking a route from Entrana.",
  ],
  "Upir Likhyi": [
    "Plays during the quest Sins of the Father in the boss fight against Vanstrom Klause.",
    'Upir\' Likhyj was the name of an 11th century Old Russian scribe and a priest. Direct translation of his name from the Old Russian would be "Bloodsucker the Foul" or "Bloodsucker the Wicked". Upir\' could also be a Cyrillic version of the Swedish/Nordic Öpir or Öper, with Likhyj meaning "wicked/unworthy" in Old Russian, as in "Öpir the Unworthy".',
  ],
  "Upper Depths": [
    "Plays upon entering the Chambers of Xeric under Mount Quidamortem.",
  ],
  "Vampyre Assault": [
    "Plays during the meeting between Gadderanks and Vanstrom Klause during the quest In Aid of the Myreque. It also plays during Sins of the Father in the battle with Damien Leucurte upstairs in Crombwick Manor.",
    "It is based upon Distant Land and Fangs for the Memory.",
  ],
  Vanescula: [
    "Plays at Castle Draken in the final cutscene in the quest A Taste of Hope. It also plays during Sins of the Father when Vanescula Drakan appears to the Myreque. ",
  ],
  "The Vault": [
    "Plays during Desert Treasure II - The Fallen Empire, upon entering the Ancient Vault.",
    "It is a variation of The Ancient Prison.",
  ],
  Venomous: ["Plays around the Scorpion Pit in Deep Wilderness."],
  Venture: ["Plays at the Dig Site Exam Center."],
  "Venture 2": [
    "Plays in the Digsite Dungeon, and a small cave inhabited by Doug Deeping.",
  ],
  "Victory is Mine": [
    "Plays in a Champion's Challenge fight, on the bottom floor of the arena.",
    "A Champion's scroll is required to unlock this track, making it one of the most difficult to obtain.",
  ],
  Village: [
    "Plays in Canifis, or by looking into a mystical mirror during Desert Treasure I.",
  ],
  Vision: ["Plays at the Wizards' Tower and its basement."],
  "Volcanic Vikings": ["Plays in Neitiznot."],
  "Voodoo Cult": [
    "Plays at the lower level of Ah Za Rhoon, visited during Shilo Village. It can later be heard during and after Legends' Quest on the bottom floor of the Viyeldi caves under the Kharazi Jungle.",
  ],
  Voyage: ["Plays at the top of Baxtorian Falls."],
  "The Waiting Game": ["Plays in the Soul Wars lobby."],
  "Waking Dream": [
    "Plays during Lunar Diplomacy, upon first entering the Dream World and during the fight with Me.",
  ],
  "Waste Defaced": [
    "Plays in the Poison Waste Dungeon, during and after Path of Glouphrie.",
  ],
  "A Walk in the Woods": [
    "Plays in the Kourend Woodland and in the Woodland's Barbarian Camp basement.",
  ],
  "The Walking Dead": [
    "Plays in the Shayzien Crypts. It is based on The Militia.",
    "This track's name is a reference to the like-named series The Walking Dead.",
  ],
  "Wally the Hero": [
    "Plays during Demon Slayer. It can be heard during the cutscene where Aris describes how Wally first defeated Delrith.",
  ],
  Wander: [
    "Plays at the Falador Farm.",
    "This track is light and airy with plucking beats throughout. A melody with different background sounds layered emerges.",
  ],
  Warpath: [
    "Plays at Clan Wars. Upon entering any Clan Wars area, either Warpath or the Clan Wars track is randomly selected to start playing.",
  ],
  Warrior: [
    "Plays when facing Koschei the Deathless during The Fremennik Trials quest.",
  ],
  "Warriors' Guild": ["Plays in the Warriors' Guild."],
  "Watch Your Step": [
    "Plays in the Hallowed Sepulchre under Darkmeyer.",
    "Also plays on my SoundCloud. Unironically.",
  ],
  Waterfall: [
    "Plays south of the Baxtorian Falls. It can also be heard in Glarial's Tomb.",
  ],
  Waterlogged: [
    "Plays south of Canifis and in the Morytania Graveyard.",
    "It can later be heard while Temple Trekking, during the Bridge puzzle and the battle with the creature on the boat trip. The track also plays during Sins of the Father, when escorting Ivan Strom past the Bridge puzzle.",
  ],
  "Way of the Enchanter": ["Plays in the Lunar Isle mine."],
  "Way of the Wyrm": [
    "Plays on the lower level of the Karuulm Slayer Dungeon under Mount Karuulm.",
  ],
  Wayward: ["Plays in the Zogre dungeon under Jiggig."],
  "We are the Fairies": ["Plays at the Cosmic Plane."],
  "Welcome to my Nightmare": [
    "Plays upon entering the Pestilent Bloat's room in the Theatre of Blood.",
    "The title of this track could be a reference to the album of the same name by Alice Cooper",
  ],
  "Welcome to the Theatre": ["Plays upon entering Ver Sinhaza."],
  "Well Hallowed Air": [
    "Plays by entering the lobby of the Hallowed Sepulchre under Darkmeyer.",
    'When spoken aloud, the name of the track sounds similar to the greeting "Well hello there".',
  ],
  "Well of Voyage": [
    "Plays at the Well of Voyage in the Underground Pass. It can also be heard after falling down a Leaf Trap in Tirannwn, and in Lady Trahaearn's cave inside the Underground Pass during Song of the Elves.",
    ...undergroundPass,
  ],
  "What Happens Below...": ["Plays in The Warrens under Port Piscarillius."],
  "Where Eagles Lair": [
    "Plays in the Eagles' Peak Dungeon during and after the Eagles' Peak quest.",
    eaglesTransport,
  ],
  "Wild Isle": [
    "Plays south of Lava Dragon Isle in the Wilderness.",
    "This is a disturbing, tension-building piece of music that is mostly quiet and features the sound of a raging storm with scattered, soft piano fading in and out randomly, the sound of growling, and a few eerie sound effects here and there.",
  ],
  "Wild Side": ["Plays in the Lava Maze and north of it."],
  Wilderness: [
    "Plays at the Hobgoblin mine, west of Dark Warriors' Fortress, north of Grand Exchange, as well as in Daimon's Crater (Bounty Hunter).",
  ],
  "Wilderness 2": ["Plays south of the Lava Maze."],
  "Wilderness 3": [
    "Plays at and east of the Forgotten Cemetery in the Wilderness.",
  ],
  Wildwood: ["Plays west of Ferox Enclave."],
  "Winter Funfair": ["Plays during future Christmas events."],
  Witching: ["Plays on the eastern edge of level 24-32 Wilderness."],
  "Woe of the Wyvern": [
    "Plays in the Asgarnian Ice Dungeon, at the skeletal wyverns.",
  ],
  Wonder: ["Plays north of Goblin Village in the Wilderness."],
  Wonderous: ["Plays north of East Ardougne, including the farming patch."],
  Woodland: ["Plays at the Iorwerth Camp in Tirannwn."],
  "Work Work Work": [
    "Plays in and around the Tower of Life. On the upper floors of the tower, during the Tower of Life quest, Magic Magic Magic will play, but after the quest is completed this track will play on the upper floors as well.",
  ],
  Workshop: ["Plays in eastern Falador."],
  "A Worthy Foe": [
    "Plays during Desert Treasure II - The Fallen Empire, during encounters with the Mysterious Figure.",
    "As the Mysterious Figure can attack the player in any location, the quest icon is marked instead.",
  ],
  "Wrath and Ruin": [
    "Plays in the anger room of Tolna's Rift during A Soul's Bane, and during the battle with Tolna.",
  ],
  Xenophobe: [
    "Plays at the Waterbirth Island Dungeon. It plays in the deeper area from rooms 12-15, and in the lairs of the Dagannoth Kings.",
    waterbirth,
  ],
  Yesteryear: ["Plays in the eastern part of Lumbridge swamp."],
  "You Have My Attention": [
    "Plays during the quest Sins of the Father. It plays during the cutscene where Lowerniel Drakan confronts the player.",
    "The track is split into two distinctive parts, the last part bears resemblance to A Forgotten Religion.",
    'The cache id number of the track is 666, which is a reference to the "Number of the Beast", as well as the combat level of Lowerniel Drakan in RuneScape; fittingly the track is played at Lowerniel Drakan\'s first appearance in the game.',
  ],
  "Zamorak Zoo": ["Plays at Zamorak's Fortress of the God Wars Dungeon."],
  "Zanik's Theme": [
    "Plays in three cutscenes during Death to the Dorgeshuun, and in the Yu'biusk cutscene during Land of the Goblins.",
    "Yu'biusk is inacessible without using fairy rings, meaning that the Land of the Goblins quest start point is marked (inside the Lumbridge Swamp Caves).",
    "The three cutscenes in Death to the Dorgeshuun are: When Zanik first leaves Lumbridge Castle, when Zanik is revived by Juna, and at the end of the quest in Dorgesh-Kaan.",
    "Therefore the correct answers are the 3 entrances to the Swamp Caves and just outside the doors of Lumbridge Castle.",
    ...swampCaves,
  ],
  "Zaros Zeitgeist": [
    "Plays in the encounter with Nex, inside the God Wars Dungeon.",
    "The track was originally released alongside Nex on 10 January 2011, being played during the boss fight.",
  ],
  Zealot: ["Plays at the Water Altar."],
  "Zogre Dance": ["Plays at Jiggig."],
  Zombiism: ["Plays on Harmony Island and the caves underneath."],
};
