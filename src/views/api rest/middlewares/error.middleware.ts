import { Request, Response, NextFunction } from 'express'

const errorHandle = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500);
    res.json({
        error: true,
        severity: 'error',
        summary: err.name,
        detail: err.message
    });
}

export default errorHandle;