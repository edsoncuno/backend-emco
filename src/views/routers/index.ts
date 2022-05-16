import express from "express";
import categoriaRouter from './categoria.router';

const routers = (app: express.Application) => {
    const router = express.Router();
    app.use('', router);
    router.use('/categoria', categoriaRouter);
}

export default routers;