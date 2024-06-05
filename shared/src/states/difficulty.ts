import { Song } from "../songTypes.js";

export type Difficulty = "tutorial" | "normal" | "hard" | "extreme";
type TimeLimit =
  | { type: "none" }
  | { type: "immediately"; duration: number }
  | { type: "afterFirstGuess"; duration: number };

export type DifficultyConfig = {
  name: Difficulty;
  description: string[];
  damageScaling: number;
  songDifficulty: Record<Song["difficulty"], boolean>;
  songRandomStart: boolean;
  timeLimit: TimeLimit;
  venom?: { startRound: number };
  healing?: {
    startAmount: number;
    minAmount: number;
    decreasePerRound: number;
  };
};

const difficulties: Record<
  "singleplayer" | "multiplayer",
  Record<Difficulty, DifficultyConfig>
> = {
  singleplayer: {
    tutorial: {
      name: "tutorial",
      description: [
        "Recommended for your first game.",
        "Take half damage, with only the easiest and most well-known songs.",
      ],
      damageScaling: 0.25,
      songDifficulty: {
        easy: true,
        normal: false,
        hard: false,
        extreme: false,
      },
      songRandomStart: false,
      timeLimit: { type: "none" },
      healing: { startAmount: 20, minAmount: 12, decreasePerRound: 1 },
    },
    normal: {
      name: "normal",
      description: [
        "Recommended for relaxed games.",
        "Most songs are enabled, and you take normal damage.",
      ],
      damageScaling: 0.5,
      songDifficulty: {
        easy: true,
        normal: true,
        hard: false,
        extreme: false,
      },
      songRandomStart: false,
      timeLimit: { type: "none" },
      healing: { startAmount: 20, minAmount: 6, decreasePerRound: 1 },
    },
    hard: {
      name: "hard",
      description: [
        "Recommended for more challenging games, and the default in public games.",
        "Almost all songs are enabled, and you take normal damage.",
        "Songs start at a random point, rather than at the start. The audio controls are hidden.",
        "After 10 rounds, everyone starts taking venom damage.",
        "60 seconds time limit per round.",
      ],
      damageScaling: 0.5,
      songDifficulty: {
        easy: true,
        normal: true,
        hard: true,
        extreme: false,
      },
      songRandomStart: true,
      timeLimit: { type: "immediately", duration: 60 },
      venom: { startRound: 10 },
      healing: { startAmount: 20, minAmount: 0, decreasePerRound: 1 },
    },
    extreme: {
      name: "extreme",
      description: [
        "Not recommended for anyone. Everything in hard, plus:",
        "All songs are enabled, including ridiculously obscure songs that only play once during an instanced quest cutscene.",
        "Only 20s per round, and double damage.",
      ],
      damageScaling: 1,
      songDifficulty: {
        easy: true,
        normal: true,
        hard: true,
        extreme: true,
      },
      songRandomStart: true,
      timeLimit: { type: "immediately", duration: 20 },
      venom: { startRound: 10 },
      healing: { startAmount: 20, minAmount: 0, decreasePerRound: 1 },
    },
  },
  multiplayer: {
    tutorial: {
      name: "tutorial",
      description: [
        "Recommended for your first game.",
        "Take half damage, with only the easiest and most well-known songs.",
        "After the first person guesses, everyone else has 30s to guess.",
      ],
      damageScaling: 0.5,
      songDifficulty: {
        easy: true,
        normal: false,
        hard: false,
        extreme: false,
      },
      songRandomStart: false,
      timeLimit: { type: "afterFirstGuess", duration: 30 },
      healing: { startAmount: 20, minAmount: 12, decreasePerRound: 1 },
    },
    normal: {
      name: "normal",
      description: [
        "Recommended for relaxed games.",
        "Most songs are enabled, and you take normal damage.",
        "After the first person guesses, everyone else has 20s to guess.",
      ],
      damageScaling: 1,
      songDifficulty: {
        easy: true,
        normal: true,
        hard: false,
        extreme: false,
      },
      songRandomStart: false,
      timeLimit: { type: "afterFirstGuess", duration: 20 },
      healing: { startAmount: 20, minAmount: 6, decreasePerRound: 1 },
    },
    hard: {
      name: "hard",
      description: [
        "Recommended for more challenging games, and the default in public games.",
        "Almost all songs are enabled, and you take normal damage.",
        "Songs start at a random point, rather than at the start. The audio controls are hidden.",
        "After 10 rounds, everyone starts taking venom damage.",
        "After the first person guesses, everyone else has 15s to guess.",
      ],
      damageScaling: 1,
      songDifficulty: {
        easy: true,
        normal: true,
        hard: true,
        extreme: false,
      },
      songRandomStart: true,
      timeLimit: { type: "afterFirstGuess", duration: 15 },
      venom: { startRound: 10 },
      healing: { startAmount: 20, minAmount: 0, decreasePerRound: 1 },
    },
    extreme: {
      name: "extreme",
      description: [
        "Not recommended for anyone. Everything in hard, plus:",
        "All songs are enabled, including ridiculously obscure songs that only play once during an instanced quest cutscene.",
        "After the first person guesses, everyone else has 10s to guess.",
        "Double damage.",
      ],
      damageScaling: 1,
      songDifficulty: {
        easy: true,
        normal: true,
        hard: true,
        extreme: true,
      },
      songRandomStart: true,
      timeLimit: { type: "afterFirstGuess", duration: 10 },
      venom: { startRound: 10 },
      healing: { startAmount: 20, minAmount: 0, decreasePerRound: 1 },
    },
  },
};

export function getDifficultyConfig(
  difficulty: Difficulty,
  singlePlayer: boolean
): DifficultyConfig {
  const modeDifficulties = singlePlayer
    ? difficulties.singleplayer
    : difficulties.multiplayer;
  return modeDifficulties[difficulty];
}
