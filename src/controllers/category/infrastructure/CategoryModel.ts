import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String
}, {
    versionKey: false
});

export const CategoryModel = mongoose.model('Category', schema);