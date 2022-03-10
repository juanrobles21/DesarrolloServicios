import { Request, Response } from "express";
import SemestresDaoEliminar from "../../daos/semestres/SemestresDaoEliminar";
import { SQL_SEMESTRES_ELIMINAR } from "../../repositorios/semestres/semestres_eliminar_sql";

class SemestresControladorEliminar extends SemestresDaoEliminar {
    public eliminarSemestres(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        SemestresControladorEliminar.eliminarPorID(SQL_SEMESTRES_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const semestresControladorEliminar = new SemestresControladorEliminar();
export default semestresControladorEliminar;