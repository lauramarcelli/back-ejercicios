import express, {  Request, Response, NextFunction} from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) : void => {
    const token = req.headers.authorization;

    if(!token || token !== "Bearer my-secret-token" ) {
        res.status(401).json({error: 'No autorizado'})
        return
    }
    next();
}

export default authMiddleware