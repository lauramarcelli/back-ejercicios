const path = require ('path')

//Ejemplo 1: Obtener la extendion de un archivo desde una ruta absoluta
const filePath = '/home/user/docs/file.txt'
const ejemplo1 = path.extname(filePath)
console.log('Ejemplo 1 - extension del archivo (Abs): ', ejemplo1)

//Ejemplo 2: Obtener extension de un archivo de una ruta relativa
const relativePath = 'src/utils/helpers.js'
const ejemplo2 = path.extname(relativePath)
console.log('Ejemplo 2 - extension del archivo (Rel): ', ejemplo2)

//Ejemplo 3: Manejo de archivo sin extension
const noExtPath = '/home/user/docs/README'
const ejemplo3 = path.extname(noExtPath)
console.log('Ejemplo 3 - extension de archivo sin nombre: ', ejemplo3)