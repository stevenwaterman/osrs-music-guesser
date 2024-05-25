// https://oldschool.runescape.wiki/w/Calculator:Bestiary

import { shuffle } from "./util.js";

function convertToJson() {
  const rows: NodeListOf<HTMLTableRowElement> = document.querySelectorAll(
    ".wikitable tbody tr"
  );
  const output: Array<Monster> = [];
  for (const row of rows) {
    const thumbnail = row.querySelector("img")!.src;

    const link = row.querySelector("a")!;
    const name = link.text;
    const url = link.href.split("#")[0];
    const image = url.replace("/w/", "/images/") + ".png";
    output.push({ name, url, thumbnail, image });
  }
  return output;
}

type Monster = { name: string; url: string; thumbnail: string; image: string };

function deduplicateMonsters(monsters: Monster[]) {
  const mapping: Record<string, Monster> = {};
  for (const monster of monsters) {
    const existingMonster = mapping[monster.name];
    if (
      existingMonster === undefined ||
      existingMonster.thumbnail.length > monster.thumbnail.length
    ) {
      mapping[monster.name] = monster;
    }
  }
  const deduped = Object.values(mapping);
  deduped.sort();
  return deduped;
}

export type Avatar = {
  name: string;
  url: string;
  img: string;
};

export function avatarUrl(avatar: Avatar): string {
  return `https://oldschool.runescape.wiki/w/${avatar.url}`;
}

export function avatarImageSrc(avatar: Avatar): string {
  return `https://oldschool.runescape.wiki/images/${avatar.img}`;
}

export function avatarThumbnailSrc(avatar: Avatar): string {
  return `https://oldschool.runescape.wiki/images/thumb/${avatar.img}/128px-${avatar.img}`;
}

export class AvatarLibrary {
  private availableAvatars: string[] = shuffle(Object.keys(avatars));

  public take(): Avatar | null {
    if (this.availableAvatars.length === 0) {
      return null;      
    }

    const [avatarName] = this.availableAvatars.splice(0, 1);
    return avatars[avatarName];
  }

  public release(avatar: Avatar) {
    this.availableAvatars.push(avatar.name);
  }
}

const avatars: Record<string, Avatar> = {
  "A Doubt": {
    name: "A Doubt",
    url: "A_Doubt",
    img: "A_Doubt.png",
  },
  "Aberrant spectre": {
    name: "Aberrant spectre",
    url: "Aberrant_spectre",
    img: "Aberrant_spectre.png",
  },
  "Abhorrent spectre": {
    name: "Abhorrent spectre",
    url: "Abhorrent_spectre",
    img: "Abhorrent_spectre.png",
  },
  Abomination: {
    name: "Abomination",
    url: "Abomination",
    img: "Abomination.png",
  },
  "Abyssal Sire": {
    name: "Abyssal Sire",
    url: "Abyssal_Sire",
    img: "Abyssal_Sire.png",
  },
  "Abyssal antibody": {
    name: "Abyssal antibody",
    url: "Abyssal_antibody",
    img: "Abyssal_antibody.png",
  },
  "Abyssal demon": {
    name: "Abyssal demon",
    url: "Abyssal_demon",
    img: "Abyssal_demon.png",
  },
  "Abyssal guardian": {
    name: "Abyssal guardian",
    url: "Abyssal_guardian",
    img: "Abyssal_guardian.png",
  },
  "Abyssal leech": {
    name: "Abyssal leech",
    url: "Abyssal_leech",
    img: "Abyssal_leech.png",
  },
  "Abyssal portal": {
    name: "Abyssal portal",
    url: "Abyssal_portal",
    img: "Abyssal_portal.png",
  },
  "Abyssal walker": {
    name: "Abyssal walker",
    url: "Abyssal_walker",
    img: "Abyssal_walker.png",
  },
  "Acidic Bloodveld": {
    name: "Acidic Bloodveld",
    url: "Acidic_Bloodveld",
    img: "Acidic_Bloodveld.png",
  },
  "Adamant dragon": {
    name: "Adamant dragon",
    url: "Adamant_dragon",
    img: "Adamant_dragon.png",
  },
  Afflicted: {
    name: "Afflicted",
    url: "Afflicted",
    img: "Afflicted_%28level_30%29.png",
  },
  "Agile Scarab": {
    name: "Agile Scarab",
    url: "Agile_Scarab",
    img: "Agile_Scarab.png",
  },
  "Agrith Naar": {
    name: "Agrith Naar",
    url: "Agrith_Naar",
    img: "Agrith_Naar.png",
  },
  "Agrith-Na-Na": {
    name: "Agrith-Na-Na",
    url: "Agrith-Na-Na",
    img: "Agrith-Na-Na.png",
  },
  "Ahrim the Blighted": {
    name: "Ahrim the Blighted",
    url: "Ahrim_the_Blighted",
    img: "Ahrim_the_Blighted.png",
  },
  "Air elemental": {
    name: "Air elemental",
    url: "Air_elemental",
    img: "Air_elemental.png",
  },
  "Air wizard": {
    name: "Air wizard",
    url: "Air_wizard",
    img: "Air_wizard.png",
  },
  Akkha: {
    name: "Akkha",
    url: "Akkha",
    img: "Akkha.png",
  },
  "Akkha's Shadow": {
    name: "Akkha's Shadow",
    url: "Akkha%27s_Shadow",
    img: "Akkha%27s_Shadow.png",
  },
  "Al Kharid warrior": {
    name: "Al Kharid warrior",
    url: "Al_Kharid_warrior",
    img: "Al_Kharid_warrior.png",
  },
  "Albino bat": {
    name: "Albino bat",
    url: "Albino_bat",
    img: "Albino_bat.png",
  },
  "Alchemical Hydra": {
    name: "Alchemical Hydra",
    url: "Alchemical_Hydra",
    img: "Alchemical_Hydra_(serpentine).png",
  },
  Alexis: {
    name: "Alexis",
    url: "Alexis",
    img: "Alexis.png",
  },
  Alomone: {
    name: "Alomone",
    url: "Alomone",
    img: "Alomone.png",
  },
  Alrik: {
    name: "Alrik",
    url: "Alrik",
    img: "Alrik.png",
  },
  "Ammonite Crab": {
    name: "Ammonite Crab",
    url: "Ammonite_Crab",
    img: "Ammonite_Crab.png",
  },
  "Ancient Guardian": {
    name: "Ancient Guardian",
    url: "Ancient_Guardian_(Desert_Treasure_II)",
    img: "Ancient_Guardian_%28Desert_Treasure_II%29.png",
  },
  "Ancient Wizard": {
    name: "Ancient Wizard",
    url: "Ancient_Wizard",
    img: "Ancient_Wizard_%28magic%29.png",
  },
  "Ancient Wyvern": {
    name: "Ancient Wyvern",
    url: "Ancient_Wyvern",
    img: "Ancient_Wyvern.png",
  },
  "Ancient Zygomite": {
    name: "Ancient Zygomite",
    url: "Ancient_Zygomite",
    img: "Ancient_Zygomite.png",
  },
  "Angry barbarian spirit": {
    name: "Angry barbarian spirit",
    url: "Angry_barbarian_spirit",
    img: "Angry_barbarian_spirit.png",
  },
  "Angry bear": {
    name: "Angry bear",
    url: "Angry_bear",
    img: "Angry_bear_%28level_40%29.png",
  },
  "Angry giant rat": {
    name: "Angry giant rat",
    url: "Angry_giant_rat",
    img: "Angry_giant_rat_%28level_45%2C_1%29.png",
  },
  "Angry goblin": {
    name: "Angry goblin",
    url: "Angry_goblin",
    img: "Angry_goblin.png",
  },
  "Angry unicorn": {
    name: "Angry unicorn",
    url: "Angry_unicorn",
    img: "Angry_unicorn.png",
  },
  "Animated Adamant Armour": {
    name: "Animated Adamant Armour",
    url: "Animated_Adamant_Armour",
    img: "Animated_Adamant_Armour.png",
  },
  "Animated Black Armour": {
    name: "Animated Black Armour",
    url: "Animated_Black_Armour",
    img: "Animated_Black_Armour.png",
  },
  "Animated Bronze Armour": {
    name: "Animated Bronze Armour",
    url: "Animated_Bronze_Armour",
    img: "Animated_Bronze_Armour.png",
  },
  "Animated Iron Armour": {
    name: "Animated Iron Armour",
    url: "Animated_Iron_Armour",
    img: "Animated_Iron_Armour.png",
  },
  "Animated Mithril Armour": {
    name: "Animated Mithril Armour",
    url: "Animated_Mithril_Armour",
    img: "Animated_Mithril_Armour.png",
  },
  "Animated Rune Armour": {
    name: "Animated Rune Armour",
    url: "Animated_Rune_Armour",
    img: "Animated_Rune_Armour.png",
  },
  "Animated Steel Armour": {
    name: "Animated Steel Armour",
    url: "Animated_Steel_Armour",
    img: "Animated_Steel_Armour.png",
  },
  "Animated spade": {
    name: "Animated spade",
    url: "Animated_spade",
    img: "Animated_spade.png",
  },
  Anja: {
    name: "Anja",
    url: "Anja",
    img: "Anja.png",
  },
  Ankou: {
    name: "Ankou",
    url: "Ankou",
    img: "Ankou.png",
  },
  Apparition: {
    name: "Apparition",
    url: "Apparition",
    img: "Het_%28monster%29.png",
  },
  "Arcane Scarab": {
    name: "Arcane Scarab",
    url: "Arcane_Scarab",
    img: "Arcane_Scarab.png",
  },
  "Ardougne Archer": {
    name: "Ardougne Archer",
    url: "Archer_(Ardougne)",
    img: "Archer_%28Ardougne%29.png",
  },
  "Burthorpe Archer": {
    name: "Burthorpe Archer",
    url: "Archer_(Burthorpe)",
    img: "Archer_%28Burthorpe%29.png",
  },
  Arianwyn: {
    name: "Arianwyn",
    url: "Arianwyn",
    img: "Arianwyn_%28Song_of_the_Elves%29.png",
  },
  "Armadylean guard": {
    name: "Armadylean guard",
    url: "Armadylean_guard",
    img: "Armadylean_guard.png",
  },
  "Armoured zombie": {
    name: "Armoured zombie",
    url: "Armoured_zombie",
    img: "Armoured_zombie_%28melee%2C_5%29.png",
  },
  Arrg: {
    name: "Arrg",
    url: "Arrg",
    img: "Arrg.png",
  },
  "Arzinian Avatar of Magic": {
    name: "Arzinian Avatar of Magic",
    url: "Arzinian_Avatar_of_Magic",
    img: "Arzinian_Avatar_of_Magic.png",
  },
  "Arzinian Avatar of Ranging": {
    name: "Arzinian Avatar of Ranging",
    url: "Arzinian_Avatar_of_Ranging",
    img: "Arzinian_Avatar_of_Ranging.png",
  },
  "Arzinian Avatar of Strength": {
    name: "Arzinian Avatar of Strength",
    url: "Arzinian_Avatar_of_Strength",
    img: "Arzinian_Avatar_of_Strength.png",
  },
  Assassin: {
    name: "Assassin",
    url: "Assassin",
    img: "Assassin.png",
  },
  "Asyn Shade": {
    name: "Asyn Shade",
    url: "Asyn_Shade",
    img: "Asyn_Shade.png",
  },
  "Avatar of Creation": {
    name: "Avatar of Creation",
    url: "Avatar_of_Creation",
    img: "Avatar_of_Creation.png",
  },
  "Avatar of Destruction": {
    name: "Avatar of Destruction",
    url: "Avatar_of_Destruction",
    img: "Avatar_of_Destruction.png",
  },
  Aviansie: {
    name: "Aviansie",
    url: "Aviansie",
    img: "Aviansie_%28level_69%29.png",
  },
  "Awakened Altar": {
    name: "Awakened Altar",
    url: "Awakened_Altar",
    img: "Awakened_Altar.png",
  },
  "Ba-Ba": {
    name: "Ba-Ba",
    url: "Ba-Ba",
    img: "Ba-Ba.png",
  },
  Baboon: {
    name: "Baboon",
    url: "Baboon",
    img: "Baboon.png",
  },
  "Baboon Brawler": {
    name: "Baboon Brawler",
    url: "Baboon_Brawler",
    img: "Baboon_Brawler_%28level-56%29.png",
  },
  "Baboon Mage": {
    name: "Baboon Mage",
    url: "Baboon_Mage",
    img: "Baboon_Mage_%28level-56%29.png",
  },
  "Baboon Shaman": {
    name: "Baboon Shaman",
    url: "Baboon_Shaman",
    img: "Baboon_Shaman.png",
  },
  "Baboon Thrall": {
    name: "Baboon Thrall",
    url: "Baboon_Thrall",
    img: "Baboon_Thrall.png",
  },
  "Baboon Thrower": {
    name: "Baboon Thrower",
    url: "Baboon_Thrower",
    img: "Baboon_Thrower_%28level-56%29.png",
  },
  "Baby Roc": {
    name: "Baby Roc",
    url: "Baby_Roc",
    img: "Baby_Roc.png",
  },
  "Baby black dragon": {
    name: "Baby black dragon",
    url: "Baby_black_dragon",
    img: "Baby_black_dragon.png",
  },
  "Baby blue dragon": {
    name: "Baby blue dragon",
    url: "Baby_blue_dragon",
    img: "Baby_blue_dragon_%281%29.png",
  },
  "Baby green dragon": {
    name: "Baby green dragon",
    url: "Baby_green_dragon",
    img: "Baby_green_dragon_%281%29.png",
  },
  "Baby impling": {
    name: "Baby impling",
    url: "Baby_impling",
    img: "Baby_impling.png",
  },
  "Baby red dragon": {
    name: "Baby red dragon",
    url: "Baby_red_dragon",
    img: "Baby_red_dragon_%281%29.png",
  },
  "Baby tanglefoot": {
    name: "Baby tanglefoot",
    url: "Baby_tanglefoot",
    img: "Baby_tanglefoot_%282%29.png",
  },
  "Balfrug Kreeyath": {
    name: "Balfrug Kreeyath",
    url: "Balfrug_Kreeyath",
    img: "Balfrug_Kreeyath.png",
  },
  "Pollnivneach Bandit": {
    name: "Pollnivneach Bandit",
    url: "Bandit_(Pollnivneach)",
    img: "Bandit_%28Pollnivneach%2C_bearded%29.png",
  },
  "Shayzien Bandit": {
    name: "Shayzien Bandit",
    url: "Bandit_(Shayzien)",
    img: "Bandit_%28Shayzien%29.png",
  },
  "Varlamore Bandit": {
    name: "Varlamore Bandit",
    url: "Bandit_(Varlamore)",
    img: "Bandit_%28Varlamore%2C_1%29.png",
  },
  "Bandit champion": {
    name: "Bandit champion",
    url: "Bandit_champion",
    img: "Bandit_champion.png",
  },
  Bandit: {
    name: "Bandit",
    url: "Bandit",
    img: "Bandit.png",
  },
  "Bandosian guard": {
    name: "Bandosian guard",
    url: "Bandosian_guard",
    img: "Bandosian_guard.png",
  },
  Banshee: {
    name: "Banshee",
    url: "Banshee",
    img: "Banshee.png",
  },
  "Barbarian Warlord": {
    name: "Barbarian Warlord",
    url: "Barbarian_Warlord",
    img: "Barbarian_Warlord.png",
  },
  Barbarian: {
    name: "Barbarian",
    url: "Barbarian",
    img: "Barbarian_%28Hagen%29.png",
  },
  "Bark Blamish Snail": {
    name: "Bark Blamish Snail",
    url: "Bark_Blamish_Snail",
    img: "Bark_Blamish_Snail.png",
  },
  Barrelchest: {
    name: "Barrelchest",
    url: "Barrelchest",
    img: "Barrelchest.png",
  },
  "Basilisk Knight": {
    name: "Basilisk Knight",
    url: "Basilisk_Knight",
    img: "Basilisk_Knight.png",
  },
  "Basilisk Sentinel": {
    name: "Basilisk Sentinel",
    url: "Basilisk_Sentinel",
    img: "Basilisk_Sentinel.png",
  },
  Basilisk: {
    name: "Basilisk",
    url: "Basilisk",
    img: "Basilisk.png",
  },
  Bat: {
    name: "Bat",
    url: "Bat",
    img: "Bat.png",
  },
  "Battle mage": {
    name: "Battle mage",
    url: "Battle_mage",
    img: "Battle_mage_%28Guthix%29.png",
  },
  "Bear Cub": {
    name: "Bear Cub",
    url: "Bear_Cub",
    img: "Bear_Cub_%281%29.png",
  },
  "Bedabin Nomad Fighter": {
    name: "Bedabin Nomad Fighter",
    url: "Bedabin_Nomad_Fighter",
    img: "Bedabin_Nomad_Fighter.png",
  },
  Berry: {
    name: "Berry",
    url: "Berry",
    img: "Berry.png",
  },
  "Berserk barbarian spirit": {
    name: "Berserk barbarian spirit",
    url: "Berserk_barbarian_spirit",
    img: "Berserk_barbarian_spirit.png",
  },
  "Big Snake": {
    name: "Big Snake",
    url: "Big_Snake",
    img: "Big_Snake.png",
  },
  "Big Wolf": {
    name: "Big Wolf",
    url: "Big_Wolf",
    img: "Big_Wolf.png",
  },
  "Billy Goat": {
    name: "Billy Goat",
    url: "Billy_Goat",
    img: "Billy_Goat_%28tan%29.png",
  },
  Bird: {
    name: "Bird",
    url: "Bird",
    img: "Bird_%28level_5%29.png",
  },
  "Black Guard Berserker": {
    name: "Black Guard Berserker",
    url: "Black_Guard_Berserker",
    img: "Black_Guard_Berserker_%28red%29.png",
  },
  "Black Guard": {
    name: "Black Guard",
    url: "Black_Guard",
    img: "Black_Guard_%28level_25%2C_1%29.png",
  },
  "Black Heather": {
    name: "Black Heather",
    url: "Black_Heather",
    img: "Black_Heather.png",
  },
  "Black Knight Titan": {
    name: "Black Knight Titan",
    url: "Black_Knight_Titan",
    img: "Black_Knight_Titan.png",
  },
  "Black Knight": {
    name: "Black Knight",
    url: "Black_Knight",
    img: "Black_Knight_%28male%29.png",
  },
  "Black bear": {
    name: "Black bear",
    url: "Black_bear",
    img: "Black_bear.png",
  },
  "Black chinchompa": {
    name: "Black chinchompa",
    url: "Black_chinchompa_(Hunter)",
    img: "Black_chinchompa_%28Hunter%29.png",
  },
  "Black demon": {
    name: "Black demon",
    url: "Black_demon",
    img: "Black_demon.png",
  },
  "Black dragon": {
    name: "Black dragon",
    url: "Black_dragon",
    img: "Black_dragon.png",
  },
  "Black golem": {
    name: "Black golem",
    url: "Black_golem",
    img: "Black_golem.png",
  },
  "Black jaguar": {
    name: "Black jaguar",
    url: "Black_jaguar",
    img: "Black_jaguar.png",
  },
  "Black unicorn": {
    name: "Black unicorn",
    url: "Black_unicorn",
    img: "Black_unicorn.png",
  },
  "Black unicorn Foal": {
    name: "Black unicorn Foal",
    url: "Black_unicorn_Foal",
    img: "Black_unicorn_Foal.png",
  },
  "Blessed giant rat": {
    name: "Blessed giant rat",
    url: "Blessed_giant_rat",
    img: "Blessed_giant_rat_%281%29.png",
  },
  "Blessed spider": {
    name: "Blessed spider",
    url: "Blessed_spider",
    img: "Blessed_spider.png",
  },
  "Blood Blamish Snail": {
    name: "Blood Blamish Snail",
    url: "Blood_Blamish_Snail",
    img: "Blood_Blamish_Snail_%28round%29.png",
  },
  "Blood Moon": {
    name: "Blood Moon",
    url: "Blood_Moon",
    img: "Blood_Moon.png",
  },
  "Blood Reaver": {
    name: "Blood Reaver",
    url: "Blood_Reaver",
    img: "Blood_Reaver.png",
  },
  "Blood jaguar": {
    name: "Blood jaguar",
    url: "Blood_jaguar",
    img: "Blood_jaguar.png",
  },
  "Blood spawn": {
    name: "Blood spawn",
    url: "Blood_spawn",
    img: "Blood_spawn.png",
  },
  Bloodveld: {
    name: "Bloodveld",
    url: "Bloodveld",
    img: "Bloodveld.png",
  },
  Bloodworm: {
    name: "Bloodworm",
    url: "Bloodworm",
    img: "Bloodworm.png",
  },
  "Blue Moon": {
    name: "Blue Moon",
    url: "Blue_Moon",
    img: "Blue_Moon.png",
  },
  "Blue dragon": {
    name: "Blue dragon",
    url: "Blue_dragon",
    img: "Blue_dragon.png",
  },
  Boar: {
    name: "Boar",
    url: "Boar",
    img: "Boar_%28lv_5%29.png",
  },
  "Body Golem": {
    name: "Body Golem",
    url: "Body_Golem",
    img: "Body_Golem.png",
  },
  Boris: {
    name: "Boris",
    url: "Boris",
    img: "Boris.png",
  },
  Borrokar: {
    name: "Borrokar",
    url: "Borrokar",
    img: "Borrokar.png",
  },
  "Bouncer's ghost": {
    name: "Bouncer's ghost",
    url: "Bouncer_(ghost)",
    img: "Bouncer_%28ghost%29.png",
  },
  Bouncer: {
    name: "Bouncer",
    url: "Bouncer",
    img: "Bouncer.png",
  },
  "Brassican Mage": {
    name: "Brassican Mage",
    url: "Brassican_Mage",
    img: "Brassican_Mage.png",
  },
  Brawler: {
    name: "Brawler",
    url: "Brawler",
    img: "Brawler_%28level_51%29.png",
  },
  Bree: {
    name: "Bree",
    url: "Bree",
    img: "Bree.png",
  },
  Breoca: {
    name: "Breoca",
    url: "Breoca",
    img: "Breoca.png",
  },
  "Brine rat": {
    name: "Brine rat",
    url: "Brine_rat",
    img: "Brine_rat.png",
  },
  Broddi: {
    name: "Broddi",
    url: "Broddi",
    img: "Broddi.png",
  },
  "Bronze dragon": {
    name: "Bronze dragon",
    url: "Bronze_dragon",
    img: "Bronze_dragon.png",
  },
  "Broodoo victim": {
    name: "Broodoo victim",
    url: "Broodoo_victim",
    img: "Broodoo_victim_%28green%29.png",
  },
  "Bruise Blamish Snail": {
    name: "Bruise Blamish Snail",
    url: "Bruise_Blamish_Snail",
    img: "Bruise_Blamish_Snail_%28round%29.png",
  },
  "Brutal black dragon": {
    name: "Brutal black dragon",
    url: "Brutal_black_dragon",
    img: "Brutal_black_dragon.png",
  },
  "Brutal blue dragon": {
    name: "Brutal blue dragon",
    url: "Brutal_blue_dragon",
    img: "Brutal_blue_dragon.png",
  },
  "Brutal green dragon": {
    name: "Brutal green dragon",
    url: "Brutal_green_dragon",
    img: "Brutal_green_dragon.png",
  },
  "Brutal red dragon": {
    name: "Brutal red dragon",
    url: "Brutal_red_dragon",
    img: "Brutal_red_dragon.png",
  },
  Bryophyta: {
    name: "Bryophyta",
    url: "Bryophyta",
    img: "Bryophyta.png",
  },
  Buffalo: {
    name: "Buffalo",
    url: "Buffalo",
    img: "Buffalo.png",
  },
  Bunny: {
    name: "Bunny",
    url: "Bunny",
    img: "Bunny_%281%29.png",
  },
  "Bush snake": {
    name: "Bush snake",
    url: "Bush_snake",
    img: "Bush_snake.png",
  },
  Callisto: {
    name: "Callisto",
    url: "Callisto",
    img: "Callisto.png",
  },
  "Camp dweller": {
    name: "Camp dweller",
    url: "Camp_dweller",
    img: "Camp_dweller_%28level_25%29.png",
  },
  "Carnivorous chinchompa": {
    name: "Carnivorous chinchompa",
    url: "Carnivorous_chinchompa",
    img: "Carnivorous_chinchompa.png",
  },
  Catablepon: {
    name: "Catablepon",
    url: "Catablepon",
    img: "Catablepon.png",
  },
  "Cave abomination": {
    name: "Cave abomination",
    url: "Cave_abomination",
    img: "Cave_abomination.png",
  },
  "Cave bug": {
    name: "Cave bug",
    url: "Cave_bug",
    img: "Cave_bug_%28level_6%29.png",
  },
  "Cave crawler": {
    name: "Cave crawler",
    url: "Cave_crawler",
    img: "Cave_crawler_%281%29.png",
  },
  "Cave goblin": {
    name: "Cave goblin",
    url: "Cave_goblin_(monster)",
    img: "Cave_goblin_%28monster%2C_blue%29.png",
  },
  "Cave goblin guard": {
    name: "Cave goblin guard",
    url: "Cave_goblin_guard",
    img: "Cave_goblin_guard_%28level_24%29.png",
  },
  "Cave goblin miner": {
    name: "Cave goblin miner",
    url: "Cave_goblin_miner",
    img: "Cave_goblin_miner.png",
  },
  "Cave horror": {
    name: "Cave horror",
    url: "Cave_horror",
    img: "Cave_horror_%281%29.png",
  },
  "Cave kraken": {
    name: "Cave kraken",
    url: "Cave_kraken",
    img: "Cave_kraken.png",
  },
  "Cave lizard": {
    name: "Cave lizard",
    url: "Cave_lizard",
    img: "Cave_lizard.png",
  },
  "Cave slime": {
    name: "Cave slime",
    url: "Cave_slime",
    img: "Cave_slime.png",
  },
  Ceolburg: {
    name: "Ceolburg",
    url: "Ceolburg",
    img: "Ceolburg.png",
  },
  Cerberus: {
    name: "Cerberus",
    url: "Cerberus",
    img: "Cerberus.png",
  },
  "Champion of Scabaras": {
    name: "Champion of Scabaras",
    url: "Champion_of_Scabaras",
    img: "Champion_of_Scabaras.png",
  },
  "Chaos Elemental": {
    name: "Chaos Elemental",
    url: "Chaos_Elemental",
    img: "Chaos_Elemental.png",
  },
  "Chaos Fanatic": {
    name: "Chaos Fanatic",
    url: "Chaos_Fanatic",
    img: "Chaos_Fanatic.png",
  },
  "Chaos Golem": {
    name: "Chaos Golem",
    url: "Chaos_Golem",
    img: "Chaos_Golem.png",
  },
  "Chaos druid": {
    name: "Chaos druid",
    url: "Chaos_druid",
    img: "Chaos_druid.png",
  },
  "Chaos druid warrior": {
    name: "Chaos druid warrior",
    url: "Chaos_druid_warrior",
    img: "Chaos_druid_warrior.png",
  },
  "Chaos dwarf": {
    name: "Chaos dwarf",
    url: "Chaos_dwarf",
    img: "Chaos_dwarf.png",
  },
  "Chaotic death spawn": {
    name: "Chaotic death spawn",
    url: "Chaotic_death_spawn",
    img: "Chaotic_death_spawn_%28magic%29.png",
  },
  "Chasm Crawler": {
    name: "Chasm Crawler",
    url: "Chasm_Crawler",
    img: "Chasm_Crawler.png",
  },
  Chicken: {
    name: "Chicken",
    url: "Chicken",
    img: "Chicken_%283%29.png",
  },
  "Grey Chinchompa": {
    name: "Grey Chinchompa",
    url: "Chinchompa_(Hunter)",
    img: "Chinchompa_%28Hunter%29.png",
  },
  "Choke devil": {
    name: "Choke devil",
    url: "Choke_devil",
    img: "Choke_devil.png",
  },
  "Chompy bird": {
    name: "Chompy bird",
    url: "Chompy_bird",
    img: "Chompy_bird.png",
  },
  Chronozon: {
    name: "Chronozon",
    url: "Chronozon",
    img: "Chronozon.png",
  },
  "City guard": {
    name: "City guard",
    url: "City_guard",
    img: "City_guard.png",
  },
  Clivet: {
    name: "Clivet",
    url: "Clivet",
    img: "Clivet.png",
  },
  Cockathrice: {
    name: "Cockathrice",
    url: "Cockathrice",
    img: "Cockathrice.png",
  },
  Cockatrice: {
    name: "Cockatrice",
    url: "Cockatrice",
    img: "Cockatrice.png",
  },
  "Colonel Radick": {
    name: "Colonel Radick",
    url: "Colonel_Radick",
    img: "Colonel_Radick.png",
  },
  "Colossal Hydra": {
    name: "Colossal Hydra",
    url: "Colossal_Hydra",
    img: "Colossal_Hydra.png",
  },
  "Commander Zilyana": {
    name: "Commander Zilyana",
    url: "Commander_Zilyana",
    img: "Commander_Zilyana.png",
  },
  "Confused barbarian": {
    name: "Confused barbarian",
    url: "Confused_barbarian",
    img: "Confused_barbarian.png",
  },
  "Confusion beast": {
    name: "Confusion beast",
    url: "Confusion_beast",
    img: "Confusion_beast.png",
  },
  "Corporeal Beast": {
    name: "Corporeal Beast",
    url: "Corporeal_Beast",
    img: "Corporeal_Beast.png",
  },
  "Corrupt Lizardman": {
    name: "Corrupt Lizardman",
    url: "Corrupt_Lizardman",
    img: "Corrupt_Lizardman.png",
  },
  "Corrupted Bat": {
    name: "Corrupted Bat",
    url: "Corrupted_Bat",
    img: "Corrupted_Bat.png",
  },
  "Corrupted Bear": {
    name: "Corrupted Bear",
    url: "Corrupted_Bear",
    img: "Corrupted_Bear.png",
  },
  "Corrupted Dark Beast": {
    name: "Corrupted Dark Beast",
    url: "Corrupted_Dark_Beast",
    img: "Corrupted_Dark_Beast.png",
  },
  "Corrupted Dragon": {
    name: "Corrupted Dragon",
    url: "Corrupted_Dragon",
    img: "Corrupted_Dragon.png",
  },
  "Corrupted Hunllef": {
    name: "Corrupted Hunllef",
    url: "Corrupted_Hunllef",
    img: "Corrupted_Hunllef.png",
  },
  "Corrupted Rat": {
    name: "Corrupted Rat",
    url: "Corrupted_Rat",
    img: "Corrupted_Rat.png",
  },
  "Corrupted Scorpion": {
    name: "Corrupted Scorpion",
    url: "Corrupted_Scorpion",
    img: "Corrupted_Scorpion.png",
  },
  "Corrupted Spider": {
    name: "Corrupted Spider",
    url: "Corrupted_Spider",
    img: "Corrupted_Spider.png",
  },
  "Corrupted Unicorn": {
    name: "Corrupted Unicorn",
    url: "Corrupted_Unicorn",
    img: "Corrupted_Unicorn.png",
  },
  "Corrupted Wolf": {
    name: "Corrupted Wolf",
    url: "Corrupted_Wolf",
    img: "Corrupted_Wolf.png",
  },
  "Count Draynor": {
    name: "Count Draynor",
    url: "Count_Draynor",
    img: "Count_Draynor.png",
  },
  "Cow calf": {
    name: "Cow calf",
    url: "Cow_calf",
    img: "Cow_calf.png",
  },
  Cow: {
    name: "Cow",
    url: "Cow",
    img: "Cow_%281%29.png",
  },
  Crab: {
    name: "Crab",
    url: "Crab",
    img: "Crab.png",
  },
  "Crawling Hand": {
    name: "Crawling Hand",
    url: "Crawling_Hand",
    img: "Crawling_Hand_%28level_7%29.png",
  },
  "Crazy archaeologist": {
    name: "Crazy archaeologist",
    url: "Crazy_archaeologist",
    img: "Crazy_archaeologist.png",
  },
  "Crimson sanguisphera": {
    name: "Crimson sanguisphera",
    url: "Crimson_sanguisphera",
    img: "Crimson_sanguisphera.png",
  },
  Crocodile: {
    name: "Crocodile",
    url: "Crocodile",
    img: "Crocodile.png",
  },
  "ToA Crocodile": {
    name: "ToA Crocodile",
    url: "Crocodile_(Tombs_of_Amascut)",
    img: "Crocodile_%28Tombs_of_Amascut%29.png",
  },
  Cruor: {
    name: "Cruor",
    url: "Cruor",
    img: "Cruor.png",
  },
  "Crushing hand": {
    name: "Crushing hand",
    url: "Crushing_hand",
    img: "Crushing_hand.png",
  },
  "Crypt rat": {
    name: "Crypt rat",
    url: "Crypt_rat",
    img: "Crypt_rat.png",
  },
  "Crypt spider": {
    name: "Crypt spider",
    url: "Crypt_spider",
    img: "Crypt_spider.png",
  },
  "Crystal impling": {
    name: "Crystal impling",
    url: "Crystal_impling",
    img: "Crystal_impling.png",
  },
  "Crystalline Bat": {
    name: "Crystalline Bat",
    url: "Crystalline_Bat",
    img: "Crystalline_Bat.png",
  },
  "Crystalline Bear": {
    name: "Crystalline Bear",
    url: "Crystalline_Bear",
    img: "Crystalline_Bear.png",
  },
  "Crystalline Dark Beast": {
    name: "Crystalline Dark Beast",
    url: "Crystalline_Dark_Beast",
    img: "Crystalline_Dark_Beast.png",
  },
  "Crystalline Dragon": {
    name: "Crystalline Dragon",
    url: "Crystalline_Dragon",
    img: "Crystalline_Dragon.png",
  },
  "Crystalline Hunllef": {
    name: "Crystalline Hunllef",
    url: "Crystalline_Hunllef",
    img: "Crystalline_Hunllef.png",
  },
  "Crystalline Rat": {
    name: "Crystalline Rat",
    url: "Crystalline_Rat",
    img: "Crystalline_Rat.png",
  },
  "Crystalline Scorpion": {
    name: "Crystalline Scorpion",
    url: "Crystalline_Scorpion",
    img: "Crystalline_Scorpion.png",
  },
  "Crystalline Spider": {
    name: "Crystalline Spider",
    url: "Crystalline_Spider",
    img: "Crystalline_Spider.png",
  },
  "Crystalline Unicorn": {
    name: "Crystalline Unicorn",
    url: "Crystalline_Unicorn",
    img: "Crystalline_Unicorn.png",
  },
  "Crystalline Wolf": {
    name: "Crystalline Wolf",
    url: "Crystalline_Wolf",
    img: "Crystalline_Wolf.png",
  },
  Cuffs: {
    name: "Cuffs",
    url: "Cuffs",
    img: "Cuffs.png",
  },
  Culinaromancer: {
    name: "Culinaromancer",
    url: "Culinaromancer",
    img: "Culinaromancer.png",
  },
  Cultist: {
    name: "Cultist",
    url: "Cultist",
    img: "Cultist.png",
  },
  "Cursed Baboon": {
    name: "Cursed Baboon",
    url: "Cursed_Baboon",
    img: "Cursed_Baboon.png",
  },
  Cuthbert: {
    name: "Cuthbert",
    url: "Cuthbert",
    img: "Cuthbert.png",
  },
  Cyclops: {
    name: "Cyclops",
    url: "Cyclops",
    img: "Cyclops.png",
  },
  "Ithoi the Navigator": {
    name: "Ithoi the Navigator",
    url: "Ithoi_the_Navigator",
    img: "Ithoi_the_Navigator.png",
  },
  Dad: {
    name: "Dad",
    url: "Dad",
    img: "Dad.png",
  },
  "Dagannoth Prime": {
    name: "Dagannoth Prime",
    url: "Dagannoth_Prime",
    img: "Dagannoth_Prime.png",
  },
  "Dagannoth Rex": {
    name: "Dagannoth Rex",
    url: "Dagannoth_Rex",
    img: "Dagannoth_Rex.png",
  },
  "Dagannoth Supreme": {
    name: "Dagannoth Supreme",
    url: "Dagannoth_Supreme",
    img: "Dagannoth_Supreme.png",
  },
  "Dagannoth fledgeling": {
    name: "Dagannoth fledgeling",
    url: "Dagannoth_fledgeling",
    img: "Dagannoth_fledgeling.png",
  },
  "Dagannoth mother": {
    name: "Dagannoth mother",
    url: "Dagannoth_mother",
    img: "Dagannoth_mother_white.png",
  },
  "Dagannoth spawn": {
    name: "Dagannoth spawn",
    url: "Dagannoth_spawn",
    img: "Dagannoth_spawn.png",
  },
  Dagannoth: {
    name: "Dagannoth",
    url: "Dagannoth",
    img: "Dagannoth.png",
  },
  "Damien Leucurte": {
    name: "Damien Leucurte",
    url: "Damien_Leucurte",
    img: "Damien_Leucurte.png",
  },
  Damis: {
    name: "Damis",
    url: "Damis",
    img: "Damis.png",
  },
  "Dark Ankou": {
    name: "Dark Ankou",
    url: "Dark_Ankou",
    img: "Dark_Ankou.png",
  },
  "Dark beast": {
    name: "Dark beast",
    url: "Dark_beast",
    img: "Dark_beast.png",
  },
  "Dark energy core": {
    name: "Dark energy core",
    url: "Dark_energy_core",
    img: "Dark_energy_core.png",
  },
  "Dark warrior": {
    name: "Dark warrior",
    url: "Dark_warrior",
    img: "Dark_warrior.png",
  },
  "Dark wizard": {
    name: "Dark wizard",
    url: "Dark_wizard",
    img: "Dark_wizard.png",
  },
  Dawn: {
    name: "Dawn",
    url: "Dawn",
    img: "Dawn.png",
  },
  "Deadly red spider": {
    name: "Deadly red spider",
    url: "Deadly_red_spider",
    img: "Deadly_red_spider.png",
  },
  "Death spawn": {
    name: "Death spawn",
    url: "Death_spawn",
    img: "Death_spawn.png",
  },
  "Death wing": {
    name: "Death wing",
    url: "Death_wing",
    img: "Death_wing.png",
  },
  "Deathly mage": {
    name: "Deathly mage",
    url: "Deathly_mage",
    img: "Deathly_mage.png",
  },
  "Deathly ranger": {
    name: "Deathly ranger",
    url: "Deathly_ranger",
    img: "Deathly_ranger.png",
  },
  Defiler: {
    name: "Defiler",
    url: "Defiler",
    img: "Defiler.png",
  },
  Delrith: {
    name: "Delrith",
    url: "Delrith",
    img: "Delrith.png",
  },
  "Demonic gorilla": {
    name: "Demonic gorilla",
    url: "Demonic_gorilla",
    img: "Demonic_gorilla.png",
  },
  "Deranged archaeologist": {
    name: "Deranged archaeologist",
    url: "Deranged_archaeologist",
    img: "Deranged_archaeologist.png",
  },
  Derwen: {
    name: "Derwen",
    url: "Derwen",
    img: "Derwen.png",
  },
  "Desert Lizard": {
    name: "Desert Lizard",
    url: "Desert_Lizard",
    img: "Desert_Lizard_%28green%29.png",
  },
  "Desert Wolf": {
    name: "Desert Wolf",
    url: "Desert_Wolf",
    img: "Desert_Wolf.png",
  },
  Dessourt: {
    name: "Dessourt",
    url: "Dessourt",
    img: "Dessourt.png",
  },
  Dessous: {
    name: "Dessous",
    url: "Dessous",
    img: "Dessous.png",
  },
  "Deviant spectre": {
    name: "Deviant spectre",
    url: "Deviant_spectre",
    img: "Deviant_spectre.png",
  },
  "Dharok the Wretched": {
    name: "Dharok the Wretched",
    url: "Dharok_the_Wretched",
    img: "Dharok_the_Wretched.png",
  },
  "Dire Wolf": {
    name: "Dire Wolf",
    url: "Dire_Wolf",
    img: "Dire_Wolf.png",
  },
  "Disciple of Iban": {
    name: "Disciple of Iban",
    url: "Disciple_of_Iban",
    img: "Disciple_of_Iban.png",
  },
  "Don't Know What": {
    name: "Don't Know What",
    url: "Don%27t_Know_What",
    img: "Don%27t_Know_What.png",
  },
  "Donny the lad": {
    name: "Donny the lad",
    url: "Donny_the_lad",
    img: "Donny_the_lad.png",
  },
  Doomion: {
    name: "Doomion",
    url: "Doomion",
    img: "Doomion.png",
  },
  "Double agent": {
    name: "Double agent",
    url: "Double_agent",
    img: "Uri.png",
  },
  "Dragon impling": {
    name: "Dragon impling",
    url: "Dragon_impling",
    img: "Dragon_impling.png",
  },
  Drake: {
    name: "Drake",
    url: "Drake",
    img: "Drake.png",
  },
  Druid: {
    name: "Druid",
    url: "Druid",
    img: "Druid.png",
  },
  "Drunken man": {
    name: "Drunken man",
    url: "Drunken_man",
    img: "Drunken_man.png",
  },
  Duck: {
    name: "Duck",
    url: "Duck",
    img: "Duck.png",
  },
  Duckling: {
    name: "Duckling",
    url: "Duckling",
    img: "Duckling.png",
  },
  Duke: {
    name: "Duke",
    url: "Duke",
    img: "Duke.png",
  },
  "Duke Sucellus": {
    name: "Duke Sucellus",
    url: "Duke_Sucellus",
    img: "Duke_Sucellus.png",
  },
  "Dungeon rat": {
    name: "Dungeon rat",
    url: "Dungeon_rat",
    img: "Dungeon_rat.png",
  },
  Dusk: {
    name: "Dusk",
    url: "Dusk",
    img: "Dusk.png",
  },
  "Dust devil": {
    name: "Dust devil",
    url: "Dust_devil",
    img: "Dust_devil.png",
  },
  "Dwarf gang member": {
    name: "Dwarf gang member",
    url: "Dwarf_gang_member",
    img: "Dwarf_gang_member_%281%29.png",
  },
  Dwarf: {
    name: "Dwarf",
    url: "Dwarf",
    img: "Dwarf.png",
  },
  Eadburg: {
    name: "Eadburg",
    url: "Eadburg",
    img: "Eadburg.png",
  },
  "Earth Warrior Champion": {
    name: "Earth Warrior Champion",
    url: "Earth_Warrior_Champion",
    img: "Earth_Warrior_Champion.png",
  },
  "Earth elemental": {
    name: "Earth elemental",
    url: "Earth_elemental",
    img: "Earth_elemental.png",
  },
  "Earth impling": {
    name: "Earth impling",
    url: "Earth_impling",
    img: "Earth_impling.png",
  },
  "Earth warrior": {
    name: "Earth warrior",
    url: "Earth_warrior",
    img: "Earth_warrior.png",
  },
  "Earth wizard": {
    name: "Earth wizard",
    url: "Earth_wizard",
    img: "Earth_wizard.png",
  },
  "Eclectic impling": {
    name: "Eclectic impling",
    url: "Eclectic_impling",
    img: "Eclectic_impling.png",
  },
  "Eclipse Moon": {
    name: "Eclipse Moon",
    url: "Eclipse_Moon",
    img: "Eclipse_Moon.png",
  },
  Eduard: {
    name: "Eduard",
    url: "Eduard",
    img: "Eduard.png",
  },
  Einar: {
    name: "Einar",
    url: "Einar",
    img: "Einar.png",
  },
  "Elder Chaos druid": {
    name: "Elder Chaos druid",
    url: "Elder_Chaos_druid",
    img: "Elder_Chaos_druid.png",
  },
  "Elf Archer": {
    name: "Elf Archer",
    url: "Elf_Archer",
    img: "Elf_Archer_%281%29.png",
  },
  "Elf Warrior": {
    name: "Elf Warrior",
    url: "Elf_Warrior",
    img: "Elf_Warrior_%281%29.png",
  },
  "Elidinis' Warden": {
    name: "Elidinis' Warden",
    url: "Elidinis%27_Warden",
    img: "Elidinis%27_Warden_%28level-489%29.png",
  },
  Elvarg: {
    name: "Elvarg",
    url: "Elvarg",
    img: "Elvarg.png",
  },
  "Embertailed jerboa": {
    name: "Embertailed jerboa",
    url: "Embertailed_jerboa",
    img: "Embertailed_jerboa.png",
  },
  "Enclave guard": {
    name: "Enclave guard",
    url: "Enclave_guard",
    img: "Enclave_guard.png",
  },
  "Energy sprite": {
    name: "Energy sprite",
    url: "Energy_sprite",
    img: "Energy_sprite.png",
  },
  "Enormous Tentacle": {
    name: "Enormous Tentacle",
    url: "Enormous_Tentacle",
    img: "Enormous_Tentacle.png",
  },
  "Enraged Boar": {
    name: "Enraged Boar",
    url: "Enraged_Boar",
    img: "Enraged_Boar.png",
  },
  "Enraged barbarian spirit": {
    name: "Enraged barbarian spirit",
    url: "Enraged_barbarian_spirit",
    img: "Enraged_barbarian_spirit.png",
  },
  Ent: {
    name: "Ent",
    url: "Ent",
    img: "Ent_%28lv_86%29.png",
  },
  "Entrana firebird": {
    name: "Entrana firebird",
    url: "Entrana_firebird",
    img: "Entrana_firebird.png",
  },
  "Essence impling": {
    name: "Essence impling",
    url: "Essence_impling",
    img: "Essence_impling.png",
  },
  Essyllt: {
    name: "Essyllt",
    url: "Essyllt",
    img: "Essyllt_%28Song_of_the_Elves%29.png",
  },
  Evelot: {
    name: "Evelot",
    url: "Evelot",
    img: "Evelot.png",
  },
  "Evil Chicken": {
    name: "Evil Chicken",
    url: "Evil_Chicken",
    img: "Evil_Chicken.png",
  },
  "Evil Creature": {
    name: "Evil Creature",
    url: "Evil_Creature",
    img: "Evil_Creature.png",
  },
  "Evil spirit": {
    name: "Evil spirit",
    url: "Evil_spirit",
    img: "Evil_spirit.png",
  },
  "Experiment No.2": {
    name: "Experiment No.2",
    url: "Experiment_No.2",
    img: "Experiment_No.2.png",
  },
  Experiment: {
    name: "Experiment",
    url: "Experiment",
    img: "Experiment_%28level_25%29.png",
  },
  Fareed: {
    name: "Fareed",
    url: "Fareed",
    img: "Fareed.png",
  },
  Farmer: {
    name: "Farmer",
    url: "Farmer",
    img: "Farmer_%28khaki_shirt%2C_bracers%29.png",
  },
  "Fear reaper": {
    name: "Fear reaper",
    url: "Fear_reaper",
    img: "Fear_reaper_%28Level_42%29.png",
  },
  "Feral Vampyre": {
    name: "Feral Vampyre",
    url: "Feral_Vampyre",
    img: "Feral_Vampyre.png",
  },
  "Ferocious barbarian spirit": {
    name: "Ferocious barbarian spirit",
    url: "Ferocious_barbarian_spirit",
    img: "Ferocious_barbarian_spirit.png",
  },
  "Fever spider": {
    name: "Fever spider",
    url: "Fever_spider",
    img: "Fever_spider.png",
  },
  "Fire Warrior of Lesarkus": {
    name: "Fire Warrior of Lesarkus",
    url: "Fire_Warrior_of_Lesarkus",
    img: "Fire_Warrior_of_Lesarkus.png",
  },
  "Fire elemental": {
    name: "Fire elemental",
    url: "Fire_elemental",
    img: "Fire_elemental.png",
  },
  "Fire giant": {
    name: "Fire giant",
    url: "Fire_giant",
    img: "Fire_giant.png",
  },
  "Fire wizard": {
    name: "Fire wizard",
    url: "Fire_wizard",
    img: "Fire_wizard.png",
  },
  "Fiyr Shade": {
    name: "Fiyr Shade",
    url: "Fiyr_Shade",
    img: "Fiyr_Shade.png",
  },
  Flambeed: {
    name: "Flambeed",
    url: "Flambeed",
    img: "Flambeed.png",
  },
  "Flaming pyrelord": {
    name: "Flaming pyrelord",
    url: "Flaming_pyrelord",
    img: "Flaming_pyrelord.png",
  },
  "Flawed Golem": {
    name: "Flawed Golem",
    url: "Flawed_Golem",
    img: "Flawed_Golem.png",
  },
  "Flesh Crawler": {
    name: "Flesh Crawler",
    url: "Flesh_Crawler",
    img: "Flesh_Crawler.png",
  },
  "Flight Kilisa": {
    name: "Flight Kilisa",
    url: "Flight_Kilisa",
    img: "Flight_Kilisa.png",
  },
  "Flockleader Geerin": {
    name: "Flockleader Geerin",
    url: "Flockleader_Geerin",
    img: "Flockleader_Geerin.png",
  },
  Flower: {
    name: "Flower",
    url: "Flower",
    img: "Flower.png",
  },
  Foreman: {
    name: "Foreman",
    url: "Foreman",
    img: "Foreman.png",
  },
  "Guild Forester": {
    name: "Guild Forester",
    url: "Forester_(Woodcutting_Guild)",
    img: "Forester.png",
  },
  "Forgotten Soul": {
    name: "Forgotten Soul",
    url: "Forgotten_Soul",
    img: "Forgotten_Soul.png",
  },
  "Fortress Guard": {
    name: "Fortress Guard",
    url: "Fortress_Guard",
    img: "Fortress_Guard.png",
  },
  Fox: {
    name: "Fox",
    url: "Fox",
    img: "Fox.png",
  },
  "Fragment of Seren": {
    name: "Fragment of Seren",
    url: "Fragment_of_Seren",
    img: "Fragment_of_Seren.png",
  },
  Freidir: {
    name: "Freidir",
    url: "Freidir",
    img: "Freidir.png",
  },
  "Fremennik warband archer": {
    name: "Fremennik warband archer",
    url: "Fremennik_warband_archer",
    img: "Fremennik_warband_archer.png",
  },
  "Fremennik warband berserker": {
    name: "Fremennik warband berserker",
    url: "Fremennik_warband_berserker",
    img: "Fremennik_warband_berserker.png",
  },
  "Fremennik warband seer": {
    name: "Fremennik warband seer",
    url: "Fremennik_warband_seer",
    img: "Fremennik_warband_seer.png",
  },
  Frogeel: {
    name: "Frogeel",
    url: "Frogeel",
    img: "Frogeel.png",
  },
  Fumus: {
    name: "Fumus",
    url: "Fumus",
    img: "Fumus.png",
  },
  Gadderanks: {
    name: "Gadderanks",
    url: "Gadderanks",
    img: "Gadderanks.png",
  },
  Galina: {
    name: "Galina",
    url: "Galina",
    img: "Galina.png",
  },
  Galvek: {
    name: "Galvek",
    url: "Galvek",
    img: "Galvek.png",
  },
  "Gang boss": {
    name: "Gang boss",
    url: "Gang_boss",
    img: "Gang_boss.png",
  },
  Gangster: {
    name: "Gangster",
    url: "Gangster",
    img: "Gangster_%28level_45%2C_1%29.png",
  },
  Gardener: {
    name: "Gardener",
    url: "Gardener",
    img: "Gardener.png",
  },
  Gargoyle: {
    name: "Gargoyle",
    url: "Gargoyle",
    img: "Gargoyle.png",
  },
  "Gelatinnoth Mother": {
    name: "Gelatinnoth Mother",
    url: "Gelatinnoth_Mother",
    img: "Gelatinnoth_Mother_%28air%29.png",
  },
  "General Graardor": {
    name: "General Graardor",
    url: "General_Graardor",
    img: "General_Graardor.png",
  },
  "General Khazard": {
    name: "General Khazard",
    url: "General_Khazard",
    img: "General_Khazard.png",
  },
  Georgy: {
    name: "Georgy",
    url: "Georgy",
    img: "Georgy.png",
  },
  Ghast: {
    name: "Ghast",
    url: "Ghast",
    img: "Ghast_%28Level_30%29.png",
  },
  "Scorpius Ghost": {
    name: "Scorpius Ghost",
    url: "Ghost_(Grave_of_Scorpius)",
    img: "Ghost_%28Grave_of_Scorpius%29.png",
  },
  "Lassar Ghost": {
    name: "Lassar Ghost",
    url: "Ghost_(Lassar_Undercity)",
    img: "Ghost_%28Lassar_Undercity%29.png",
  },
  Ghost: {
    name: "Ghost",
    url: "Ghost",
    img: "Ghost.png",
  },
  Ghoul: {
    name: "Ghoul",
    url: "Ghoul",
    img: "Ghoul.png",
  },
  "Ghoul Champion": {
    name: "Ghoul Champion",
    url: "Ghoul_Champion",
    img: "Ghoul_Champion.png",
  },
  "Giant Champion": {
    name: "Giant Champion",
    url: "Giant_Champion",
    img: "Giant_Champion.png",
  },
  "Giant Mole": {
    name: "Giant Mole",
    url: "Giant_Mole",
    img: "Giant_Mole.png",
  },
  "Giant Roc": {
    name: "Giant Roc",
    url: "Giant_Roc",
    img: "Giant_Roc.png",
  },
  "Giant Rock Crab": {
    name: "Giant Rock Crab",
    url: "Giant_Rock_Crab",
    img: "Giant_Rock_Crab.png",
  },
  "Giant Scarab": {
    name: "Giant Scarab",
    url: "Giant_Scarab",
    img: "Giant_Scarab.png",
  },
  "Giant Sea Snake": {
    name: "Giant Sea Snake",
    url: "Giant_Sea_Snake",
    img: "Giant_Sea_Snake.png",
  },
  "Giant bat": {
    name: "Giant bat",
    url: "Giant_bat",
    img: "Giant_bat.png",
  },
  "Giant crypt rat": {
    name: "Giant crypt rat",
    url: "Giant_crypt_rat",
    img: "Giant_crypt_rat.png",
  },
  "Giant crypt spider": {
    name: "Giant crypt spider",
    url: "Giant_crypt_spider",
    img: "Giant_crypt_spider.png",
  },
  "Giant frog": {
    name: "Giant frog",
    url: "Giant_frog",
    img: "Giant_frog.png",
  },
  "Giant goblin": {
    name: "Giant goblin",
    url: "Giant_goblin",
    img: "Giant_goblin.png",
  },
  "Giant lobster": {
    name: "Giant lobster",
    url: "Giant_lobster",
    img: "Giant_lobster.png",
  },
  "Giant mosquito": {
    name: "Giant mosquito",
    url: "Giant_mosquito",
    img: "Giant_mosquito.png",
  },
  "Giant rat": {
    name: "Giant rat",
    url: "Giant_rat",
    img: "Giant_rat.png",
  },
  "Giant rockslug": {
    name: "Giant rockslug",
    url: "Giant_rockslug",
    img: "Giant_rockslug.png",
  },
  "Giant snail": {
    name: "Giant snail",
    url: "Giant_snail",
    img: "Giant_snail.png",
  },
  "Giant spider": {
    name: "Giant spider",
    url: "Giant_spider",
    img: "Giant_spider_%28Level_2%29.png",
  },
  Glacies: {
    name: "Glacies",
    url: "Glacies",
    img: "Glacies.png",
  },
  Glod: {
    name: "Glod",
    url: "Glod",
    img: "Glod.png",
  },
  Glough: {
    name: "Glough",
    url: "Glough",
    img: "Glough.png",
  },
  "Glowing crystal": {
    name: "Glowing crystal",
    url: "Glowing_crystal",
    img: "Glowing_crystal.png",
  },
  "Gnome Archer": {
    name: "Gnome Archer",
    url: "Gnome_Archer",
    img: "Gnome_Archer.png",
  },
  "Gnome Driver": {
    name: "Gnome Driver",
    url: "Gnome_Driver",
    img: "Gnome_Driver.png",
  },
  "Gnome Mage": {
    name: "Gnome Mage",
    url: "Gnome_Mage",
    img: "Gnome_Mage.png",
  },
  "Gnome child": {
    name: "Gnome child",
    url: "Gnome_child",
    img: "Gnome_child.png",
  },
  "Gnome guard": {
    name: "Gnome guard",
    url: "Gnome_guard",
    img: "Gnome_guard_%28sword%29.png",
  },
  "Gnome troop": {
    name: "Gnome troop",
    url: "Gnome_troop",
    img: "Gnome_troop.png",
  },
  "Gnome woman": {
    name: "Gnome woman",
    url: "Gnome_woman",
    img: "Gnome_woman.png",
  },
  Gnome: {
    name: "Gnome",
    url: "Gnome",
    img: "Gnome.png",
  },
  Goat: {
    name: "Goat",
    url: "Goat",
    img: "Goat_%28tan%29.png",
  },
  "Goblin Villager": {
    name: "Goblin Villager",
    url: "Goblin_(Goblin_Village)",
    img: "Goblin_%28red%29.png",
  },
  "Goblin Champion": {
    name: "Goblin Champion",
    url: "Goblin_Champion",
    img: "Goblin_Champion.png",
  },
  "Goblin guard": {
    name: "Goblin guard",
    url: "Goblin_guard",
    img: "Goblin_guard.png",
  },
  Goblin: {
    name: "Goblin",
    url: "Goblin",
    img: "Goblin.png",
  },
  "Zalcano Golem": {
    name: "Zalcano Golem",
    url: "Golem_(Zalcano)",
    img: "Golem_%28Zalcano%29.png",
  },
  Gorad: {
    name: "Gorad",
    url: "Gorad",
    img: "Gorad.png",
  },
  Gorak: {
    name: "Gorak",
    url: "Gorak",
    img: "Gorak.png",
  },
  "Gourmet impling": {
    name: "Gourmet impling",
    url: "Gourmet_impling",
    img: "Gourmet_impling.png",
  },
  "Grave scorpion": {
    name: "Grave scorpion",
    url: "Grave_scorpion",
    img: "Grave_scorpion.png",
  },
  "Great Olm": {
    name: "Great Olm",
    url: "Great_Olm",
    img: "Great_Olm.png",
  },
  "Greater Nechryael": {
    name: "Greater Nechryael",
    url: "Greater_Nechryael",
    img: "Greater_Nechryael.png",
  },
  "Greater Skeleton Hellhound": {
    name: "Greater Skeleton Hellhound",
    url: "Greater_Skeleton_Hellhound_(Vet%27ion)",
    img: "Greater_Skeleton_Hellhound_%28Vet%27ion%29.png",
  },
  "Greater abyssal demon": {
    name: "Greater abyssal demon",
    url: "Greater_abyssal_demon",
    img: "Greater_abyssal_demon.png",
  },
  "Greater demon": {
    name: "Greater demon",
    url: "Greater_demon",
    img: "Greater_demon.png",
  },
  "Green dragon": {
    name: "Green dragon",
    url: "Green_dragon",
    img: "Green_dragon.png",
  },
  "Grey golem": {
    name: "Grey golem",
    url: "Grey_golem",
    img: "Grey_golem.png",
  },
  "Grimy Lizard": {
    name: "Grimy Lizard",
    url: "Grimy_Lizard",
    img: "Grimy_Lizard.png",
  },
  Grip: {
    name: "Grip",
    url: "Grip",
    img: "Grip.png",
  },
  "Grizzly bear cub": {
    name: "Grizzly bear cub",
    url: "Grizzly_bear_cub",
    img: "Grizzly_bear_cub_%28level_33%29.png",
  },
  "Grizzly bear": {
    name: "Grizzly bear",
    url: "Grizzly_bear",
    img: "Grizzly_bear_%28level_21%29.png",
  },
  Growler: {
    name: "Growler",
    url: "Growler",
    img: "Growler.png",
  },
  Growthling: {
    name: "Growthling",
    url: "Growthling",
    img: "Growthling.png",
  },
  "Burthorpe Guard": {
    name: "Burthorpe Guard",
    url: "Guard_(Burthorpe)",
    img: "Guard_%28Burthorpe%29.png",
  },
  "Cave goblin Guard": {
    name: "Cave goblin Guard",
    url: "Guard_(Cave_goblin)",
    img: "Guard_%28Cave_goblin_with_bone_club%29.png",
  },
  "Mining Camp Guard": {
    name: "Mining Camp Guard",
    url: "Guard_(Desert_Mining_Camp)",
    img: "Guard_%28Desert_Mining_Camp%29.png",
  },
  "H.A.M. Storeroom Guard": {
    name: "H.A.M. Storeroom Guard",
    url: "Guard_(H.A.M._Storerooms)",
    img: "Guard_%28Death_to_the_Dorgeshuun%29.png",
  },
  "Hosidius Guard": {
    name: "Hosidius Guard",
    url: "Guard_(Hosidius)",
    img: "Guard_%28Hosidius%2C_bow%29.png",
  },
  "Port Sarim Jail Guard": {
    name: "Port Sarim Jail Guard",
    url: "Guard_(Port_Sarim_Jail)",
    img: "Guard_%28Port_Sarim%2C_1%29.png",
  },
  "Prifddinas Guard": {
    name: "Prifddinas Guard",
    url: "Guard_(Prifddinas)",
    img: "Guard_%28Prifddinas%2C_1%29.png",
  },
  "Ranging Guild Guard": {
    name: "Ranging Guild Guard",
    url: "Guard_(Ranging_Guild)",
    img: "Guard_%28Ranging_Guild%29.png",
  },
  "Shayzien Guard": {
    name: "Shayzien Guard",
    url: "Guard_(Shayzien)",
    img: "Guard_%28Shayzien%29.png",
  },
  "Varlamore Guard": {
    name: "Varlamore Guard",
    url: "Guard_(Varlamore)",
    img: "Guard_%28Varlamore%29.png",
  },
  "Dwarf Guard": {
    name: "Dwarf Guard",
    url: "Guard_(dwarf)",
    img: "Guard_%28dwarf%29.png",
  },
  "Guard Bandit": {
    name: "Guard Bandit",
    url: "Guard_Bandit",
    img: "Guard_Bandit.png",
  },
  "Guard dog": {
    name: "Guard dog",
    url: "Guard_dog",
    img: "Guard_dog.png",
  },
  Guard: {
    name: "Guard",
    url: "Guard",
    img: "Guard_%28Edgeville%29.png",
  },
  "CoX Guardian": {
    name: "CoX Guardian",
    url: "Guardian_(Chambers_of_Xeric)",
    img: "Guardian_%28Chambers_of_Xeric%2C_female%29.png",
  },
  "Guardian Drake": {
    name: "Guardian Drake",
    url: "Guardian_Drake",
    img: "Guardian_Drake.png",
  },
  "Guardian of Armadyl": {
    name: "Guardian of Armadyl",
    url: "Guardian_of_Armadyl",
    img: "Guardian_of_Armadyl_%28male%29.png",
  },
  "Gunthor the brave": {
    name: "Gunthor the brave",
    url: "Gunthor_the_brave",
    img: "Gunthor_the_brave.png",
  },
  "Guthan the Infested": {
    name: "Guthan the Infested",
    url: "Guthan_the_Infested",
    img: "Guthan_the_Infested.png",
  },
  "H.A.M. Archer": {
    name: "H.A.M. Archer",
    url: "H.A.M._Archer",
    img: "H.A.M._Archer.png",
  },
  "H.A.M. Guard": {
    name: "H.A.M. Guard",
    url: "H.A.M._Guard",
    img: "H.A.M._Guard_%28level_12%29.png",
  },
  "H.A.M. Mage": {
    name: "H.A.M. Mage",
    url: "H.A.M._Mage",
    img: "H.A.M._Mage.png",
  },
  Halla: {
    name: "Halla",
    url: "Halla_(Miscellania)",
    img: "Halla_%28Miscellania%29.png",
  },
  "Harpie Bug Swarm": {
    name: "Harpie Bug Swarm",
    url: "Harpie_Bug_Swarm",
    img: "Harpie_Bug_Swarm.png",
  },
  "Hazeel Cultist": {
    name: "Hazeel Cultist",
    url: "Hazeel_Cultist",
    img: "Hazeel_Cultist_%28male%29.png",
  },
  "Temple Trekking Head": {
    name: "Temple Trekking Head",
    url: "Head_(Temple_Trekking)",
    img: "Head_%28Temple_Trekking%29.png",
  },
  "Head Guard": {
    name: "Head Guard",
    url: "Head_Guard",
    img: "Head_Guard.png",
  },
  "Head Menaphite Guard": {
    name: "Head Menaphite Guard",
    url: "Head_Menaphite_Guard",
    img: "Head_Menaphite_Guard.png",
  },
  "Head Thief": {
    name: "Head Thief",
    url: "Head_Thief",
    img: "Head_Thief.png",
  },
  "Headless Beast": {
    name: "Headless Beast",
    url: "Headless_Beast",
    img: "Headless_Beast.png",
  },
  Hellhound: {
    name: "Hellhound",
    url: "Hellhound",
    img: "Hellhound.png",
  },
  Hengel: {
    name: "Hengel",
    url: "Hengel",
    img: "Hengel.png",
  },
  Hero: {
    name: "Hero",
    url: "Hero",
    img: "Hero.png",
  },
  Hespori: {
    name: "Hespori",
    url: "Hespori",
    img: "Hespori.png",
  },
  Highwayman: {
    name: "Highwayman",
    url: "Highwayman",
    img: "Highwayman.png",
  },
  "Plateau Hill Giant": {
    name: "Plateau Hill Giant",
    url: "Hill_Giant_(Giants%27_Plateau)",
    img: "Hill_Giant_%28Giants%27_Plateau%2C_1%29.png",
  },
  "Kourend Hill Giant": {
    name: "Kourend Hill Giant",
    url: "Hill_Giant_(Kourend)",
    img: "Hill_Giant_%28Kourend%29.png",
  },
  "Varlamore Hill Giant": {
    name: "Varlamore Hill Giant",
    url: "Hill_Giant_(Varlamore)",
    img: "Hill_Giant_%28Varlamore%2C_2%29.png",
  },
  "Hill Giant": {
    name: "Hill Giant",
    url: "Hill_Giant",
    img: "Hill_Giant.png",
  },
  "Hobgoblin Champion": {
    name: "Hobgoblin Champion",
    url: "Hobgoblin_Champion",
    img: "Hobgoblin_Champion.png",
  },
  "Hobgoblin guard": {
    name: "Hobgoblin guard",
    url: "Hobgoblin_guard",
    img: "Hobgoblin_guard.png",
  },
  Hobgoblin: {
    name: "Hobgoblin",
    url: "Hobgoblin",
    img: "Hobgoblin.png",
  },
  Holthion: {
    name: "Holthion",
    url: "Holthion",
    img: "Holthion.png",
  },
  "Hoop Snake": {
    name: "Hoop Snake",
    url: "Hoop_Snake",
    img: "Hoop_Snake.png",
  },
  "Hopeless creature": {
    name: "Hopeless creature",
    url: "Hopeless_creature",
    img: "Hopeless_creature.png",
  },
  "Huge spider": {
    name: "Huge spider",
    url: "Huge_spider",
    img: "Huge_spider_built.png",
  },
  Husk: {
    name: "Husk",
    url: "Husk",
    img: "Husk_%28magic%29.png",
  },
  Hydra: {
    name: "Hydra",
    url: "Hydra",
    img: "Hydra.png",
  },
  Hygd: {
    name: "Hygd",
    url: "Hygd",
    img: "Hygd.png",
  },
  "Wall beast": {
    name: "Wall beast",
    url: "Wall_beast",
    img: "Wall_beast.png",
  },
  "Ice Queen": {
    name: "Ice Queen",
    url: "Ice_Queen",
    img: "Ice_Queen.png",
  },
  "Ice Troll King": {
    name: "Ice Troll King",
    url: "Ice_Troll_King",
    img: "Ice_Troll_King.png",
  },
  "Ice demon": {
    name: "Ice demon",
    url: "Ice_demon",
    img: "Ice_demon.png",
  },
  "Ice giant": {
    name: "Ice giant",
    url: "Ice_giant",
    img: "Ice_giant.png",
  },
  "Ice spider": {
    name: "Ice spider",
    url: "Ice_spider",
    img: "Ice_spider.png",
  },
  "Ice troll grunt": {
    name: "Ice troll grunt",
    url: "Ice_troll_grunt",
    img: "Ice_troll_grunt.png",
  },
  "Ice troll": {
    name: "Ice troll",
    url: "Ice_troll",
    img: "Ice_Troll_%28level_123%29.png",
  },
  "Ice warrior": {
    name: "Ice warrior",
    url: "Ice_warrior",
    img: "Ice_warrior.png",
  },
  "Ice wolf": {
    name: "Ice wolf",
    url: "Ice_wolf",
    img: "Ice_wolf.png",
  },
  Icefiend: {
    name: "Icefiend",
    url: "Icefiend",
    img: "Icefiend.png",
  },
  Icelord: {
    name: "Icelord",
    url: "Icelord",
    img: "Icelord.png",
  },
  "Imp Champion": {
    name: "Imp Champion",
    url: "Imp_Champion",
    img: "Imp_Champion.png",
  },
  Imp: {
    name: "Imp",
    url: "Imp",
    img: "Imp.png",
  },
  Imre: {
    name: "Imre",
    url: "Imre",
    img: "Imre.png",
  },
  "Infernal Mage": {
    name: "Infernal Mage",
    url: "Infernal_Mage",
    img: "Infernal_Mage.png",
  },
  "Infernal pyrelord": {
    name: "Infernal pyrelord",
    url: "Infernal_pyrelord",
    img: "Infernal_pyrelord.png",
  },
  "Insatiable Bloodveld": {
    name: "Insatiable Bloodveld",
    url: "Insatiable_Bloodveld",
    img: "Insatiable_Bloodveld.png",
  },
  "Insatiable mutated Bloodveld": {
    name: "Insatiable mutated Bloodveld",
    url: "Insatiable_mutated_Bloodveld",
    img: "Insatiable_mutated_Bloodveld.png",
  },
  "Invrigar the Necromancer": {
    name: "Invrigar the Necromancer",
    url: "Invrigar_the_Necromancer",
    img: "Invrigar_the_Necromancer.png",
  },
  "Iorwerth Archer": {
    name: "Iorwerth Archer",
    url: "Iorwerth_Archer",
    img: "Iorwerth_Archer_%282%29.png",
  },
  "Iorwerth Warrior": {
    name: "Iorwerth Warrior",
    url: "Iorwerth_Warrior",
    img: "Iorwerth_Warrior_%282%29.png",
  },
  Irina: {
    name: "Irina",
    url: "Irina",
    img: "Irina.png",
  },
  "Iron dragon": {
    name: "Iron dragon",
    url: "Iron_dragon",
    img: "Iron_dragon.png",
  },
  "Irvig Senay": {
    name: "Irvig Senay",
    url: "Irvig_Senay",
    img: "Irvig_Senay.png",
  },
  Jackal: {
    name: "Jackal",
    url: "Jackal",
    img: "Jackal.png",
  },
  Jaguar: {
    name: "Jaguar",
    url: "Jaguar",
    img: "Jaguar.png",
  },
  "Jaguar warrior": {
    name: "Jaguar warrior",
    url: "Jaguar_warrior",
    img: "Jaguar_warrior.png",
  },
  "Jail guard": {
    name: "Jail guard",
    url: "Jail_guard",
    img: "Jail_guard_%281%29.png",
  },
  Jailer: {
    name: "Jailer",
    url: "Jailer",
    img: "Jailer.png",
  },
  Jake: {
    name: "Jake",
    url: "Jake",
    img: "Jake.png",
  },
  "Jal-AkRek-Ket": {
    name: "Jal-AkRek-Ket",
    url: "Jal-AkRek-Ket",
    img: "Jal-AkRek-Ket.png",
  },
  "Jal-AkRek-Mej": {
    name: "Jal-AkRek-Mej",
    url: "Jal-AkRek-Mej",
    img: "Jal-AkRek-Mej.png",
  },
  "Jal-AkRek-Xil": {
    name: "Jal-AkRek-Xil",
    url: "Jal-AkRek-Xil",
    img: "Jal-AkRek-Xil.png",
  },
  "Jal-ImKot": {
    name: "Jal-ImKot",
    url: "Jal-ImKot",
    img: "Jal-ImKot.png",
  },
  "Jal-MejJak": {
    name: "Jal-MejJak",
    url: "Jal-MejJak",
    img: "Jal-MejJak.png",
  },
  "Jal-MejRah": {
    name: "Jal-MejRah",
    url: "Jal-MejRah",
    img: "Jal-MejRah.png",
  },
  "Jal-Nib": {
    name: "Jal-Nib",
    url: "Jal-Nib",
    img: "Jal-Nib.png",
  },
  "Jal-Xil": {
    name: "Jal-Xil",
    url: "Jal-Xil",
    img: "Jal-Xil.png",
  },
  "Jal-Zek": {
    name: "Jal-Zek",
    url: "Jal-Zek",
    img: "Jal-Zek.png",
  },
  "JalTok-Jad": {
    name: "JalTok-Jad",
    url: "JalTok-Jad",
    img: "JalTok-Jad.png",
  },
  "Javelin Colossus": {
    name: "Javelin Colossus",
    url: "Javelin_Colossus",
    img: "Javelin_Colossus.png",
  },
  Jeff: {
    name: "Jeff",
    url: "Jeff",
    img: "Jeff.png",
  },
  Jelly: {
    name: "Jelly",
    url: "Jelly",
    img: "Jelly.png",
  },
  Jennella: {
    name: "Jennella",
    url: "Jennella",
    img: "Jennella.png",
  },
  Jhallan: {
    name: "Jhallan",
    url: "Jhallan",
    img: "Jhallan.png",
  },
  "Jogre Champion": {
    name: "Jogre Champion",
    url: "Jogre_Champion",
    img: "Jogre_Champion.png",
  },
  Jogre: {
    name: "Jogre",
    url: "Jogre",
    img: "Jogre.png",
  },
  "Jonny the beard": {
    name: "Jonny the beard",
    url: "Jonny_the_beard",
    img: "Jonny_the_beard.png",
  },
  Joseph: {
    name: "Joseph",
    url: "Joseph",
    img: "Joseph.png",
  },
  "Jubbly bird": {
    name: "Jubbly bird",
    url: "Jubbly_bird",
    img: "Jubbly_bird.png",
  },
  Jubster: {
    name: "Jubster",
    url: "Jubster",
    img: "Jubster.png",
  },
  "Judge of Yama": {
    name: "Judge of Yama",
    url: "Judge_of_Yama",
    img: "Judge_of_Yama.png",
  },
  "Jungle Demon": {
    name: "Jungle Demon",
    url: "Jungle_Demon",
    img: "Jungle_Demon.png",
  },
  "Jungle Wolf": {
    name: "Jungle Wolf",
    url: "Jungle_Wolf",
    img: "Jungle_Wolf.png",
  },
  "Jungle horror": {
    name: "Jungle horror",
    url: "Jungle_horror",
    img: "Jungle_horror.png",
  },
  "Jungle spider": {
    name: "Jungle spider",
    url: "Jungle_spider",
    img: "Jungle_spider.png",
  },
  "Justiciar Zachariah": {
    name: "Justiciar Zachariah",
    url: "Justiciar_Zachariah",
    img: "Justiciar_Zachariah.png",
  },
  "K'ril Tsutsaroth": {
    name: "K'ril Tsutsaroth",
    url: "K%27ril_Tsutsaroth",
    img: "K%27ril_Tsutsaroth.png",
  },
  "Kalphite Guardian": {
    name: "Kalphite Guardian",
    url: "Kalphite_Guardian",
    img: "Kalphite_Guardian.png",
  },
  "Kalphite Queen": {
    name: "Kalphite Queen",
    url: "Kalphite_Queen",
    img: "Kalphite_Queen.png",
  },
  "Kalphite Soldier": {
    name: "Kalphite Soldier",
    url: "Kalphite_Soldier",
    img: "Kalphite_Soldier.png",
  },
  "Kalphite Worker": {
    name: "Kalphite Worker",
    url: "Kalphite_Worker",
    img: "Kalphite_Worker.png",
  },
  Kalrag: {
    name: "Kalrag",
    url: "Kalrag",
    img: "Kalrag.png",
  },
  Kamil: {
    name: "Kamil",
    url: "Kamil",
    img: "Kamil.png",
  },
  Karamel: {
    name: "Karamel",
    url: "Karamel",
    img: "Karamel.png",
  },
  "Karil the Tainted": {
    name: "Karil the Tainted",
    url: "Karil_the_Tainted",
    img: "Karil_the_Tainted.png",
  },
  Kasonde: {
    name: "Kasonde",
    url: "Kasonde",
    img: "Kasonde.png",
  },
  "Kasonde the Craven": {
    name: "Kasonde the Craven",
    url: "Kasonde_the_Craven",
    img: "Kasonde_the_Craven.png",
  },
  Kebbit: {
    name: "Kebbit",
    url: "Kebbit_(Eagles%27_Peak)",
    img: "Kebbit_%28Eagles%27_Peak%29.png",
  },
  Keef: {
    name: "Keef",
    url: "Keef",
    img: "Keef.png",
  },
  Kephri: {
    name: "Kephri",
    url: "Kephri",
    img: "Kephri.png",
  },
  "Ket-Zek": {
    name: "Ket-Zek",
    url: "Ket-Zek",
    img: "Ket-Zek_%282%29.png",
  },
  "Ketla the Unworthy": {
    name: "Ketla the Unworthy",
    url: "Ketla_the_Unworthy",
    img: "Ketla_the_Unworthy.png",
  },
  "Khazard Guard": {
    name: "Khazard Guard",
    url: "Khazard_Guard",
    img: "Khazard_Guard.png",
  },
  "Khazard Ogre": {
    name: "Khazard Ogre",
    url: "Khazard_Ogre",
    img: "Khazard_Ogre.png",
  },
  "Khazard Scorpion": {
    name: "Khazard Scorpion",
    url: "Khazard_Scorpion",
    img: "Khazard_Scorpion.png",
  },
  "Khazard commander": {
    name: "Khazard commander",
    url: "Khazard_commander",
    img: "Khazard_commander.png",
  },
  "Khazard trooper": {
    name: "Khazard trooper",
    url: "Khazard_trooper",
    img: "Khazard_trooper.png",
  },
  "Khazard warlord": {
    name: "Khazard warlord",
    url: "Khazard_warlord",
    img: "Khazard_warlord.png",
  },
  Killerwatt: {
    name: "Killerwatt",
    url: "Killerwatt",
    img: "Killerwatt.png",
  },
  "King Black Dragon": {
    name: "King Black Dragon",
    url: "King_Black_Dragon",
    img: "King_Black_Dragon.png",
  },
  "King Roald": {
    name: "King Roald",
    url: "King_Roald",
    img: "King_Roald.png",
  },
  "King Sand Crab": {
    name: "King Sand Crab",
    url: "King_Sand_Crab",
    img: "Sandy_Boulder.png",
  },
  "King Scorpion": {
    name: "King Scorpion",
    url: "King_Scorpion",
    img: "King_Scorpion.png",
  },
  "King kurask": {
    name: "King kurask",
    url: "King_kurask",
    img: "King_kurask.png",
  },
  "Knight of Ardougne": {
    name: "Knight of Ardougne",
    url: "Knight_of_Ardougne",
    img: "Knight_of_Ardougne.png",
  },
  "Knight of Saradomin": {
    name: "Knight of Saradomin",
    url: "Knight_of_Saradomin",
    img: "Knight_of_Saradomin.png",
  },
  "Knight of Varlamore": {
    name: "Knight of Varlamore",
    url: "Knight_of_Varlamore",
    img: "Knight_of_Varlamore_%281%29.png",
  },
  Kob: {
    name: "Kob",
    url: "Kob",
    img: "Kob.png",
  },
  Kolodion: {
    name: "Kolodion",
    url: "Kolodion",
    img: "Kolodion.png",
  },
  "Koschei the deathless": {
    name: "Koschei the deathless",
    url: "Koschei_the_deathless",
    img: "Koschei_the_deathless.png",
  },
  Kraka: {
    name: "Kraka",
    url: "Kraka",
    img: "Kraka.png",
  },
  Kraken: {
    name: "Kraken",
    url: "Kraken",
    img: "Kraken.png",
  },
  "Kree'arra": {
    name: "Kree'arra",
    url: "Kree%27arra",
    img: "Kree%27arra.png",
  },
  Kroy: {
    name: "Kroy",
    url: "Kroy",
    img: "Kroy.png",
  },
  Kruk: {
    name: "Kruk",
    url: "Kruk",
    img: "Kruk.png",
  },
  Ksenia: {
    name: "Ksenia",
    url: "Ksenia",
    img: "Ksenia.png",
  },
  Kurask: {
    name: "Kurask",
    url: "Kurask",
    img: "Kurask.png",
  },
  Lanzig: {
    name: "Lanzig",
    url: "Lanzig",
    img: "Lanzig.png",
  },
  "Large mosquito": {
    name: "Large mosquito",
    url: "Large_mosquito",
    img: "Large_mosquito.png",
  },
  "Lava beast": {
    name: "Lava beast",
    url: "Lava_beast",
    img: "Lava_beast.png",
  },
  "Lava dragon": {
    name: "Lava dragon",
    url: "Lava_dragon",
    img: "Lava_dragon.png",
  },
  Leech: {
    name: "Leech",
    url: "Leech",
    img: "Leech.png",
  },
  Lensa: {
    name: "Lensa",
    url: "Lensa",
    img: "Lensa.png",
  },
  "Leon d'Cour": {
    name: "Leon d'Cour",
    url: "Leon_d%27Cour",
    img: "Leon_d%27Cour.png",
  },
  "Lesser Demon Champion": {
    name: "Lesser Demon Champion",
    url: "Lesser_Demon_Champion",
    img: "Lesser_Demon_Champion.png",
  },
  "Lesser demon": {
    name: "Lesser demon",
    url: "Lesser_demon",
    img: "Lesser_demon.png",
  },
  Lev: {
    name: "Lev",
    url: "Lev",
    img: "Lev.png",
  },
  Liliya: {
    name: "Liliya",
    url: "Liliya",
    img: "Liliya.png",
  },
  Lizard: {
    name: "Lizard",
    url: "Lizard",
    img: "Lizard.png",
  },
  "Lizardman brute": {
    name: "Lizardman brute",
    url: "Lizardman_brute",
    img: "Lizardman_brute.png",
  },
  "Lizardman shaman": {
    name: "Lizardman shaman",
    url: "Lizardman_shaman",
    img: "Lizardman_shaman_%281%29.png",
  },
  Lizardman: {
    name: "Lizardman",
    url: "Lizardman",
    img: "Lizardman_%28level_53%29.png",
  },
  "Loar Shade": {
    name: "Loar Shade",
    url: "Loar_Shade",
    img: "Loar_Shade.png",
  },
  Lobstrosity: {
    name: "Lobstrosity",
    url: "Lobstrosity",
    img: "Lobstrosity.png",
  },
  Locust: {
    name: "Locust",
    url: "Locust",
    img: "Locust.png",
  },
  "Locust rider": {
    name: "Locust rider",
    url: "Locust_rider",
    img: "Locust_rider_%28melee%29.png",
  },
  "Long-tailed Wyvern": {
    name: "Long-tailed Wyvern",
    url: "Long-tailed_Wyvern",
    img: "Long-tailed_Wyvern.png",
  },
  "Lost barbarian": {
    name: "Lost barbarian",
    url: "Lost_barbarian",
    img: "Lost_barbarian.png",
  },
  Lucien: {
    name: "Lucien",
    url: "Lucien",
    img: "Lucien.png",
  },
  "Lucky impling": {
    name: "Lucky impling",
    url: "Lucky_impling",
    img: "Lucky_impling.png",
  },
  "Lynx Tamer": {
    name: "Lynx Tamer",
    url: "Lynx_Tamer",
    img: "Lynx_Tamer.png",
  },
  Lynx: {
    name: "Lynx",
    url: "Lynx",
    img: "Lynx_%28lv_21%29.png",
  },
  "Magic axe": {
    name: "Magic axe",
    url: "Magic_axe",
    img: "Magic_axe.png",
  },
  "Magpie impling": {
    name: "Magpie impling",
    url: "Magpie_impling",
    img: "Magpie_impling.png",
  },
  "Malevolent Mage": {
    name: "Malevolent Mage",
    url: "Malevolent_Mage",
    img: "Malevolent_Mage.png",
  },
  Mammoth: {
    name: "Mammoth",
    url: "Mammoth",
    img: "Mammoth.png",
  },
  "Eas Ardougne Man": {
    name: "Eas Ardougne Man",
    url: "Man_(East_Ardougne)",
    img: "Man_%28East_Ardougne%29.png",
  },
  Man: {
    name: "Man",
    url: "Man",
    img: "Man.png",
  },
  "Maniacal Monkey Archer": {
    name: "Maniacal Monkey Archer",
    url: "Maniacal_Monkey_Archer",
    img: "Maniacal_Monkey_Archer.png",
  },
  "Maniacal monkey": {
    name: "Maniacal monkey",
    url: "Maniacal_monkey",
    img: "Maniacal_monkey.png",
  },
  Manticore: {
    name: "Manticore",
    url: "Manticore",
    img: "Manticore.png",
  },
  "Marble gargoyle": {
    name: "Marble gargoyle",
    url: "Marble_gargoyle",
    img: "Marble_gargoyle.png",
  },
  "Market Guard": {
    name: "Market Guard",
    url: "Market_Guard",
    img: "Market_Guard_%28Fremennik%29.png",
  },
  "Draynor Market Guard": {
    name: "Draynor Market Guard",
    url: "Market_Guard_(Draynor)",
    img: "Market_Guard_%28Draynor%29.png",
  },
  "Melzar the Mad": {
    name: "Melzar the Mad",
    url: "Melzar_the_Mad",
    img: "Melzar_the_Mad.png",
  },
  "Menaphite Akh": {
    name: "Menaphite Akh",
    url: "Menaphite_Akh",
    img: "Menaphite_Akh.png",
  },
  "Menaphite Shadow": {
    name: "Menaphite Shadow",
    url: "Menaphite_Shadow",
    img: "Menaphite_Shadow.png",
  },
  "Menaphite Thug": {
    name: "Menaphite Thug",
    url: "Menaphite_Thug",
    img: "Tough_Guy.png",
  },
  "Mercenary Captain": {
    name: "Mercenary Captain",
    url: "Mercenary_Captain",
    img: "Mercenary_Captain.png",
  },
  Mercenary: {
    name: "Mercenary",
    url: "Mercenary",
    img: "Mercenary_%28with_coif%29.png",
  },
  Milla: {
    name: "Milla",
    url: "Milla",
    img: "Milla.png",
  },
  "Mind Golem": {
    name: "Mind Golem",
    url: "Mind_Golem",
    img: "Mind_Golem.png",
  },
  "Colosseum Minotaur": {
    name: "Colosseum Minotaur",
    url: "Minotaur_(Fortis_Colosseum)",
    img: "Minotaur_%28Fortis_Colosseum%29.png",
  },
  Minotaur: {
    name: "Minotaur",
    url: "Minotaur",
    img: "Minotaur.png",
  },
  "Mithril dragon": {
    name: "Mithril dragon",
    url: "Mithril_dragon",
    img: "Mithril_dragon.png",
  },
  Mogre: {
    name: "Mogre",
    url: "Mogre",
    img: "Mogre.png",
  },
  Molanisk: {
    name: "Molanisk",
    url: "Molanisk",
    img: "Molanisk.png",
  },
  "Monk of Zamorak": {
    name: "Monk of Zamorak",
    url: "Monk_of_Zamorak",
    img: "Monk_of_Zamorak_%28level_17%29.png",
  },
  Monk: {
    name: "Monk",
    url: "Monk",
    img: "Monk.png",
  },
  Monkey: {
    name: "Monkey",
    url: "Monkey_(monster)",
    img: "Monkey.png",
  },
  "Monkey Archer": {
    name: "Monkey Archer",
    url: "Monkey_Archer",
    img: "Monkey_Archer.png",
  },
  "Ninja Monkey Guard": {
    name: "Ninja Monkey Guard",
    url: "Monkey_Guard_(ninja)",
    img: "Monkey_Guard_%28ninja%29.png",
  },
  "Monkey Guard": {
    name: "Monkey Guard",
    url: "Monkey_Guard",
    img: "Monkey_Guard.png",
  },
  "Monkey Zombie": {
    name: "Monkey Zombie",
    url: "Monkey_Zombie",
    img: "Monkey_Zombie.png",
  },
  "Monstrous basilisk": {
    name: "Monstrous basilisk",
    url: "Monstrous_basilisk",
    img: "Monstrous_basilisk.png",
  },
  "Moonlight Cockatrice": {
    name: "Moonlight Cockatrice",
    url: "Moonlight_Cockatrice",
    img: "Moonlight_Cockatrice.png",
  },
  "Mosquito swarm": {
    name: "Mosquito swarm",
    url: "Mosquito_swarm",
    img: "Mosquito_swarm.png",
  },
  "Moss Guardian": {
    name: "Moss Guardian",
    url: "Moss_Guardian",
    img: "Moss_Guardian.png",
  },
  "Moss giant": {
    name: "Moss giant",
    url: "Moss_giant",
    img: "Moss_giant.png",
  },
  Mosschin: {
    name: "Mosschin",
    url: "Mosschin",
    img: "Mosschin.png",
  },
  Mother: {
    name: "Mother",
    url: "Mother",
    img: "Mother.png",
  },
  "Mountain troll": {
    name: "Mountain troll",
    url: "Mountain_troll",
    img: "Mountain_troll.png",
  },
  "Mounted terrorbird gnome": {
    name: "Mounted terrorbird gnome",
    url: "Mounted_terrorbird_gnome",
    img: "Mounted_terrorbird_gnome.png",
  },
  "Mourner Boss": {
    name: "Mourner Boss",
    url: "Mourner_(boss)",
    img: "Mourner_%28level_13%29.png",
  },
  Mourner: {
    name: "Mourner",
    url: "Mourner",
    img: "Mourner.png",
  },
  Mouse: {
    name: "Mouse",
    url: "Mouse",
    img: "Mouse.png",
  },
  Mudskipper: {
    name: "Mudskipper",
    url: "Mudskipper",
    img: "Mudskipper.png",
  },
  Mugger: {
    name: "Mugger",
    url: "Mugger",
    img: "Mugger.png",
  },
  Mummy: {
    name: "Mummy",
    url: "Mummy",
    img: "Mummy_%28level_84%29.png",
  },
  "Mutated Bloodveld": {
    name: "Mutated Bloodveld",
    url: "Mutated_Bloodveld",
    img: "Mutated_Bloodveld.png",
  },
  "Mutated Terrorbird": {
    name: "Mutated Terrorbird",
    url: "Mutated_Terrorbird",
    img: "Mutated_Terrorbird.png",
  },
  "Mutated Tortoise": {
    name: "Mutated Tortoise",
    url: "Mutated_Tortoise",
    img: "Mutated_Tortoise.png",
  },
  Muttadile: {
    name: "Muttadile",
    url: "Muttadile",
    img: "Muttadile.png",
  },
  "Myre Blamish Snail": {
    name: "Myre Blamish Snail",
    url: "Myre_Blamish_Snail",
    img: "Myre_blamish_snail_%28pointed%29.png",
  },
  "Mysterious Figure": {
    name: "Mysterious Figure",
    url: "Mysterious_Figure",
    img: "Mysterious_Figure.png",
  },
  "Nail beast": {
    name: "Nail beast",
    url: "Nail_beast",
    img: "Nail_beast.png",
  },
  Narf: {
    name: "Narf",
    url: "Narf",
    img: "Narf.png",
  },
  "Nature impling": {
    name: "Nature impling",
    url: "Nature_impling",
    img: "Nature_impling.png",
  },
  Nazastarool: {
    name: "Nazastarool",
    url: "Nazastarool",
    img: "Nazastarool.png",
  },
  Nechryael: {
    name: "Nechryael",
    url: "Nechryael",
    img: "Nechryael.png",
  },
  Nechryarch: {
    name: "Nechryarch",
    url: "Nechryarch",
    img: "Nechryarch.png",
  },
  Necromancer: {
    name: "Necromancer",
    url: "Necromancer",
    img: "Necromancer.png",
  },
  "Kourend Necromancer": {
    name: "Kourend Necromancer",
    url: "Necromancer_(Great_Kourend)",
    img: "Necromancer_%28Great_Kourend%29.png",
  },
  Newtroost: {
    name: "Newtroost",
    url: "Newtroost",
    img: "Newtroost.png",
  },
  Nex: {
    name: "Nex",
    url: "Nex",
    img: "Nex.png",
  },
  Nezikchened: {
    name: "Nezikchened",
    url: "Nezikchened",
    img: "Nezikchened.png",
  },
  "Night beast": {
    name: "Night beast",
    url: "Night_beast",
    img: "Night_beast.png",
  },
  Nikita: {
    name: "Nikita",
    url: "Nikita",
    img: "Nikita.png",
  },
  Nikolai: {
    name: "Nikolai",
    url: "Nikolai",
    img: "Nikolai.png",
  },
  "Ninja impling": {
    name: "Ninja impling",
    url: "Ninja_impling",
    img: "Ninja_impling.png",
  },
  "Nuclear smoke devil": {
    name: "Nuclear smoke devil",
    url: "Nuclear_smoke_devil",
    img: "Nuclear_smoke_devil.png",
  },
  "Nylocas Athanatos": {
    name: "Nylocas Athanatos",
    url: "Nylocas_Athanatos",
    img: "Nylocas_Athanatos.png",
  },
  "Nylocas Hagios": {
    name: "Nylocas Hagios",
    url: "Nylocas_Hagios",
    img: "Nylocas_Hagios.png",
  },
  "Nylocas Ischyros": {
    name: "Nylocas Ischyros",
    url: "Nylocas_Ischyros",
    img: "Nylocas_Ischyros.png",
  },
  "Nylocas Matomenos": {
    name: "Nylocas Matomenos",
    url: "Nylocas_Matomenos",
    img: "Nylocas_Matomenos.png",
  },
  "Nylocas Prinkipas": {
    name: "Nylocas Prinkipas",
    url: "Nylocas_Prinkipas",
    img: "Nylocas_Prinkipas_%28magic%29.png",
  },
  "Nylocas Toxobolos": {
    name: "Nylocas Toxobolos",
    url: "Nylocas_Toxobolos",
    img: "Nylocas_Toxobolos.png",
  },
  "ToA Obelisk": {
    name: "ToA Obelisk",
    url: "Obelisk_(Tombs_of_Amascut)",
    img: "Obelisk_%28Tombs_of_Amascut%2C_phase_2%29.png",
  },
  Obor: {
    name: "Obor",
    url: "Obor",
    img: "Obor.png",
  },
  Ocga: {
    name: "Ocga",
    url: "Ocga",
    img: "Ocga.png",
  },
  "Ochre Blamish Snail": {
    name: "Ochre Blamish Snail",
    url: "Ochre_Blamish_Snail",
    img: "Ochre_Blamish_Snail_%28round%29.png",
  },
  "Ogre chieftain": {
    name: "Ogre chieftain",
    url: "Ogre_chieftain",
    img: "Ogre_chieftain.png",
  },
  "Ogre shaman": {
    name: "Ogre shaman",
    url: "Ogre_shaman",
    img: "Ogre_shaman.png",
  },
  Ogre: {
    name: "Ogre",
    url: "Ogre",
    img: "Ogre.png",
  },
  "Ogress Shaman": {
    name: "Ogress Shaman",
    url: "Ogress_Shaman",
    img: "Ogress_Shaman.png",
  },
  "Ogress Warrior": {
    name: "Ogress Warrior",
    url: "Ogress_Warrior",
    img: "Ogress_Warrior_%281%29.png",
  },
  "Oomlie bird": {
    name: "Oomlie bird",
    url: "Oomlie_bird",
    img: "Oomlie_bird.png",
  },
  Ork: {
    name: "Ork",
    url: "Ork",
    img: "Ork.png",
  },
  Oryx: {
    name: "Oryx",
    url: "Oryx",
    img: "Oryx.png",
  },
  Othainian: {
    name: "Othainian",
    url: "Othainian",
    img: "Othainian.png",
  },
  "Otherworldly being": {
    name: "Otherworldly being",
    url: "Otherworldly_being",
    img: "Otherworldly_being.png",
  },
  Outlaw: {
    name: "Outlaw",
    url: "Outlaw",
    img: "Outlaw.png",
  },
  Paladin: {
    name: "Paladin",
    url: "Paladin",
    img: "Paladin.png",
  },
  Palmer: {
    name: "Palmer",
    url: "Palmer",
    img: "Palmer.png",
  },
  Parasite: {
    name: "Parasite",
    url: "Parasite",
    img: "Parasite.png",
  },
  "Passionate Supporter": {
    name: "Passionate Supporter",
    url: "Passionate_Supporter",
    img: "Passionate_Supporter.png",
  },
  "Pee Hat": {
    name: "Pee Hat",
    url: "Pee_Hat",
    img: "Pee_Hat.png",
  },
  "Penance Fighter": {
    name: "Penance Fighter",
    url: "Penance_Fighter",
    img: "Penance_Fighter_%28wave_1%29.png",
  },
  "Penance Healer": {
    name: "Penance Healer",
    url: "Penance_Healer",
    img: "Penance_Healer_%28wave_1%29.png",
  },
  "Penance Queen": {
    name: "Penance Queen",
    url: "Penance_Queen",
    img: "Penance_Queen.png",
  },
  "Penance Ranger": {
    name: "Penance Ranger",
    url: "Penance_Ranger",
    img: "Penance_Ranger_%28wave_1%29.png",
  },
  "Penance Runner": {
    name: "Penance Runner",
    url: "Penance_Runner",
    img: "Penance_Runner_%28wave_1%29.png",
  },
  Penda: {
    name: "Penda",
    url: "Penda",
    img: "Penda.png",
  },
  Penguin: {
    name: "Penguin",
    url: "Penguin_(monster)",
    img: "Ping.png",
  },
  "Persten the Deceitful": {
    name: "Persten the Deceitful",
    url: "Persten_the_Deceitful",
    img: "Persten_the_Deceitful.png",
  },
  "Pestilent Bloat": {
    name: "Pestilent Bloat",
    url: "Pestilent_Bloat",
    img: "Pestilent_Bloat.png",
  },
  "Phantom Hand": {
    name: "Phantom Hand",
    url: "Phantom_Hand",
    img: "Phantom_Hand_%281%29.png",
  },
  "Phantom Muspah": {
    name: "Phantom Muspah",
    url: "Phantom_Muspah",
    img: "Phantom_Muspah_%28melee%29.png",
  },
  Pheasant: {
    name: "Pheasant",
    url: "Pheasant",
    img: "Pheasant_%281_tail%29.png",
  },
  "Phrin Shade": {
    name: "Phrin Shade",
    url: "Phrin_Shade",
    img: "Phrin_Shade.png",
  },
  "Pirate Guard": {
    name: "Pirate Guard",
    url: "Pirate_Guard",
    img: "Pirate_Guard.png",
  },
  Pirate: {
    name: "Pirate",
    url: "Pirate",
    img: "Pirate_%28Brimhaven%29.png",
  },
  "Pit Scorpion": {
    name: "Pit Scorpion",
    url: "Pit_Scorpion",
    img: "Pit_Scorpion.png",
  },
  "Plague frog": {
    name: "Plague frog",
    url: "Plague_frog",
    img: "Plague_frog.png",
  },
  "Poison Scorpion": {
    name: "Poison Scorpion",
    url: "Poison_Scorpion",
    img: "Poison_Scorpion.png",
  },
  "Escape Caves Spider": {
    name: "Escape Caves Spider",
    url: "Poison_spider_(Escape_Caves)",
    img: "Poison_spider_%28Escape_Caves%29.png",
  },
  "Poison spider": {
    name: "Poison spider",
    url: "Poison_spider",
    img: "Poison_spider_%28Level_31%29.png",
  },
  Poltenip: {
    name: "Poltenip",
    url: "Poltenip",
    img: "Poltenip.png",
  },
  Porazdir: {
    name: "Porazdir",
    url: "Porazdir",
    img: "Porazdir.png",
  },
  "Pest Control Portal": {
    name: "Pest Control Portal",
    url: "Portal_(Pest_Control)",
    img: "Red_Portal.png",
  },
  "Possessed Priest": {
    name: "Possessed Priest",
    url: "Possessed_Priest",
    img: "Possessed_Priest.png",
  },
  "Possessed pickaxe": {
    name: "Possessed pickaxe",
    url: "Possessed_pickaxe",
    img: "Possessed_pickaxe.png",
  },
  Pyrefiend: {
    name: "Pyrefiend",
    url: "Pyrefiend",
    img: "Pyrefiend.png",
  },
  Pyrelord: {
    name: "Pyrelord",
    url: "Pyrelord",
    img: "Pyrelord.png",
  },
  Tarn: {
    name: "Tarn",
    url: "Tarn",
    img: "Tarn_ghost.png",
  },
  "The Jormungand": {
    name: "The Jormungand",
    url: "The_Jormungand",
    img: "The_Jormungand.png",
  },
  "The Leviathan": {
    name: "The Leviathan",
    url: "The_Leviathan",
    img: "The_Leviathan.png",
  },
  "The Mimic": {
    name: "The Mimic",
    url: "The_Mimic",
    img: "The_Mimic.png",
  },
  "The Nightmare": {
    name: "The Nightmare",
    url: "The_Nightmare",
    img: "The_Nightmare.png",
  },
  "Queen spawn": {
    name: "Queen spawn",
    url: "Queen_spawn",
    img: "Queen_spawn.png",
  },
  "Prifddinas Rabbit": {
    name: "Prifddinas Rabbit",
    url: "Rabbit_(Prifddinas)",
    img: "Rabbit_%28Prifddinas%29.png",
  },
  Rabbit: {
    name: "Rabbit",
    url: "Rabbit",
    img: "Rabbit_%28Tirannwn%2C_1%29.png",
  },
  Radat: {
    name: "Radat",
    url: "Radat",
    img: "Radat.png",
  },
  "Radiant sanguisphera": {
    name: "Radiant sanguisphera",
    url: "Radiant_sanguisphera",
    img: "Radiant_sanguisphera.png",
  },
  Ragnar: {
    name: "Ragnar",
    url: "Ragnar_(Miscellania)",
    img: "Ragnar_%28Miscellania%29.png",
  },
  Ragnvald: {
    name: "Ragnvald",
    url: "Ragnvald",
    img: "Ragnvald.png",
  },
  Ram: {
    name: "Ram",
    url: "Ram",
    img: "Ram.png",
  },
  "Ranalph Devere": {
    name: "Ranalph Devere",
    url: "Ranalph_Devere",
    img: "Ranalph_Devere.png",
  },
  "Ranis Drakan": {
    name: "Ranis Drakan",
    url: "Ranis_Drakan",
    img: "Ranis_Drakan_%28A_Taste_of_Hope%29.png",
  },
  Rannveig: {
    name: "Rannveig",
    url: "Rannveig",
    img: "Rannveig.png",
  },
  Rat: {
    name: "Rat",
    url: "Rat",
    img: "Rat.png",
  },
  Ravager: {
    name: "Ravager",
    url: "Ravager",
    img: "Ravager.png",
  },
  "Reanimated TzHaar": {
    name: "Reanimated TzHaar",
    url: "Reanimated_TzHaar",
    img: "Reanimated_TzHaar.png",
  },
  "Reanimated abyssal": {
    name: "Reanimated abyssal",
    url: "Reanimated_abyssal",
    img: "Reanimated_abyssal.png",
  },
  "Reanimated aviansie": {
    name: "Reanimated aviansie",
    url: "Reanimated_aviansie",
    img: "Reanimated_aviansie.png",
  },
  "Reanimated bear": {
    name: "Reanimated bear",
    url: "Reanimated_bear",
    img: "Reanimated_bear.png",
  },
  "Reanimated bloodveld": {
    name: "Reanimated bloodveld",
    url: "Reanimated_bloodveld",
    img: "Reanimated_bloodveld.png",
  },
  "Reanimated chaos druid": {
    name: "Reanimated chaos druid",
    url: "Reanimated_chaos_druid",
    img: "Reanimated_chaos_druid.png",
  },
  "Reanimated dagannoth": {
    name: "Reanimated dagannoth",
    url: "Reanimated_dagannoth",
    img: "Reanimated_dagannoth.png",
  },
  "Reanimated demon": {
    name: "Reanimated demon",
    url: "Reanimated_demon",
    img: "Reanimated_demon.png",
  },
  "Reanimated demon spawn": {
    name: "Reanimated demon spawn",
    url: "Reanimated_demon_spawn",
    img: "Reanimated_demon_spawn.png",
  },
  "Reanimated dog": {
    name: "Reanimated dog",
    url: "Reanimated_dog",
    img: "Reanimated_dog.png",
  },
  "Reanimated dragon": {
    name: "Reanimated dragon",
    url: "Reanimated_dragon",
    img: "Reanimated_dragon.png",
  },
  "Reanimated elf": {
    name: "Reanimated elf",
    url: "Reanimated_elf",
    img: "Reanimated_elf.png",
  },
  "Reanimated giant": {
    name: "Reanimated giant",
    url: "Reanimated_giant",
    img: "Reanimated_giant.png",
  },
  "Reanimated goblin": {
    name: "Reanimated goblin",
    url: "Reanimated_goblin",
    img: "Reanimated_goblin.png",
  },
  "Reanimated hellhound": {
    name: "Reanimated hellhound",
    url: "Reanimated_hellhound",
    img: "Reanimated_hellhound.png",
  },
  "Reanimated horror": {
    name: "Reanimated horror",
    url: "Reanimated_horror",
    img: "Reanimated_horror.png",
  },
  "Reanimated imp": {
    name: "Reanimated imp",
    url: "Reanimated_imp",
    img: "Reanimated_imp.png",
  },
  "Reanimated kalphite": {
    name: "Reanimated kalphite",
    url: "Reanimated_kalphite",
    img: "Reanimated_kalphite.png",
  },
  "Reanimated minotaur": {
    name: "Reanimated minotaur",
    url: "Reanimated_minotaur",
    img: "Reanimated_minotaur.png",
  },
  "Reanimated monkey": {
    name: "Reanimated monkey",
    url: "Reanimated_monkey",
    img: "Reanimated_monkey.png",
  },
  "Reanimated ogre": {
    name: "Reanimated ogre",
    url: "Reanimated_ogre",
    img: "Reanimated_ogre.png",
  },
  "Reanimated scorpion": {
    name: "Reanimated scorpion",
    url: "Reanimated_scorpion",
    img: "Reanimated_scorpion.png",
  },
  "Reanimated troll": {
    name: "Reanimated troll",
    url: "Reanimated_troll",
    img: "Reanimated_troll.png",
  },
  "Reanimated unicorn": {
    name: "Reanimated unicorn",
    url: "Reanimated_unicorn",
    img: "Reanimated_unicorn.png",
  },
  "Red dragon": {
    name: "Red dragon",
    url: "Red_dragon",
    img: "Red_dragon.png",
  },
  Redeyes: {
    name: "Redeyes",
    url: "Redeyes",
    img: "Redeyes.png",
  },
  "Renegade knight": {
    name: "Renegade knight",
    url: "Renegade_knight",
    img: "Renegade_knight.png",
  },
  "Repugnant spectre": {
    name: "Repugnant spectre",
    url: "Repugnant_spectre",
    img: "Repugnant_spectre.png",
  },
  "Respiratory system": {
    name: "Respiratory system",
    url: "Respiratory_system",
    img: "Respiratory_system.png",
  },
  "Revenant cyclops": {
    name: "Revenant cyclops",
    url: "Revenant_cyclops",
    img: "Revenant_cyclops.png",
  },
  "Revenant dark beast": {
    name: "Revenant dark beast",
    url: "Revenant_dark_beast",
    img: "Revenant_dark_beast.png",
  },
  "Revenant demon": {
    name: "Revenant demon",
    url: "Revenant_demon",
    img: "Revenant_demon.png",
  },
  "Revenant dragon": {
    name: "Revenant dragon",
    url: "Revenant_dragon",
    img: "Revenant_dragon.png",
  },
  "Revenant goblin": {
    name: "Revenant goblin",
    url: "Revenant_goblin",
    img: "Revenant_goblin.png",
  },
  "Revenant hellhound": {
    name: "Revenant hellhound",
    url: "Revenant_hellhound",
    img: "Revenant_hellhound.png",
  },
  "Revenant hobgoblin": {
    name: "Revenant hobgoblin",
    url: "Revenant_hobgoblin",
    img: "Revenant_hobgoblin.png",
  },
  "Revenant imp": {
    name: "Revenant imp",
    url: "Revenant_imp",
    img: "Revenant_imp.png",
  },
  "Revenant knight": {
    name: "Revenant knight",
    url: "Revenant_knight",
    img: "Revenant_knight.png",
  },
  "Revenant maledictus": {
    name: "Revenant maledictus",
    url: "Revenant_maledictus",
    img: "Revenant_maledictus.png",
  },
  "Revenant ork": {
    name: "Revenant ork",
    url: "Revenant_ork",
    img: "Revenant_ork.png",
  },
  "Revenant pyrefiend": {
    name: "Revenant pyrefiend",
    url: "Revenant_pyrefiend",
    img: "Revenant_pyrefiend.png",
  },
  "River troll": {
    name: "River troll",
    url: "River_troll",
    img: "River_troll.png",
  },
  "Riyl Shade": {
    name: "Riyl Shade",
    url: "Riyl_Shade",
    img: "Riyl_Shade.png",
  },
  "Robert the Strong": {
    name: "Robert the Strong",
    url: "Robert_the_Strong",
    img: "Robert_the_Strong.png",
  },
  Rock: {
    name: "Rock",
    url: "Rock_(Troll)",
    img: "Rock.png",
  },
  "Rock Crab": {
    name: "Rock Crab",
    url: "Rock_Crab",
    img: "Rock_crab_%28hidden%29.png",
  },
  "Rock Golem": {
    name: "Rock Golem",
    url: "Rock_Golem_(monster)",
    img: "Rock_Golem_%28monster%29.png",
  },
  "Rock lobster": {
    name: "Rock lobster",
    url: "Rock_lobster",
    img: "Rock_lobster.png",
  },
  Rockslug: {
    name: "Rockslug",
    url: "Rockslug",
    img: "Rockslug.png",
  },
  Rocnar: {
    name: "Rocnar",
    url: "Rocnar",
    img: "Rocnar_built.png",
  },
  Rogue: {
    name: "Rogue",
    url: "Rogue",
    img: "Rogue.png",
  },
  Rooster: {
    name: "Rooster",
    url: "Rooster",
    img: "Rooster.png",
  },
  "Rowdy slave": {
    name: "Rowdy slave",
    url: "Rowdy_slave",
    img: "Rowdy_slave.png",
  },
  "Rune dragon": {
    name: "Rune dragon",
    url: "Rune_dragon",
    img: "Rune_dragon.png",
  },
  "Runite Golem": {
    name: "Runite Golem",
    url: "Runite_Golem",
    img: "Runite_Golem.png",
  },
  Rusty: {
    name: "Rusty",
    url: "Rusty",
    img: "Rusty.png",
  },
  "SAS Member": {
    name: "SAS Member",
    url: "SAS_Member",
    img: "SAS_Member_%28RuneScape_2_Beta%29.png",
  },
  "Salarin the twisted": {
    name: "Salarin the twisted",
    url: "Salarin_the_twisted",
    img: "Salarin_the_twisted.png",
  },
  "San Tojalon": {
    name: "San Tojalon",
    url: "San_Tojalon",
    img: "San_Tojalon.png",
  },
  "Sand Crab": {
    name: "Sand Crab",
    url: "Sand_Crab",
    img: "Sand_Crab.png",
  },
  "Sand Snake": {
    name: "Sand Snake",
    url: "Sand_Snake",
    img: "Sand_Snake.png",
  },
  Sarachnis: {
    name: "Sarachnis",
    url: "Sarachnis",
    img: "Sarachnis.png",
  },
  "Saradomin priest": {
    name: "Saradomin priest",
    url: "Saradomin_priest",
    img: "Saradomin_priest.png",
  },
  "Saradomin wizard": {
    name: "Saradomin wizard",
    url: "Saradomin_wizard",
    img: "Saradomin_wizard.png",
  },
  "ToA Scarab": {
    name: "ToA Scarab",
    url: "Scarab_(Tombs_of_Amascut)",
    img: "Scarab_%28Tombs_of_Amascut%29.png",
  },
  "Scarab Mage": {
    name: "Scarab Mage",
    url: "Scarab_Mage",
    img: "Scarab_Mage.png",
  },
  "Scarab Swarm": {
    name: "Scarab Swarm",
    url: "Scarab_Swarm",
    img: "Scarab_Swarm.png",
  },
  "Scarred black demon": {
    name: "Scarred black demon",
    url: "Scarred_black_demon",
    img: "Scarred_black_demon.png",
  },
  "Scarred greater demon": {
    name: "Scarred greater demon",
    url: "Scarred_greater_demon",
    img: "Scarred_greater_demon_%28lv_95%29.png",
  },
  "Scarred hellhound": {
    name: "Scarred hellhound",
    url: "Scarred_hellhound",
    img: "Scarred_hellhound.png",
  },
  "Scarred imp": {
    name: "Scarred imp",
    url: "Scarred_imp",
    img: "Scarred_imp.png",
  },
  "Scarred lesser demon": {
    name: "Scarred lesser demon",
    url: "Scarred_lesser_demon",
    img: "Scarred_lesser_demon_%28level_85%29.png",
  },
  "Scavenger beast": {
    name: "Scavenger beast",
    url: "Scavenger_beast",
    img: "Corrupted_scavenger.png",
  },
  Scion: {
    name: "Scion",
    url: "Scion",
    img: "Scion.png",
  },
  Scorpia: {
    name: "Scorpia",
    url: "Scorpia",
    img: "Scorpia.png",
  },
  "Scorpia's guardian": {
    name: "Scorpia's guardian",
    url: "Scorpia%27s_guardian",
    img: "Scorpia%27s_guardian.png",
  },
  "Scorpia's offspring": {
    name: "Scorpia's offspring",
    url: "Scorpia%27s_offspring_(monster)",
    img: "Scorpia%27s_offspring_%28monster%29.png",
  },
  Scorpion: {
    name: "Scorpion",
    url: "Scorpion",
    img: "Scorpion.png",
  },
  "Screaming banshee": {
    name: "Screaming banshee",
    url: "Screaming_banshee",
    img: "Screaming_banshee.png",
  },
  "Screaming twisted banshee": {
    name: "Screaming twisted banshee",
    url: "Screaming_twisted_banshee",
    img: "Screaming_twisted_banshee.png",
  },
  Scurrius: {
    name: "Scurrius",
    url: "Scurrius",
    img: "Scurrius.png",
  },
  "Sea Snake Hatchling": {
    name: "Sea Snake Hatchling",
    url: "Sea_Snake_Hatchling",
    img: "Sea_Snake_Hatchling.png",
  },
  "Sea Snake Young": {
    name: "Sea Snake Young",
    url: "Sea_Snake_Young",
    img: "Sea_Snake_Young.png",
  },
  "Sea Troll Queen": {
    name: "Sea Troll Queen",
    url: "Sea_Troll_Queen",
    img: "Sea_Troll_Queen.png",
  },
  "Sea troll": {
    name: "Sea troll",
    url: "Sea_troll",
    img: "Sea_troll_%28lv_65%29.png",
  },
  Seagull: {
    name: "Seagull",
    url: "Seagull",
    img: "Seagull.png",
  },
  "Shayzien Sergeant": {
    name: "Shayzien Sergeant",
    url: "Sergeant_(Shayzien)",
    img: "Sergeant_%28Shayzien%29.png",
  },
  "Sergeant Grimspike": {
    name: "Sergeant Grimspike",
    url: "Sergeant_Grimspike",
    img: "Sergeant_Grimspike.png",
  },
  "Sergeant Steelwill": {
    name: "Sergeant Steelwill",
    url: "Sergeant_Steelwill",
    img: "Sergeant_Steelwill.png",
  },
  "Sergeant Strongstack": {
    name: "Sergeant Strongstack",
    url: "Sergeant_Strongstack",
    img: "Sergeant_Strongstack.png",
  },
  "Serpent shaman": {
    name: "Serpent shaman",
    url: "Serpent_shaman",
    img: "Serpent_shaman.png",
  },
  "Burthorpe Servant": {
    name: "Burthorpe Servant",
    url: "Servant_(Burthorpe)",
    img: "Servant_%28Burthorpe%29.png",
  },
  Shade: {
    name: "Shade",
    url: "Shade",
    img: "Shade.png",
  },
  "Shadow Hound": {
    name: "Shadow Hound",
    url: "Shadow_Hound",
    img: "Shadow_Hound.png",
  },
  "Shadow Keeper": {
    name: "Shadow Keeper",
    url: "Shadow_Keeper",
    img: "Shadow_Keeper.png",
  },
  "Shadow Wyrm": {
    name: "Shadow Wyrm",
    url: "Shadow_Wyrm",
    img: "Shadow_Wyrm.png",
  },
  "Shadow spider": {
    name: "Shadow spider",
    url: "Shadow_spider",
    img: "Shadow_spider.png",
  },
  "Shadow warrior": {
    name: "Shadow warrior",
    url: "Shadow_warrior",
    img: "Shadow_warrior.png",
  },
  "Shaeded Beast": {
    name: "Shaeded Beast",
    url: "Shaeded_Beast",
    img: "Shaeded_Beast.png",
  },
  "Shantay Guard": {
    name: "Shantay Guard",
    url: "Shantay_Guard",
    img: "Shantay_Guard.png",
  },
  Shifter: {
    name: "Shifter",
    url: "Shifter",
    img: "Shifter.png",
  },
  "Shipyard worker": {
    name: "Shipyard worker",
    url: "Shipyard_worker",
    img: "Shipyard_worker.png",
  },
  "Shockwave Colossus": {
    name: "Shockwave Colossus",
    url: "Shockwave_Colossus",
    img: "Shockwave_Colossus.png",
  },
  Sigmund: {
    name: "Sigmund",
    url: "Sigmund",
    img: "Sigmund_%28monster%29.png",
  },
  "Sir Bedivere": {
    name: "Sir Bedivere",
    url: "Sir_Bedivere",
    img: "Sir_Bedivere.png",
  },
  "Sir Carl": {
    name: "Sir Carl",
    url: "Sir_Carl",
    img: "Sir_Carl.png",
  },
  "Sir Gawain": {
    name: "Sir Gawain",
    url: "Sir_Gawain",
    img: "Sir_Gawain.png",
  },
  "Sir Harry": {
    name: "Sir Harry",
    url: "Sir_Harry",
    img: "Sir_Harry.png",
  },
  "Sir Jerro": {
    name: "Sir Jerro",
    url: "Sir_Jerro",
    img: "Sir_Jerro.png",
  },
  "Sir Kay": {
    name: "Sir Kay",
    url: "Sir_Kay",
    img: "Sir_Kay.png",
  },
  "Sir Lancelot": {
    name: "Sir Lancelot",
    url: "Sir_Lancelot",
    img: "Sir_Lancelot.png",
  },
  "Sir Leye": {
    name: "Sir Leye",
    url: "Sir_Leye",
    img: "Sir_Leye.png",
  },
  "Sir Lucan": {
    name: "Sir Lucan",
    url: "Sir_Lucan",
    img: "Sir_Lucan.png",
  },
  "Sir Mordred": {
    name: "Sir Mordred",
    url: "Sir_Mordred",
    img: "Sir_Mordred.png",
  },
  "Sir Palomedes": {
    name: "Sir Palomedes",
    url: "Sir_Palomedes",
    img: "Sir_Palomedes.png",
  },
  "Sir Pelleas": {
    name: "Sir Pelleas",
    url: "Sir_Pelleas",
    img: "Sir_Pelleas.png",
  },
  "Sir Tristram": {
    name: "Sir Tristram",
    url: "Sir_Tristram",
    img: "Sir_Tristram.png",
  },
  "Skeletal Mystic": {
    name: "Skeletal Mystic",
    url: "Skeletal_Mystic",
    img: "Skeletal_mystic_%281%29.png",
  },
  "Skeletal Wyvern": {
    name: "Skeletal Wyvern",
    url: "Skeletal_Wyvern",
    img: "Skeletal_Wyvern.png",
  },
  "Skeletal miner": {
    name: "Skeletal miner",
    url: "Skeletal_miner",
    img: "Skeletal_miner.png",
  },
  "Skeleton Monkey": {
    name: "Skeleton Monkey",
    url: "Skeleton_(Ape_Atoll)",
    img: "Skeleton_%28Ape_Atoll%29.png",
  },
  "Barrows Crypt Skeleton": {
    name: "Barrows Crypt Skeleton",
    url: "Skeleton_(Barrows)",
    img: "Skeleton_%28Barrows%29.png",
  },
  "Catacombs Skeleton": {
    name: "Catacombs Skeleton",
    url: "Skeleton_(Catacombs_of_Kourend)",
    img: "Skeleton_%28Catacombs_of_Kourend%29.png",
  },
  "Draynor Skeleton": {
    name: "Draynor Skeleton",
    url: "Skeleton_(Draynor_Manor)",
    img: "Skeleton_%28Draynor_Manor%29.png",
  },
  "Forthos Skeleton": {
    name: "Forthos Skeleton",
    url: "Skeleton_(Forthos_Ruin)",
    img: "Skeleton_%28Forthos_Ruin%2C_1%29.png",
  },
  "Melzar's Skeleton": {
    name: "Melzar's Skeleton",
    url: "Skeleton_(Melzar%27s_Maze)",
    img: "Skeleton_%28Melzar%27s_Maze%29.png",
  },
  "Shayzien Skeleton": {
    name: "Shayzien Skeleton",
    url: "Skeleton_(Shayzien_Crypts)",
    img: "Skeleton_%289%29.png",
  },
  "Security Stronghold Skeleton": {
    name: "Security Stronghold Skeleton",
    url: "Skeleton_(Stronghold_of_Security)",
    img: "Skeleton_%28Stronghold_of_Security%2C_1%29.png",
  },
  "Skeleton Mage": {
    name: "Skeleton Mage",
    url: "Skeleton_Mage",
    img: "Skeleton_Mage_%28lv_16%29.png",
  },
  "Skeleton Champion": {
    name: "Skeleton Champion",
    url: "Skeleton_Champion",
    img: "Skeleton_Champion.png",
  },
  "Skeleton Hellhound": {
    name: "Skeleton Hellhound",
    url: "Skeleton_Hellhound",
    img: "Skeleton_Hellhound.png",
  },
  "Skeleton brute": {
    name: "Skeleton brute",
    url: "Skeleton_brute",
    img: "Skeleton_brute.png",
  },
  "Skeleton fremennik": {
    name: "Skeleton fremennik",
    url: "Skeleton_fremennik",
    img: "Skeleton_fremennik.png",
  },
  "Skeleton guard": {
    name: "Skeleton guard",
    url: "Skeleton_guard",
    img: "Skeleton_guard.png",
  },
  "Skeleton heavy": {
    name: "Skeleton heavy",
    url: "Skeleton_heavy",
    img: "Skeleton_heavy.png",
  },
  "Skeleton hero": {
    name: "Skeleton hero",
    url: "Skeleton_hero",
    img: "Skeleton_hero.png",
  },
  "Skeleton thug": {
    name: "Skeleton thug",
    url: "Skeleton_thug",
    img: "Skeleton_thug.png",
  },
  "Skeleton warlord": {
    name: "Skeleton warlord",
    url: "Skeleton_warlord",
    img: "Skeleton_warlord.png",
  },
  Skeleton: {
    name: "Skeleton",
    url: "Skeleton",
    img: "Skeleton.png",
  },
  Skoblin: {
    name: "Skoblin",
    url: "Skoblin",
    img: "Skoblin.png",
  },
  Skogre: {
    name: "Skogre",
    url: "Skogre",
    img: "Skogre.png",
  },
  Skotizo: {
    name: "Skotizo",
    url: "Skotizo",
    img: "Skotizo.png",
  },
  Skraeling: {
    name: "Skraeling",
    url: "Skraeling_(Etceteria)",
    img: "Skraeling_%28sword%29.png",
  },
  Slagilith: {
    name: "Slagilith",
    url: "Slagilith",
    img: "Slagilith.png",
  },
  "Slash Bash": {
    name: "Slash Bash",
    url: "Slash_Bash",
    img: "Slash_Bash.png",
  },
  Sleepwalker: {
    name: "Sleepwalker",
    url: "Sleepwalker_(monster)",
    img: "Sleepwalker_%281%29.png",
  },
  "Slug Prince": {
    name: "Slug Prince",
    url: "Slug_Prince",
    img: "Slug_Prince.png",
  },
  "Small Lizard": {
    name: "Small Lizard",
    url: "Small_Lizard",
    img: "Small_Lizard.png",
  },
  "Smoke devil": {
    name: "Smoke devil",
    url: "Smoke_devil",
    img: "Smoke_devil.png",
  },
  Snailfeet: {
    name: "Snailfeet",
    url: "Snailfeet",
    img: "Snailfeet.png",
  },
  Snake: {
    name: "Snake",
    url: "Snake",
    img: "Snake.png",
  },
  "Atoll Snake": {
    name: "Atoll Snake",
    url: "Snake_(Ape_Atoll)",
    img: "Snake_%28Ape_Atoll%29.png",
  },
  "Mos Le'Harmless Snake": {
    name: "Mos Le'Harmless Snake",
    url: "Snake_(Mos_Le%27Harmless)",
    img: "Snake_%28Mos_Le%27Harmless%29.png",
  },
  "Varlamore Snake": {
    name: "Varlamore Snake",
    url: "Snake_(Varlamore)",
    img: "Snake_%28Varlamore%29.png",
  },
  "Desert Snake": {
    name: "Desert Snake",
    url: "Snake_(desert)",
    img: "Snake_%28desert%29.png",
  },
  Snakeling: {
    name: "Snakeling",
    url: "Snakeling",
    img: "Snakeling.png",
  },
  Snothead: {
    name: "Snothead",
    url: "Snothead",
    img: "Snothead.png",
  },
  Sofiya: {
    name: "Sofiya",
    url: "Sofiya",
    img: "Sofiya.png",
  },
  "Sol Heredit": {
    name: "Sol Heredit",
    url: "Sol_Heredit",
    img: "Sol_Heredit.png",
  },
  "Burthorpe Soldier": {
    name: "Burthorpe Soldier",
    url: "Soldier_(Burthorpe)",
    img: "Soldier_%28Burthorpe%29.png",
  },
  "Shayzien Soldier": {
    name: "Shayzien Soldier",
    url: "Soldier_(Shayzien)",
    img: "Soldier_%28Shayzien%29.png",
  },
  "Yanille Soldier": {
    name: "Yanille Soldier",
    url: "Soldier_(Yanille)",
    img: "Soldier_%28Yanille%29.png",
  },
  "Soldier Scarab": {
    name: "Soldier Scarab",
    url: "Soldier_Scarab",
    img: "Soldier_Scarab.png",
  },
  "Solus Dellagar": {
    name: "Solus Dellagar",
    url: "Solus_Dellagar",
    img: "Solus_Dellagar.png",
  },
  Sorebones: {
    name: "Sorebones",
    url: "Sorebones",
    img: "Sorebones_%28apron%29.png",
  },
  Sotetseg: {
    name: "Sotetseg",
    url: "Sotetseg",
    img: "Sotetseg.png",
  },
  Soulless: {
    name: "Soulless",
    url: "Soulless",
    img: "Soulless.png",
  },
  Sourhog: {
    name: "Sourhog",
    url: "Sourhog",
    img: "Sourhog.png",
  },
  Spawn: {
    name: "Spawn",
    url: "Spawn",
    img: "Spawn.png",
  },
  "Spawn of Sarachnis": {
    name: "Spawn of Sarachnis",
    url: "Spawn_of_Sarachnis",
    img: "Spawn_of_Sarachnis_%28melee%29.png",
  },
  "Speedy Keith": {
    name: "Speedy Keith",
    url: "Speedy_Keith",
    img: "Speedy_Keith.png",
  },
  "Atoll Spider": {
    name: "Atoll Spider",
    url: "Spider_(Ape_Atoll)",
    img: "Spider_%28Ape_Atoll%29.png",
  },
  "Ungael Spider": {
    name: "Ungael Spider",
    url: "Spider_(Ungael)",
    img: "Spider_%28Ungael%29.png",
  },
  "Araxyte Spider": {
    name: "Araxyte Spider",
    url: "Spider_(araxyte)",
    img: "Spider_%28araxyte%2C_lv_87%29.png",
  },
  Spider: {
    name: "Spider",
    url: "Spider",
    img: "Spider.png",
  },
  Spidine: {
    name: "Spidine",
    url: "Spidine",
    img: "Spidine.png",
  },
  "Spiked Turoth": {
    name: "Spiked Turoth",
    url: "Spiked_Turoth",
    img: "Spiked_Turoth.png",
  },
  Spinner: {
    name: "Spinner",
    url: "Spinner",
    img: "Spinner.png",
  },
  Spinolyp: {
    name: "Spinolyp",
    url: "Spinolyp",
    img: "Spinolyp.png",
  },
  "Spiritual mage": {
    name: "Spiritual mage",
    url: "Spiritual_mage",
    img: "Spiritual_Mage_%28Zaros%29.png",
  },
  "Spiritual ranger": {
    name: "Spiritual ranger",
    url: "Spiritual_ranger",
    img: "Spiritual_Ranger_%28Zaros%29.png",
  },
  "Spiritual warrior": {
    name: "Spiritual warrior",
    url: "Spiritual_warrior",
    img: "Spiritual_Warrior_%28Zaros%29.png",
  },
  "Spitting Scarab": {
    name: "Spitting Scarab",
    url: "Spitting_Scarab",
    img: "Spitting_Scarab.png",
  },
  "Spitting Wyvern": {
    name: "Spitting Wyvern",
    url: "Spitting_Wyvern",
    img: "Spitting_Wyvern.png",
  },
  Splatter: {
    name: "Splatter",
    url: "Splatter",
    img: "Splatter_%28level_22%29.png",
  },
  Stag: {
    name: "Stag",
    url: "Stag",
    img: "Stag.png",
  },
  Starlight: {
    name: "Starlight",
    url: "Starlight",
    img: "Starlight.png",
  },
  "Steel dragon": {
    name: "Steel dragon",
    url: "Steel_dragon",
    img: "Steel_dragon.png",
  },
  Stick: {
    name: "Stick",
    url: "Stick",
    img: "Stick.png",
  },
  "Stone Guardian": {
    name: "Stone Guardian",
    url: "Stone_Guardian",
    img: "Stone_Guardian_%28magic%29.png",
  },
  "Strange Creature": {
    name: "Strange Creature",
    url: "Strange_Creature",
    img: "Strange_Creature_%28melee%29.png",
  },
  Stranger: {
    name: "Stranger",
    url: "Stranger",
    img: "Stranger.png",
  },
  "Strangled Bear": {
    name: "Strangled Bear",
    url: "Strangled_Bear",
    img: "Strangled_Bear.png",
  },
  "Strangled Boar": {
    name: "Strangled Boar",
    url: "Strangled_Boar",
    img: "Strangled_Boar.png",
  },
  "Strangled Lynx": {
    name: "Strangled Lynx",
    url: "Strangled_Lynx",
    img: "Strangled_Lynx.png",
  },
  Strangled: {
    name: "Strangled",
    url: "Strangled",
    img: "Strangled_%281%29.png",
  },
  Strongbones: {
    name: "Strongbones",
    url: "Strongbones",
    img: "Strongbones.png",
  },
  "Suit of armour": {
    name: "Suit of armour",
    url: "Suit_of_armour",
    img: "Suit_of_armour.png",
  },
  "Sulphur Lizard": {
    name: "Sulphur Lizard",
    url: "Sulphur_Lizard",
    img: "Sulphur_Lizard.png",
  },
  "Sulphur Nagua": {
    name: "Sulphur Nagua",
    url: "Sulphur_Nagua",
    img: "Sulphur_Nagua.png",
  },
  "Summoned Zombie": {
    name: "Summoned Zombie",
    url: "Summoned_Zombie",
    img: "Summoned_Zombie.png",
  },
  Suqah: {
    name: "Suqah",
    url: "Suqah",
    img: "Suqah_%281%29.png",
  },
  Svetlana: {
    name: "Svetlana",
    url: "Svetlana",
    img: "Svetlana.png",
  },
  "Swamp Crab": {
    name: "Swamp Crab",
    url: "Swamp_Crab",
    img: "Swampy_log.png",
  },
  "Swamp frog": {
    name: "Swamp frog",
    url: "Swamp_frog",
    img: "Swamp_frog.png",
  },
  "Swamp snake": {
    name: "Swamp snake",
    url: "Swamp_snake",
    img: "Swamp_snake.png",
  },
  Swordchick: {
    name: "Swordchick",
    url: "Swordchick",
    img: "Swordchick.png",
  },
  "Taloned Wyvern": {
    name: "Taloned Wyvern",
    url: "Taloned_Wyvern",
    img: "Taloned_Wyvern.png",
  },
  Tanglefoot: {
    name: "Tanglefoot",
    url: "Tanglefoot",
    img: "Tanglefoot.png",
  },
  "Tar Monster": {
    name: "Tar Monster",
    url: "Tar_Monster",
    img: "Tar_Monster.png",
  },
  Target: {
    name: "Target",
    url: "Target",
    img: "Target.png",
  },
  Tarik: {
    name: "Tarik",
    url: "Tarik_(Nardah)",
    img: "Tarik_%28Nardah%29.png",
  },
  Tekton: {
    name: "Tekton",
    url: "Tekton",
    img: "Tekton.png",
  },
  "Temple Guardian": {
    name: "Temple Guardian",
    url: "Temple_Guardian",
    img: "Temple_guardian.png",
  },
  "Temple Spider": {
    name: "Temple Spider",
    url: "Temple_Spider",
    img: "Temple_Spider.png",
  },
  "Sire Tentacle": {
    name: "Sire Tentacle",
    url: "Tentacle_(Abyssal_Sire)",
    img: "Tentacle_%28Abyssal_Sire%2C_stunned%29.png",
  },
  "Temple Trekking Tentacle": {
    name: "Temple Trekking Tentacle",
    url: "Tentacle_(Temple_Trekking)",
    img: "Tentacle_%28Temple_Trekking%29.png",
  },
  "Terror dog": {
    name: "Terror dog",
    url: "Terror_dog",
    img: "Terror_dog_%28level_100%29.png",
  },
  Terrorbird: {
    name: "Terrorbird",
    url: "Terrorbird",
    img: "Terrorbird.png",
  },
  "The Draugen": {
    name: "The Draugen",
    url: "The_Draugen",
    img: "The_Draugen.png",
  },
  "The Everlasting": {
    name: "The Everlasting",
    url: "The_Everlasting",
    img: "The_Everlasting.png",
  },
  "The Forsaken Assassin": {
    name: "The Forsaken Assassin",
    url: "The_Forsaken_Assassin",
    img: "The_Forsaken_Assassin.png",
  },
  "The Illusive": {
    name: "The Illusive",
    url: "The_Illusive",
    img: "The_Illusive.png",
  },
  "The Inadequacy": {
    name: "The Inadequacy",
    url: "The_Inadequacy",
    img: "The_Inadequacy.png",
  },
  "The Kendal": {
    name: "The Kendal",
    url: "The_Kendal",
    img: "The_Kendal.png",
  },
  "The Maiden of Sugadinti": {
    name: "The Maiden of Sugadinti",
    url: "The_Maiden_of_Sugadinti",
    img: "The_Maiden_of_Sugadinti.png",
  },
  "The Shaikahan": {
    name: "The Shaikahan",
    url: "The_Shaikahan",
    img: "The_Shaikahan.png",
  },
  "The Untouchable": {
    name: "The Untouchable",
    url: "The_Untouchable",
    img: "The_Untouchable.png",
  },
  "Thermonuclear smoke devil": {
    name: "Thermonuclear smoke devil",
    url: "Thermonuclear_smoke_devil",
    img: "Thermonuclear_smoke_devil.png",
  },
  "Varlamore Thief": {
    name: "Varlamore Thief",
    url: "Thief_(Varlamore)",
    img: "Thief_%28Varlamore%2C_1%29.png",
  },
  Thief: {
    name: "Thief",
    url: "Thief",
    img: "Thief_%28Varrock%2C_1%29.png",
  },
  "Thing under the bed": {
    name: "Thing under the bed",
    url: "Thing_under_the_bed",
    img: "Thing_under_the_bed.png",
  },
  "Third Age Mage": {
    name: "Third Age Mage",
    url: "Third_Age_Mage",
    img: "Third_Age_Mage.png",
  },
  "Third Age Ranger": {
    name: "Third Age Ranger",
    url: "Third_Age_Ranger",
    img: "Third_Age_Ranger.png",
  },
  "Third Age Warrior": {
    name: "Third Age Warrior",
    url: "Third_Age_Warrior",
    img: "Third_Age_Warrior.png",
  },
  Thora: {
    name: "Thora",
    url: "Thora_(Miscellania)",
    img: "Thora_%28Miscellania%29.png",
  },
  Thorhild: {
    name: "Thorhild",
    url: "Thorhild",
    img: "Thorhild.png",
  },
  "Thrantax the Mighty": {
    name: "Thrantax the Mighty",
    url: "Thrantax_the_Mighty",
    img: "Thrantax_the_Mighty.png",
  },
  "Thrower Troll": {
    name: "Thrower Troll",
    url: "Thrower_Troll",
    img: "Thrower_Troll.png",
  },
  Thug: {
    name: "Thug",
    url: "Thug",
    img: "Thug.png",
  },
  "Tok-Xil": {
    name: "Tok-Xil",
    url: "Tok-Xil",
    img: "Tok-Xil_%282%29.png",
  },
  Tolna: {
    name: "Tolna",
    url: "Tolna",
    img: "Tolna_%28monster%29.png",
  },
  "Torag the Corrupted": {
    name: "Torag the Corrupted",
    url: "Torag_the_Corrupted",
    img: "Torag_the_Corrupted.png",
  },
  Torcher: {
    name: "Torcher",
    url: "Torcher",
    img: "Torcher.png",
  },
  "Tormented Soul": {
    name: "Tormented Soul",
    url: "Tormented_Soul",
    img: "Tormented_Soul.png",
  },
  "Tormented Warrior": {
    name: "Tormented Warrior",
    url: "Tormented_Warrior",
    img: "Tormented_Warrior.png",
  },
  Tortoise: {
    name: "Tortoise",
    url: "Tortoise",
    img: "Tortoise.png",
  },
  "Tortured gorilla": {
    name: "Tortured gorilla",
    url: "Tortured_gorilla",
    img: "Tortured_gorilla.png",
  },
  "Tortured soul": {
    name: "Tortured soul",
    url: "Tortured_soul",
    img: "Tortured_soul.png",
  },
  Totem: {
    name: "Totem",
    url: "Totem_(The_Nightmare)",
    img: "Totem_%28The_Nightmare%2C_uncharged%29.png",
  },
  "Tough Guy": {
    name: "Tough Guy",
    url: "Tough_Guy",
    img: "Tough_Guy.png",
  },
  "Tower Archer": {
    name: "Tower Archer",
    url: "Tower_Archer",
    img: "Tower_Archer_%28Level_34%29.png",
  },
  "Tower guard": {
    name: "Tower guard",
    url: "Tower_guard",
    img: "Tower_guard.png",
  },
  "Trapped Soul": {
    name: "Trapped Soul",
    url: "Trapped_Soul",
    img: "Trapped_Soul.png",
  },
  "Dramen Tree Spirit": {
    name: "Dramen Tree Spirit",
    url: "Tree_spirit_(Lost_City)",
    img: "Tree_spirit_%28Lost_City%29.png",
  },
  "Tree Spirit": {
    name: "Tree Spirit",
    url: "Tree_spirit",
    img: "Tree_spirit.png",
  },
  "Treus Dayth": {
    name: "Treus Dayth",
    url: "Treus_Dayth",
    img: "Treus_Dayth.png",
  },
  Tribesman: {
    name: "Tribesman",
    url: "Tribesman",
    img: "Tribesman.png",
  },
  Tribeswoman: {
    name: "Tribeswoman",
    url: "Tribeswoman",
    img: "Tribeswoman_%28dark_brown%29.png",
  },
  "Troll general": {
    name: "Troll general",
    url: "Troll_general",
    img: "Troll_general_%28sword%29.png",
  },
  "Troll spectator": {
    name: "Troll spectator",
    url: "Troll_spectator",
    img: "Mountain_troll.png",
  },
  "Tstanon Karlak": {
    name: "Tstanon Karlak",
    url: "Tstanon_Karlak",
    img: "Tstanon_Karlak.png",
  },
  "Tumeken's Warden": {
    name: "Tumeken's Warden",
    url: "Tumeken%27s_Warden",
    img: "Tumeken%27s_Warden_%28level-489%29.png",
  },
  Turoth: {
    name: "Turoth",
    url: "Turoth",
    img: "Turoth_%28lv_83%29.png",
  },
  Twig: {
    name: "Twig",
    url: "Twig",
    img: "Twig.png",
  },
  "Twisted Banshee": {
    name: "Twisted Banshee",
    url: "Twisted_Banshee",
    img: "Twisted_Banshee.png",
  },
  Typhor: {
    name: "Typhor",
    url: "Typhor",
    img: "Typhor.png",
  },
  "Tyras guard": {
    name: "Tyras guard",
    url: "Tyras_guard",
    img: "Tyras_guard.png",
  },
  "Tz-Kek": {
    name: "Tz-Kek",
    url: "Tz-Kek",
    img: "Tz-Kek_%28level_22%29.png",
  },
  "Tz-Kih": {
    name: "Tz-Kih",
    url: "Tz-Kih",
    img: "Tz-Kih.png",
  },
  "TzHaar-Hur": {
    name: "TzHaar-Hur",
    url: "TzHaar-Hur",
    img: "TzHaar-Hur.png",
  },
  "TzHaar-Ket": {
    name: "TzHaar-Ket",
    url: "TzHaar-Ket",
    img: "TzHaar-Ket_%28level_149%29.png",
  },
  "TzHaar-Mej": {
    name: "TzHaar-Mej",
    url: "TzHaar-Mej_(monster)",
    img: "TzHaar-Mej.png",
  },
  "TzHaar-Xil": {
    name: "TzHaar-Xil",
    url: "TzHaar-Xil",
    img: "TzHaar-Xil_%28ring%29.png",
  },
  "TzKal-Zuk": {
    name: "TzKal-Zuk",
    url: "TzKal-Zuk",
    img: "TzKal-Zuk.png",
  },
  "TzTok-Jad": {
    name: "TzTok-Jad",
    url: "TzTok-Jad",
    img: "TzTok-Jad.png",
  },
  "The Whisperer": {
    name: "The Whisperer",
    url: "The_Whisperer",
    img: "The_Whisperer.png",
  },
  Ugthanki: {
    name: "Ugthanki",
    url: "Ugthanki",
    img: "Ugthanki.png",
  },
  Ulfric: {
    name: "Ulfric",
    url: "Ulfric",
    img: "Ulfric.png",
  },
  Umbra: {
    name: "Umbra",
    url: "Umbra",
    img: "Umbra.png",
  },
  "Undead Druid": {
    name: "Undead Druid",
    url: "Undead_Druid",
    img: "Undead_Druid.png",
  },
  "Undead Lumberjack": {
    name: "Undead Lumberjack",
    url: "Undead_Lumberjack",
    img: "Undead_Lumberjack.png",
  },
  "Undead Zealot": {
    name: "Undead Zealot",
    url: "Undead_Zealot",
    img: "Undead_Zealot.png",
  },
  "Undead chicken": {
    name: "Undead chicken",
    url: "Undead_chicken",
    img: "Undead_chicken.png",
  },
  "Undead cow": {
    name: "Undead cow",
    url: "Undead_cow",
    img: "Undead_cow.png",
  },
  "Undead one": {
    name: "Undead one",
    url: "Undead_one",
    img: "Undead_one_%28Zombie%29.png",
  },
  Ungadulu: {
    name: "Ungadulu",
    url: "Ungadulu",
    img: "Ungadulu.png",
  },
  Unicorn: {
    name: "Unicorn",
    url: "Unicorn",
    img: "Unicorn.png",
  },
  "Unicorn Foal": {
    name: "Unicorn Foal",
    url: "Unicorn_Foal",
    img: "Unicorn_Foal.png",
  },
  Unicow: {
    name: "Unicow",
    url: "Unicow",
    img: "Unicow.png",
  },
  "Urium Shade": {
    name: "Urium Shade",
    url: "Urium_Shade",
    img: "Urium_Shade.png",
  },
  Valgerd: {
    name: "Valgerd",
    url: "Valgerd",
    img: "Valgerd.png",
  },
  "Vampyre Juvenile": {
    name: "Vampyre Juvenile",
    url: "Vampyre_Juvenile",
    img: "Vampyre_Juvenile.png",
  },
  "Vampyre Juvinate": {
    name: "Vampyre Juvinate",
    url: "Vampyre_Juvinate",
    img: "Juvinate.png",
  },
  Vanguard: {
    name: "Vanguard",
    url: "Vanguard",
    img: "Vanguard_%28magic%29.png",
  },
  "Vanstrom Klause": {
    name: "Vanstrom Klause",
    url: "Vanstrom_Klause",
    img: "Vanstrom_Klause_%28vampyre%29.png",
  },
  Vardorvis: {
    name: "Vardorvis",
    url: "Vardorvis",
    img: "Vardorvis.png",
  },
  "Vasa Nistirio": {
    name: "Vasa Nistirio",
    url: "Vasa_Nistirio",
    img: "Vasa_Nistirio.png",
  },
  Venenatis: {
    name: "Venenatis",
    url: "Venenatis",
    img: "Venenatis.png",
  },
  "Venenatis' Spiderling": {
    name: "Venenatis' Spiderling",
    url: "Venenatis%27_Spiderling_(monster)",
    img: "Venenatis%27_Spiderling.png",
  },
  Vera: {
    name: "Vera",
    url: "Vera",
    img: "Vera.png",
  },
  "Verac the Defiled": {
    name: "Verac the Defiled",
    url: "Verac_the_Defiled",
    img: "Verac_the_Defiled.png",
  },
  "Verzik Vitur": {
    name: "Verzik Vitur",
    url: "Verzik_Vitur",
    img: "Verzik_Vitur.png",
  },
  "Vespine soldier": {
    name: "Vespine soldier",
    url: "Vespine_soldier",
    img: "Vespine_soldier.png",
  },
  Vespula: {
    name: "Vespula",
    url: "Vespula",
    img: "Vespula.png",
  },
  "Vet'ion": {
    name: "Vet'ion",
    url: "Vet%27ion",
    img: "Vet%27ion.png",
  },
  "Vitreous Jelly": {
    name: "Vitreous Jelly",
    url: "Vitreous_Jelly",
    img: "Vitreous_Jelly.png",
  },
  "Vitreous warped Jelly": {
    name: "Vitreous warped Jelly",
    url: "Vitreous_warped_Jelly",
    img: "Vitreous_warped_Jelly.png",
  },
  Viyeldi: {
    name: "Viyeldi",
    url: "Viyeldi",
    img: "Viyeldi.png",
  },
  "Void Knight": {
    name: "Void Knight",
    url: "Void_Knight_(Pest_Control)",
    img: "Void_Knight_%28Pest_Control%2C_1%29.png",
  },
  "Volatile Baboon": {
    name: "Volatile Baboon",
    url: "Volatile_Baboon",
    img: "Volatile_Baboon.png",
  },
  Vorkath: {
    name: "Vorkath",
    url: "Vorkath",
    img: "Vorkath.png",
  },
  Vulture: {
    name: "Vulture",
    url: "Vulture",
    img: "Vulture.png",
  },
  "Vyrewatch Sentinel": {
    name: "Vyrewatch Sentinel",
    url: "Vyrewatch_Sentinel",
    img: "Vyrewatch_Sentinel_%281%29.png",
  },
  Vyrewatch: {
    name: "Vyrewatch",
    url: "Vyrewatch",
    img: "Vyrewatch.png",
  },
  Wallasalki: {
    name: "Wallasalki",
    url: "Wallasalki",
    img: "Wallasalki.png",
  },
  "Warped Jelly": {
    name: "Warped Jelly",
    url: "Warped_Jelly",
    img: "Warped_Jelly.png",
  },
  "Warped Terrorbird": {
    name: "Warped Terrorbird",
    url: "Warped_Terrorbird",
    img: "Warped_Terrorbird_%28lv_96%29.png",
  },
  "Warped Tortoise": {
    name: "Warped Tortoise",
    url: "Warped_Tortoise",
    img: "Warped_Tortoise.png",
  },
  "Rellekka Warrior": {
    name: "Rellekka Warrior",
    url: "Warrior_(Rellekka)",
    img: "Warrior_%28Rellekka%29.png",
  },
  Warrior: {
    name: "Warrior",
    url: "Warrior_(Thieving)",
    img: "Warrior_%28Thieving%2C_bald%29.png",
  },
  Watchman: {
    name: "Watchman",
    url: "Watchman",
    img: "Watchman_%28Yanille%29.png",
  },
  "Water elemental": {
    name: "Water elemental",
    url: "Water_elemental",
    img: "Water_elemental.png",
  },
  "Water wizard": {
    name: "Water wizard",
    url: "Water_wizard",
    img: "Water_wizard.png",
  },
  Waterfiend: {
    name: "Waterfiend",
    url: "Waterfiend",
    img: "Waterfiend.png",
  },
  Weaponsmaster: {
    name: "Weaponsmaster",
    url: "Weaponsmaster",
    img: "Weaponsmaster.png",
  },
  Werewolf: {
    name: "Werewolf",
    url: "Werewolf",
    img: "Werewolf_%28Lev%29.png",
  },
  "Burthorpe White Knight": {
    name: "Burthorpe White Knight",
    url: "White_Knight_(Burthorpe)",
    img: "White_Knight_%28partisan%2C_male%29.png",
  },
  "White Knight": {
    name: "White Knight",
    url: "White_Knight",
    img: "White_Knight_%28acolyte%2C_male%29.png",
  },
  "White golem": {
    name: "White golem",
    url: "White_golem",
    img: "White_golem.png",
  },
  "White wolf": {
    name: "White wolf",
    url: "White_wolf",
    img: "White_wolf.png",
  },
  "Wighted Leech": {
    name: "Wighted Leech",
    url: "Wighted_Leech",
    img: "Wighted_Leech.png",
  },
  "Wild dog": {
    name: "Wild dog",
    url: "Wild_dog",
    img: "Wild_dog.png",
  },
  Wilson: {
    name: "Wilson",
    url: "Wilson",
    img: "Wilson.png",
  },
  "Wingman Skree": {
    name: "Wingman Skree",
    url: "Wingman_Skree",
    img: "Wingman_Skree.png",
  },
  "Witch's experiment": {
    name: "Witch's experiment",
    url: "Witch%27s_experiment",
    img: "Witch%27s_experiment.png",
  },
  Wizard: {
    name: "Wizard",
    url: "Wizard",
    img: "Wizard.png",
  },
  Wolf: {
    name: "Wolf",
    url: "Wolf",
    img: "Wolf.png",
  },
  "East Ardougne Woman": {
    name: "East Ardougne Woman",
    url: "Woman_(East_Ardougne)",
    img: "Woman_%28East_Ardougne%29.png",
  },
  "West Ardougne Woman": {
    name: "West Ardougne Woman",
    url: "Woman_(West_Ardougne)",
    img: "Woman_%28West_Ardougne%2C_level_12%29.png",
  },
  Woman: {
    name: "Woman",
    url: "Woman",
    img: "Woman.png",
  },
  Wyrm: {
    name: "Wyrm",
    url: "Wyrm",
    img: "Wyrm.png",
  },
  Wyrmling: {
    name: "Wyrmling",
    url: "Wyrmling",
    img: "Wyrmling.png",
  },
  Xamphur: {
    name: "Xamphur",
    url: "Xamphur",
    img: "Xamphur_%28monster%29.png",
  },
  Xarpus: {
    name: "Xarpus",
    url: "Xarpus",
    img: "Xarpus.png",
  },
  Yadviga: {
    name: "Yadviga",
    url: "Yadviga",
    img: "Yadviga.png",
  },
  Yak: {
    name: "Yak",
    url: "Yak",
    img: "Yak.png",
  },
  "Young impling": {
    name: "Young impling",
    url: "Young_impling",
    img: "Young_impling.png",
  },
  "Yt-HurKot": {
    name: "Yt-HurKot",
    url: "Yt-HurKot",
    img: "Yt-HurKot.png",
  },
  "Yt-MejKot": {
    name: "Yt-MejKot",
    url: "Yt-MejKot",
    img: "Yt-MejKot_%282%29.png",
  },
  Yuri: {
    name: "Yuri",
    url: "Yuri",
    img: "Yuri.png",
  },
  "Zakl'n Gritch": {
    name: "Zakl'n Gritch",
    url: "Zakl%27n_Gritch",
    img: "Zakl%27n_Gritch.png",
  },
  Zalcano: {
    name: "Zalcano",
    url: "Zalcano",
    img: "Zalcano.png",
  },
  "Zamorak crafter": {
    name: "Zamorak crafter",
    url: "Zamorak_crafter",
    img: "Zamorak_crafter.png",
  },
  "Zamorak mage": {
    name: "Zamorak mage",
    url: "Zamorak_mage",
    img: "Zamorak_mage_%28level_82%29.png",
  },
  "Zamorak ranger": {
    name: "Zamorak ranger",
    url: "Zamorak_ranger",
    img: "Zamorak_ranger_%28level_81%29.png",
  },
  "Zamorak warrior": {
    name: "Zamorak warrior",
    url: "Zamorak_warrior",
    img: "Zamorak_warrior_%28level_84%29.png",
  },
  "Zamorak wizard": {
    name: "Zamorak wizard",
    url: "Zamorak_wizard",
    img: "Zamorak_wizard.png",
  },
  Zebak: {
    name: "Zebak",
    url: "Zebak",
    img: "Zebak.png",
  },
  Zogre: {
    name: "Zogre",
    url: "Zogre",
    img: "Zogre_%281%29.png",
  },
  Zoja: {
    name: "Zoja",
    url: "Zoja",
    img: "Zoja.png",
  },
  "Entrana Zombie": {
    name: "Entrana Zombie",
    url: "Zombie_(Entrana_Dungeon)",
    img: "Zombie_%28Level_25%29.png",
  },
  "Melzar's Zombie": {
    name: "Melzar's Zombie",
    url: "Zombie_(Melzar%27s_Maze)",
    img: "Zombie_%28Level_24%2C_6%29.png",
  },
  "Security Stronghold Zombie": {
    name: "Security Stronghold Zombie",
    url: "Zombie_(Sepulchre_of_Death)",
    img: "Zombie_%28Sepulchre_of_Death%29.png",
  },
  "Shayzien Zombie": {
    name: "Shayzien Zombie",
    url: "Zombie_(Shayzien_Crypts)",
    img: "Zombie_%28Shayzien_Crypts%2C_Magic%29.png",
  },
  "Tarn's Zombie": {
    name: "Tarn's Zombie",
    url: "Zombie_(Tarn%27s_Lair)",
    img: "Zombie_%28Tarn%27s_Lair%2C_Level_40%29.png",
  },
  "Temple Trekking Zombie": {
    name: "Temple Trekking Zombie",
    url: "Zombie_(Temple_Trekking)",
    img: "Zombie_%28Temple_Trekking%29.png",
  },
  "Zogre Zombie": {
    name: "Zogre Zombie",
    url: "Zombie_(Zogre_Flesh_Eaters)",
    img: "Zombie_%28Zogre_Flesh_Eaters%29.png",
  },
  "Zombie Braindeath Pirate": {
    name: "Zombie Braindeath Pirate",
    url: "Zombie_pirate_(Braindeath_Island)",
    img: "Zombie_pirate_%28Braindeath_Island%29_%281%29.png",
  },
  "Zombie Harmony Pirate": {
    name: "Zombie Harmony Pirate",
    url: "Zombie_pirate_(Harmony_Island)",
    img: "Zombie_pirate_%28Harmony_Island%29_%281%29.png",
  },
  "Zombie pirate": {
    name: "Zombie pirate",
    url: "Zombie_pirate",
    img: "Zombie_pirate_%281%29.png",
  },
  "Zombie rat": {
    name: "Zombie rat",
    url: "Zombie_rat",
    img: "Zombie_rat_%281%29.png",
  },
  "Zombie swab": {
    name: "Zombie swab",
    url: "Zombie_swab",
    img: "Zombie_swab_%281%29.png",
  },
  Zombie: {
    name: "Zombie",
    url: "Zombie",
    img: "Zombie_%28Level_13%29.png",
  },
  "Zombies Champion": {
    name: "Zombies Champion",
    url: "Zombies_Champion",
    img: "Zombies_Champion.png",
  },
  "Zombified Spawn": {
    name: "Zombified Spawn",
    url: "Zombified_Spawn",
    img: "Zombified_Spawn.png",
  },
  Zulrah: {
    name: "Zulrah",
    url: "Zulrah",
    img: "Zulrah_%28magma%29.png",
  },
  Zygomite: {
    name: "Zygomite",
    url: "Zygomite",
    img: "Zygomite_%28level_74%29.png",
  },
};
