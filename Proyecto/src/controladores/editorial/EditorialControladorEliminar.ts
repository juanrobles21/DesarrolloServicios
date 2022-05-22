import { Request, Response } from "express";
import EditorialDaoEliminar from "../../daos/editorial/EditorialDaoElminar";
import { SQL_EDITORIAL_ELIMINAR } from "../../repositorios/editorial/editorial_eliminar_sql";

class EditorialControladorEliminar extends EditorialDaoEliminar {
    public eliminarEditorial(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        EditorialControladorEliminar.eliminarPorID(SQL_EDITORIAL_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const editorialControladorEliminar = new EditorialControladorEliminar();
export default editorialControladorEliminar;