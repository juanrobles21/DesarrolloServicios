import { Request, Response } from "express";
import PensumDAO from "../daos/PensumDAO";
import { SQL_PENSUM } from "../repositorios/pensum";

class PensumControlador extends PensumDAO {
    public demelosPensum(req: Request, res: Response): void {
        PensumControlador.obtenerPensums(SQL_PENSUM.TODAS, [], res);
    }
}
const pensumControlador = new PensumControlador();
export default pensumControlador;