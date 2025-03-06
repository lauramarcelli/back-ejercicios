const path = require ('path')

//Ejemplo 1: Obetner el nombre un archivo de una ruta absoluta
const rutEntera = '/home/user/docs/file.txt'
const baseName1 = path.basename(rutEntera)
console.log('Ejemplo 1: Nombre del archivo: ', baseName1)

//Ejemplo 2: Obtener el nombre sin la extension
const baseName2 = path.basename(rutEntera, '.txt')
console.log('Ejemplo 2: Nombre del archivo sin extension: ', baseName2)

//Ejemplo 3: Uso con rutas relativas
const rutaRelativa = 'src/utils/helpers.js'
const baseName3 = path.basename(rutaRelativa)
console.log('Ejemplo 3: Nombre del archivo desde una ruta relativa ', baseName3)