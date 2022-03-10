import { Request, Response } from "express";
import SemestresDaoBuscar from "../../daos/semestres/SemestresDaoBuscar";
import { SQL_SEMESTRES_CARGAR } from "../../repositorios/semestres/semestres_cargar_sql";

class SemestresControladorBuscar extends SemestresDaoBuscar {
    public buscarSemestres(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        SemestresControladorBuscar.encontrarPorID(SQL_SEMESTRES_CARGAR.CARGAR, paramentro, res);
    }
}
const semestresControladorBuscar = new SemestresControladorBuscar();
export default semestresControladorBuscar;