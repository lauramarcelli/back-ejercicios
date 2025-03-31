const fs = require('fs')// Paso 1: importamos el modulo fs

//Paso 2: configuramos una variable de nombre de datos que tiene datos si ha persistir
datos = "Ejemplo de datos que podemos escribir en un archivo"

//Paso 3: utilizamos el modulo fs con metodo writeFile que nos permita escribir datos en archivos
//1. wf. crea el archivo por nosotros, el nombre lo pasamos como primer parametro
//2. Segundo parametro es donde guardamos los datos, en este caso es una variable
//3. Tercer parametro hace referencia a qué hacer si ocurre un error. En el caso de error va a dar lugar a un mensaje determinado
fs.writeFile('archivo.txt', datos, function (err) {
    if (!err) {
        console.log('Los datos han sido escritos a archivo.txt')
    } else {
        throw err
    }
});

//Paso 4 / Extras
//Errores: En este tipo de archivo tienen que ver principalmente con intentar escribir en un archivo dentro de un directorio en el cual no tenemos acceso/permisos para hacerlo 

//¿Donde se guarda el archivo? Se guarda exactamente en el mismo lugar donde se encuentre el script que lo ejecuta. En este caso este archivo si quisiera que se guardara en otro ruta tenemos que indicar antes del nombre "archivo.txt" (la ruta completa)

//throw: se utiliza para lanzar una excepcion que es una forma de manejar errores o situaciones escepcionales en el codigo. Cuando se usa el "throw" podemos detener la ejecución nomral del codigo y transferir el control a un bloque de codigo que maneje el error, normalamente se llama "try catch"