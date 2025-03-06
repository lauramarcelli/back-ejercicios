/* Ejercicio 5: ¡Despídete de tu perfil!
Consigna:
¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json.
Verifica que el archivo existe antes de intentar borrarlo.
Pista: Usa fs.unlink para eliminar archivos */

const fs = require('fs');

//verificacion de existencia de perfil
if (fs.existsSync('./perfil.json')){
    fs.unlinkSync('./perfil.json');
    console.log("El archivo fue borrado exitosamente")
} else {
    console.log("El archivo no pudo ser borrado. Revisa nuevamente el codigo")
}