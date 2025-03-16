import { atom } from "jotai";

export type projectType = "MyWedding" | "Picktoss" | "StudyBadge";
const initialIdx = 0;

export const projectAtom = atom<projectType>("Picktoss");
export const tutorialAtom = atom<number>(initialIdx);
