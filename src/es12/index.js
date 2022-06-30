// replace
const string = "javascript es hermoso, conciso y su filosofia hace incapie, en la legibilidad de el codigo. Si javascript es el futuro para la exploracion cientifica y espacial"
const rempla = string.replace("javascript", "Python");
console.log(string);


const remplaString = string.replaceAll("javascript", "python")
console.log(remplaString)



// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};


const message = new Message();
message.show('Hola!');



//  👽 Promise Any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


    //  🦴 WeakRef(element);

class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
    {...}
}


// 🧪 Nuevos operadores lógicos

let isTrue1 = true;
let isFalse2 = false;
console.log(isTrue1 &&= isFalse2);

let isTrue3 = true;
let isFalse4 = false;
console.log(isTrue3 ||= isFalse4);

let isTrue5 = true;
let isFalse6 = false;
console.log(isTrue5 ??= isFalse6);
