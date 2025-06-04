//Importaciones
import express, {Application, Request, Response, NextFunction} from 'express';

import booksRouter from './routes/books-routes';

import { errorMiddleware } from './middlewares/error-middleware';

//Instancia de la aplicación Express: "app"

const app: Application = express()

//Middlewares
app.use(express.json());

app.use('/api/books', booksRouter);

app.use((req: Request, res: Response) => {
    res.status(404).json({error: 'Endpoint no encontrado'})
});

app.use(errorMiddleware);

//Puerto
const PORT = 3000;

//Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

