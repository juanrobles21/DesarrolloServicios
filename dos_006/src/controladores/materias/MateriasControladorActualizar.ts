import { Request, Response } from "express";
import MateriasDaoActualizar from "../../daos/materias/MateriasDaoActualizar";
import { SQL_MATERIAS_ACTUALIZAR } from "../../repositorios/materias/materias_actualizar_sql";

class MateriasControladorActualizar extends MateriasDaoActualizar {
    public actualizarMaterias(req:Request, res:Response):void{
        const cod = req.body.cod;
        const nombre_materia=req.body.nombreMateria;
        const referencia_materia=req.body.referenciaMateria;
        const parametro=[nombre_materia,referencia_materia,cod];
        MateriasControladorActualizar.actualizarMateria(SQL_MATERIAS_ACTUALIZAR.ACTUALIZAR,parametro,res);
    }
}
const materiasControladorActualizar = new MateriasControladorActualizar();
export default materiasControladorActualizar;