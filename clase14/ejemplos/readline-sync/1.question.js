//importamos el modulo readline-sync
const readlineSync = require('readline-sync');

const name = readlineSync.question('Ingrese su nombre: ')
const age = readlineSync.question('Ingrese su edad: ')
console.log(`Hola ${name}! tienes ${age} años`);
