import { Request, Response } from "express";
import PrestamosDaoMostrar from "../../daos/prestamos/PrestamosDaoMostrar";
import { SQL_PRESTAMOS_MOSTRAR } from "../../repositorios/prestamos/prestamos_mostrar_sql";

class PrestamosControladorMostrar extends PrestamosDaoMostrar {
    public demelasPrestamos(req: Request, res: Response): void {
        PrestamosControladorMostrar.obtenerPrestamos(SQL_PRESTAMOS_MOSTRAR.TODAS, [], res);
    }
}
const prestamosControladorMostrar = new PrestamosControladorMostrar();
export default prestamosControladorMostrar;