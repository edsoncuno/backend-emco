import { Request, Response, Router, NextFunction } from "express";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";
import { UnitOfMeasurementRead } from "../application/UnitOfMeasurementRead";
import { UnitOfMeasurementRepositoryMongoose } from "../infrastructure/UnitOfMeasurementRepositoryMongoose";
import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";

export class UnitOfMEasurementExpressGet {
    private _Route: Router;
    private _Repository: UnitOfMeasurementRepository;
    private _Read: UnitOfMeasurementRead;

    constructor(router: Router) {
        this._Repository = new UnitOfMeasurementRepositoryMongoose();
        this._Read = new UnitOfMeasurementRead(this._Repository);
        this._Route = router;
    }

    public use(): void {
        this._Route.get('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                let newUnitOfMeasurement: UnitOfMeasurement = new UnitOfMeasurement({ _id: req.params.id });
                newUnitOfMeasurement = await this._Read.read(newUnitOfMeasurement);
                let data: any = {};
                data._id = newUnitOfMeasurement._id;
                data.name = newUnitOfMeasurement.name;
                res.json(data);
            } catch (error) {
                next(error);
            }
        });
    }
}