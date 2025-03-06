const readlineSync = require('readline-sync')

//pedimos edad al usuario sino pasa numero entero, sigue solicitando
const age = readlineSync.questionInt ('Por favor ingresa tu edad: ')
if (age >= 18) {
    console.log('Eres mayor de edad y puedes entrar al club')
} else {
    console.log('Lo siento no puedes ingresar');
}