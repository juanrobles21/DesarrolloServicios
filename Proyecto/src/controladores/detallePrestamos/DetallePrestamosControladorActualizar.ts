import { Request, Response } from "express";
import DetallePrestamosDaoActualizar from "../../daos/detallePrestamos/DetallePrestamoDaoActualizar";
import { SQL_DETALLE_PRESTAMOS_ACTUALIZAR } from "../../repositorios/detallePrestamos/detalle_prestamos_actualizar_sql";

class DetallePrestamosControladorActualizar extends DetallePrestamosDaoActualizar {
    public actualizarDetallePrestamos(req: Request, res: Response): void {
        const cod = req.body.cod;
        const idPrestamo = req.body.idPrestamo;
        const idLibro = req.body.idLibro;
        const fechaDevolucion = req.body.fechaDevolucion;
        const diasMora = req.body.diasMora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fechaEntrega;
        const parametro = [idPrestamo, idLibro, fechaDevolucion, diasMora, descripcion, fechaEntrega, cod];
        DetallePrestamosControladorActualizar.actualizarDetallePrestamos(SQL_DETALLE_PRESTAMOS_ACTUALIZAR.CONFIRMARPRESTAMO, SQL_DETALLE_PRESTAMOS_ACTUALIZAR.CONFIRMARLIBRO, SQL_DETALLE_PRESTAMOS_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const detallePrestamosControladorActualizar = new DetallePrestamosControladorActualizar();
export default detallePrestamosControladorActualizar;