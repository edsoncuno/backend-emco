import { Request, Response, Router, NextFunction } from "express";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";
import { UnitOfMeasurementRepositoryMongoose } from "./UnitOfMeasurementRepositoryMongoose";
import { UnitOfMeasurementCreate } from "../application/UnitOfMeasurementCreate";
import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";

export class UnitOfMeasurementExpressCreate {
    private _Route: Router;
    private _UnitOfMeasurementRepository: UnitOfMeasurementRepository;
    private _UnitOfMeasurementCreate: UnitOfMeasurementCreate;

    constructor(router: Router) {
        this._Route = router;
        this._UnitOfMeasurementRepository = new UnitOfMeasurementRepositoryMongoose();
        this._UnitOfMeasurementCreate = new UnitOfMeasurementCreate(this._UnitOfMeasurementRepository);
    }

    public use(): void {
        this._Route.post('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const newUnitOfMeasurement: UnitOfMeasurement = new UnitOfMeasurement({ name: req.body.name });
                await this._UnitOfMeasurementCreate.create(newUnitOfMeasurement);
                let data: any = {};
                data.severity = 'success';
                data.detail = 'Se creó una nueva unidad de medida exitosamente';
                res.json(data);
            } catch (error) {
                next(error);
            }
        });
    }
}