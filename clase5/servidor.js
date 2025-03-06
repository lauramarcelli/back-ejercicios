// Paso 1: Importamos el modulo NET
const net = require ('net');

//Paso 2: Creamos el servidor TCP usando la funcion de createServer
const server = net.createServer((socket) =>{
    //eSte mensaje aparece cunado un cliente se conecta al servido
    console.log('Un cliente se ha conectado')

    //escuchamos el evento data cuando el cliente envia datos al servidor
    socket.on('data', (data) => {
        //mostrara en consola el mensaje recibido del cliente
        console.log('Mensaje recibido: ', data.toString())
    })

    //Escuchamos el evento 'end' que se activa cuando el cliente se desconecta del servidor
    socket.on('end', () =>{
        console.log('El cliente se ha desconectado');
    })
})

// Paso 3: Definimos el puerto en el que el servidor estará escuchando conexiones
const PORT = 4000;

//Inicamos el servidor y lo ponemos a escuchar en el puerto especifico
server.listen(PORT, () => {
    //Mostramos un mensaje por consola indicando que el servidor esta listo
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
})