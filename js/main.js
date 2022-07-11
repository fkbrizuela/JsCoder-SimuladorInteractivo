/* let numero = prompt('Ingrese un número cualquiera');
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

alert("Bienvenido") */

alert("De la siguiente lista de productos indique cuantos quiere de cada uno")

let productoA = parseInt(prompt("Cerveza, costo $250 c/u"))

let productoB = parseInt(prompt("Vino, costo $450 c/u"))

let productoC = parseFloat(prompt("Pan, costo $180 x Kg"))

let productoD = parseFloat(prompt("Carne, costo $1200 x Kg"))

let newCantidad = 0

function costoTotal() {

    let precioA = productoA  * 250
    let precioB = productoB  * 450
    let precioC = productoC  * 180
    let precioD = productoD  * 1200

    let precioTotal = precioA + precioB + precioC + precioD

    return precioTotal
}

function agregar(opcion2) {

    switch (opcion2) {
        case '1':
            alert("cuantas cervezas quiere agregar")
            newCantidad = parseInt(prompt("ingrese canditdad"))
            productoA =  productoA + newCantidad 
            break
        case '2':
            alert("cuantos vinos quiere agregar")
            newCantidad = parseInt(prompt("ingrese canditdad"))
            productoB = productoB + newCantidad
            break
        case '3':
            alert("cuantos Kg de pan quiere agregar")
            newCantidad = parseFloat(prompt("ingrese canditdad"))
            productoC =  productoC + newCantidad 
            break
        case '4':
            alert("cuantos Kg de carne quiere agregar")
            newCantidad = parseFloat(prompt("ingrese canditdad"))
            productoD = productoD + newCantidad 
            break
        default:
            alert("or favor ingrese una opción correcta")
            break
    }

}

alert("Si desea finalizar su compra y calcular el costo total elija la opcion 1\nSi desea agregar más productos elija la opción 2\nSi desea eliminar algún producto elija la opción 3")

let opcion = (prompt("Escriba Opción 1, 2 o 3"))


switch (opcion) {

    case '1':
        const mostrarPrecio = costoTotal()
        alert(`El precio total es de $${mostrarPrecio}`)
        console.log(mostrarPrecio)
        break

    case '2':
        alert("Que producto desea agregar")
        let opcion2 = (prompt("Elija una opcion\n1_Cerveza\n2_Vino\n3_Pan\n4_Carne"))
        agregar(opcion2)
        const mostrarPrecioDos = costoTotal()
        alert(`El precio total es de $${mostrarPrecioDos}`)
        console.log(mostrarPrecioDos)

        break

    case '3':

        break

    default:
        alert("Por favor ingrese una opción correcta")
        break

}