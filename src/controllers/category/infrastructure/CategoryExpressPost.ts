import { Request, Response, Router, NextFunction } from "express";
import { CategoryRepositoryMongoose } from "./CategoryRepositoryMongoose";
import { CategoryCreate } from "../application/CategoryCreate";
import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryExpressPost {
    private _Route: Router;
    private _CategoryRepository: CategoryRepository;
    private _CategoryCreate: CategoryCreate;

    constructor(router: Router) {
        this._CategoryRepository = new CategoryRepositoryMongoose();
        this._CategoryCreate = new CategoryCreate(this._CategoryRepository);
        this._Route = router;
    }

    public use(): void {
        this._Route.post('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const newCategory: Category = new Category({ name: req.body.name });
                await this._CategoryCreate.create(newCategory);
                let data: any = {};
                data.severity = 'success';
                data.detail = 'Se creó una nueva categoría exitosamente';
                res.json(data);
            } catch (error) {
                next(error);
            }
        });
    }
}