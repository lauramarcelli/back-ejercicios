const { console } = require('inspector');
const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const requestMovie = (title) => {

    const client = net.createConnection({port:4002}, () => {
        console.log('Conectado al servidor');
            client.write(title);
    
        client.on('data', (data) =>{
            console.log('Respuesta del servidor: ', data.toString())
            client.end()
        });
    
        client.on('error', (err) => {
            console.error('Error', (err))
            rl.close();
        });
    
        client.on('end', () => {
            console.log('conexion cerrada')
            rl.close();
        })
    
        
    
        
    })

    rl.question('Ingrese pelicula a consultar', (title) =>{
        requestMovie(title)
        
    })
}



