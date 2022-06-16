import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryRead {
    private _CategoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this._CategoryRepository = categoryRepository;
    }

    public async read(category: Category): Promise<Category> {
        category = await this._CategoryRepository.read(category);
        if (category._id == '') {
            const newError = new Error();
            newError.name = 'No existe';
            newError.message = 'La categoría no existe';
            throw newError;
        }
        return category;
    }
}