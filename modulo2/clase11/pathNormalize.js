const path = require('path');

//Ejemplo 1: Normalizacion de una ruta con barras redundantes y puntos de navegacion
const rawPath ='/home/user/docs/./file.txt'
const normalizePath1 = path.normalize(rawPath)
console.log('Ejemplo 1, ruta normalizada: ', normalizePath1)

//Ejemplo 2: Normalizacionde una ruta con navegacion hacia arriba
const rawPath2 ='/home/user/docs/../images/file.jpg'
const normalizePath2 = path.normalize(rawPath2)
console.log('Ejemplo 1, ruta normalizada: ', normalizePath2)

//Ejemplo 3: Normalizacion de una ruta con multiples puntos de navegacion
const rawPath3 ='/home/user/docs/../../file.txt'
const normalizePath3 = path.normalize(rawPath3)
console.log('Ejemplo 1, ruta normalizada: ', normalizePath3)


