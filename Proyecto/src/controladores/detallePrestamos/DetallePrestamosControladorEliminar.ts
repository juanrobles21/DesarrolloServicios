import { Request, Response } from "express";
import DetallePrestamosDaoEliminar from "../../daos/detallePrestamos/DetallePrestamoDaoEliminar";
import { SQL_DETALLE_PRESTAMOS_ELIMINAR } from "../../repositorios/detallePrestamos/detalle_prestamos_eliminar_sql";

class DetallePrestamosControladorEliminar extends DetallePrestamosDaoEliminar {
    public eliminarDetallePrestamos(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        DetallePrestamosControladorEliminar.eliminarPorID(SQL_DETALLE_PRESTAMOS_ELIMINAR.ELIMINAR, paramentro, res);

    }
}
const detallePrestamosControladorEliminar = new DetallePrestamosControladorEliminar();
export default detallePrestamosControladorEliminar;