import express from 'express'

export const validateNombre = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!req.body.nombre) {
        next();
    } else {
        next();
    }
}