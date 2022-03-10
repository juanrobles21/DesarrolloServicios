import { Request, Response } from "express";
import MateriasDaoEliminar from "../../daos/materias/MateriasDaoEliminar";
import { SQL_MATERIAS_ELIMINAR } from "../../repositorios/materias/materias_eliminar_sql";

class MateriasControladorEliminar extends MateriasDaoEliminar {
    public eliminarMaterias(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        MateriasControladorEliminar.eliminarPorID(SQL_MATERIAS_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const materiasControladorEliminar = new MateriasControladorEliminar();
export default materiasControladorEliminar;