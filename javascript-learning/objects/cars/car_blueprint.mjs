export class CarBlueprint {
  constructor(color, motor, fuel) {
    this.motor = motor; // nastavujeme atribut (vyrábíme motor)
    this.fuel = fuel;
    this.color = color;
    this.wheels = 4; // nastavujeme atribut hardcodováním, auto bude mít vždy 4 kola
    console.log(
      `Auto bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t barva: ${this.color} \n\t kola: ${this.wheels}`
    );
  }

  logCarProperties() {
    console.log(
      `Informace o autě: \n\t - motor: ${this.motor} \n\t - typ paliva: ${this.fuel} \n\t barva: ${this.color} \n\t kola: ${this.wheels}`
    );
  }

  repaint(newColor) {
    console.log(`Auto bylo přebarveno z ${this.color} na ${newColor}`);
    this.color = newColor;
  }

  getColor() {
    return this.color;
  }
}
