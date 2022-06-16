import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";

export class UnitOfMeasurementCreate {
    private _Repository: UnitOfMeasurementRepository;

    constructor(repository: UnitOfMeasurementRepository) {
        this._Repository = repository;
    }

    public async create(uom: UnitOfMeasurement): Promise<UnitOfMeasurement> {
        if (uom.name == '') {
            const newError = new Error();
            newError.name = 'Nombre no válido';
            newError.message = 'El nombre es necesario';
            throw newError;
        }
        const uomFound = await this._Repository.read(uom);
        if (uomFound._id != '') {
            const newError = new Error();
            newError.name = 'Nombre no válido';
            newError.message = 'La unidad de medida que se quiere crear ya existe';
            throw newError;
        }
        return await this._Repository.create(uom);
    }
}