// unir objetos

const product = {
    name: "Tablet",
    price: 1000,
    active: false,
}

const customer = {
    name: "macudev",
    premium: true,
    address: {
        city: "México"
    }
}

//  Existen diferentes formas de unir objetos
// 1. Une un objeto con otro respetando su estructura

const carshop =  {
    count: 1,
    product
}
console.log(carshop);

// 2. Une solo las propiedades del objeto

const carshop2 =  {
    count: 1,
    ...product // los "..." se les llama spread operator
}
console.log(carshop2);

// 3.- Unir 2 objetos de forma separada en keys independientes
const newObject = {
    product : { ...product },
    customer: { ...customer }
}
console.log(newObject);

// 4.- Unir 2 objetos con el mismo resultado anterior, pero más eficiente con menor código
const newObject2 = {
    product,
    customer
}
console.log(newObject2);

// 5. Unir 2 objetos haciendo uno solo. si existen propiedades con el mismo nombre se sobreescriben con el segundo objeto
const newObject3 = {
    ...product,
    ...customer
}
console.log(newObject3);


// 6. Unir 2 objetos con el mismo resultado anterior, más eficiente y menor código
const newObject4 = Object.assign(product,customer)
console.log(newObject4);
