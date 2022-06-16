import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryCreate {
    private _CategoryRepository: CategoryRepository;

    constructor(categoryRepository: CategoryRepository) {
        this._CategoryRepository = categoryRepository;
    }

    public async create(category: Category): Promise<Category> {
        if (category.name == '') {
            const newError = new Error();
            newError.name = 'Nombre no válido';
            newError.message = 'El nombre es necesario';
            throw newError;
        }
        const existingCategory = await this._CategoryRepository.read(category)
        if (existingCategory._id != '') {
            const newError = new Error();
            newError.name = 'Nombre no válido';
            newError.message = 'La categoría que se quiere crear ya existe';
            throw newError;
        }
        return await this._CategoryRepository.create(category);
    }
}