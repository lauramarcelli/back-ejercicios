//Importaciones

import {Request, Response, NextFunction} from 'express';

//Middleware para validar datos
export const validateBook = (req: Request, res: Response, next: NextFunction): void => {
    
    const { title, author } = req.body;

    if (!title || !author) {
        res.status(400).json({ error: 'El libro debe tener un título y un autor' });
        return;
    }
    
    next();
}