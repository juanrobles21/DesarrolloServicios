import { Response } from "express";
import pool from '../../configuracion/conexion/conexionBD';

class ClienteDaoCargar {
    protected static async encontrarPorID(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        await pool.one(sqlConsulta, parametros)
            .then((respuesta) => {
                console.log(respuesta);
                return res.status(200).json({ respuesta: 'Exito, Info Cliente:', nuevoCodigo: respuesta });
            })
            .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ respuestas: 'Error el ID del prestamo no encontrado o no esta asociado a alguna Cliente' });
            });
    }
}
export default ClienteDaoCargar;