import { Request, Response } from "express";
import PrestamosDaoActualizar from "../../daos/prestamos/PrestamosDaoActualizar";
import { SQL_PRESTAMOS_ACTUALIZAR } from "../../repositorios/prestamos/prestamos_actualizar_sql";

class PrestamosControladorActualizar extends PrestamosDaoActualizar {
    public actualizarPrestamos(req: Request, res: Response): void {
        const cod = req.body.cod;
        const fechaInicio = req.body.fechaInicio;
        const descripcion = req.body.descripcion;
        const idCliente = req.body.idCliente;
        const parametro = [fechaInicio, descripcion, idCliente, cod];
        PrestamosControladorActualizar.actualizarPrestamos(SQL_PRESTAMOS_ACTUALIZAR.CONFIRMAR, SQL_PRESTAMOS_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const prestamosControladorActualizar = new PrestamosControladorActualizar();
export default prestamosControladorActualizar;