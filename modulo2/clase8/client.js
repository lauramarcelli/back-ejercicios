const net = require('net');

//Paso 2: Configuracion de la conexion, hacerla por fuera primero
const PORT = 5000
const HOST ='localhost'

//Paso 3: Creamos la conexion al servidor usando net.createConnection 

const client = net.createConnection({port: PORT, host: HOST}, () =>{
    console.log('Conectados al servidor');

    //enviamos un mensaje inicial al servidor
    client.write('Hola servidor!')

    //Paso 6: configuramos tiempo de espera
    client.setTimeout(1000, () => {
        console.log('Tiempo de espera alcanzado, cerrando conexión...');
        client.end()
    }); 

    //Paso 7: Pausamos la recepción de datos despues de 2 segundos
    setTimeout(() =>{
        console.log('Pausando la recepcion de datos...');
        client.pause()

        setTimeout(() =>{
            console.log('Reanudando la recepcion de datos')
            client.resume()

            client.write('Otro mensaje despues de reanudar')
        }, 3000)
    }, 2000)
})


//esto va la proxima clase
client.on('error', (err)=>{
    console.error('Error',err.message)
})

//PASO 8: para permitir que el proceso de node termine si no hay más tarea

client.unref()

//Paso 9: para mantener activo el proceso mientras la coenxions siga abierta
client.ref()

setTimeout(() =>{
    console.log('Destruyendo el socket')
    client.destroy();
}, 5000)