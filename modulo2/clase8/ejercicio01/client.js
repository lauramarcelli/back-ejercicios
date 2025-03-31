/*Ejercicio 1: Conectar y enviar un mensaje al servidor
Consigna
Crea un cliente TCP que:
1. Se conecte a un servidor en localhost:5000.
2. Cuando la conexión se establezca, envíe el mensaje: "¡Hola,
servidor!".
3. Escuche los datos recibidos y los muestre en consola.
Pistas
• Usa net.createConnection() para conectar al servidor.
• Maneja el evento 'connect' para saber cuándo la conexión está
lista.
• Usa client.write() para enviar el mensaje.
• Captura los datos con el evento 'data'*/

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
})




/*Ejercicio 2: Implementar un timeout en la conexión
Consigna
Modifica el cliente del Ejercicio 1 para que:
1. Si después de 5 segundos no ha recibido una respuesta, cierre la
conexión.
2. Muestre " Tiempo de espera agotado" en la consola antes de
cerrar.
Pistas
• Usa client.setTimeout() con 5000 milisegundos.
• Cuando el timeout ocurra, usa client.end() para cerrar la conexión.
*/ 
