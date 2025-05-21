//importamos express
import express from "express";

//importamos userRouter
import userRouter from "./routes/userRouter";

//INSTANCIA DE EXPRESS
const app = express();

//MIDDLEWARE para parsear json
app.use(express.json());

//configuracion de las rutas
//1. asociamos el router 'userRouter' al prefijo'/users'. Esto significa que todas las rutas definidas en userRouter como un objeto JS y estarán disponibles bajo la ruta base'/users'
app.use('/users', userRouter);

export default app