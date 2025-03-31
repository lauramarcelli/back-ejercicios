const crypto = require('crypto')

//datos a hashear
const data ='mensaje secreto'

//clave secreta para hmac
const secretKey = "mi_clave_secreta"

//creacion de un objeto del hmac usando un algoritmo sha126
const hmac = crypto.createHmac('sha256', secretKey)

//actualizacion el hmac con los datos
hmac.update(data)

//obtener el mac en formato hexadecimal
const hmacOutput = hmac.digest('hex') 

//leemos el hmac generado
console.log('HMAC de sha256:', hmacOutput);
