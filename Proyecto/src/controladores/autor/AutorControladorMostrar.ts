import { Request, Response } from "express";
import AutorDaoMostrar from "../../daos/autor/AutorDaoMostrar";
import { SQL_AUTOR_MOSTRAR } from "../../repositorios/autor/autor_mostrar_sql";

class AutorControladorMostrar extends AutorDaoMostrar {
    public demelasAutor(req: Request, res: Response): void {
        AutorControladorMostrar.obtenerAutor(SQL_AUTOR_MOSTRAR.TODAS, [], res);
    }
}
const autorControladorMostrar = new AutorControladorMostrar();
export default autorControladorMostrar;