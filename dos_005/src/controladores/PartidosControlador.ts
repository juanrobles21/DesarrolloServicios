import { Request, Response } from "express";
import PartidosDAOS from "../daos/PartidosDAO";
import { SQL_PARTIDOS } from "../repositorios/partidos";

class PartidosControlador extends PartidosDAOS {
    public demelosPartidos(req: Request, res: Response): void {
        PartidosControlador.obtenerPartidos(SQL_PARTIDOS.TODAS, [], res);
    }
    public crearPartidos(req: Request, res: Response): void {
        const nombre = req.body.nombrePartido;
        const parametro = [nombre];
        PartidosControlador.crearPartidos(SQL_PARTIDOS.CONFIRMAR, SQL_PARTIDOS.CREAR, parametro, res);
    }

}
const partidosControlador = new PartidosControlador();
export default partidosControlador;