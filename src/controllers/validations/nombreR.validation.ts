import express from 'express'

export const validateNombreR = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!req.body.nombre) {
        res.status(300);
        res.json({ severity: 'info', summary: '', detail: 'El nombre es necesario' });
    } else {
        next();
    }
}