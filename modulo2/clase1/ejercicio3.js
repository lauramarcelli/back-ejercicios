// Ejercicio 3: Ordenando númerosCrea una función que reciba un array de números y devuelva un nuevo
// array con los números ordenados de menor a mayor.
// Consigna:
// • Usa el método sort().

let numbers = [5, 2, 7, 9, 1]

function orderNumbers (numbers) {
    return numbers.sort((a, b) => a - b)
}

console.log(orderNumbers(numbers)); //
