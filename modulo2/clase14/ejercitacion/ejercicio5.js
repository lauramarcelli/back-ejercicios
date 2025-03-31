/*Crea un script en Node.js que permita al usuario ingresar un texto, luego
lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el
resultado original. Usa el módulo crypto para el cifrado y descifrado*/

const crypto = require('crypto');
const data = 'Mensaje ultra secreto!'
const algorithmn = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)


//Paso 1: encriptamos el mensaje
//creamos objeto cypher
const cipher = crypto.createCipheriv(algorithmn, key, iv)

//ciframos los datos
let encriptado = cipher.update(data, 'utf8', 'hex')

//texto plano y lo cifra
encriptado += cipher.final('hex')
console.log('Texto cifrado: ', encriptado)



//Paso 2: desencriptamos el mensaje
//creamos objeto de descifrado
const decipher = crypto.createDecipheriv(algorithmn, key, iv)

//desciframos los datos
let decifrar = decipher.update(encriptado, 'hex', 'utf8')
decifrar += decipher.final('utf8')

console.log('Texto descifrado; ', decifrar)