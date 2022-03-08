import { Request, Response } from "express";
import MateriaDAO from "../daos/MateriasDAO";
import { SQL_MATERIAS } from "../repositorios/materias";

class MateriasControlador extends MateriaDAO {
    public demelasMaterias(req: Request, res: Response): void {
        MateriasControlador.obtenerMaterias(SQL_MATERIAS.TODAS, [], res);
    }
    public buscarMaterias(req: Request, res: Response): void {
        const id = req.params.elCodigo;
        const paramentro = [id];
        MateriasControlador.encontrarPorID(SQL_MATERIAS.CARGAR, paramentro, res);

    }

}
const materiasControlador = new MateriasControlador();
export default materiasControlador;