import { Request, Response } from "express";
import PrestamosDaoEliminar from "../../daos/prestamos/PrestamosDaoEliminar";
import { SQL_PRESTAMOS_ELIMINAR } from "../../repositorios/prestamos/prestamos_eliminar_sql";

class PrestamosControladorEliminar extends PrestamosDaoEliminar {
    public eliminarPrestamos(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        PrestamosControladorEliminar.eliminarPorID(SQL_PRESTAMOS_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const prestamosControladorEliminar = new PrestamosControladorEliminar();
export default prestamosControladorEliminar;