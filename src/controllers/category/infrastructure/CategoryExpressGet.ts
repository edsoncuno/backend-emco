import { Request, Response, Router, NextFunction } from "express";
import { CategoryRepositoryMongoose } from "./CategoryRepositoryMongoose";
import { CategoryRead } from "../application/CategoryRead";
import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryExpressGet {
    private _Route: Router;
    private _CategoryRepository: CategoryRepository;
    private _CategoryRead: CategoryRead;

    constructor(router: Router) {
        this._CategoryRepository = new CategoryRepositoryMongoose();
        this._CategoryRead = new CategoryRead(this._CategoryRepository);
        this._Route = router;
    }

    public use(): void {
        this._Route.get('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const _id = req.params.id;
                let newCategory: Category = new Category({ _id: _id });
                newCategory = await this._CategoryRead.read(newCategory);
                let data: any = {};
                data._id = newCategory._id;
                data.name = newCategory.name;
                res.json(data);
            } catch (error) {
                next(error);
            }
        });
    }
}