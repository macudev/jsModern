// Destructuring en 2 o más objetos

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


// Ambos objetos cuentan con el mismo key `name`, se usa : para renombrar la key de customer y no marque error

const { name } = product

// Acceder a las propiedades internas de un objeto dentro de otro objeto

const { name: nameCustomer, address: {city} } = customer

console.log(name, nameCustomer, city );
