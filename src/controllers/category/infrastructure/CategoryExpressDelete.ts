import { Request, Response, Router, NextFunction } from "express";
import { CategoryRepositoryMongoose } from "./CategoryRepositoryMongoose";
import { CategoryDelete } from "../application/CategoryDelete";
import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryExpressDelete {
    private _Route: Router;
    private _CategoryRepository: CategoryRepository;
    private _CategoryDelete: CategoryDelete;

    constructor(router: Router) {
        this._CategoryRepository = new CategoryRepositoryMongoose();
        this._CategoryDelete = new CategoryDelete(this._CategoryRepository);
        this._Route = router;
    }

    public use(): void {
        this._Route.delete('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const _id = req.params.id;
                const newCategory: Category = new Category({ _id: _id });
                await this._CategoryDelete.delete(newCategory);
                let data: any = {};
                data.severity = 'success';
                data.detail = 'Se eliminó la categoría exitosamente';
                res.json(data);
            } catch (error) {
                next(error);
            }
        });
    }
}