
/*
    Un closure es la combinación entre una función y el ámbito léxico en 
    el que esta fue declarada. Con esto, la función recuerda el ámbito con 
    el cual se creó. Puedes entender los closures como: función interna + scope. 
    Mira estos pasos:

    Genera una función que retorna una función interna.
    Esta función interna tiene un scope, el cual puede ser accedido únicamente por 
    esta función, es decir, las variables, funciones, etc. definidas en el scope solo 
    pueden ser accedidas por la función interna.
    
    Como resultado, esta función interna retornada con su scope será nuestro closure.
*/

/* function myMoneyBox(coins) {
    let saveCoins = 0;
    saveCoins =+ coins;
    console.log(`Dinero Guardado ${saveCoins}`);
}

myMoneyBox(10);
myMoneyBox(5);
myMoneyBox(1); */

/*
    Los closures son básicamente cuando aprovechamos la habilidad de JavaScript de 
    emplear las variables que están en el scope padre de nuestro bloque de código, 
    por eso el global scope es un closure grande. El bloque myFunction puede utilizar 
    TODAS las variables que están disponibles en el bloque inmediato anterior. Usando 
    el ejemplo visto en el video:

    Si tú declaras la variable saveCoins en el global scope, estarías usando el mismo 
    principio que si emplearas la segunda función que escribe el profesor porque estás 
    usando las variables que están en el scope padre.
*/

function myMoneyBox() {
    let savedCoins = 0;
    function countCoins(coins) {
        savedCoins += coins;
        console.log(`Mi ahorro es: $${savedCoins}`);
    }
}

const moneyBox = myMoneyBox();
console.log(moneyBox);
moneyBox(10);
moneyBox(5);
moneyBox(15);