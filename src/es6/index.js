//! Antes de ecmaScript 6
function newFunction(name, age, country) {
  var name = name || "jakepy";
  var age = age || 19;
  var country = country || "CO";
  console.log(name, age, country);
}

//! es6
function newFunctionTwo(name = "jake", age = 18, country = "EN") {
  console.log(name, age, country);
}

newFunctionTwo();
newFunctionTwo("alex", 22, "BR");

//! Concatenacion antes de es6
let hello = "Hello";
let world = "World";
let frase = hello + " " + world;
console.log(frase);

//! Ahora, con los templates se hace mas facil de concatenar. ``
let fraseTwo = `${hello} ${world}`;
console.log("fraseTwo :>> ", fraseTwo);

//! multilineas antes de es6
let lorem =
  "nada es más lamentable, que ir detrás de lo perdido. Delo inaccesible. \n" +
  "Posible mente sea lo mas bajo a caer.";

//! multilines con es6
let loremTwo = `No hay nada mejor que una buena compania,
una que sea pura y constante. Una inigualable, una capas.
Una que no te remplace soledad.
`;

//! destructuracion de elementos antes de es6
let persona = {
  nombre: "jake",
  edad: 19,
  pais: "CO",
};

console.log(persona.nombre, persona.edad, persona.pais);

//! destructuracion de elementos es6

let { nombre, edad } = persona;
console.log(nombre, edad);

let teamOne = ["jake", "juan", "javier", "alvert"];
let teamTw0 = ["ana", "jesica", "valeria", "natalia"];

let estudiantes = ["laura", ...teamOne, ...teamTw0];

console.log(estudiantes);

{
  var globalVar = "soy loko";
}

{
  let globalLet = "Soy timido";
  console.log(globalLet);
}

console.log(globalVar);

const a = "b";
a = "f"; //error

let names = "jake";
let age = 19;

obj = { name: names, age: age };

obj2 = { names, age };

console.log("obj2 :>> ", obj2);

// ! funciones de flecha
const nombres = [
  { nombre: "jakepy", edad: 19 },
  { nombre: "luiza", edad: 18 },
];

let listaNOmbre = nombres.map(function (item) {
  console.log(item.name);
});

let listaNombreDos = nombres.map((item) => item.nombre);

const listaNombreTres = (nombre, edad) => {
  //...
};

const listaNombreCuatro = (nombre) => {
  //...
};

const square = (num) => num * num;

//! Promesas asincronismo
// resuelve el problema de los calbacks

//? generar promesa
const holaPromesa = () => {
  return new Promise((resuelto, rechasado) => {
    if (false) {
      resuelto("Todo bien bro!!!");
    } else {
      rechasado("Te rechasaron bro :( !!!");
    }
  });
};

holaPromesa()
  .then((respuesta) => console.log(respuesta))
  .catch((err) => console.log(err));

class Calculadora {
  constructor() {
    this.name = "";
    this.valorA = 0;
    this.valorB = 0;
  }
  saludar(name) {
    this.name = name;
    return `Hola ${name}`;
  }
  sumar(valorA, valorB) {
    this.valorA = valorA;
    this.valorB = valorB;
    return this.valorA + this.valorB;
  }
  restar(valorA, valorB) {
    this.valorA = valorA;
    this.valorB = valorB;
    return this.valorA - this.valorB;
  }

  multiplicar(valorA, valorB) {
    this.valorA = valorA;
    this.valorB = valorB;
    return valorA * valorB;
  }

  dividir(valorA, valorB) {
    this.valorA = valorA;
    this.valorB = valorB;
    return valorA / valorB;
  }
}

const cls = new Calculadora();

console.log(cls.saludar("Jakepy"));
console.log("La suma es: ", cls.sumar(10, 20));
console.log("La divicion es: ", cls.dividir(10, 2));

// importar modulos
import { saludar, despedir } from "./modulos";
saludar();
despedir();

// generadires
function* generarSaludo(nombre) {
  if (true) {
    yield `Hola ${nombre}`;
  }

  if (true) {
    yield `Como estas ${nombre}`;
  }
}

const generar = generarSaludo("Jakepy");
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);

