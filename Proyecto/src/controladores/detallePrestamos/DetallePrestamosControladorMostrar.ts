import { Request, Response } from "express";
import DetallePrestamosDaoMostrar from "../../daos/detallePrestamos/DetallePrestamosDaoMostrar";
import { SQL_DETALLE_PRESTAMOS_MOSTRAR } from "../../repositorios/detallePrestamos/detalle_prestamos_mostrar_sql";

class DetallePrestamosControladorMostrar extends DetallePrestamosDaoMostrar {
    public demelasDetallePrestamos(req: Request, res: Response): void {
        DetallePrestamosControladorMostrar.obtenerDetallePrestamos(SQL_DETALLE_PRESTAMOS_MOSTRAR.TODAS, [], res);
    }
}
const detallePrestamosControladorMostrar = new DetallePrestamosControladorMostrar();
export default detallePrestamosControladorMostrar;