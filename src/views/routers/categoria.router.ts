import express from 'express'
import { listarCategorias } from '../../controllers/cus/categoria.listar.cus';
import { crearCategoria } from '../../controllers/cus/categoria.crear.cus';
import { validateNombre } from '../../controllers/validations/nombre.validation';
import { validateNombreR } from '../../controllers/validations/nombreR.validation';

const router = express.Router();

router.get('/', async (req: express.Request, res: express.Response, next) => {
    try {
        const data = await listarCategorias();
        res.json(data);
    } catch (error) {
        next(error);
    }
});

router.post('/',
    validateNombre,
    validateNombreR,
    async (req: express.Request, res: express.Response, next) => {
        try {
            const body = req.body;
            const result = await crearCategoria(body);
            res.status(200);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
);

export default router;