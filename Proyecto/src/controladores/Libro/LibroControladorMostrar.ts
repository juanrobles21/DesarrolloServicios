import { Request, Response } from "express";
import LibroDaoMostrar from "../../daos/libro/LibroDaoMostrar";
import { SQL_LIBRO_MOSTRAR } from "../../repositorios/libro/libro_mostrar_sql";

class LibroControladorMostrar extends LibroDaoMostrar {
    public demelasLibro(req: Request, res: Response): void {
        LibroControladorMostrar.obtenerLibro(SQL_LIBRO_MOSTRAR.TODAS, [], res);
    }
}
const libroControladorMostrar = new LibroControladorMostrar();
export default libroControladorMostrar;