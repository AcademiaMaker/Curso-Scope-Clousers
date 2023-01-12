/**
    Elevacion de la funciones y las variables al principio del codigo dentro del proceso
    de como funciona JavaScript
    
    Hoisting es un término para describir que las declaraciones de variables y funciones 
    son desplazadas a la parte superior del scope más cercano, scope global o de función. 
    Esto sucede solamente con las declaraciones y no con las asignaciones.

    El código permanece igual, solo es una interpretación del motor de JavaScript. En el 
    caso de las variables solamente sucede cuando son declaradas con var.

    Hoisting en variables declaradas con var
    En el siguiente código, la respuesta del console.log es undefined, porque al hacer 
    referencia a una variable que no está declarada aún, JavaScript crea esta variable antes 
    de declararla y le asigna un valor de undefined.
 */

console.log(nombre);
var nombre = 'Hola';
console.log(nombre);


nameOfDog();

function nameOfDog(params) {
    console.log(`El mejor perrito es ${perrito}`);
}

var perrito = 'Elmo';