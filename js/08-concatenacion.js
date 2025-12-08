// Template string + concatenacion

const product = "Tablet 12in"
const price = 1000
const marca = "orange"

// 1. Concatenando usando "+"
console.log("El producto es: "+ product);

// 2. Concatenando en consola usando ","
console.log("El producto es: ", product);

// Usando el método del "+" o "," (se pueden conbinar), es laborioso cuando son muchas variables
console.log("El producto es: "+ product+" precio: $ " + price, " marca: ", marca);

// 3. Usando template string "``" usando ${} para identificar las variables
console.log(`El producto es: ${product}  precio: $ ${price} marca: ${marca}`);



