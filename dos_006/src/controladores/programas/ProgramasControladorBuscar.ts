import { Request, Response } from "express";
import ProgramaDaoBusacar from "../../daos/programas/ProgramaDaoBuscar";
import { SQL_PROGRAMAS_CARGAR } from "../../repositorios/programas/programa_cargar_sql";

class ProgramasControladorBuscar extends ProgramaDaoBusacar{
    public buscarProgramas(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        ProgramasControladorBuscar.encontrarPorID(SQL_PROGRAMAS_CARGAR.CARGAR, paramentro, res);
    }
}
const programasControladorBuscar = new ProgramasControladorBuscar();
export default programasControladorBuscar;