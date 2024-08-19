import { atom } from "jotai";

export type projectType = "MyWedding" | "ReactShop" | "StudyBadge";
const initialIdx = 0;

export const projectAtom = atom<projectType>("StudyBadge");
export const tutorialAtom = atom<number>(initialIdx);
