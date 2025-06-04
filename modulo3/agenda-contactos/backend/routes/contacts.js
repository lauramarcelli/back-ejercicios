//RUTAS PARA MANEJAR LAS LOGICAS
const express = require('express');//framework para manejar las rutas
const fs = require('fs');//modulo para lleer y escribir archivos
const path = require('path');//modulo para manejar las rutas
const router = express.Router()//creamos un enrutador de express

const dataPath = path.join(__dirname, '../data/contacts.json')//ruta al archivos de contactos

//RUTA GET
router.get('/', (req, res) => {
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))//leemos el archivo de contactos
    res.json(contacts);
})

//Agregar contactos - POST

router.post('/', (req, res) => {
    const newContact = req.body;//obtenemos los datos enviados en el cuerpo de la solicitud
    const contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))//leemos el archivo de contactos
    contacts.push(newContact);//agregamos el nuevo contacto
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2))//escribimos los contactos actualizados en el archivo
    res.json({message: "Contacto creado", contact: newContact})//devolvemos los contactos actualizados
})


//Actualizar contacto - PUT

router.put('/:id', (req, res) => {
    const { id } = req.params;//obtenemos el id de la solicitud
    const updatedContact = req.body//obtenemos los datos enviados en el cuerpo de la solicitud
    let contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))//leemos el archivo de contactos
    contacts = contacts.map(contact => contact.id === id ? updatedContact : contact); 
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2))
    res.json({message: "Contacto actualizado", contact: updatedContact})
})

//Eliminar contacto - DELETE
router.delete('/:id', (req, res) => {
    const { id } = req.params;//obtenemos el id de la solicitud
    let contacts = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))//leemos el archivo de contactos
    contacts = contacts.filter(contact => contact.id !== id);//filtramos el contacto a eliminar
    fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2))//escribimos los contactos actualizados en el archivo
    res.json({message: "Contacto eliminado"});
})

module.exports = router