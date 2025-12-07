// Un objeto es una coleccion de propiedades
// una propiedad es una asignacion entre un nombre y un valor

const product = {
    name: "Tablet",
    price: 1000,
    active: false,
};

console.log(product, " type: ", typeof product);

// otra forma de mostrar en consola un objeto o un array es usando table
console.table(product);

// Se puede acceder a un valor especifico dentro del objeto usando la sintaxis de punto
console.log(product.name);
console.log(product.price);

// Si intentamos acceder a una propiedad que no existe, automáticamente será reconocido como undefined
console.log(product.disponible);

// Acceder de forma independiente a cada propiedad se puede hacer de 2 formas la común y la actualizada usando destructuring
// Común

const name2 = product.name;
const price2 = product.price;
const active2 = product.active;

console.log(name2, price2, active2);

// Destructuring

const { name, price, active } = product;
console.log(name, price, active);


// Object Literal Enhacement
const authenticate = true
const user = "macudev"
const atCreate = "01-01-2000"

// Se puede crear un objeto con valores declarados anteriormente, el object literal indica
// que si tienen el mismo nombre la key y el value entonces no es necesario repetirlos
// por el contrario si los nombres son diferentes es necesario agregarlos.

const users = {
    authenticate:authenticate,
    user:user
}
console.log(users);

const user2 = {
    authenticate,
    user,
    dateCreation: atCreate
}
console.log(user2);
