import { Request, Response } from "express";
import SemestresDAO from "../daos/SemestresDAO";
import { SQL_SEMESTRES } from "../repositorios/semestres";

class SemestresControlador extends SemestresDAO {
    public demelosSemestres(req: Request, res: Response): void {
        SemestresControlador.obtenerSemestres(SQL_SEMESTRES.TODAS, [], res);
    }
}
const semestresControlador = new SemestresControlador();
export default semestresControlador;