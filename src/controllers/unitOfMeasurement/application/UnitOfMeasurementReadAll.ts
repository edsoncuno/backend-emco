import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";

export class UnitOfMeasurementReadAll {
    private _UnitOfMeasurementRepository: UnitOfMeasurementRepository;

    constructor(unitOfMeasurementRepository: UnitOfMeasurementRepository) {
        this._UnitOfMeasurementRepository = unitOfMeasurementRepository;
    }

    public async readAll(): Promise<UnitOfMeasurement[]> {
        return await this._UnitOfMeasurementRepository.readAll();
    }
}