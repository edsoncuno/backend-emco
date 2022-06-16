import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement"

export abstract class UnitOfMeasurementRepository {
    abstract create(unitOfMeasurement: UnitOfMeasurement): Promise<UnitOfMeasurement>;
    abstract readAll(): Promise<UnitOfMeasurement[]>;
    abstract read(unitOfMeasurement: UnitOfMeasurement): Promise<UnitOfMeasurement>;
    abstract delete(unitOfMeasurement: UnitOfMeasurement): Promise<UnitOfMeasurement>;
    abstract update(unitOfMeasurement: UnitOfMeasurement): Promise<UnitOfMeasurement>;
}