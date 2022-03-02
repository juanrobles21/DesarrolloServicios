import { Request, Response } from "express";
import CandidatosDAO from "../daos/CandidatosDAO";
import { SQL_CANDIDATOS } from "../repositorios/candidatos";

class CandidatosControlador extends CandidatosDAO {
    public demelosCandidatos(req: Request, res: Response): void {
        CandidatosControlador.obtenerCandidatos(SQL_CANDIDATOS.TODAS, [], res);
    }

}
const candidatosControlador = new CandidatosControlador();
export default candidatosControlador;