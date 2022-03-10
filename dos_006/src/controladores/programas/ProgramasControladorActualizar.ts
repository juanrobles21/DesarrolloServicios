import { Request, Response } from "express";
import ProgrmasDaoActualizar from "../../daos/programas/ProgramaDaoActualizar";
import { SQL_PROGRAMAS_ACTUALIZAR } from "../../repositorios/programas/programa_actualizar_sql";

class ProgramasControladorActualizar extends ProgrmasDaoActualizar {
    public ActualizarProgramas(req: Request, res: Response): void {
        const cod = req.body.cod;
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre, cod];
        ProgramasControladorActualizar.actualizarPrograma(SQL_PROGRAMAS_ACTUALIZAR.CONFIRMAR,SQL_PROGRAMAS_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }

}
const programasControladorActualizar = new ProgramasControladorActualizar();
export default programasControladorActualizar;