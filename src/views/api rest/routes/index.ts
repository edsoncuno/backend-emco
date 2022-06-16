import express from "express";
import categoryRouter from './category.router';
import unitMeasurementRouter from './unitOfMeasurement.router'

const routers = (app: express.Application) => {
    const router = express.Router();
    app.use('', router);
    router.use('/category', categoryRouter);
    router.use('/unitOfMeasurement', unitMeasurementRouter);
}

export default routers;