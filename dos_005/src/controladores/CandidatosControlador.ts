import { Request, Response } from "express";
import CandidatosDAO from "../daos/CandidatosDAO";
import { SQL_CANDIDATOS } from "../repositorios/candidatos";

class CandidatosControlador extends CandidatosDAO {
    public demelosCandidatos(req: Request, res: Response): void {
        CandidatosControlador.obtenerCandidatos(SQL_CANDIDATOS.TODAS, [], res);
    }
    public crearCandidatos(req: Request, res: Response): void {
        const nombre = req.body.nombreCandidato;
        const fecha = req.body.fechaCanditato;
        const evalC = req.body.evalCandidato;
        const partido = req.body.idPartido;
        const parametro = [nombre, fecha, evalC, partido];
        CandidatosControlador.crearCandidatos(SQL_CANDIDATOS.CONFIRMAR, SQL_CANDIDATOS.CREAR, parametro, res);
    }

}
const candidatosControlador = new CandidatosControlador();
export default candidatosControlador;