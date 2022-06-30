// ! operador de reposo

const objeto = {
  nombre: "Jakepy",
  edad: 19,
  city: undefined,
};

let { nombre, ...all } = objeto;
console.log(all);

//! propiedades de propagacion

const obj = {
  name: "jj",
  age: 33,
};

const obj2 = {
  ...obj,
  city: undefined,
};
console.log(obj2);

//! finally
const helloWorld = () => {
  return new Promise((resivido, rechasado) => {
    false ? resivido("Todo bonito mijo") : resivido("Todo mal mijo");
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Igual me ejecuto. Siempre me ejecuto :v"));

//! expreciones regulares

const exprecion = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const fecha = exprecion.exec("2022-02-20");
const año = fecha[1];
const mes = fecha[2];
const dia = fecha[3];
console.log(`EL AÑO ES: ${año} Y EL MES ES: ${mes} Y EL DIA ES: ${dia}`);
