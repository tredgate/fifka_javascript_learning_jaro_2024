import { Bathroom } from "./bathroom.mjs";

export class EntryHall {
  constructor() {
    console.log("Uživatel přišel do vstupní haly.");
  }

  entryBathroom() {
    console.log("Uživatel jde na Toaletu.");
    return new Bathroom();
  }

  askReceptionistQuestion(question) {
    console.log("Uživatel se zeptal recepční na otázku: " + question);
    console.log("Recepční mlčí.");
    return this;
  }
}
