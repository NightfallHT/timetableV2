import { groupOpts } from "../@globals/consts";

export type ValueOf<T> = T[keyof T];

export type englishClassrooms = [
  "301",
  "302",
  "310",
  "312",
  "313",
  "314",
  "315",
  "614",
  "119 WM (Bud 40)",
  "207 NETI",
  "360 Gmach Główny"
];

export type englishClasroom = ValueOf<englishClassrooms>;

export type ClassGroups = {
  [key in keyof typeof groupOpts]: string;
};

export interface ToggleButton extends HTMLButtonElement {
  target_subject: keyof typeof groupOpts;
  delta: 1 | -1;
}

export interface Settings {
  mode: "dark" | "light";
  show_all_classes: boolean;
  show_notes: boolean;
  english_classroom: englishClasroom;
  groups: ClassGroups;
}
