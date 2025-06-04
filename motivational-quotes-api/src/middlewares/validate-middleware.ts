import express, {  Request, Response, NextFunction} from "express";

export const validateQuote = (req: Request, res: Response, next: NextFunction) : void => {
    const {author, text} = req.body;//extraemos los datos enviados en la solicitud 
    if(!author || typeof author !== 'string') {
        res.status(400).json({error: 'Faltan datos del autor'})
        return
    }
    if(!text || typeof text !== 'string') {
        res.status(400).json({error: 'Faltan datos referidos al texto de la frase'})
        return
    }
    next();
}

export default validateQuote