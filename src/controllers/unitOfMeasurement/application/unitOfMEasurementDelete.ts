import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";

export class UnitOfMeasurementDelete {
    private _repository: UnitOfMeasurementRepository;

    constructor(repository: UnitOfMeasurementRepository) {
        this._repository = repository;
    }

    public async delete(data: UnitOfMeasurement): Promise<UnitOfMeasurement> {
        data = await this._repository.delete(data);
        if (data._id == '') {
            const newError = new Error();
            newError.name = 'No existe';
            newError.message = 'La unidad de medida no existe';
            throw newError;
        }
        return data;
    }
}