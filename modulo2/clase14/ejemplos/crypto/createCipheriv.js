const crypto = require('crypto')
const data ='Este es un mensaje secreto'
const algoritmo = 'aes-256-cbc'// algoritmo de cifrado AES con un tamaño de 256 bites
const key = crypto.randomBytes(32) //genera una clave de 256(bits) que son 32 bytes
const iv = crypto.randomBytes(16) //genera un vector de inicialización de 16 bytes


//creamos objeto cipher
const cipher = crypto.createCipheriv(algoritmo,key,iv)

//ciframos los datos
let encriptado = cipher.update(data, 'utf8', 'hex')// procesa el texto plano y lo cifra
encriptado += cipher.final('hex') // finaliza el cifrado
console.log('Texto cifrado: ', encriptado) 

//crear objeto de cipher
const decipher = crypto.createDecipheriv(algoritmo, key, iv)


//deciframos los datos
let decifrado = decipher.update(encriptado, 'hex', 'utf8')
decifrado += decipher.final('utf-8')

console.log('Texto descifrado: ', decifrado);
