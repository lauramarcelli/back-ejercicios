const net = require('net');

const BookController = require('./controllers/BookController');

const server = net.createServer((socket) => {
    console.log('Cliente conectado')

    socket.on('data', (data) =>{
        const bookId = data.toString().trim();
        console.log(`Solicitud recibida: ID ${bookId}`);

        const response = BookController.handlerRequest(bookId)

        socket.write(response)
    })

    socket.on('end', () =>{
        console.log('Cliente desconectado')
    })
})

server.listen(4000, () =>{
    console.log('Servidor escuchando en el puerto 4000')
} )