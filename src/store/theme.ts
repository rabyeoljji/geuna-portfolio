import { atom } from "jotai";

export type themeType = "light" | "dark";

const getTheme = () => {
  let theme: themeType = "light";

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }

  return theme;
};

export const themeAtom = atom<themeType>(getTheme());
