// Comentario de una sola línea

/*
   Comentario de una o más líneas
*/

const customer = "macudev" // string - text
console.log(customer+' type: ',typeof customer)

const employee = 'macudev2' // string - text, se puede declarar con " " o ''
console.log(employee+' type: ',typeof employee)

/*
No se pueden mezclar " '
    ❌ customer = "macudev'
*/

const price = 100 // number
console.log(price+ ' type: ',typeof price)

const decimal = 20.30
console.log(decimal+' type: ',typeof decimal);


// Se pueden realizar operaciones aritmeticas entre números pero si mezclas un número con un string solo los juntara
const numberText = "20"
console.log('number + number: ',price + decimal)
console.log('number + string',price + numberText);


let clean //undefined
console.log(clean,typeof clean)

const bigNumber = BigInt(321321323131212121221321321)
console.log(bigNumber +" type: ", typeof bigNumber);

// boolean -> Verdadero ó Falso se especifica obligatoriamente en inglés True o False
// Se escribe sin comillas, porque si no sería un string
const discount = true
console.log(discount +' type: ',typeof discount);


/* 
Null al igual que undefined es una variable vacía sin valor
la diferencia entre undefined y null, es:
    undefined: lo asigna automáticamente el navegador cuando se declara la variable sin nigun valor.
    null: requiere se asignado por el usuario
*/
const empty = null 
console.log(empty,' type: ', typeof empty);

