//Importaciones
const express = require('express');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken')
const fs = require('fs');

//Inicializa express
const app = express();
app.use(express.json());

//defina el puerto
const PORT = 3000;

//midddleware para parsear json
//app.use(bodyParser.json())

//ruta al archivo que simula la base de datos
const dataBasePath = './database.json'

//cargar las variables de entorno
require('dotenv').config()
const SECRET_KEY = process.env.SECRET_KEY 

//ruta base para confirmar que el servidor está funcionando
app.get('/', (req, res) => {
    res.send('Bienvenidas al sistema de logueo')
})


//ruta para registrar nuevos usuarios
app.post('/register', async (req, res) => {
    const {email, password} = req.body

    //condicional para verificar que los campos no estén vacíos
    if(!email || !password) {
        return res.status(400).json({error: 'Los campos no pueden estar vacíos'})
    }

    //leer la bd para verificar que el usuario existe 
    const database = JSON.parse(fs.readFileSync(dataBasePath));
    const userExists = database.find((user) => user.email === email)

    if (userExists) {
        return res.status(400).json({error: 'El usuario ya existe'})
    }

    //hashing de la contraseña donde el numero 10 (veces para intentar ingresar) es el coste del algoritmo
    const hashedPassword = await bcrypt.hash(password, 10)

    //creamos un nuevo usuario
    const newUser = {id: Date.now(), email, password: hashedPassword}

    //guardamos
    database.push(newUser)
    fs.writeFileSync(dataBasePath, JSON.stringify(database, null, 2))

    //respondemos al cliente confirmando el registro fue exitoso
    res.status(201).json({message: 'Usuario registrado exitosamente'})
})

//ruta para iniciar sesión
app.post('/login', async (req, res) => {
    const {email, password} = req.body
    console.log(req.body);
    
    //condicional para verificar que los campos no estén vacíos
    if(!email || !password) {
        return res.status(400).json({error: 'Los campos no pueden estar vacíos'})
    }

   //leer la bd para buscar el usuario
    const database = JSON.parse(fs.readFileSync(dataBasePath))
    const user = database.find((user) => user.email === email)
    if (!user) {
    return res.status(400).json({error: 'El usuario no existe'})
    }

    //verificamos la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid) {
        return res.status(401).json({error: 'La contraseña es incorrecta'})
    }

    //generamos un jwt token
    const token = jwt.sign({id:user.id, email:user.email}, SECRET_KEY, {expiresIn: '1h'})

    res.json({message: 'Usuario logueado exitosamente', token} )
})

//middleware para verificar el token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]//extraemos el token

    //condicional para verificar que el token existe
    if (!token) {
        return res.status(401).json({error: 'Token no proporcionado'})
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if(err) {
            console.error(err.message);
            return res.status(403).json({error: 'Token inválido'})
        }
        req.user = user // guardamos los datos del user
        next()
    })
}

//ruta protegida
app.get('/profile', authenticateToken, (req, res) => {
    res.json({message : `Bienvenida ${req.user.email}`, user: req.user})
})

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el http://localhost:${PORT}`);
    
})