/*Ejercicio 2: Menú Interactivo con readline-sync
Crea un script de Node.js que muestre un menú de opciones usando
readline-sync. El menú debe permitir al usuario elegir entre tres acciones:
ver un mensaje de bienvenida, generar un hash de un texto, o salir*/

const readlineSync = require('readline-sync');

const acciones =['Mensaje de Bienvenida', 'Generar un hashd el texto', 'Salir']
const accionSeleccionada = readlineSync.keyInSelect(acciones, 'Elige una de las opciones otorgadas')

if(accionSeleccionada === -1) {
    console.log('No has seleccionado ninguna opción');
} else {
    console.log(`Has seleccionado ${acciones[accionSeleccionada]}`);
}