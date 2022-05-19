import { CategoriaDto } from "../dto/categoria.dto";
import { Categoria } from "../../models/categoria";
import { CategoriaController } from "../categoria.controller";

export const crearCategoria = async (data: any): Promise<Object> => {
    const newCategoriaController = new CategoriaController();
    const newCategoriaDao = new CategoriaDto(data.nombre);
    const newCategoria: Categoria = await newCategoriaController.create(newCategoriaDao);
    return newCategoria.toJSON();
}