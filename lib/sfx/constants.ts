export type SOUND = keyof typeof SOUNDS;

export const DEFAULT_SOUND: SOUND = "click";

export const SOUNDS = {
  clock: "/sfx/clock.mp3",
  click: "/sfx/click.mp3",
  cluck: "/sfx/cluck.mp3",
  pop: "/sfx/pop.mp3",
};

export const soundFxOptions = {
  volume: 0.3,
};
