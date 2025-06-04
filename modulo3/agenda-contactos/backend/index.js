///Importaciones de dependencias///
const express = require('express')//para manejo de rutas
const cors = require('cors')//middleware para solictudes entre dominios de front y back
const bodyParser = require ('body-parser')// manejo de solictud HTTP
const path = require('path')//modulo nativo de node.js que nos ayuda a manejar las rutas de los archivos
const contactsRoutes = require('./routes/contacts')

//Instanciamos express
const app  = express()
const PORT = process.env.PORT || 3000

///Middlewares///
app.use((req, res, next) => {
console.log(`Solicitud entrante: ${req.method} ${req.url}`);
next();
});
app.use(cors())//habilita al frontend para que pueda comunicarse con el servidor
app.use(bodyParser.json())//permite recibir datos en formato JSON
app.use(express.static(path.join(__dirname, '../public')))//permite servir archivos estaticos de front

//ruta para API
app.use('/api/contacts', contactsRoutes)// todas las rutas que comiencen con /api/contacts van a ser manejadas por contactsRoutes

//ruta para manejar cualquier solicitud
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//Inicializar el puerto

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el http://localhost:${PORT}`);
})