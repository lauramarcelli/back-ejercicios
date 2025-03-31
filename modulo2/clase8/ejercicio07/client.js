/*Ejercicio 7: Cliente que destruye el socket al fallar
Consigna
Crea un cliente que:
1. Se conecte al servidor.
2. Si hay un error en la conexión, use client.destroy() y muestre "
Conexión destruida".
Pistas
• client.destroy() libera los recursos del socket de inmediato*/

const net = require('net');

const PORT = 4000
const HOST = 'localhost'
const client = net.createConnection({port: PORT, host: HOST}, () =>{
    console.log('Conectando al servidor')
})


client.on('error', (err) =>{
    console.log('Conexionn destruida', err.message)
    client.destroy()
})