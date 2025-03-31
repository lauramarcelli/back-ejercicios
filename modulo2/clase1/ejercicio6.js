// Ejercicio 6: Calculadora de promedio
// Escribe una función que reciba un array de números y devuelva el promedio.
// Consigna:
// • Usa un bucle for para sumar los números.
// • Divide la suma total entre la cantidad de elementos del array

let calificaciones = [8, 9, 10, 7, 6]

function calcularPromedios(array) {
    let calculadora = 0

    for (let nota of array) {
        calculadora += nota // suma los numeros del array en cada vuelta del for
    }

    return calculadora / array.length// divide lo que hay acumulado en calculadora por el total de elementos del array
}


console.log(calcularPromedios(calificaciones));
