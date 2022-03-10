import { Request, Response } from "express";
import MateriasDaoMostrar from "../../daos/materias/MateriasDaoMostrar";
import { SQL_MATERIAS_MOSTRAR } from "../../repositorios/materias/materias_mostrar_sql";

class MateriasControladorMostrar extends MateriasDaoMostrar {
    public demelasMaterias(req: Request, res: Response): void {
        MateriasControladorMostrar.obtenerMaterias(SQL_MATERIAS_MOSTRAR.TODAS, [], res);
    }
}
const materiasControladorMostrar = new MateriasControladorMostrar();
export default materiasControladorMostrar;