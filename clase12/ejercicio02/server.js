const net = require('net');
const HotelController = require('./controllers/hotelController')

const server = net.createServer((socket) =>{
    console.log('Cliente conectado')

    socket.on('data', (data) =>{
        const hotelId = data.toString().trim()
        console.log(`Solicitud recibida: ID: ${ hotelId }`)

        const response = HotelController.handlerRequest(hotelId)
        socket.write(response)
    })
})

server.listen(7000, () => {
    console.log('Servidor escuchando en el puerto 7000')
})