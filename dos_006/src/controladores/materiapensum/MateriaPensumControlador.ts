import { Request, Response } from "express";
import MateriapensumDAO from "../../daos/materiaspensum/Materiaspensum";
import { SQL_MATERIAPENSUM } from "../../repositorios/materiapensum/materiapensum";

class MateriaPensumControlador extends MateriapensumDAO {
    public demelasMateriaPensum(req: Request, res: Response): void {
        MateriaPensumControlador.obtenerMateriPensum(SQL_MATERIAPENSUM.TODAS, [], res);
    }
}
const materiaPensumControlador = new MateriaPensumControlador();
export default materiaPensumControlador;