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

