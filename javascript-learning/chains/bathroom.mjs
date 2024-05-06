import { EntryHall } from "./entry-hall.mjs";

export class Bathroom {
  constructor() {
    console.log("Uživatel vstoupil na toaletu");
  }

  returnToEntryHall() {
    console.log("Uživatel jde z toalety do vstupní haly");
    return new EntryHall();
  }

  washHand() {
    console.log("Uživatel si umyl/a ruce.");
    return this;
  }
}
