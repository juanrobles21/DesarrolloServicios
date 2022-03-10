import { Request, Response } from "express";
import ProgrmasDaoCrear from "../../daos/programas/ProgramasDaoCrear";
import { SQL_PROGRAMAS_CREAR } from "../../repositorios/programas/programa_crear_sql";

class ProgramasControladorCrear extends ProgrmasDaoCrear {
    public crearProgramas(req: Request, res: Response): void {
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];
        ProgramasControladorCrear.crearProgramas(SQL_PROGRAMAS_CREAR.CONFIRMAR, SQL_PROGRAMAS_CREAR.CREAR, parametro, res);
    }
}
const programasControladorCrear = new ProgramasControladorCrear();
export default programasControladorCrear;