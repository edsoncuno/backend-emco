import { CategoriaController } from "../categoria.controller";

export const listarCategorias = async (): Promise<Object[]> => {
    const newCategoriaController = new CategoriaController();
    return await newCategoriaController.toList();
}