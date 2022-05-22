import { Request, Response } from "express";
import AutorDaoEliminar from "../../daos/autor/AutorDaoEliminar";
import { SQL_AUTOR_ELIMINAR } from "../../repositorios/autor/autor_eliminar_sql";

class AutorControladorEliminar extends AutorDaoEliminar {
    public eliminarAutor(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        AutorControladorEliminar.eliminarPorID(SQL_AUTOR_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const autorControladorEliminar = new AutorControladorEliminar();
export default autorControladorEliminar;