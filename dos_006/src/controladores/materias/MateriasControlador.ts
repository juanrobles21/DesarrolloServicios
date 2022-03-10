import { Request, Response } from "express";
import MateriaDAO from "../../daos/materias/MateriasDAO";
import { SQL_MATERIAS } from "../../repositorios/materias/materias";

class MateriasControlador extends MateriaDAO {
    public demelasMaterias(req: Request, res: Response): void {
        MateriasControlador.obtenerMaterias(SQL_MATERIAS.TODAS, [], res);
    }
    public crearMaterias(req: Request, res: Response): void {
        const nombre = req.body.nombreMateria;
        const referencia = req.body.referenciaMateria;
        const parametro = [nombre, referencia];
        MateriasControlador.crearMaterias(SQL_MATERIAS.CONFIRMAR, SQL_MATERIAS.CREAR, parametro, res);
    }
    public buscarMaterias(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        MateriasControlador.encontrarPorID(SQL_MATERIAS.CARGAR, paramentro, res);

    }

}
const materiasControlador = new MateriasControlador();
export default materiasControlador;