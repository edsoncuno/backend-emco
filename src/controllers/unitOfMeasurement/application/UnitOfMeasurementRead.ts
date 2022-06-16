import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";

export class UnitOfMeasurementRead {
    private _repository: UnitOfMeasurementRepository;

    constructor(repository: UnitOfMeasurementRepository) {
        this._repository = repository;
    }

    public async read(data: UnitOfMeasurement): Promise<UnitOfMeasurement> {
        data = await this._repository.read(data);
        if (data._id == '') {
            const newError = new Error();
            newError.name = 'No existe';
            newError.message = 'La unidad de medida no existe';
            throw newError;
        }
        return data;
    }
}