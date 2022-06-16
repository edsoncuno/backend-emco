import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String
}, {
    versionKey: false
});

export const UnitOfMeasurementModel = mongoose.model('UnitOfMeasurement', schema);