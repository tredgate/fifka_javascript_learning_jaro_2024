// * spuštění funkce
logHelloWorld();
logHelloWorld();
logHelloWorld();
logText("Programuju v Javascriptu!");
logText("Nějaký text");

// * definice funkce
// * funkce vypíše statický text do console
function logHelloWorld() {
  console.log("Ahoj světe!");
}

// * Funkce vypíše text na základě vstupu (parametru), který vkládáme při volání funkce
function logText(text) {
  console.log("Přijatý argument: " + text);
}
