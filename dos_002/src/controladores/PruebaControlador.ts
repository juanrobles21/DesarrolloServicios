import { Request, Response } from "express";
import PruebaDaos from "../daos/PruebaDaos";

class PruebaControlador extends PruebaDaos {
    public ataqueme1(req: Request, res: Response): void {
        PruebaControlador.obtenerInfo1(req, res);

    }
    public ataqueme2(req: Request, res: Response): void {
        PruebaControlador.obtenerInfo2(req, res);

    }
    public ataqueme3(req: Request, res: Response): void {
        PruebaControlador.obtenerInfo3(req, res);

    }
}
const pruebaControlador = new PruebaControlador();
export default pruebaControlador;