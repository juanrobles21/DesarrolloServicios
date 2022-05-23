import { Request, Response } from "express";
import LibroDaoCargar from "../../daos/libro/LibroDaoCargar";
import { SQL_LIBRO_CARGAR } from "../../repositorios/libro/libro_cargar_sql";

class LibroControladorCargar extends LibroDaoCargar {
    public buscarLibroIdDetallePrestamos(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        LibroControladorCargar.encontrarPorID(SQL_LIBRO_CARGAR.CARGAR, paramentro, res);
    }
}
const libroControladorCargar = new LibroControladorCargar();
export default libroControladorCargar;