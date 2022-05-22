import { Request, Response } from "express";
import LibroDaoEliminar from "../../daos/libro/LibroDaoEliminar";
import { SQL_LIBRO_ELIMINAR } from "../../repositorios/libro/libro_eliminar_sql";

class LibroControladorEliminar extends LibroDaoEliminar {
    public eliminarLibro(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        LibroControladorEliminar.eliminarPorID(SQL_LIBRO_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const libroControladorEliminar = new LibroControladorEliminar();
export default libroControladorEliminar;