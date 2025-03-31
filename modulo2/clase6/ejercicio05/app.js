/*Ejercicio 5: Convierte temperaturas como un profesional
Consigna:
Crea un programa interactivo que permita convertir temperaturas de
grados Celsius a Fahrenheit. Este ejercicio te ayudará a practicar el uso
del módulo readline para manejar entradas del usuario y aplicar cálculos
básicos. Además, incluye un mensaje personalizado de bienvenida
configurado a través de variables de entorno.
Requisitos del programa:
1. Usa una variable de entorno llamada WELCOME_MESSAGE para
mostrar un mensaje inicial. Si no se define, usa "¡Bienvenido al
conversor de temperaturas!" por defecto.
2. Usa el módulo readline para solicitar al usuario una temperatura en
grados Celsius.
3. Calcula la conversión a Fahrenheit usando la fórmula:
(Se pueden ayudar buscando como es la fórmula en código en
internet)
4. Muestra el resultado en la consola.
5. Despídete del usuario al final.
Indicaciones:
1. Crea un archivo llamado app.js para el código.2. Usa dotenv para cargar el mensaje de bienvenida desde el archivo
.env.
3. Configura la interfaz con readline y calcula la conversión.
4. Ejecuta el programa y prueba ingresando diferentes valores de
temperatura*/

const readline = require('readline');

require('dotenv').config();

//Mensaje de bienvenida

const deffaultMessage = process.env.WELCOME_MESSAGE || "¡Bienvenida al conversor de temperaturas!"

console.log(deffaultMessage)

//Creacion del programa que convierte temperatura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//preguntamos temperatura y la convierte a fahrenheit
rl.question('Por favor ingrese la temperatura en grados Celsius: ', (num1) => {
    const celsius = parseFloat(num1);  

    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
    
    console.log(`La temperatura en grados Farenheit es ${celsiusToFahrenheit(celsius)}`)

    //Cierre de la interfaz readline
    rl.close();
})

//Manejo del cierre de evento
rl.on('close', () => {
    console.log('Muchas gracias por usar el programa, hasta la proxima ✨')
    process.exit(0);
});
