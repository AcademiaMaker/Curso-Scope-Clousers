//MODO ESTRICTO EN JAVA SCRIP
/**
 * El modo estricto es una funcionalidad que le permite al motor de JavaScript 
 * cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas 
 * que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles 
 * o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

    Este en el código colocando en la primera línea "use strict" para todo el archivo. 
    También puede utilizarse en la primera línea de una función, pero no para un bloque en específico.
 */

'use strict';

pi = 3.1416;
console.log(pi);


function myFunction(params) {   //Solo aplica en documentos completos o funciones, en if no funciona
    'use strict'
    console.log(pi);
}

myFunction(1);