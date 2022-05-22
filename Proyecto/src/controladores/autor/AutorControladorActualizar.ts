import { Request, Response } from "express";
import AutorDaoActualizar from "../../daos/autor/AutorDaoActualizar";
import { SQL_AUTOR_ACTUALIZAR } from "../../repositorios/autor/autor_actualizar_sql";

class AutorControladorActualizar extends AutorDaoActualizar {
    public actualizarAutor(req: Request, res: Response): void {
        const cod = req.body.cod;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const nacionalidad = req.body.nacionalidad;
        const descripcion = req.body.descripcion;
        const parametro = [nombre, apellido, nacionalidad, descripcion, cod];
        AutorControladorActualizar.actualizarAutor(SQL_AUTOR_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const autorControladorActualizar = new AutorControladorActualizar();
export default autorControladorActualizar;