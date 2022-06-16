import { Request, Response, Router, NextFunction } from "express";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";
import { UnitOfMeasurementRepositoryMongoose } from "../infrastructure/UnitOfMeasurementRepositoryMongoose";
import { UnitOfMeasurementDelete } from "../application/unitOfMEasurementDelete";
import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";

export class UnitOfMeasurementExpressDelete {
    private _Route: Router;
    private _Repository: UnitOfMeasurementRepository;
    private _Delete: UnitOfMeasurementDelete;

    constructor(router: Router) {
        this._Route = router;
        this._Repository = new UnitOfMeasurementRepositoryMongoose();
        this._Delete = new UnitOfMeasurementDelete(this._Repository);
    }

    public use(): void {
        this._Route.delete('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const _id = req.params.id;
                const newUom: UnitOfMeasurement = new UnitOfMeasurement({ _id: _id });
                await this._Delete.delete(newUom);
                let data: any = {};
                data.severity = 'success';
                data.detail = 'Se eliminó la unidad de medida exitosamente';
                res.json(data);
            } catch (error) {
                next(error);
            }
        });
    }
}