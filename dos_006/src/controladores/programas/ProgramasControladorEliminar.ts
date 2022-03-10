import { Request, Response } from "express";
import ProgramaDaoEliminar from "../../daos/programas/ProgramasDaoEliminar";
import { SQL_PROGRAMAS_ELIMINAR } from "../../repositorios/programas/programa_eliminar_sql";

class ProgramasControladorEliminar extends ProgramaDaoEliminar {
    public EliminarProgramas(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ProgramasControladorEliminar.eliminarPorID(SQL_PROGRAMAS_ELIMINAR.ELMINAR, paramentro, res);

    }
}
const programasControladorEliminar = new ProgramasControladorEliminar();
export default programasControladorEliminar;