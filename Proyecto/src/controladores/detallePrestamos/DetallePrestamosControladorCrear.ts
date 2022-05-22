import { Request, Response } from "express";
import DetallePrestamosDaoCrear from "../../daos/detallePrestamos/DetallePrestamosDaoCrear";
import { SQL_DETALLE_PRESTAMOS_CREAR } from "../../repositorios/detallePrestamos/detalle_prestamos_crear_sql";

class DetallePrestamosControladorCrear extends DetallePrestamosDaoCrear {
    public crearDetallePrestamos(req: Request, res: Response): void {
        const idPrestamo = req.body.idPrestamo;
        const idLibro = req.body.idLibro;
        const fechaDevolucion = req.body.fechaDevolucion;
        const diasMora = req.body.diasMora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fechaEntrega;
        const parametro = [idPrestamo, idLibro, fechaDevolucion, diasMora, descripcion, fechaEntrega];
        DetallePrestamosControladorCrear.crearDetallePrestamos(SQL_DETALLE_PRESTAMOS_CREAR.CONFIRMARPRESTAMO, SQL_DETALLE_PRESTAMOS_CREAR.CONFIRMARLIBRO, SQL_DETALLE_PRESTAMOS_CREAR.CREAR, parametro, res);
    }
}
const detallePrestamosControladorCrear = new DetallePrestamosControladorCrear();
export default detallePrestamosControladorCrear;