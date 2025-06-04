import express, { Application, Request, Response, NextFunction} from "express";
import quotesRouter from './routes/quotes-routes'
import  errorMiddleware  from "./middlewares/error-middleware";

//creamos una instancia de express
const app: Application = express();

//middleware global para analizar el cuerpo de solicitudes en formato json
app.use(express.json());

//configuracion de rutas
app.use('/api/quotes', quotesRouter)

//middleware para manejar las solicitudes a las rutas
app.use((req: Request, res: Response) => {
    res.status(404).json({error: 'Endpoint no encontrado'})
})

//middleware global para manejar la api
app.use(errorMiddleware)

//definimos puerto
const PORT = 3000;

//iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});