import { Request, Response } from "express";
import AutoresLibroDaoActualizar from "../../daos/autoresLibro/AutoresLibroDaoActualizar";
import { SQL_AUTORES_LIBRO_ACTUALIZAR } from "../../repositorios/autoresLibro/autores_libro_actualizar_sql";

class AutoresLibroControladorActualizar extends AutoresLibroDaoActualizar {
    public actualizarAutoresLibro(req: Request, res: Response): void {
        const cod = req.body.cod;
        const idAutor = req.body.idAutor;
        const idLibro = req.body.idLibro;
        const parametro = [idAutor, idLibro, cod];
        AutoresLibroControladorActualizar.actualizarAutoresLibro(SQL_AUTORES_LIBRO_ACTUALIZAR.CONFIRMARAUTOR, SQL_AUTORES_LIBRO_ACTUALIZAR.CONFIRMARLIBRO, SQL_AUTORES_LIBRO_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const autoresLibroControladorActualizar = new AutoresLibroControladorActualizar();
export default autoresLibroControladorActualizar;