import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';


class PrestamosDaoMostrar {
    public static async obtenerPrestamos(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError) => {
                console.log('Error', miError);
                res.status(400).json({ respuesta: 'Error revise los datos' });
            });
    }
}
export default PrestamosDaoMostrar;