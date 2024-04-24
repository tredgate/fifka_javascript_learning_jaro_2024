import { CarBlueprint } from "./car_blueprint.mjs";

const dieselCar = new CarBlueprint("Modrá", "1,4 TDI", "Diesel");
dieselCar.logCarProperties();
const electricCar = new CarBlueprint("Šedá", "EV 160kW", "Elektřina");
electricCar.logCarProperties();
dieselCar.repaint("Červená");
dieselCar.logCarProperties();

const cerveneAuto = dieselCar;

cerveneAuto.repaint("Růžová");
dieselCar.logCarProperties();

console.log(`Barva elektrického auta: ${electricCar.getColor()}`);
