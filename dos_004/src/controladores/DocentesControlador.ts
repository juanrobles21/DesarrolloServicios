import { Request, Response } from "express";
import DocentesDAO from "../daos/DocentesDAO";
import { SQL_DOCENTES } from "../repositorios/docentes_sql";

class DocentesCotrolador extends DocentesDAO {
    public demelosDocentes(req: Request, res: Response): void {
        DocentesCotrolador.obtenerDocentes(SQL_DOCENTES.TODAS, [], res);
    }

}
const docentesCotrolador = new DocentesCotrolador();
export default docentesCotrolador;