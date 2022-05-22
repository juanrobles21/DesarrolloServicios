import { Request, Response } from "express";
import EditorialDaoMostrar from "../../daos/editorial/EditorialDaoMostrar";
import { SQL_EDITORIAL_MOSTRAR } from "../../repositorios/editorial/editorial_mostrar_sql";

class EditorialControladorMostrar extends EditorialDaoMostrar {
    public demelasEditorial(req: Request, res: Response): void {
        EditorialControladorMostrar.obtenerEditorial(SQL_EDITORIAL_MOSTRAR.TODAS, [], res);
    }
}
const editorialControladorMostrar = new EditorialControladorMostrar();
export default editorialControladorMostrar;