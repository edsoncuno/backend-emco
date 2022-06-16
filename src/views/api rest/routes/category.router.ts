import { Router } from 'express'
import { CategoryExpressGetAll } from '../../../controllers/category/infrastructure/CategoryExpressGetAll';
import { CategoryExpressPost } from '../../../controllers/category/infrastructure/CategoryExpressPost';
import { CategoryExpressGet } from '../../../controllers/category/infrastructure/CategoryExpressGet';
import { CategoryExpressDelete } from '../../../controllers/category/infrastructure/CategoryExpressDelete';

const router = Router();

const newCategoryExpressGetAll = new CategoryExpressGetAll(router);
newCategoryExpressGetAll.use();

const newCategoryExpressPost = new CategoryExpressPost(router);
newCategoryExpressPost.use();

const newCategoryExpressGet = new CategoryExpressGet(router);
newCategoryExpressGet.use();

const newCategoryExpressDelete = new CategoryExpressDelete(router);
newCategoryExpressDelete.use();

export default router;