//Paso 1: Importamos los modulos
const net = require('net');
const fs = require('fs');
const path = require('path');

//paso 2: definimos la ruta donde se guardaran los mensaje en formato json
const rutaMensajes = path.join(__dirname, 'mensajes.json')

//paso 3: verificamos is existye, sino que se cree con array vacio
if (!fs.existsSync(rutaMensajes)) {
    fs.writeFileSync(rutaMensajes, '[]', 'utf-8')
}

//paso 4: creamos servidor
const server = net.createServer((socket) =>{
    console.log('cliente conectado');    

    //manejamos los datos del cliente
    socket.on('data', (data) =>{
        const mensaje = data.toString().trim()   

        //si el mensaje recibido es "/historial", enviamos todos los mensajes almacenados
        if (mensaje === '/historial') {
            //leemos el contenido del archivo mensaje.json
            const historial = fs.readFileSync(rutaMensajes, 'utf8')
            //enviamos el historial (todos los mensajes)
            socket.write(`historial de mensajes: \n${historial}`)
        } else {
            //si no manda ese comando hacer los siguiente:
            //leemos el archivo json y los convertimos en un array de objetos
            const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, 'utf8') || '[]' )
            //agregamos el nuevo mensaje con la fecha y hora actual
            mensajes.push({fecha: new Date().toISOString(), mensaje})
            //guardamos el arrazy actualizado en el archivo mensaje.json con un formato legible
            fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2), 'utf-8' )
            //enviamos una confirmacion de que se guardo bien al cliente
            socket.write('Mensaje guardado correctamente')
        }
    })

    //manejamos la desconexion del cliente
    socket.on('end', () =>{
        console.log('Cliente desconectado');
    })
})

//paso 5: inicio del servidor
server.listen(3000, () =>{
    console.log('Servidor escuchando en el puerto 3000');
    
})