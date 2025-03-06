const net = require('net');

const client = net.createConnection({port: 8080}, () =>{
    console.log('Conectado al servidor')


    //Ruta absoluta
    client.write('/home/user/documento.txt')
    //Ruta relativa
    client.write('documento.txt')
    //Ruta absoluta
    client.write('/home/usuarios/file.txt')
});

client.on('data', (data) =>{
    console.log(data.toString())
    client.end();
})

client.on('end', ()=>{
    console.log('Desconectado del servidor')
})