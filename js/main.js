//------------------------ Desfio complementario - Incorporar Arrays ------------------//
//------------------------ CARGA DE PRODUCTOS - ADMINISTRADOR -------------------------//

alert("Carga de productos")

let cantidad = parseInt(prompt("ingrese la cantidad de productos que quiera ingresar"))

alert("Una vez ingresada la cantidad, ahora cargaremos los datos de todos los productos a ingresar")

let products = [];

let idProduct = 0

class Product {

    constructor(id, name, price, stock) {

        this.idProduct = id;
        this.name = name.toUpperCase()
        this.price = price
        this.stock = stock
    }
    priceIva(array) {
        this.price = this.price * 1.21
    }
}

for (let i = 0; i < cantidad; i++) {

    let nameUser = (prompt("ingrese nombre del producto"))
    let priceUser = parseFloat(prompt("ingrese el precio del del producto"))
    let stockUser = parseInt(prompt("ingrese la cantidad del producto en stock"))
    products.push(new Product((idProduct + 1), nameUser, priceUser, stockUser))
    idProduct = products.length
}

console.log(products)

function mostrar(products, index) {
    let seeProduct = ''
    products.forEach((el, index) => {
        seeProduct += (index + 1) + "-" + "Nombre: " + el.name + ' - ' + "Precio: " + el.price + "\n"
    })
    console.log(seeProduct)
    return seeProduct
} //aqui "el.price" es de type float, al precio cuando guardo lo parseo flotante ¿al concatenarlo se parsea solo?

alert("Los productos cargados Son:\n" + mostrar(products))

// -------- filtrar precio más alto - precio  ----------------------------------------/
//------- coloco una variable para manejar a gusto el precio más alto a filtrar ------/

let highPrice = 1000

let highProduct = products.filter(el => el.price > highPrice)

console.log(highProduct)

// ------------------- Stock Bajo  ---------------------------------------------------/

let lowStock = 5

let lowProduct = products.filter(el => el.stock < lowStock)

console.log("Por favor reponga el stock de los siguientes productos")
console.log(lowProduct)

// ------------------- CARRITO DE COMPRAS - Usuario ----------------------------------//

alert("Carrito de compras!\nDe los productos de la siguiente lista que desea comprar\n" + mostrar(products))

let carrito = [];
let objCarrito = {}
let compra = 0

for (const element of products) {
    compra = parseInt(prompt("Cuanto desea comprar del siguiente producto: " + element.name + " - Precio: " + element.price))
    objCarrito = {
        name: element.name,
        price: element.price,
        total: compra
    }
    if (element.total !== 0) {
        carrito.push(objCarrito)
    }
}

function mostrarCarrito(array) {
    let seeProduct = ''
    products.forEach((el, index) => {
        seeProduct += (index + 1) + "-" + "Nombre: " + el.name + ' - ' + "Precio: " + el.price + "\n" + "cantidad: " + el.total
    })
    console.log(seeProduct)
    return seeProduct
}

function costoTotal(array) {

    let totalPrice = 0
    for (const element of array) {
        totalPrice = totalPrice + (element.price * element.total)
    }
    console.log(totalPrice)
    return totalPrice
}


let opcion = (prompt("Si desea finalizar su compra y calcular el costo total elija la opcion 1\nSi desea agregar más productos al carrito elija la opción 2\nSi desea eliminar algún producto del carrito elija la opción 3\n Escriba Opción 1, 2 o 3"))

while (opcion != '1' && opcion != '2' && opcion != '3') {
    opcion = prompt("Elija una opcion opción correcta:\n-1:Calcular Total\n-2:Agregar Producto\n-3:Eliminar producto")
}

switch (opcion) {

    case '1':
        const mostrarPrecio = costoTotal(carrito)
        alert(`El precio total es de $${mostrarPrecio}`)
        console.log(mostrarPrecio)
        break

    case '2':
        alert("Su lista de productos es " + mostrarCarrito(carrito) + "\nDe la sieguiente lista que producto desea agregar" + "\n" + mostrar(products))
let newCompra = 0
let newCarrito = []
let objCarritoDos = {}
for (const element of products) {
    newCompra = parseInt(prompt("Cuanto desea agregar del siguiente producto: " + element.name + " - Precio: " + element.price))
    objCarritoDos = {
        name: element.name,
        price: element.price,
        total: element.total + newCompra
    }

    newCarrito.push(objCarritoDos)
}

const mostrarPrecioDos = costoTotal(newCarrito)
alert(`El precio total es de $${mostrarPrecioDos}`)
console.log(mostrarPrecioDos)
break

case '3':
alert("De su de lista de productos, que producto desea quitar" + "\n" + mostrarCarrito(carrito))
let offCompra = 0
let newCarritoDos = []
let objCarritoTres = {}
for (const element of carrito) {
    offCompra = parseInt(prompt("Cuanto desea agregar del siguiente producto: " + element.name + "\n- Precio: " + element.price))
    objCarritoTres = {
        name: element.name,
        price: element.price,
        total: element.total - offCompra
    }
    newCarritoDos.push(objCarritoTres)
}
const mostrarPrecioTres = costoTotal(newCarritoDos)
alert(`El precio total es de $${mostrarPrecioTres}`)
console.log(mostrarPrecioTres)
break

default:
alert("Por favor ingrese una opción correcta")
break

}