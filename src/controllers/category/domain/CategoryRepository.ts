import { Category } from "../../../models/Category"

export abstract class CategoryRepository {
    abstract readAll(): Promise<Category[]>;
    abstract create(category: Category): Promise<Category>;
    abstract read(category: Category): Promise<Category>;
    abstract delete(category: Category): Promise<Category>;
    abstract update(category: Category): Promise<Category>;
}