// Variables
var a;      //Declarando la variable
a = 1;      //Inicializar variable

a = 2;      //reasigando valores

var a = 10; //reacinaccion de la variable

//  Gloabl Scope
//  Cuaquier variable que se encuentre en el documento, se quedan globales y se instancian 
//  en el objeto windows, para acceder a ellas.

var fruit = 'Apple';    //Variable de Global Scope

function bestFruit(params) {
    console.log(params);
}

bestFruit(fruit);


function countrys() {
    country = 'colombia';   //Si no se pone ninguna declaracion, se convierte en variable global con acceso a todo
    console.log(country);
}

countrys();
console.log(country);