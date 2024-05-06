import { EntryHall } from "./entry-hall.mjs";

new EntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .entryBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Jak se máte?")
  .entryBathroom()
  .washHand()
  .washHand()
  .returnToEntryHall();
