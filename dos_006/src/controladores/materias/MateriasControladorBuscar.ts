import { Request, Response } from "express";
import MateriasDaoBuscar from "../../daos/materias/MateriasDaoBuscar";
import { SQL_MATERIAS_CARGAR } from "../../repositorios/materias/materias_cargar_sql";

class MateriasControladorBuscar extends MateriasDaoBuscar {
    public buscarMaterias(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        MateriasControladorBuscar.encontrarPorID(SQL_MATERIAS_CARGAR.CARGAR, paramentro, res);
    }
}
const materiasControladorBuscar = new MateriasControladorBuscar();
export default materiasControladorBuscar;