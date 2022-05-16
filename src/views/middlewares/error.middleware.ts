import express from 'express'

const errorHandle = (err: Error, req: express.Request, res: express.Response, next: any) => {
    console.error(err);
    res.status(500);
    res.json({
        error: true,
        severity: 'error',
        summary: err.name,
        detail: err.message
    });
}

export default errorHandle;