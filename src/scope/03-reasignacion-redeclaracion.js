// REDECLARACION Y REASGINACION
var a;              //Tiene un valor undefined y se redeclara
var a = 'Hola';
console.log(a);

let b = 'Hola';
b = 'Adios';
//let b = 'Hola';   //Let no permite reasingar las variables

const animal = 'dog';
//animal = 'gato';


const vehiculos = []    //Funciona la referencia sobre el arreglo, agregar y quitar (Inmutabilidad)
vehiculos.push('Carrito');
vehiculos.pop();

