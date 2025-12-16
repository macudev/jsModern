const technology = ['HTML','CSS','REACT.JS','JAVASCRIPT','NODE.JS'];

console.table(technology);

/* 
Modificar un valor de una array mediante su index
Los arreglos comienzan con la posición 0
*/

technology[4] = "Next.js" // Modifica el valor de node.js

technology[10] = "Node.js" // Agrega un nuevo valor al arreglo, con el índice otorgado

technology.push("último") //agregar un nuevo elemento al final del arreglo

// Lo correcto es que al módificar un arreglo siempre se mantenga el arreglo original sin ningún cambio.

// Para modificar un arreglo se crea uno nuevo que se pueda modifcar o destruir sin afectar el original.
const newArray = [...technology,"último"]
console.table(newArray);

// Agregar un nuevo elemento al principio del array
const newArray2 = ["primero",...technology]
console.table(newArray2);

newArray2.shift() //Elimina el primer elemento de un array y recorre el indice, esto modifica el array original
console.table(newArray2);

// Obtener todos los elementos menos el primero sin inmutar el array original usando filter y function.
const technology2 = technology.filter(function(tech) {
    if(tech !== "HTML") {
        return tech
    }
});

console.table(technology2);

// Refactorizar el código anterior
const technology3 = technology.filter((tech) => tech !== "HTML")
console.table(technology3);

// Modificar un elemento sin inmutar el arreglo original
const technology4 = technology.map(function(tech) {
    if(tech === 'CSS') {
        return "SASS"
    }
    else {
        return tech
    }
})

console.table(technology4);

// Refactorizar el código anterior
const technology5 = technology.map(tech=> tech === "CSS" ? "SASS" : tech)
console.log(technology5);
