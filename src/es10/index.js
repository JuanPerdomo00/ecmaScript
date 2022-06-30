//! debulve una matrix, con cualquier otra matrix aplanada
let array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10]]]];
console.log(array.flat(6));

//! permite mapear cada elemnten, pasarle una funcion
let arrayy = [1, 2, 3, 4, 5];
console.log(arrayy.flatMap((valor) => [valor * 2]));

//! eliminar espacios en blanco de un string
let hello = "      hello world      ";
console.log(hello.trimStart());
console.log(hello.trimEnd());

// pasar de forma opcional el parametrode error a cath
try {
} catch {
  error;
}

//! tranforma clave valor a un objeto. (matrix)
let matrixObj = [
  ["name", "jakepy"],
  ["age", 19],
];
console.log(Object.fromEntries(matrixObj));



// ! el objeto de tipo simbolo
let simbolo = `mi simbolo`;
let sim = Symbol(simbolo);
console.log(sim.description);