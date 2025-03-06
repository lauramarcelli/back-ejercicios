const crypto = require('crypto')

//datos a hashear
const data ='Este es un mensaje secreto'

//creamos el objeto hash usando el algortimo sha256
const hash = crypto.createHash('sha256')

//actualizar el hash con los datos
hash.update(data)

//obtener el hash en formato hexadecimal
const hashOutput = hash.digest('hex')

//mostrar el has generado
console.log('hash de sha256: ' + hashOutput);
