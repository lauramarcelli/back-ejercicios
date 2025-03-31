/*Hola, chicas!
Hoy vamos a crear juntas “Servidor TCP en Node.js con Eventos”
Objetivo: Implementa un servidor TCP en Node.js que gestione conexiones, reciba/envié datos y maneje
eventos.
Requerimientos:
Configuración básica:
• Usa el módulo net.
• Escucha en el puerto 3000.
• Eventos del Socket (por cliente):
• Registra conexiones, datos recibidos (convertidos a texto), cierres y errores.
• Responde al cliente con "Mensaje recibido por el servidor" tras recibir datos.
• Cierra la conexión automáticamente tras 5 segundos de inactividad (timeout).
Eventos del Servidor:
Muestra mensajes al iniciar (listening), al conectarse un cliente (connection), ante errores y al cerrarse*/


//Paso 1: Importamos modulo net
const net = require('net');

//Paso 2: Creamos el servidor TCP utilizando el metodo de createServer del modulo net. Este metodo reciebe una funcionde callback que se ejecuta cada vez que el cliente se conecta al servidor.

const server = net.createServer((socket) => {
    console.log('Un cliente se ha conectado al servidor')

    //Paso 3: agregamos los eventos
    //1. evento data. Se emite cuando el servidos recibe datos del cliente

    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente ${data.toString()}`)
        //Podemos responder al cliente enviandole un mensaje de respuesta

        socket.write('Mensaje recibido por el servidor')
    })

    //2. Evento end
    socket.on('end', () => {
        console.log('El cliente ha cerrado la conexión')
    })

    //3. Evento error: Se emite cunaod ocurre un error en el socket
    socket.on('error', (err) =>{
        console.log(`Error en la conexión: ${err.message}`)
    })

    //4.Evento close: Se emite cuando el socket se cierra de manera abrupta u ordenada
    socket.on('close', () => {
        console.log('La conexión se ha cerrado')
    })

    //5.Evento timeout: se emite cuando se alcanza el tiempo de espera del timeout para recibir datos
    socket.on('timeout', () => {
        console.log('Se ha alcanzado el tiempo de espera sin recibir datos')
        //podemos cerrar la conexion si se alcanza el timeout
        socket.end()
    })

    socket.setTimeout(5000)

})


//6. evento cenxion
server.on('connection', (socket) => {
    console.log('Nueva conexion establecida')
})

//Paso 4: pOnemos el servidor a escuchar en el puerto
const PORT = 3000
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`)
})

//7. evento listening: Se emite cuando a servidor comienza a escuchar en el puerto
server.on('listening', () =>{
    console.log('El servidor esta listo para recibir conexiones')
})

//8. evento error: se emite si ocurre error al iniciar el servidor
server.on('error', (err) =>{
    console.error(`Error al iniciar el servidor: ${err.message}`)
})

//9. Evento close: cuando el servidor se cierra
server.on('close', () =>{
    console.log('El servidor se ha cerrado')
})

