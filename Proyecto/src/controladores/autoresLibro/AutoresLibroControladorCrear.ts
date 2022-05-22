import { Request, Response } from "express";
import AutoresLibroDaoCrear from "../../daos/autoresLibro/AutoresLibroDaoCrear";
import { SQL_AUTORES_LIBRO_CREAR } from "../../repositorios/autoresLibro/autores_libro_crear_sql";

class AutoresLibroControladorCrear extends AutoresLibroDaoCrear {
    public crearAutoresLibro(req: Request, res: Response): void {
        const idAutor = req.body.idAutor;
        const idLibro = req.body.idLibro;
        const parametro = [idAutor,idLibro];
        AutoresLibroControladorCrear.crearAutoresLibro(SQL_AUTORES_LIBRO_CREAR.CONFIRMARAUTOR, SQL_AUTORES_LIBRO_CREAR.CONFIRMARLIBRO, SQL_AUTORES_LIBRO_CREAR.CREAR, parametro, res);
    }
}
const autoresLibroControladorCrear = new AutoresLibroControladorCrear();
export default autoresLibroControladorCrear;