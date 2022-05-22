import { Request, Response } from "express";
import EditorialDaoCrear from "../../daos/editorial/EditorialDaoCrear";
import { SQL_EDITORIAL_CREAR } from "../../repositorios/editorial/editorial_crear_sql";

class EditorialControladorCrear extends EditorialDaoCrear {
    public crearEditorial(req: Request, res: Response): void {
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametro = [nombre, pais, telefono,];
        EditorialControladorCrear.crearEditorial(SQL_EDITORIAL_CREAR.CONFIRMAR, SQL_EDITORIAL_CREAR.CREAR, parametro, res);
    }
}
const editorialControladorCrear = new EditorialControladorCrear();
export default editorialControladorCrear;