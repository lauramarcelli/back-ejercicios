/*DESAFÍO 3: Cliente con Timeout y Destrucción de Conexión
Objetivo: Implementar un timeout que cierre la conexión si no recibe
datos en 10 segundos.
El cliente debe:
Conectarse y enviar un mensaje inicial.
Configurar un setTimeout() de 10 segundos para cerrar la conexión si
no recibe datos.
Escuchar el evento 'data' y cancelar el timeout si recibe información.
Si no recibe datos en 10 segundos, usar client.destroy() y mostrar un
mensaje en consola*/

const net = require('net');
const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST});

client.on('connect', () =>{
    console.log('Conectando al servidor');
    client.write('Hola, servidor!')
})

client.on('data', (data) =>{
    console.log('mensaje del servidor', data.toString) 
})

let timeout = setTimeout(() =>{
    console.log('⚠ No hay datos del servidor, cerrando conexion');
    client.end();
}, 1000)

client.on('data', () => {
    clearTimeout(timeout);//funcion para borrar el timeout en caso de que haya data
    timeout = setTimeout(() =>{
        console.log('⚠ No hay datos del servidor');
        client.end();
    }, 1000)

} )