import { Request, Response } from "express";
import EditorialDaoActualizar from "../../daos/editorial/EditorialDaoActualizar";
import { SQL_EDITORIAL_ACTUALIZAR } from "../../repositorios/editorial/editorial_actualizar_sql";

class EditorialControladorActualizar extends EditorialDaoActualizar {
    public actualizarEditorial(req: Request, res: Response): void {
        const cod = req.body.cod;
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametro = [nombre, pais, telefono, cod];
        EditorialControladorActualizar.actualizarEditorial(SQL_EDITORIAL_ACTUALIZAR.CONFIRMAR, SQL_EDITORIAL_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const editorialControladorActualizar = new EditorialControladorActualizar();
export default editorialControladorActualizar;