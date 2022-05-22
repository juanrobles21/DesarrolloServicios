import { Request, Response } from "express";
import AutorDaoCrear from "../../daos/autor/AutorDaoCrear";
import { SQL_AUTOR_CREAR } from "../../repositorios/autor/autor_crear_sql";

class AutorControladorCrear extends AutorDaoCrear {
    public crearAutor(req: Request, res: Response): void {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const nacionalidad = req.body.nacionalidad;
        const descripcion = req.body.descripcion;
        const parametro = [nombre, apellido, nacionalidad, descripcion];
        AutorControladorCrear.crearAutor(SQL_AUTOR_CREAR.CREAR, parametro, res);
    }
}
const autorControladorCrear = new AutorControladorCrear();
export default autorControladorCrear;