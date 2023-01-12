//  Block scope
// Se usa la palabra reservada const para hacer valores constantes que no pueden ser modificados.



function sal(params) {
    if (true) {             // Concepto de Block Scope
        var a = 'Hola'
        let b = 'Hola'
        const c ='Hola'
    }

    console.log(a); 
    console.log(b);         // La variable ya no puede ser accedida por que esta en un bloque {}
    console.log(c);         // La variable ya no puede ser accedida por que esta en un bloque {}
}
sal(1);