const elements = ["button1", "field1", "radio"];

// * cyklení elements s pomocí forEach a vypsání prvku do konzole
elements.forEach((element) => {
  console.log(element);
});

// * cyklení elements s pomocí forEach a zároveň dostupným indexem (pořadí cyklu) a vypsání do konzole
elements.forEach((element, index) => {
  console.log(
    `Cyklíme elements, nyní běží ${
      index + 1
    }. cyklus, hodnota elementu je: ${element}, index je: ${index}`
  );
});
