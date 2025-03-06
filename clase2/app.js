const fs = require('fs');

//definimos la ruta del archivo json que vamos a manipular
const rutaArchivo = './productos.json';

//Paso 1: leer archivos json
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo', err)
        return // detiene la ejecucion
    }

//convertimos el contenido json a un objeto javascript (jon,parse)
const productos = JSON.parse(data)
console.log('Productos actualizados: ', productos);

//Paso 2: agregar producto al listado
//creamos un nuevo objeto que representa el nuevo producto
const nuevoProducto = {
    id: productos.length + 1,
    nombre: 'Webcam',
    precio: 40,
}



 //agregamos el nuevo producto al array de productos existentes
productos.push(nuevoProducto)
console.log('Productos actuales: ', productos);

//paso 3: escribirel json actualizado
//convertimos el objeto de javascript , json.stringify
const contenidoActualizado = JSON.stringify(productos, null, 2) //formateamos el espacio
    
    
//escribimos el nuevo contenido en el archivo, mostramos el error por consola
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
            if (err) {
            console.error ('Error al escribir el archivo: ', err)
            return 
        } 
        console.log('Archivo actualizado correctmente: ');
    
    })

})