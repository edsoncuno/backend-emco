import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nombre: String
}, {
    versionKey: false
});

export const CategoriaRepository = mongoose.model('Categoria', schema);