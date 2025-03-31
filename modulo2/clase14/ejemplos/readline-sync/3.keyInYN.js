const readlineSync = require('readline-sync')

const wishToContinue = readlineSync.keyInYN('Deseas continuar?')

if (wishToContinue){
    console.log('Continuando con la operacion');
} else {
    console.log('Operacion cancelada por el usuario');
    
}