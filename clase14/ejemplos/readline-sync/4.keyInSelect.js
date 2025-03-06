const readlineSync = require('readline-sync')

const languages = ['javascript', 'java', 'c++', 'python']

const indceSeleccionado = readlineSync.keyInSelect(languages, 'Cual es tu lenguaje de programacion?')

if (indceSeleccionado === -1) {
    console.log('No has seleccionado ningun lenguaje');
} else {
    console.log(`Has seleccionado ${languages[indceSeleccionado]}`);
    
}