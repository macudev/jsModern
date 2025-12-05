/*

Existen diferentes formas de variables
 - var (No se recomienda usar, pero existe)
 - let
 - const

 ** Las variables deben comenzar con letras, no se permiten simbolos o números.
*/

// Despues del simbolo [ = ] se agrega el valor en js, no es necesario especificar si es string,integer,boolean.
let customer = "macudev"
console.log(customer)

// Se pueden cambiar los valores sin especificar el tipo de dato, la forma de la variable solo es especifica una vez,
// por lo tanto no es necesario volver a escribir [let]

customer = 30
console.log(customer)

// De igual forma se puede declarar la variable sin asignarle ningún valor y cambiarlo mas adelante.
let price
price = 100
console.log(price)


/* 
 Con esto podemos deducir que la caracteristica principal de [ let ] es: 
    * Poder declarar las variables con o sin datos.
    * Cambiar su valor siempre y cuando haya sido declarado anteriormente.
*/




// undefined es un tipo de datos que significa que la variable existe, fue declarada pero no existe ningún valor.
let notstarted
console.log(notstarted) 

// not defined, ocurre un error en javascript cuando se intenta ejecutar una variable que no fue declada.

console.log(notdefined)
