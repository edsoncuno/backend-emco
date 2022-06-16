import { connect } from 'mongoose';
import { disconnect } from 'mongoose';
import config from "../../../config";

export class Mongoose {
    constructor() {
    }

    public async connectMongoose(): Promise<void> {
        try {
            await connect(String(config.MONGOOSE_URI));
        } catch (error: any) {
            const newError = new Error();
            newError.name = 'Error de conecion';
            newError.message = 'No se pudo conectar a la base de datos';
            throw newError;
        }
    }

    public async disconnectMongoose(): Promise<void> {
        try {
            await disconnect();
        } catch (error: any) {
            const newError = new Error();
            newError.name = 'Error de desconecion';
            newError.message = 'No se pudo desconectar de la base de datos';
            throw newError;
        }
    }
}