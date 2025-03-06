//Paso 1: Importamos http para crear el servidor (solicitudes)
//Importamos tambien fs para trabajar con los archivos
const http = require ('http')
const fs = require ('fs')

//Paso 2: Definimos el puerto
const PORT = 3000

//Paso 3: Creamos el servidor
const server = http.createServer((req, res) => {
    //Leer el archivo datos.json
    fs.readFile('datos.json', 'utf8', (err, data) =>{
        if (err) {
            //si hay un error mostramos un mensaje
            res.end('No se pudo leer el archivo JSON')
            return;
        }
        //enviamos el contenido del archivo JSON al navegador
        res.setHeader('Content-Type', 'application/json')//configurando el tipo de contenido
        res.end(data)//enviamos el contenido del archivo JSON
    })
})

server.listen(PORT, () =>{
    console.log(` listening on http://localhost:${PORT}`)
})