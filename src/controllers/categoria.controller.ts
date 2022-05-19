import { Categoria } from "../models/categoria"
import { CategoriaDto } from "./dto/categoria.dto";
import { CategoriaRepository } from "../models/categoria.repository";

export class CategoriaController {
    constructor() {
    }

    public async toList(): Promise<Object[]> {
        const data: Object[] = await CategoriaRepository.find({});
        return data;
    }

    public async create(categoriaDto: CategoriaDto): Promise<Categoria> {
        if (categoriaDto.nombre == '') {
            const error = new Error();
            error.name = 'Nombre invalido'
            error.message = 'Es necesario el nombre'
            throw error;
        }
        const newCategoriaRepository = new CategoriaRepository({ nombre: categoriaDto.nombre });
        const result = await newCategoriaRepository.save();
        const newCategoria = new Categoria(result);
        return newCategoria;
    }
}