import { Request, Response } from "express";
import ProgrmasDAO from "../daos/ProgramasDAO";
import { SQL_PROGRAMAS } from "../repositorios/programas";

class ProgramasControlador extends ProgrmasDAO {
    public demelosProgramas(req: Request, res: Response): void {
        ProgramasControlador.obtenerProgramas(SQL_PROGRAMAS.TODAS, [], res);
    }
    public crearProgramas(req: Request, res: Response): void {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramasControlador.crearProgramas(SQL_PROGRAMAS.CONFIRMAR, SQL_PROGRAMAS.CREAR, parametro, res);
    }

}
const programasControlador = new ProgramasControlador();
export default programasControlador;