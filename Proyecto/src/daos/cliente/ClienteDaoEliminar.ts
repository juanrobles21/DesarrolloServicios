import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class ClienteDaoEliminar {
    protected static async eliminarPorID(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        await pool.result(sqlConsulta, parametros)
            .then((respuesta) => {
                console.log(respuesta.rowCount);
                res.status(200).json({ respuesta: 'Cliente eliminado', });
            })
            .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ respuestas: 'Error borrando cliente' });
            });
    }
}
export default ClienteDaoEliminar;