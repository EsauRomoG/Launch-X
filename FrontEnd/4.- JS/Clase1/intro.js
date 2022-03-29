
console.log("\n ********** variables *************")
var numero1 = 4;
var numlet = "4";
var numero2 = 2;

console.log("Numero 1" + numero1 + "Numero 2" + numero2);

console.log("\n ************** Cadenas **************");

var frase1 = "Ejemplo comillas dobles ";
var frase2 = 'Ejemplo comillas  simples';
var frase3 = `Ejemplo comillas ${numero1} invertidas`;

console.log(frase1 + "\n" + frase2 + "\n"+ frase3);

console.log("\n ************* CONDICIONAL ************** \n");
console.log(numero1 > numero2);

console.log("\n ************* OPERADOR LÓGICO AND ************** \n");
console.log(true && false);

console.log("\n ************* OPERADOR LÓGICO OR ************** \n");
console.log(true || false);

const gravedad = 9.81; //Constante

console.log("\n ************* ARREGLOS ************** \n");
let listaDeNumeros = [ 1, 2 , 3, 4, 5]; //Variable local

listaDeNumeros.push(16);
listaDeNumeros.pop(939);
console.log(listaDeNumeros);

let listaPalabras = ["Explorer", "Mission", "Comander"];
console.log(listaPalabras);
console.log(listaDeNumeros.length);

let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);

console.log("\n ************* OBJETOS ************** \n");
let explorer = {

    nombre: "Nombre del Explorer",
    email: "emai@innovaccion.mx",
    numReg: 1234,
    mission: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proPer: {

        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocios"

    }
    
}

console.log(explorer)
console.log(explorer.email)
