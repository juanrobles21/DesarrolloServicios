import { Request, Response } from 'express';
import FacultadDAO from '../daos/FacultadDAO';
import { SQL_FACULTAD } from '../repositorios/facultad_sql';

class FacultadControlador extends FacultadDAO {
    public demelasFacultades(req: Request, res: Response): void {
        FacultadControlador.obtenerFacul(SQL_FACULTAD.TODAS, [], res);
    }
}

const facultadControlador = new FacultadControlador();
export default facultadControlador;