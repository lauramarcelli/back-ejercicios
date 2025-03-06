/*Hola, chicas!
Hoy vamos a crear juntas una “Aplicación básica para saludar al usuario y conocer su edad”
Instrucciones
1. Crea un archivo llamado app.js en Visual Studio Code.
2. Escribe un programa que haga lo siguiente:
• Reciba el nombre del usuario desde la línea de comandos.
• Use una variable de entorno para personalizar el saludo predeterminado.
• Muestre información básica del entorno de ejecución:
• El directorio actual desde donde se ejecuta el programa.
• La plataforma del sistema operativo.
• Use el módulo readline para preguntarle al usuario su edad.
• Agradezca al usuario y termine de forma ordenada.
3. Crea un archivo .env para configurar un saludo personalizado.*/

const readline = require('readline')

//cargamos las variables de entorno desde el archivo .env usando esta libreria "dotenv"
require('dotenv').config()


//usamos un saludo predeterminado en el caso del que .env no esté determinado
const defaultGreeting = process.env.greeting || 'Hola sin mas'

//Procesamos los argumentos de la linea de comando, y de ahí capturamos el primer argumento despues del nombre del archivo como el nombre del usuario. Si no se pronunció argumento, usamos invitado como valor predeterminado
const args = process.argv.slice(2)
const userName = args[0] || 'chicas de back'

//mostramos el saludo personalizado y el nombre del usuario
console.log(`${defaultGreeting}, ${userName}`);

//mostrar info sobre el entorno de ejecución
console.log('Informacions sobre el entorno de ejecución:');
//directorio actual
console.log(`Directorio actual: ${process.cwd()}`)
//plataforma
console.log(`Plataforma: ${process.platform}`)

//creacion de la interfaz para interactuar con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//usamos metodo rl question para mostrar la pregunta al usuario

rl.question('Cuantos años tienes?', (age) =>{
    console.log(`Wow, ${age} es una gran edad`);
    rl.close();
}) 

//opcional: manejar el evento close
rl.on('close', () =>{
    console.log('Gracias por usar este programa, adios!');
    process.exit(0);
})