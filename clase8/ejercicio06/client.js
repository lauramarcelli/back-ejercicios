/*Ejercicio 6: Cliente interactivo con la usuaria
Consigna
Crea un cliente donde la usuaria pueda escribir mensajes en la consola y
enviarlos al servidor.
• Después de cada mensaje, la usuaria puede escribir otro.
• Si escribe "salir", el cliente se desconecta.
Pistas
• Usa readline para capturar texto de la usuaria.
• Si el mensaje es "salir", cierra la conexión con client.end().*/

const readline = require('readline')

const net = require('net');

const PORT = 5000
const HOST = 'localhost'

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectado al servidor')

    client.write('Hola, servidor!')

    client.setTimeout(5000, () =>{
        console.log('Tiempo de espera agotado')
        client.end();
    })

    setTimeout(() => {
        console.log('Pausando la recepcion')
        client.pause()

        setTimeout(() =>{
            console.log('Reanudando la recepcion de datos')
            client.resume()
        }, 3000)
    }, 3000)
})

client.on('error', (err) =>{
    console.log('Error:', err.message);
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Ingresa un mensaje', (mensaje) =>{
    if(mensaje === 'salir'){
        console.log('Saliendo del sistema')
        rl.close()
    } else {
        rl.question('Ingrese otro mensaje', (mensaje))
        console.log('Ingresa otro mensaje')
    }
})