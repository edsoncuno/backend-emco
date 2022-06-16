import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";
import { CategoryModel } from "./CategoryModel";
import { Mongoose } from "../../shared/infrastructure/Mongoose";

export class CategoryRepositoryMongoose implements CategoryRepository {
    private _DB: Mongoose;

    constructor() {
        this._DB = new Mongoose();
    }

    public async readAll(): Promise<Category[]> {
        await this._DB.connectMongoose();
        const result: any[] = await CategoryModel.find({});
        await this._DB.disconnectMongoose();
        const list: Category[] = [];
        result.forEach(element => {
            list.push(new Category({ _id: element._id, name: element.name }));
        });
        return list;
    }

    public async create(category: Category): Promise<Category> {
        const newCategoryModel = new CategoryModel({ name: category.name });
        await this._DB.connectMongoose();
        const result: any = await newCategoryModel.save();
        await this._DB.disconnectMongoose();
        return new Category({ _id: result._id.toString(), name: result.name });
    }

    private async readByName(name: string): Promise<Category> {
        try {
            await this._DB.connectMongoose();
            const result: any = await CategoryModel.findOne({ name: name });
            await this._DB.disconnectMongoose();
            return new Category({ _id: result._id, name: result.name });
        } catch (error) {
            return new Category({});
        }
    }

    public async read(data: Category): Promise<Category> {
        try {
            if (data.name != '') {
                return await this.readByName(data.name);
            } else {
                await this._DB.connectMongoose();
                const result: any = await CategoryModel.findById(data._id);
                await this._DB.disconnectMongoose();
                if (result == null) {
                    return new Category({});
                }
                return new Category({ _id: result._id, name: result.name });
            }
        } catch (error) {
            return new Category({});
        }
    }

    public async delete(category: Category): Promise<Category> {
        try {
            await this._DB.connectMongoose();
            const result: any = await CategoryModel.findByIdAndDelete(category._id);
            await this._DB.disconnectMongoose();
            return new Category({ _id: result._id, name: result.name });
        } catch (error) {
            return new Category({});
        }
    }

    public async update(category: Category): Promise<Category> {
        try {
            await this._DB.connectMongoose();
            const result: any = await CategoryModel.findByIdAndUpdate(category._id, {});
            await this._DB.disconnectMongoose();
            return new Category({ _id: result._id, name: result.name });
        } catch (error) {
            return new Category({});
        }
    }
}