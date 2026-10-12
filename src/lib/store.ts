"use client";

import { useSyncExternalStore } from "react";
import type { Lang, SectionId } from "@/content/types";

type Listener = () => void;

interface Store<T> {
  get: () => T;
  set: (next: T) => void;
  subscribe: (listener: Listener) => () => void;
  initial: T;
}

function createStore<T>(initial: T): Store<T> {
  let value = initial;
  const listeners = new Set<Listener>();
  return {
    initial,
    get: () => value,
    set: (next) => {
      if (Object.is(next, value)) return;
      value = next;
      listeners.forEach((l) => l());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

export function useStore<T>(store: Store<T>): T {
  return useSyncExternalStore(store.subscribe, store.get, () => store.initial);
}

/** Section currently crossing the middle of the viewport. */
export const activeSection = createStore<SectionId>("home");

/** Flips once the intro curtain is gone; hero animations wait for it. */
export const appReady = createStore(false);

/** Flips once the page has loaded and the main thread is idle; gates the WebGL scene. */
export const sceneArmed = createStore(false);

export const paletteOpen = createStore(false);

export const langStore = createStore<Lang>("pt");

/**
 * Mutable frame state read by the WebGL loop. Kept outside React on purpose:
 * it changes on every pointer move and must never trigger a render.
 */
export const sceneState = {
  /** Index of the particle shape the scene should morph into. */
  shape: 0,
  pointerX: 0,
  pointerY: 0,
  /** False until a mouse actually moves, so touch screens get no phantom cursor. */
  pointerActive: false,
};
