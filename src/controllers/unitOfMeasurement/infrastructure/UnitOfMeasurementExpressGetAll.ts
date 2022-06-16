import { Request, Response, Router, NextFunction } from "express";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";
import { UnitOfMeasurementRepositoryMongoose } from "./UnitOfMeasurementRepositoryMongoose";
import { UnitOfMeasurementReadAll } from "../application/UnitOfMeasurementReadAll";
import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";

export class UnitOfMeasurementExpressGetAll {
    private _Route: Router;
    private _UnitOfMeasurementRepository: UnitOfMeasurementRepository;
    private _UnitOfMeasurementReadAll: UnitOfMeasurementReadAll;

    constructor(router: Router) {
        this._Route = router;
        this._UnitOfMeasurementRepository = new UnitOfMeasurementRepositoryMongoose();
        this._UnitOfMeasurementReadAll = new UnitOfMeasurementReadAll(this._UnitOfMeasurementRepository);
    }

    public use(): void {
        this._Route.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const result: UnitOfMeasurement[] = await this._UnitOfMeasurementReadAll.readAll();
                const data: any[] = [];
                result.forEach((element: UnitOfMeasurement) => {
                    data.push({ _id: element._id, name: element.name });
                })
                res.json(data);
            } catch (error) {
                next(error);
            }
        });
    }
}