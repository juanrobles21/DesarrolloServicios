import { Response } from "express";
import pool from "../configuracion/conexion/conexionBD";

class DocentesDAO {
    public static async obtenerDocentes(sqlConsulta: string, parametros: any, res: Response): Promise<any> {
        pool.result(sqlConsulta, parametros)
            .then((resultado) => {
                res.status(200).json(resultado.rows);
            })
            .catch((miError) => {
                console.log('Error', miError);
                res.status(400).json({ respuetas: 'AYYYY, no funciono' });
            });
    }
}
export default DocentesDAO;