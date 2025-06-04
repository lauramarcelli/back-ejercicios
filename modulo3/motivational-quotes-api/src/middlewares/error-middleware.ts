import express, {  Request, Response, NextFunction} from "express";

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) : void => {
    console.error('Error: ', err.message);
    res.status(500).json({error: 'Error interno del servidor'})
}

export default errorMiddleware