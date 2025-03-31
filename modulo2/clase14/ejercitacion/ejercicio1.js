/*Ejercicio 1: Uso Básico de readline-sync
Crea un script en Node.js que utilice el módulo readline-sync para
solicitar al usuario que ingrese su nombre y edad. Luego, muestra un
mensaje de saludo personalizado que incluya el nombre y la edad del
usuario*/

const readlineSync = require('readline-sync');

const name = readlineSync.question('Ingrese su nombre: ')
const edad = readlineSync.question('Ingrese su edad: ')

console.log(`Bienvenida ${name}, que joven eres con ${edad} años!`)