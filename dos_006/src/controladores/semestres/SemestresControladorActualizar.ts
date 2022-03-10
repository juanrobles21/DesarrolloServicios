import { Request, Response } from "express";
import SemestresDaoActualizar from "../../daos/semestres/SemestresDaoActualizar";
import { SQL_SEMESTRES_ACTUALIZAR } from "../../repositorios/semestres/semestres_actualizar_sql";

class SemestresControladorActualizar extends SemestresDaoActualizar {
    public actualizarSemestres(req: Request, res: Response): void {
        const cod = req.body.cod;
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre, cod];
        SemestresControladorActualizar.actualizarSemestre(SQL_SEMESTRES_ACTUALIZAR.CONFIRMAR, SQL_SEMESTRES_ACTUALIZAR.ACTUALIZAR, parametro, res);
    }

}
const semestresControladorActualizar = new SemestresControladorActualizar();
export default semestresControladorActualizar;