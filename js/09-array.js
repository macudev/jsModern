/* 
La diferencia entre objetos son los {} y []
Otra diferencia es que en los arrays el key esta oculto y se asigna numericamente  empezando con el 0
los números en el array se les llama índice,
pueden contener diferentes valores, pero se recomienda que siempre sean los mismos datos para mantener orden y estructura
*/
const newArray = [20,30,40,50,60]
console.log(newArray);
console.table(newArray);

// Podemos acceder a valores especificos usando el índice
console.log(newArray[1]);

// Si se intenta acceder a un índice que no existe mostrar undefined
console.log(newArray[5]);


