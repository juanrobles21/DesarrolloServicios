import { Request, Response } from "express";
import SemestresDaoMostrar from "../../daos/semestres/SemestresDaoMostrar";
import { SQL_SEMESTRES_MOSTRAR } from "../../repositorios/semestres/semestres_mostrar_sql";

class SemestresControladorMostrar extends SemestresDaoMostrar {
    public mostrarSemestres(req: Request, res: Response): void {
        SemestresControladorMostrar.obtenerSemestres(SQL_SEMESTRES_MOSTRAR.TODAS, [], res);
    }
} const semestresControladorMostrar = new SemestresControladorMostrar();
export default semestresControladorMostrar;