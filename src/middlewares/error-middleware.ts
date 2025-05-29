// Importaciones
import { Request, Response, NextFunction} from 'express';

//Middleware para manejar errores global
export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction): void =>{
    console.error('Error: ',err.message);
    res.status(500).json({ error: 'Algo ocurrió con el servidor' });
}