const net = require('net');
const {v4: uudiv4} =  require ('uuid')

const server = net.createServer((socket) =>{
    const idv4 = uuidv4()
    console.log("UUID V4", idv4)

    socket.on('data', (data) =>
    {
        console.log(`Datos recibidos: ${data} `);
    })

    socket.on('end', () =>{
        console.log("Conexion finalizada");
    })
})

server.listen(5000, () =>{
    console.log('Servidor escuchando en puerto 5000');
    
})