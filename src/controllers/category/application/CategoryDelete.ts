import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryDelete {
    private _CategoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this._CategoryRepository = categoryRepository;
    }

    public async delete(category: Category): Promise<Category> {
        category = await this._CategoryRepository.delete(category);
        if (category._id == '') {
            const newError = new Error();
            newError.name = 'No existe';
            newError.message = 'La categoría no existe';
            throw newError;
        }
        return category;
    }
}