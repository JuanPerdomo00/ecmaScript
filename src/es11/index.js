const boton = document.getElementById("btn");

boton.addEventListener("click", async () => {
  const modulo = await import("./file.js");
  modulo.hello();
});


// 🔢 Big INT: permite trabajar con numeros mayores a 2^53

// 1- Añadiendo una "n" al final activas el big int en el valor

const unNumeroGramde = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const otroNumeroGrande = BigInt(9007199254740991);

console.log(unNumeroGramde);
console.log(otroNumeroGrande);

//! 🤝 Promise All Settled
const promesa1 = new Promise((resolve, reject) => {
  reject("Rechasado");
});
const promesa2 = new Promise((resolve, reject) => {
  resolve("Resuelto");
});
const promesa3 = new Promise((resolve, reject) => {
  resolve("Resuelto1");
});

Promise.allSettled([promesa1, promesa2, promesa3]).then((resuelva) =>
  console.log(resuelva)
);


//! 🌎 Global This
console.log(window);
console.log(globalThis);

//? operador logico null

let operador = null ?? "defaul string";
console.log(operador);

//! ⛓ Optional chaining
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log("Email");
} else {
  console.log("Fallido no hay correo");
}
