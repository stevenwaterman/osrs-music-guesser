import { Howl, Howler } from "howler";
import { volumeStore } from "./stores";

volumeStore.subscribe((volume) => Howler.volume(volume));

const clickSound = new Howl({ src: "/click.ogg" });
const clockSound = new Howl({ src: "/clock.ogg", loop: true });
const deadSound = new Howl({ src: "/dead.ogg" });
const errorSound = new Howl({ src: "/error.ogg" });
const healSound = new Howl({ src: "/heal.ogg" });
const hitSound = new Howl({ src: "/hit.ogg" });
const splashSound = new Howl({ src: "/splash.ogg" });
const venomSound = new Howl({ src: "/venom.ogg" });

export const sounds = {
  click: () => clickSound.play(),
  clock: {
    start: () => clockSound.play(),
    stop: () => clockSound.stop(),
  },
  dead: () => deadSound.play(),
  error: () => errorSound.play(),
  heal: () => healSound.play(),
  hit: () => hitSound.play(),
  splash: () => splashSound.play(),
  venom: () => venomSound.play(),
};
