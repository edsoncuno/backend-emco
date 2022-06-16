import { Router } from 'express'
import { UnitOfMeasurementExpressGetAll } from '../../../controllers/unitOfMeasurement/infrastructure/UnitOfMeasurementExpressGetAll';
import { UnitOfMeasurementExpressCreate } from '../../../controllers/unitOfMeasurement/infrastructure/UnitOfMeasurementExpressCreate';
import { UnitOfMEasurementExpressGet } from "../../../controllers/unitOfMeasurement/infrastructure/UnitOfMeasurementExpressGet";
import { UnitOfMeasurementExpressDelete } from "../../../controllers/unitOfMeasurement/infrastructure/UnitOfMeasurementExpressDelete";

const router = Router();

const newUnitOfMeasurementExpressGetAll = new UnitOfMeasurementExpressGetAll(router);
newUnitOfMeasurementExpressGetAll.use();

const newUnitOfMEasurementExpressCreate = new UnitOfMeasurementExpressCreate(router);
newUnitOfMEasurementExpressCreate.use();

const newExpressGet = new UnitOfMEasurementExpressGet(router);
newExpressGet.use();

const newExpressDelete = new UnitOfMeasurementExpressDelete(router);
newExpressDelete.use();

export default router;