import { Request, Response } from "express";
import ProgramaDaoMostrar from "../../daos/programas/ProgramasDaoMostrar";
import { SQL_PROGRAMAS_MOSTRAR } from "../../repositorios/programas/progrma_mostrar_sql";

class ProgramasControladorMostrar extends ProgramaDaoMostrar{
    public mostrarProgramas(req: Request, res: Response): void {
        ProgramasControladorMostrar.obtenerProgramas(SQL_PROGRAMAS_MOSTRAR.TODAS, [], res);
    }
}const programasControladorMostrar = new ProgramasControladorMostrar();
export default programasControladorMostrar;