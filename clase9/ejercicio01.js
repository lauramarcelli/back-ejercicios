/*DESAFÍO 1: Cliente con Reconexión Automática
Objetivo: Crear un cliente TCP que se conecte a un servidor, pero si la
conexión se pierde, debe intentarlo nuevamente cada 3 segundos.
El cliente debe:
Conectarse al servidor en el puerto 5000.
Enviar un mensaje inicial: "¡Hola, servidor!".Escuchar el evento 'close' y volver a conectarse tras 3 segundos.
Escuchar y manejar 'error', mostrando el mensaje en consola.*/

const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, HOST: 'localhost'}, () => {
    client.write('Hola, servidor!')
});

client.on('connect', () =>{
    console.log('Conectando al servidor');
})

client.on('close', () =>{
    console.log('Conexion errada. Reconectando en 3 segundos...');
    setTimeout(() =>{
        console.log('Intentando reconectar...')
        client.createConnection({host: HOST, port: PORT})
    }, 3000)
})

client.on('error', (err) =>{
    console.log('Error: ', err.message)
})