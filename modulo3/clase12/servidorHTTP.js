//paso 1: importamos el modulo http
const http = require('http')

//paso 2: creamos el servidor
const server = http.createServer((req, res) =>{
   //REQUEST: representa la solicitud
   //RESPONSE: representa la respuesta
    //establecemos el codigo de estado de respuesta que está todo ok, indicando que salio exitosa
    res.statusCode = 200 

    //configurar el encabezado
    //el primero content-type: par aque el cliente sepa el contenido 
    //text-plain: significa texto plano
    res.setHeader('Content-Type', 'text/plain')

    //envia la respuesta al cliente con el mensaje y finalizamos la respuesta
    res.end('Hola mundo')
})

server.listen(3000, () => {
    console.log('El servidor esta escuchando en el http://localhost:3000')
})