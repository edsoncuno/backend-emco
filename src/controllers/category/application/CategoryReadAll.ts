import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryReadAll {
    private _CategoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this._CategoryRepository = categoryRepository;
    }

    public async readAll(): Promise<Category[]> {
        return await this._CategoryRepository.readAll();
    }
}