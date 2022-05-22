import { Request, Response } from "express";
import AutoresLibroDaoEliminar from "../../daos/autoresLibro/AutoresLibroDaoEliminar";
import { SQL_AUTORES_LIBRO_ELIMINAR } from "../../repositorios/autoresLibro/autores_libro_eliminar_sql";

class AutoresLibroControladorEliminar extends AutoresLibroDaoEliminar {
    public eliminarAutoresLibro(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        AutoresLibroControladorEliminar.eliminarPorID(SQL_AUTORES_LIBRO_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const autoresLibroControladorEliminar = new AutoresLibroControladorEliminar();
export default autoresLibroControladorEliminar;