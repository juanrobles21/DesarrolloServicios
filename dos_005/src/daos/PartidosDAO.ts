import { Response } from 'express';
import pool from '../configuracion/conexion/conexionBD';


class PartidosDAOS {
    public static async obtenerPartidos(sqlConsulta: string, paramentros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, paramentros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError) => {
                console.log('Error manp', miError);
                res.status(400).json({ respuesta: 'Ayyyy, no sirvio, mano ' });
            });
    }
}
export default PartidosDAOS;