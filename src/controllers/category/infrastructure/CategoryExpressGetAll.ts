import { Request, Response, Router, NextFunction } from "express";
import { CategoryRepositoryMongoose } from "./CategoryRepositoryMongoose";
import { CategoryReadAll } from "../application/CategoryReadAll";
import { Category } from "../../../models/Category";
import { CategoryRepository } from "../domain/CategoryRepository";

export class CategoryExpressGetAll {
    private _Route: Router;
    private _CategoryRepository: CategoryRepository;
    private _CategoryReadAll: CategoryReadAll;

    constructor(router: Router) {
        this._CategoryRepository = new CategoryRepositoryMongoose();
        this._CategoryReadAll = new CategoryReadAll(this._CategoryRepository);
        this._Route = router;
    }

    public use(): void {
        this._Route.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const result: Category[] = await this._CategoryReadAll.readAll();
                const data: any[] = [];
                result.forEach((element: Category) => {
                    data.push({ _id: element._id, name: element.name });
                })
                res.json(data);
            } catch (error) {
                next(error);
            }
        });
    }
}