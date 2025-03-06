const net = require('net');

const MovieController = require('./controller/MovieController')

const server = net.createServer((socket) =>{
    console.log('Cliente conectado')

    socket.on('data', (data) =>{
        const title = data.toJSON().trim();
        console.log(`Solicitud recibida: titulo ${title}`)
        const response = MovieController.handlerRequest(title)

        socket.write(response)
    })

    socket.on('end', () =>{
        console.log('Cliente desconectado')
    })

})



server.listen(4002, () =>{
    console.log('Servidor escuchando en el puerto 4002')
})