// desafío generico clase 2
let numero = prompt('Ingrese un número cualquiera');
let string = prompt("Ingrese una palabra cualquiera")
let numeroDos = prompt("Por favor ingrese otro número nuevamente")

if (numero >= 1000) {
    alert(`el primer número ingresado: '${numero}', es mayor a mil`)
} else {
    alert(`el número ingresado es menor a mil`)
}

if (string === "Hola") {
    alert("Hola bienvenid@ a CoderHouse")
    console.log("Hola bienvenid@ a CoderHouse")
} else {
    alert("Siempre salude al ingresar por favor")
    console.log("Siempre salude al ingresar por favor")
}

if (numeroDos >= 10 && numeroDos <= 50) {
    alert(`el segundo número ingresado '${numeroDos}' está entre 10 y 50`)
} else {
    alert(`el segundo número ingresado '${numeroDos}' no está entre 10 y 50`)
}

//Desafio complementario for y while

alert("Tablas de multiplicar")
let numeroMult = parseInt(prompt("Por favor ingrese un número multiplicador para ver su tabla correspondiente"))

for (let i = 0; i < 11; i++) {
    let numeroBase = numeroMult * i;
    alert(numeroMult + " x " + i + " = " + numeroBase)
}

alert("Control de ingreso - Unicamete mayores de 25 años")
let edadIn = parseInt(prompt("Por favor ingrese sus edad"))

while (edadIn < 25) {
    let edadControl = 25;
    let edadOut = edadControl - edadIn;
    alert(`su edad es: ${edadIn}, es menor a ${edadControl}, por favor vuelva en ${edadOut} años`)
    alert("Siguiente por favor")
    edadIn = parseInt(prompt("Ingrese su edad"))
}

alert("Bienvenido")

//1° Desafio Obligatorio Simulador interactivo

alert("Ingrese la cantidad de productos de que desea comprar")

let product1 = parseInt(prompt("Cerveza, costo $250 c/u"))

let product2 = parseInt(prompt("Vino, costo $450 c/u"))

let product3 = parseFloat(prompt("Pan, costo $180 x Kg"))

let product4 = parseFloat(prompt("Carne, costo $1200 x Kg"))

let newCantidad = 0

function costoTotal() {

    let price1 = product1 * 250
    let price2 = product2 * 450
    let price3 = product3 * 180
    let price4 = product4 * 1200

    let precioTotal = price1 + price2 + price3 + price4

    return precioTotal
}

function agregar(opcion2) {

    switch (opcion2) {
        case '1':
            alert("cuantas cervezas quiere agregar")
            newCantidad = parseInt(prompt("ingrese canditdad"))
            product1 = product1 + newCantidad
            break
        case '2':
            alert("cuantos vinos quiere agregar")
            newCantidad = parseInt(prompt("ingrese canditdad"))
            product2 = product2 + newCantidad
            break
        case '3':
            alert("cuantos Kg de pan quiere agregar")
            newCantidad = parseFloat(prompt("ingrese canditdad"))
            product3 = product3 + newCantidad
            break
        case '4':
            alert("cuantos Kg de carne quiere agregar")
            newCantidad = parseFloat(prompt("ingrese canditdad"))
            product4 = product4 + newCantidad
            break
    }
}

function quitar(opcion3) {

    let control = 0

    switch (opcion3) {
        case '1':
            if (product1 == 0) {
                alert("No se puede sacar ninguna cantidad debido a que usted no posee nada de este producto")
                break
            }
            alert(`Usted tiene una cantidad de ${product1} del producto seleccionado, cuantas desea sacar`)
            newCantidad = parseInt(prompt("ingrese canditdad"))
            control = product1
            product1 = product1 - newCantidad
            while (product1 <= -1) {
                alert(`No puede quitar a cantidad ingresada, no se puede sacar más de ${control}`)
                product1 = control
                newCantidad = parseInt(prompt("por favor vuelva a ingresar la canditdad que desea sacar"))
                product1 = product1 - newCantidad
            }
            break
        case '2':
            if (product2 == 0) {
                alert("No se puede sacar ninguna cantidad debido a que usted no posee nada de este producto")
                break
            }
            alert(`Usted tiene una cantidad de ${product2} del producto seleccionado, cuantas desea sacar`)
            newCantidad = parseInt(prompt("ingrese canditdad"))
            control = product2
            product1 = product2 - newCantidad
            while (product2 <= -1) {
                alert(`No puede quitar a cantidad ingresada, no se puede sacar más de ${control}`)
                product2 = control
                newCantidad = parseInt(prompt("por favor vuelva a ingresar la canditdad que desea sacar"))
                product2 = product2 - newCantidad
            }
            break
        case '3':
            if (product3 == 0) {
                alert("No se puede sacar ninguna cantidad debido a que usted no posee nada de este producto")
                break
            }
            alert(`Usted tiene una cantidad de ${product3} del producto seleccionado, cuantas desea sacar`)
            newCantidad = parseInt(prompt("ingrese canditdad"))
            control = product3
            product3 = product3 - newCantidad
            while (product3 <= -1) {
                alert(`No puede quitar a cantidad ingresada, no se puede sacar más de ${control}`)
                product3 = control
                newCantidad = parseInt(prompt("por favor vuelva a ingresar la canditdad que desea sacar"))
                product3 = product3 - newCantidad
            }
            break
        case '4':
            if (product4 == 0) {
                alert("No se puede sacar ninguna cantidad debido a que usted no posee nada de este producto")
                break
            }
            alert(`Usted tiene una cantidad de ${product4} del producto seleccionado, cuantas desea sacar`)
            newCantidad = parseInt(prompt("ingrese canditdad"))
            control = product4
            product4 = product4 - newCantidad
            while (product4 <= -1) {
                alert(`No puede quitar a cantidad ingresada, no se puede sacar más de ${control}`)
                product4 = control
                newCantidad = parseInt(prompt("por favor vuelva a ingresar la canditdad que desea sacar"))
                product4 = product4 - newCantidad
            }
            break
        default:
            alert("Por favor ingrese una opción correcta")
            break
    }
}

alert("Si desea finalizar su compra y calcular el costo total elija la opcion 1\nSi desea agregar más productos al carrito elija la opción 2\nSi desea eliminar algún producto del carrito elija la opción 3")

let opcion = (prompt("Escriba Opción 1, 2 o 3"))

while (opcion != '1' && opcion != '2' && opcion != '3') {
    opcion = prompt("Elija una opcion opción correcta:\n-1\n-2\n-3")
}

switch (opcion) {

    case '1':
        const mostrarPrecio = costoTotal()
        alert(`El precio total es de $${mostrarPrecio}`)
        console.log(mostrarPrecio)
        break

    case '2':
        alert("Que producto desea agregar")
        let opcion2 = prompt("Elija una opcion\n1_Cerveza\n2_Vino\n3_Pan\n4_Carne")
        while (opcion2 != '1' && opcion2 != '2' && opcion2 != '3' && opcion2 != '4') {
            opcion2 = prompt("Elija una opcion opción correcta:\n1_Cerveza\n2_Vino\n3_Pan\n4_Carne")
        }
        agregar(opcion2)
        const mostrarprice4os = costoTotal()
        alert(`El precio total es de $${mostrarprice4os}`)
        console.log(mostrarprice4os)
        break

    case '3':
        alert("Que producto desea quitar")
        let opcion3 = (prompt("Elija una opcion\n1_Cerveza\n2_Vino\n3_Pan\n4_Carne"))
        while (opcion3 != '1' && opcion3 != '2' && opcion3 != '3' && opcion3 != '4') {
            opcion3 = prompt("Elija una opcion opción correcta:\n1_Cerveza\n2_Vino\n3_Pan\n4_Carne")
        }
        quitar(opcion3)
        const mostrarPrecioTres = costoTotal()
        alert(`El precio total es de $${mostrarPrecioTres}`)
        console.log(mostrarPrecioTres)
        break

    default:
        alert("Por favor ingrese una opción correcta")
        break

}  