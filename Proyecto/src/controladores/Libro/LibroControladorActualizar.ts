import { Request, Response } from "express";
import LibroDaoActualizar from "../../daos/libro/LibroDaoActualizar";
import { SQL_LIBRO_ACTUALIZAR } from "../../repositorios/libro/libro_actualizar_sql";

class LibroControladorActualizar extends LibroDaoActualizar {
    public actualizarLibro(req: Request, res: Response): void {
        const cod = req.body.cod;
        const titulo = req.body.titulo;
        const fechaPublicacion = req.body.fechaPublicacion;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const idEditorial = req.body.idEditorial;
        const parametro = [titulo, fechaPublicacion, codigo, isbn, idEditorial, cod];
        LibroControladorActualizar.actualizarLibro(SQL_LIBRO_ACTUALIZAR.CONFIRMAR, SQL_LIBRO_ACTUALIZAR.CONFIRMAREDITORIAL, SQL_LIBRO_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }
}
const libroControladorActualizar = new LibroControladorActualizar();
export default libroControladorActualizar;