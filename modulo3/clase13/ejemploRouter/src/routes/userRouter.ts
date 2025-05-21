//importamos el modulo router de express
import { Router } from "express";

//creamos la instancia del router
const userRouter = Router();

//definimos las rutas básicas del recurso usuario

//1.ruta GET 
userRouter.get('/', (req, res) => {
    res.json({message: 'Obtener todos los usuarios'})
})

//2.ruta POST - crear
userRouter.post('/', (req, res) => {
    const {name, email} = req.body;//extraemos los datos enviados en la solicitud 
    res.status(201).json({message: 'Usuario creado', user: {name, email}})
})

//3.ruta PUT
userRouter.put('/:id', (req, res) => {
    const {id} = req.params;//extraemos el id de la solicitud 
    const {name, email} = req.body;//extraemos los datos enviados en la solicitud
    res.json({message: `Usuario actualizado ${id}`})
});

//4.ruta DELETE   
userRouter.delete('/:id', (req, res) => {
    const {id} = req.params;//extraemos el id de la solicitud
    res.json({message: `Usuario eliminado ${id}`})
})

export default userRouter