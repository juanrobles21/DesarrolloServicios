import { Request, Response } from "express";
import EditorialDaoCargar from "../../daos/editorial/EditorialDaoCargar";
import { SQL_EDITORIAL_CARGAR } from "../../repositorios/editorial/editorial_cargar_sql";

class EditorialControladorCargar extends EditorialDaoCargar {
    public buscarEditorialIdLibro(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        EditorialControladorCargar.encontrarPorID(SQL_EDITORIAL_CARGAR.CARGAR, paramentro, res);
    }
}
const editorialControladorCargar = new EditorialControladorCargar();
export default editorialControladorCargar;