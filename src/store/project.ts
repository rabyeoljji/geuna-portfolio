import { atom } from "jotai";

export type projectType = "MyWedding" | "ReactShop" | "TeamProject";
const initialIdx = 0;

export const projectAtom = atom<projectType>("MyWedding");
export const tutorialAtom = atom<number>(initialIdx);
