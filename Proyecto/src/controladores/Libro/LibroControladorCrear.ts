import { Request, Response } from "express";
import LibroDaoCrear from "../../daos/libro/LibroDaoCrear";
import { SQL_LIBRO_CREAR } from "../../repositorios/libro/libro_crear_sql";

class LibroControladorCrear extends LibroDaoCrear {
    public crearLibro(req: Request, res: Response): void {
        const titulo = req.body.titulo;
        const fechaPublicacion = req.body.fechaPublicacion;
        const codigo = req.body.codigo;
        const isbn = req.body.isbn;
        const idEditorial = req.body.idEditorial;
        const parametro = [titulo, fechaPublicacion, codigo, isbn, idEditorial];
        LibroControladorCrear.crearLibro(SQL_LIBRO_CREAR.CONFIRMAR, SQL_LIBRO_CREAR.CONFIRMAREDITORIAL, SQL_LIBRO_CREAR.CREAR, parametro, res);
    }
}
const libroControladorCrear = new LibroControladorCrear();
export default libroControladorCrear;