//paso 6: importacion del cliente
const net = require('net');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//paso 7: creamos el cliente
const client = net.createConnection({port: 3000}, () => {
    console.log('conectado al servidor');
    rl.question('Ingresa un mensaje (o /historial para ver el historial): ', (mensaje) =>{client.write(mensaje);});
    
})


//evento data
client.on('data', (data) => {
    console.log('Respuesta del servidor', data.toString());
})
//evento error
client.on('error', (err) =>{
    console.log('error en el cliente:' , err);
    
})
//evento end
client.on('end', () => {
    console.log('Desconectando del servidor');
    
})

