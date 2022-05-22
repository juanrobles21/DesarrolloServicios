import { Request, Response } from "express";
import PrestamosDaoCrear from "../../daos/prestamos/PrestamosDaoCrear";
import { SQL_PRESTAMOS_CREAR } from "../../repositorios/prestamos/prestamos_crear_sql";

class PrestamosControladorCrear extends PrestamosDaoCrear {
    public crearPrestamos(req: Request, res: Response): void {
        const fechaInicio = req.body.fechaInicio;
        const descripcion = req.body.descripcion;
        const idCliente = req.body.idCliente;
        const parametro = [fechaInicio, descripcion, idCliente,];
        PrestamosControladorCrear.crearPrestamos(SQL_PRESTAMOS_CREAR.CONFIRMAR, SQL_PRESTAMOS_CREAR.CREAR, parametro, res);
    }
}
const prestamosControladorCrear = new PrestamosControladorCrear();
export default prestamosControladorCrear;