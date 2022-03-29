/* Flujo condicional */
let number1 = 2;
let number2 = 6;
console.log("\n************* if / else **************\n");
if (number1 > number2 && number2 > 5) {
  console.log("El número 1 es mayor que número 2");
}
else if( number1 == number2 || number1 < 3){
  console.log("Los números son iguales");
}
else {
  console.log("El número 2 es mayor que número 1");
}

/* Ciclo condicional */
console.log("\n************* While **************\n");
let numberWhile = 5;
while (numberWhile <= 12) {
  console.log(numberWhile);
  numberWhile = numberWhile + 2;
}
console.log("Aquí ya salió del while " + numberWhile);

/* Ciclo condicional de una iteración mínimo */
console.log("\n************* Do While **************\n");
let numeroDoWhile = 22;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aquí sale del Do While " + numeroDoWhile);


/* Ciclo for con iteración controlada */
console.log("\n************* For **************\n");
let numeroFor = 0
for (numeroFor ; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
}
console.log("Aquí salimos del for " + numeroFor);

/*
/* Opciones para evitar anidar condicionales */
console.log("\n************* Switch **************\n");
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("No te vayas a mojar");
    break;
  case "soleado":
    console.log("Ponte bloqueador");
    break;
  case "nublado":
    console.log("Tapate bien");
    break;
  default:
    console.log("No se como está el clima");
    break;
}
console.log("Aquí salimos del Switch");