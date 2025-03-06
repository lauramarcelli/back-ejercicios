const path = require ('path')

//Ejemplo 1: Resolucion de una ruta relativa en el directorio actual
const resolvPath1 = path.resolve('file.txt')
console.log('Ruta relativa desde el directorio actual:', resolvPath1 )

//Ejemplo 2: Resolucion de multiples segmentos de ruta en una ruta absoluta
const resolvPath2 = path.resolve('/home/user', 'docs', 'file.txt')
console.log('Ruta resuelta con multiples segmentos:', resolvPath2)

//Ejemplo 3: uso con rutas relativas que suben varios niveles
const resolvPath3 = path.resolve('/home/user/docs', '/..images', 'file.jpg') 
console.log('Ruta resuelta con navegacion hacia arriba: ', resolvPath3)