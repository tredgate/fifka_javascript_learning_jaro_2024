const order = ["první", "druhá", "třetí"];

console.log(order);
console.log(order[0]); // vypíše první prvek z pole order

for (let i = 0; i < order.length; i++) {
  console.log(
    `Cyklíme tabulku, jedeme ${i + 1}. prvek, hodnota je: ${order[i]}`
  );
}
