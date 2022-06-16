import { UnitOfMeasurement } from "../../../models/UnitOfMeasurement";
import { UnitOfMeasurementRepository } from "../domain/UnitOfMeasurementRepository";
import { Mongoose } from "../../shared/infrastructure/Mongoose";
import { UnitOfMeasurementModel } from "./UnitOfMeasurementModel";

export class UnitOfMeasurementRepositoryMongoose implements UnitOfMeasurementRepository {
    private _DB: Mongoose;

    constructor() {
        this._DB = new Mongoose();
    }

    public async readAll(): Promise<UnitOfMeasurement[]> {
        await this._DB.connectMongoose();
        const result = await UnitOfMeasurementModel.find({});
        await this._DB.disconnectMongoose();
        const list: UnitOfMeasurement[] = [];
        result.forEach((element) => {
            list.push(new UnitOfMeasurement({ _id: element._id, name: element.name }));
        });
        return list;
    }

    public async create(data: UnitOfMeasurement): Promise<UnitOfMeasurement> {
        const newUnitOfMeasurement = new UnitOfMeasurementModel({ name: data.name });
        await this._DB.connectMongoose();
        const result: any = await newUnitOfMeasurement.save();
        await this._DB.disconnectMongoose();
        return new UnitOfMeasurement({ _id: result._id, name: result.name });
    }

    private async readByName(name: string): Promise<UnitOfMeasurement> {
        try {
            await this._DB.connectMongoose();
            const result: any = await UnitOfMeasurementModel.findOne({ name: name });
            await this._DB.disconnectMongoose();
            return new UnitOfMeasurement({ _id: result._id, name: result.name });
        } catch (error) {
            return new UnitOfMeasurement({});
        }
    }

    public async read(data: UnitOfMeasurement): Promise<UnitOfMeasurement> {
        try {
            if (data.name != '') {
                return await this.readByName(data.name);
            } else {
                await this._DB.connectMongoose();
                const result: any = await UnitOfMeasurementModel.findById(data._id);
                await this._DB.disconnectMongoose();
                if (result == null) {
                    return new UnitOfMeasurement({});
                }
                return new UnitOfMeasurement({ _id: result._id, name: result.name });
            }
        } catch (error) {
            return new UnitOfMeasurement({});
        }
    }

    public async delete(data: UnitOfMeasurement): Promise<UnitOfMeasurement> {
        try {
            await this._DB.connectMongoose();
            const result: any = await UnitOfMeasurementModel.findByIdAndDelete(data._id);
            await this._DB.disconnectMongoose();
            return new UnitOfMeasurement({ _id: result._id, name: result.name });
        } catch (error) {
            return new UnitOfMeasurement({});
        }
    }

    update(category: UnitOfMeasurement): Promise<UnitOfMeasurement> {
        throw new Error("Method not implemented.");
    }

}