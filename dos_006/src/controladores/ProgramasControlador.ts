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
    public buscarProgramas(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ProgramasControlador.encontrarPorID(SQL_PROGRAMAS.CARGAR, paramentro, res);

    }
    public EliminarProgramas(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ProgramasControlador.eliminarPorID(SQL_PROGRAMAS.ELMINAR, paramentro, res);

    }

}
const programasControlador = new ProgramasControlador();
export default programasControlador;