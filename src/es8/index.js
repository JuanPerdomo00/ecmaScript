const data = {
  x1: "0x01",
  x2: "0x0012",
  x3: "0x00123",
};

// debulve la clave y valores en una matrix
const matrix = Object.entries(data);
console.log(
    matrix, "\n",
    `\nlA MATRIX TIENE ${matrix.length} posiciones`
);

//! valores de un objeto a un arrelgo
const valores = Object.values(data);
console.log(valores);
console.log(valores.length);

const string = "pythonAstrofisica";
console.log(string.length);
console.log(string.padStart(23, "jakepy"));
console.log(string.padEnd(30, "futuro fisico"));

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => {
          resolve("Hola Mundo");
        }, 2000)
      : reject(new Error("Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const otraF = async () => {
  try {
    const hello = await helloWorld();
  } catch (err) {
    console.log(err);
  }
};

otraF();
