import { Request, Response } from "express";
import MateriasDaoCrear from "../../daos/materias/MateriasDaoCrear";
import { SQL_MATERIAS_CREAR } from "../../repositorios/materias/materias_crear_sql";

class MateriasControladorCrear extends MateriasDaoCrear {
    public crearMaterias(req: Request, res: Response): void {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        MateriasControladorCrear.crearMaterias(SQL_MATERIAS_CREAR.CONFIRMAR, SQL_MATERIAS_CREAR.CREAR, parametro, res);
    }
}
const materiasControladorCrear = new MateriasControladorCrear();
export default materiasControladorCrear;