/*Ejercicio 9: Cliente que reconecta automáticamente
Consigna
Crea un cliente que:
1. Si la conexión falla, reintente conectarse cada 3 segundos hasta
que tenga éxito.
Pistas
• Usa setTimeout() para intentar de nuevo tras 3 segundos.
• Llama a net.createConnection() dentro del reintento*/

const net = require('net');

/*const PORT = 5000
const HOST = 'localhost'

const cliente = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectado al servidor')
})

setTimeout(() =>{
    console.log('Conexión fallida. Reintentando conectarse nuevamente')
    net.createConnection({port: PORT, host: HOST}), () => {
        console.log('Conexión restablecida')
    }

}, 3000)*/

function connectToServer() {
    console.log('Intentando conectar al servidor...');

    const client = net.createConnection(6000, 'localhost', () => {
    console.log('Conectado al servidor');
    });

    client.on('error', (err) => {
        console.error(`❌ Error de conexión: ${err.message}`);
        console.log('Reintentando en 3 segundos...');
        setTimeout(connectToServer, 3000);
        //setTimeout(() =>{
          //  console.log('Pausando la recepcion de datos...');
           // client.pause()
        //}, 3000);
    });

}



connectToServer();


    
