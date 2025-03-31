const path = require ('path')

//Ejemplo 1: Obtener directorio contendor de un archivo desde una ruta absoluta
const filePath = '/home/user/docs/file.txt'
const dirName1 = path.dirname(filePath)
console.log('Directorio contenedor de file.txt: ', dirName1)

//Ejemplo 2: Obtener el directorio del archivo usando ruta relativa
const relativePath = 'src/utils/helper.js'
const dirname2 = path.dirname(relativePath)
console.log('Directorio contenedor de helpers.js: ', dirname2)

//Ejemplo 3: Obtener el directorio padre de un directorio
const dir = '/var/wwww/html'
const dirName3 = path.dirname(dir)
console.log('Directorio padre de /var/wwww/html: ', dirName3)