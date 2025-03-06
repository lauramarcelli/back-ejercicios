const net = require('net');
const {v4: uudiv4} =  require ('uuid')

const client = net.createConnection({port: 5000}, () =>{
    console.log('Conectado al servidor');
    const idv4 = uudiv4()
    console.log('UUID V4:' , idv4);
    

    client.on('data', (data) =>{
        console.log(`Datos recibidos: ${data}`);   
    })
    
    client.on('error', (err) =>{
        console.log(err.message);
    })

    client.on('end', () =>{
        console.log(Cerrandooo);
    })      
})