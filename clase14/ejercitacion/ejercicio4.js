/*Ejercicio 4: Ordenar una Lista de Números
Crea un script en Node.js que permita al usuario ingresar una lista de
números separados por comas. Ordena los números de menor a mayor y
muestra la lista ordenada*/

const readlineSync = require('readline-sync')


//Solicita al usuario el ingreso de la lista
const numberClient = readlineSync.question('Ingrese una serie de numeros separados por comas: ')

//Guardo en la constante "numbers" el array de numeros que ingresa el usuario
const numbers = numberClient.split(',').map(Number)

//uso metodo sort para ordenar el array de menos a mayor
numbers.sort((a, b) => a - b)

//muestra el resultado en consola
console.log('Números ordenados:', numbers.join(', '));

    
    
    








