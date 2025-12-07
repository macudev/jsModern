//Manipulación de objetos

const product = {
    name: "Tablet",
    price: 1000,
    active: false,
}

console.log("real: ",product);

// Funciones especiales en javascript para el tratamiento de datos de un objeto

// Object.freeze(product) // ✅ Bloquea todas las propiedades haciendo que no se puedan modificar el objeto
// Object.seal(product) // ✅ Permite modificar los valores, pero no permite agregar o eliminar propiedades

// Si descomentas la línea anterior podras ver que los cambios siguientes no se efectuan.


// Reescribir el value de una propiedad de objeto igual que asignar un valor a una variable

product.active = true;

console.log("modificado: ",product);

// Si no existe se asigna un nuevo valor al objeto
product.image = "image.jpg"
console.log("nueva propiedad: ",product);

delete product.price
console.log("price eliminado: ",product);



