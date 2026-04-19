import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";

import { DEFAULT_SOUND, soundFxOptions, SOUNDS } from "./constants";

type SoundKey = keyof typeof SOUNDS;

interface SoundContextValue {
  playSfx: (key: SoundKey) => void;
  toggleSound: (playSound?: boolean) => void;
  soundEnabled: boolean;
}

const SoundContext = createContext<SoundContextValue | null>(null);

const STORAGE_KEY = "sound";

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window === "undefined") return true;
    return localStorage.getItem(STORAGE_KEY) !== "false";
  });

  const audioRefs = useRef<Map<SoundKey, HTMLAudioElement>>(new Map());

  const initAudioRefs = useCallback(() => {
    for (const [key, src] of Object.entries(SOUNDS) as [SoundKey, string][]) {
      if (!audioRefs.current.has(key)) {
        const audio = new Audio(src);
        audio.volume = soundFxOptions.volume;
        audioRefs.current.set(key, audio);
      }
    }
  }, []);

  useEffect(() => {
    // Initialize all audio tracks eagerly
    if (typeof window !== "undefined" && audioRefs.current.size === 0) {
      initAudioRefs();
    }
  });

  const stopAll = useCallback(() => {
    for (const audio of audioRefs.current.values()) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, []);

  const playSfx = useCallback(
    (key: SoundKey) => {
      if (!soundEnabled) return;
      if (typeof window === "undefined") return;

      let audio = audioRefs.current.get(key);
      if (!audio) {
        audio = new Audio(SOUNDS[key]);
        audio.volume = soundFxOptions.volume;
        audioRefs.current.set(key, audio);
      }

      try {
        audio.currentTime = 0;
        audio.play();
      } catch {}
    },
    [soundEnabled],
  );

  const toggleSound = useCallback(
    (playSound: boolean = false) => {
      setSoundEnabled((prev) => {
        const next = !prev;
        localStorage.setItem(STORAGE_KEY, String(next));
        if (!next) {
          stopAll();
        }
        if (next && playSound) {
          let audio = audioRefs.current.get(DEFAULT_SOUND);
          if (!audio) {
            audio = new Audio(SOUNDS[DEFAULT_SOUND]);
            audio.volume = soundFxOptions.volume;
            audioRefs.current.set(DEFAULT_SOUND, audio);
          }
          audio.currentTime = 0;
          audio.play().catch(() => {});
        }
        return next;
      });
    },
    [stopAll],
  );

  return (
    <SoundContext.Provider value={{ playSfx, toggleSound, soundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export function usePlaySfx() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("usePlaySfx must be used within a SoundProvider");
  }
  return ctx;
}
