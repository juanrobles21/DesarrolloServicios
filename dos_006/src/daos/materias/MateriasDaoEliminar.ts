import { Response } from "express";
import pool from "../../configuracion/conexion/conexionBD";

class MateriasDaoEliminar {
    protected static async eliminarPorID(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        await pool.result(sqlConsulta, parametros)
            .then((respuesta) => {
                console.log(respuesta);
                return res.status(200).json({ respuesta: respuesta.rowCount });
            })
            .catch((miError) => {
                console.log(miError);
                return res.status(400).json({ respuestas: 'Error borrando materia' });
            });
    }
}
export default MateriasDaoEliminar;