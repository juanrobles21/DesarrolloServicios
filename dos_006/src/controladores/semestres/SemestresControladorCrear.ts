import { Request, Response } from "express";
import SemestresDaoCrear from "../../daos/semestres/SemestresDaoCrear";
import { SQL_SEMESTRES_CREAR } from "../../repositorios/semestres/semestres_crear_sql";



class SemestresControladorCrear extends SemestresDaoCrear {
    public crearSemestres(req: Request, res: Response): void {
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];
        SemestresControladorCrear.crearSemestres(SQL_SEMESTRES_CREAR.CONFIRMAR, SQL_SEMESTRES_CREAR.CREAR, parametro, res);
    }
}
const semestresControladorCrear = new SemestresControladorCrear();
export default semestresControladorCrear;