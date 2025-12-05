/*
    Existen diferentes formas de variables
    - var (No se recomienda usar, pero existe)
    - let
    - const

    ***Las variables deben comenzar con letras, no se permiten simbolos o números.
*/

// Despues del simbolo [ = ] se agrega el valor en js, no es necesario especificar si es string,integer,boolean.
const customer = "macudev"

/* 
Está línea de código genera un error en la terminal

❌ customer = "macudev"

Esto quiere decir, que una vez declarada una variable const no se puede cambiar su valor.

❌ const customer

De igual forma no se puede declarar una variable const sin asignarle un valor
*/

console.log(customer)