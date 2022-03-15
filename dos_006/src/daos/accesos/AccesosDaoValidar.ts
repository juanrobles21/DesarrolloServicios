import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class AccesosDaoValidar {
    protected static async validarAcceso(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        await pool.result(sqlConsulta, parametros)
            .then((respuesta) => {
                console.log(respuesta);
                return res.status(200).json({ respuesta: 'Acceso valido', codigo: respuesta.rowCount });
            })
            .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ respuestas: 'Error datos no encontrados' });
            });
    }

}
export default AccesosDaoValidar;