import { Request, Response } from "express";
import AutoresLibroDaoMostrar from "../../daos/autoresLibro/AutoresLibroDaoMostrar";
import { SQL_AUTORES_LIBRO_MOSTRAR } from "../../repositorios/autoresLibro/autores_libro_mostrar_sql";

class AutoresLibroControladorMostrar extends AutoresLibroDaoMostrar {
    public demelasAutoresLibro(req: Request, res: Response): void {
        AutoresLibroControladorMostrar.obtenerAutoresLibro(SQL_AUTORES_LIBRO_MOSTRAR.TODAS, [], res);
    }
}
const autoresLibroControladorMostrar = new AutoresLibroControladorMostrar();
export default autoresLibroControladorMostrar;