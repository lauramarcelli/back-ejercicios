//importamos express

const express = require('express')

//creamos una instancia de express
const app = express()

//definimos un puerto para nuestro servidor

const PORT = 3000

// ruta GET para la URL raíz

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

//iniciamos el servidor
app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el http://localhost:${PORT}`)
})